---
title: Pairing Flow Architecture
---

Current as of `Mar 17th, 2021`

## Pairing Flow Architecture

The goal of the pairing flow is to allow users to quickly connect a mobile browser to Firefox Sync, without having to type their password,
Mozilla accounts allows a mobile device to connect by pairing with an authenticated Firefox profile on their PC via scanning a QR code.
See the [Project Plan Document](https://docs.google.com/document/d/1mFf0sfEK8o1csXLeyK1x4GS9SUMIq4q8bu25LiydPew/edit#) for more information.

The intended user flow operates as follows:

1. On their Desktop (Authority) device, the user selects an option to connect other device, and a QR code is displayed.
1. On their Mobile (Supplicant) device, the user selects an option to connect to Firefox Sync via pairing, which launches a QR code scanner.
1. The user scans the QR code from Desktop with their Mobile device.
1. The devices establish a secure communication channel, and Mobile sends an OAuth request for Desktop to authorize.
1. After confirming on both devices, the user's Mobile is connected to their Firefox Account.

The Desktop (Authority) and Mobile (Supplicant) devices will not communicate directly, because we cannot assume that they will be on
the same network and because this is difficult to achieve from web content.
Instead, they will exchange encrypted messages via WebSocket to a lightweight "channel server" service which can relay messages back and forth.
The flow performs a remote authorization where the already authenticated device generates Sync keys and an OAuth code for the new device.
PKCE facilitates the transfer of the Sync key between devices and the channel server facilitates direct communication between the two, including the final transfer of the OAuth code.

```mermaid
flowchart TD
    A[Desktop Firefox] <-->|Credential Management| C(FxA Servers)
    B[Mobile Firefox]  <-->|Credential Management| C(FxA Servers)
    A <--> |Proxied Communication Channel| D(Channel Server)
    B <--> |Proxied Communication Channel| D(Channel Server)
```

---

```mermaid

sequenceDiagram
    participant Firefox Desktop
    participant Channel Server
    participant FxA Servers
    participant Firefox Mobile

    Firefox Desktop->>Channel Server: Create new websocket channel
    Channel Server->>Firefox Desktop: Return channel ID
    Firefox Desktop->>Firefox Mobile: Send channel ID and key via QR code
    Firefox Mobile->>Channel Server: Connect to channel
    rect rgb(100, 55, 100)
    note left of Firefox Desktop: Communication between Firefox Desktop and Mobile<br/> happen via the websocket open on the channel server.  <br/>For simplicity in this diagram the two are <br/>shown sending data directly to each other.
    Firefox Mobile->>Firefox Desktop: Send OAuth Request
    note left of Firefox Desktop: Prompt for confirmation
    Firefox Desktop->>Firefox Mobile: Send account metadata
    note right of Firefox Mobile: Prompt for confirmation
    Firefox Desktop->>FxA Servers: Authorize OAuth request and send key bundle
    FxA Servers->>Firefox Desktop: Return OAuth code
    Firefox Desktop->>Firefox Mobile: Send Oauth code
    end
    Firefox Mobile->>FxA Servers: Redeem OAuth code
    FxA Servers->>Firefox Mobile: Return OAuth tokens and key bundle
    note right of Firefox Mobile: Decrypt key bundle
    note right of Firefox Mobile: Start to sync!


```

### Detailed Flow

It is advised to read the following section while looking at the detail diagram.

```mermaid
sequenceDiagram
    actor User
    participant Mozilla accounts on Desktop
    participant Firefox Desktop
    participant Channel Server
    participant OAuth Server
    participant Firefox Mobile
    participant Mozilla accounts on Mobile

    Firefox Desktop->>Channel Server: Create new websocket channel
    Channel Server->>Firefox Desktop: Return channel ID
    Firefox Desktop->>Firefox Desktop: Generate key, show QR
    Firefox Desktop->>Firefox Mobile: Send channel ID and key via QR code
    Firefox Mobile->>Firefox Mobile: Generate OAuth parameters
    Firefox Mobile->>Mozilla accounts on Mobile: Open FxA w/ OAuth and channel params
    Mozilla accounts on Mobile->>Channel Server: Connect to channel
    Channel Server->>Mozilla accounts on Mobile: 
    Mozilla accounts on Mobile->>Channel Server: pair:supp:request w/ OAuth params
    Channel Server->>Firefox Desktop: 
    Firefox Desktop->>Firefox Desktop: Get account and device info
    Firefox Desktop->>Channel Server: pair:auth:metadata w/ account & device info
    Channel Server->>Mozilla accounts on Mobile: 
    Mozilla accounts on Mobile->>Mozilla accounts on Mobile: Show confirmation screen
    Firefox Desktop->>Mozilla accounts on Desktop: Open FxA to pairing confirm screen
    Mozilla accounts on Desktop->>Firefox Desktop: fxaccounts:pair_supplicant_metadata
    Firefox Desktop->>Mozilla accounts on Desktop: Supp info received earlier in pair:auth:metadata
    Mozilla accounts on Desktop->>Mozilla accounts on Desktop: Show confirmation screen    
    
    User->>Mozilla accounts on Desktop: Confirms connection
    Mozilla accounts on Desktop->>Firefox Desktop: fxaccounts:pair_authorize
    Firefox Desktop->>Firefox Desktop: Encrypt key bundle using supp's keys_jwk
    Firefox Desktop->>OAuth Server: Authorize OAuth request w/ supp's OAuth params & encrypted key bundle
    OAuth Server->>Firefox Desktop: OAuth code/state
    Firefox Desktop->>Channel Server: pair:auth:authorize w/ OAuth state & code
    Channel Server->> Mozilla accounts on Mobile: 
    
    note left of User: The pairing confirmations<br/> can happen in any order
    User->> Mozilla accounts on Mobile: Confirms other side
    Mozilla accounts on Mobile->>Channel Server: pair:supp:authorize
    Channel Server->>Firefox Desktop: 

    note left of Mozilla accounts on Desktop: The heartbeat starts as soon as the confirmation screen is displayed.<br/>It helps web content surface errors and inform the remote user<br/>has accepted the pairing connection (pair:supp:authorize observed)
    loop every second
    Mozilla accounts on Desktop->>Firefox Desktop: fxaccounts:pair_heartbeat
    Firefox Desktop->>Mozilla accounts on Desktop: suppAuthorized / [errors]
    end

    rect rgb(191, 223, 255)
    note left of Firefox Mobile: [Optional] pair:auth:authorize observed AND this side confirmed
    Mozilla accounts on Mobile->>Firefox Mobile: Redirect to relier redirect_url w/ OAuth code, state
    Firefox Mobile->>Firefox Mobile: Trade code for token and sign-in the user
    end

    rect rgb(191, 223, 255)
    note left of Mozilla accounts on Desktop: [Optional] suppAuthorized AND this side confirmed
    Firefox Desktop->>Firefox Desktop: Show complete screen
    Firefox Desktop->>Mozilla accounts on Desktop: fxaccounts:pair_complete
    end

```

#### 1) Desktop opens an encrypted channel and advertises it via QR code

To make itself available for pairing, the Desktop device opens a connection to the Channel Server using the [fxa-pairing-channel library](https://github.com/mozilla/fxa-pairing-channel).

Once connected it will receive a server-allocated channel id, then the library will generate a 32-byte channel key to be used for client-side encryption of messages on the channel.

- The channel key is what secures the pairing flow.
  - Any application that learns the channel key will be able to request pairing from the Desktop device, or intercept messages exchanges during the pairing flow.
  - The fxa-pairing-channel library uses a subset the pre-shared key mode of TLS 1.3 for communication between the two devices.
- The channel id and channel key are encoded using base64url and are then combined into a "pairing url".
- The generated URL looks like: `https://accounts.firefox.com/pair#channel_id=[channel_id]&channel_key=[channel_key]`
- This URL is then encoded in a QR code and displayed on screen.

#### 2) Mobile scans the QR code and connects to the encrypted channel

To initiate pairing, the Mobile device scans the QR code displayed by Desktop and extracts the channel id and channel key.
It opens a WebSocket to the Channel Server using the same fxa-pairing-channel library specifying the channel id, channel key.
The Channel Server will now relay WebSocket messages from Mobile to Desktop and vice-versa. The [supplicant broker](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/models/auth_brokers/pairing/supplicant.js) handles the creation of the `PairingChannelClient` and the state machine. The supplicant triggers messages after user's approval and finally sends
the code to the relier by using the existing OAuth redirection broker.

#### 3) Devices exchange metadata and show confirmation screens

At this point the devices have established a baseline level of trust and can exchange metadata to allow the user to confirm the pairing on both sides.
We use explicit confirmation screens to reduce the risk of phishing or over-the-shoulder attacks.

The Mobile device sends what is essentially an OAuth request, delivered over the WebSocket channel rather than opened as a local web page.
It includes all parameters that would appear in an ordinary OAuth authorization request.
The exceptions are the `scope`and `keys_jwk` parameters, they just get passed through when authorizing the request.

The Desktop device sends an "account metadata" message that includes information about the account being connected to.
The properties of that messages are listed in the "Pairing messages" section.

This information will help the Mobile device show a meaningful confirmation screen.  It's PII, but the channel has established a base level of trust between devices, so it should be safe to share this information directly.

- Upon receiving the metadata message from the other device, both Desktop and Mobile show an explicit confirmation screen.
- To show the confirmation screen on desktop, the Desktop (Authority) side transitions from `about:preferences` Firefox UI to
  the fxa-content-server hosted page. This engages the [authority broker](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/models/auth_brokers/pairing/authority.js) and establishes [WebChannel communication](https://developer.mozilla.org/docs/Mozilla/JavaScript_code_modules/WebChannel.jsm) with Native code.
- There's no set confirmation order: the Supplicant and the Authority will show the confirmations screens at the same time, and can be accepted in any order.

For additional security, the Channel Server annotates each message with information about the originating device, such as geoip lookup data. This may help the user detect if they're connecting to a different device than expected.

#### 4) Desktop device authorizes OAuth request

When the user accepts the confirmation screen on the Desktop device, it will use its local credentials to authorize the OAuth request from the Mobile device. This involves no user interaction, and will include the following steps:

- Check that redirect_uri is the expected value; error out if not.
- Check that scope contains exactly `"profile"` and `"https://identity.mozilla.com/apps/oldsync"`; error out if not.
- Check that client_id is the expected value; error out if not.
- Check that state exists and is well formed; error out if not.
- Build the scoped-key bundle for `"https://identity.mozilla.com/apps/oldsync"`, encrypting it with the provided `keys_jwk` to produce `keys_jwe`.
- POST all of this to fxa-oauth-server at `/v1/authorization` and receive back an OAuth code and state response parameters.

Desktop will then send the code and state parameters back to Mobile over the WebSocket channel, encrypted as before with the channel key.

#### 5) Mobile receives OAuth response and connects to Sync

When the user accepts the confirmation screen on the Mobile device, it will listen for the message produced by the Desktop device in step (4) above.
After receiving the message, it can tear down its WebSocket channel. The supplicant broker redirect step is captured by the Native app, as part of that step the `code` and `state` params are extracted from the redirect url.

- The mobile application can now complete its OAuth flow in its Native code just as if it had received code and state via a standard web-content-based OAuth flow:
- Submit the code to fxa-oauth-server at `/v1/token` in exchange for an access token, refresh token, and bundle of encrypted key material.
- Decrypt the bundle of key material with its keys_jwk private key.
- Fetch user profile data, and check that it matches the data provided by Desktop in step (3).
- Use the access token and key material to access Firefox Sync.

## Intended Security Properties

The security-related design goals of this system are as follows:

- The result of the flow is the same as if the Mobile device had done an ordinary
  web-content-based OAuth flow. It obtains its own OAuth tokens for the user's Firefox
  account, with appropriate scopes and a copy of the relevant key material.
- The messages relayed between Desktop and Mobile cannot be read or forged by any
  other party.
- On the signed-in Desktop device:
  - The flow cannot be used to surreptitiously extract FxA key material (such as the
    user's sync keys) from the browser, not even by Mozilla's servers or by web
    content running on https://accounts.firefox.com.
  - There is no way for third-party web content to initiate a pairing flow, which might
    be used for phishing purposes.
- On the connecting Mobile device:
  - Handling of FxA key material is as or more secure than the existing web-based
    scoped-keys flow.
  - There is no way for third-party apps or web content to trigger the pairing flow,
    which might be used for phishing purposes.
  - If the user scans the QRcode with a third-party app rather than a Mobile Firefox
    browser, then that app can only gain access to the user's account by actively
    phishing the user into completing the flow; it cannot silently insert itself as
    a meddler-in-the-middle of a legitimate flow with the user's actual Firefox browser.

These properties are enforced by the following features/mitigations:

- The communication channel between the two devices is secured by:
  - Communication between Desktop and Mobile is encrypted and authenticated using a
    TLS1.3 PSK handshake, with the key obtained by scanning the QR code. This guards
    against eavesdropping or MitM by anyone who does not have the channel key
    (including the channelserver that is proxying the messages, since it has no way to
    obtain the key).
  - Communications are routed through the Mozilla-hosted channelserver, authenticated
    with standard TLS PKI. The channelserver enforces that only two connections are
    made on a channel, providing additional protection against eavesdropping or MitM
    by third-party software _even if_ such software somehow obtains the channel key.
  - The mobile device must directly scan the QR code in order to initiate the flow.
    This prevents a third-party scanner that happens to intercept the channel key
    from inserting itself as a MitM, with one channel open to the Desktop device and
    a second channel open to the Mobile device.
- Inside the communication channel, the devices execute a largely unmodified variant of
  the existing FxA scoped-keys OAuth flow, so the exchange inherits the existing
  security boundaries/properties of that flow.
- When authorizing the OAuth request, Firefox Desktop is directly responsible for
  encrypting the scoped-keys bundle using the OAuth request parameters it received over
  the pairing channel. There is thus no opportunity for web content running on the
  desktop device to see the raw scoped-keys key material.
  - Web content cannot, for example, inject its own `keys_jwk` parameter into
    the OAuth flow in order to MitM the scoped-keys exchange. This is an improvement
    over the current state of the web-based OAuth flow, in which web content can
    directly handle the account key material.

## Exchanged messages specification

The pairing flow is made possible by messages that are forwarded between the Desktop native code and the web content page opened on the supplicant device.

The Firefox Desktop native code gathers information from web content via WebChannels and communicates that to the supplicant using the
channel server socket.

Meanwhile, the web content opened on the supplicant device connects directly to a WebSocket, without native code infrastructure.
It waits for user's approval on both sides of the flow and once that is achieved, it can receive the OAuth `code` and `state`
from the authority side of the pairing flow.

### Pairing Channel messages

The message payload is a JSON object that contains a message identifier and a data object.
Every message envelope also contains information about the sender (IP address, geolocation..).
Here's an example of the channel server envelope:

```json
data: {
  ...,
  "remoteMetaData": {
    "city": "Kanata",
    "country": "Canada",
    "region": "Ontario",
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0",
    "ipAddress": "1.1.1.1"
  }
}
```

#### pair:supp:request

Direction: Supp -> Auth

Description: Sent right after connecting to the pairing channel by the supp. Contains OAuth request parameters, a key encryption JWK if required by the relier.

```json
{
  message: "pair:supp:request",
  data: {
    // See the OAuth server API doc for a description of the parameters.
    access_type,
    client_id,
    code_challenge,
    code_challenge_method,
    // FxA Scoped Keys key-fetching public key (base64url encoded).
    [keys_jwk,].
    scope,
    state,
  },
}
```

#### pair:auth:metadata

Direction: Auth -> Supp

Description: Sent by the Auth and contains the account and device information of the Auth.

```json
{
  message: "pair:auth:metadata",
  data: {
    email,
    avatar,
    displayName,
    deviceName,
  },
}
```

#### pair:auth:authorize

Direction: Auth -> Supp

Description: Sent by the Auth once the pairing has been confirmed by the user on this side. Contains an OAuth code that can be traded for a token.

```json
{
  message: "pair:auth:authorize",
  data: {
    // See the OAuth server API doc for a description of the parameters.
    code,
    state,
    redirect,
  },
}
```

#### pair:supp:authorize

Direction: Supp -> Auth

Description: Sent by the Supp once the pairing has been confirmed by the user on this side.

```json
{
  message: "pair:supp:authorize",
}
```

### Desktop WebChannel messages

On Desktop, the Mozilla accounts Web Content page communicates with the native code (which owns the pairing channel connection) using WebChannel.
WebChannel messages can only be initiated from the content side, however the native side can send a response.

#### fxaccounts:pair_supplicant_metadata

Description: Allows the web content to request the supp’s device information.

Expected response:

```json
{
  ua,
  city,
  region,
  country,
  ipAddress,
}
```

#### fxaccounts:pair_authorize

Allows the web content to inform the native side the confirmation dialog has been accepted.

Expected response: N/A

#### fxaccounts:pair_heartbeat

Description: Sent by the web content every second or so. Allows to surface errors but to also transition to a "completed" screen once the supp side has confirmed the pairing request.

Expected Response:

```json
{
  err, // String
}
<OR>
{
  suppAuthorized, // Boolean
}

```

#### fxaccounts:pair_complete

Description: Allows the web content to inform the native side it is aware the flow is finished, has shown a confirmation screen and the resources can be finalized on the native side.

Expected Response: N/A

## Other Details

### Routes

- The Mobile (Supplicant) side, implements the following URL: `https://accounts.firefox.com/pair/supp`

This view accepts OAuth query parameters equivalent to those on the existing /oauth/ view, and will accept the channel id and channel key as parameters in the URL hash fragment.  The view performs the entire Mobile side of the protocol, including:

- connecting to the provided channel via WebSocket
- passing the OAuth request to the Desktop over the WebSocket channel
- displaying a confirmation screen using the account metadata information sent by Desktop
- receiving OAuth code and state from Desktop over the WebSocket channel.
- completing the OAuth flow by redirecting back to the relier

* The Desktop (Authority) side, loads the following URL: `https://accounts.firefox.com/pair/auth`

This view establishes communication with Native Desktop code. The Native Desktop code takes care of the following:

- establishing the WebSocket channel and corresponding secret key
- displaying the QR code as a URL to `https://accounts.firefox.com/pair`
- receiving the OAuth request from the Mobile device
- constructing the keys_jwe bundle and authorizing the OAuth request
- return the OAuth code to the Mobile device over the WebSocket channel
- communicating between Native code and Authority web content using WebChannels

### QR Code and URLs

The QR code is a URL: `https://accounts.firefox.com/pair/#channel_id=XYZ&channel_key=ABC`

When the Mobile device scans this from the QR code, it parses out the channel parameters and combines them with its OAuth request parameters to produce a URL like the following:

```
https://accounts.firefox.com/pair/supp
?client_id=<the client's oauth client id>
&state=<generated state token>
&scope=<scopes to request>
&code_challenge=<generated PKCE challenge>
&code_challenge_method=<generated PKCE challenge method>
&keys_jwk=<generated public key>
&redirect_uri=<the client's registered redirect_uri>
#channel_id=XYZ&channel_key=ABC
```

Open the constructed URL, just as it would if it were initiating a standard username-and-password OAuth flow.
Wait for a redirect from the opened OAuth flow to return `code` and `state` parameters.

- After the OAuth flow redirects with the `code`, it can be exchanged for the `keys_jwe` bundle.
- Decrypt the key bundle using corresponding private key for `keys_jwk`.
- The Desktop pairing flow implements a custom `redirect_uri` - `urn:ietf:wg:oauth:2.0:oob:pair-auth-webchannel`. This indicates that this is a pairing flow.
