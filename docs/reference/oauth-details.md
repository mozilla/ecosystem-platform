---
title: OAuth Details
---

Last updated: `April 17, 2023`

## Configuring OAuth clients

### How to register a client manually

Usually, when you connect applications to their OAuth resource server, they generate a client `id` and `secret` for you. In our case, we are the resource server.

The `id` and `secret` keys, in this context, can be seen as a username and password. They do not need to be generated in relation between one and another. In other words, they are not public and private keys.

With this procedure you will generate both client id and secret tokens to provide to your other applications and also partners who wants to leverage your identity provider service. Once you have the client id and secret, paste them in both the fxa-oauth-server AND your client service you want to bind using OAuth.

### Difference between same site and external consumers

While other applications within your infrastructure would ideally be pre-approved at the user point of view, external consumers shouldn't be. This is why when we develop a service leveraging another site, the user gets a confirmation window.

If you want to pre-approve your own web applications and prevent users in your accounts userbase to have a confirmation window, set the `trusted` flag to `true`.

### Installing a new consumer

#### Creating the client id and secret keys

Use the [fxa-oauth-client][] CLI tool for registering new clients with your server.

FxA OAuth development environments support `localhost` and `localhost` as valid `redirectUri` values to ease development.

[fxa-oauth-client]: https://github.com/mozilla/fxa-oauth-client

#### OAuth resource server (a.k.a. `fxa-oauth-server`)

Let's assume that the client in this example is the [123done](https://github.com/mozilla/123done) web application that you deployed at `https://clientapp.example.com` and that the OAuth route is available at `api/oauth` (this is specific to each client application, beware (!))

Add a new object literal within the `clients` array, that would look like:

```js
{
  "clients": [
    {
      "id": "<8-byte client id in hex>",
      "hashedSecret": "<32-byte sha256 of the client secret in hex>",
      "name": "123done",
      "imageUri": "https://clientapp.example.com/static/img/logo100.png",
      "redirectUri": "https://clientapp.example.com/api/oauth",
      "trusted": true
    }
  ]
}
```

**NOTE:** the `trusted`, this would be for an internal application that you manage.

#### OAuth clients

This can be very different depending on your installed and supported version, you should have a look at the profile server and client application what are the required callbacks.

```js
{
  "client_id": "<8-byte client id in hex>",
  "client_secret": "<32-byte client secret in hex>",
  "name": "123done",
  "redirect_uri": "https://clientapp.example.com/api/oauth",
  "signin_uri": "https://accounts.firefox.com/oauth/signin",
  "oauth_uri": "https://oauth.accounts.firefox.com/v1",
  "profile_uri": "https://profile.firefox.com/v1",
  "scopes": "profile"
}
```



## OAuth Scopes

Each authorization grant in OAuth has an associated "scope", a list containing one or more "scope values" that indicate what capabilities the granted token will have. Each individual scope value indicates a particular capability, such as the ability to read or write profile data, or to access the user's data in a particular service.

As defined in [RFC6749 Section 3.3](https://tools.ietf.org/html/rfc6749#section-3.3), the scope of a token is expressed as a list of space-delimited, case-sensitive strings, and it is left up to the service to define the format and semantics of the individual scope values that make up this string.

This document defines the scope values accepted in the Firefox Accounts ecosystem, and the rules for parsing and validating them.

### Short-name scope values

FxA supports a small set of "short-name" scope values that are identified by a short English word. These correspond either to scope values defined by external  specifications (e.g. OpenID Connect), or to legacy scope values introduced during early development.

**No new short-name scope values should be added.**
Instead we prefer to use URLs for new scope values, both to ensure uniqueness and to simplify parsing rules.

Short-name scope values imply read-only access by default, with write access indicated by the suffix ":write". The may also have "sub-scopes" to indicate finer-grained access control. Each name component may contain only ascii alphanumeric characters and the underscore.

For example:

- `profile` indicates read-only access to the user's profile data.
- `profile:write` indicates read/write access to the user's profile data.
- `profile:display_name` indicates read-only access to the user's display name, but not any other profile data.
- `profile:email:write` indicates read/write access to the user's email address.

The following short-name scope values are recognized in the FxA ecosystem.

#### Profile data

- `profile`: access the user's profile data.
- `profile:uid`: access the user's opaque user id.
- `profile:email`: access the user's email address.
- `profile:locale`: access the user's locale.
- `profile:avatar`: access the user's avatar picture.
- `profile:display_name`: access the user's human-readable display name.
- `profile:amr`: access information about the user's authentication methods and 2FA status.

#### OpenID Connect

- `openid`: used to request an OpenID Connect `id_token`.
- `email`: a synonym for `profile:email`, defined by the OIDC spec.

#### OAuth Client Management

- `clients`: access the list of OAuth clients connected to a user's account.
- `oauth`: register a new OAuth client record.

#### Basket

- `basket`: access the user's subscription data in
  [basket](http://basket.readthedocs.io/)

### URL Scopes

For new capabilities, scope values are represented as URLs. This helps to ensure uniqueness and reduces ambiguity in parsing. URL-format scope value imply read/write access by default, are compared as heirarchical resource references, and use the hash fragment for permission qualifiers. For example:

- `https://identity.mozilla.com/apps/oldsync` indicates full access to the user's data in Firefox Sync.
- `https://identity.mozilla.com/apps/oldsync/bookmarks` indicates full access to the user's bookmark data in Firefox Sync, but not to other data types.
- `https://identity.mozilla.com/apps/oldsync#read` indicates read-only access to the user's data in Firefox Sync.
- `https://identity.mozilla.com/apps/oldsync/history#write` indicates write-only access to the user's history data in Firefox Sync.

To be a valid scope value, the URL must:

- Be an absolute `https://` URL.
- Have no username, password, or query component.
- If present, have a fragment component consisting only of alphanumeric ascii characters and underscore.
- Remain unchanged when parsed and serialized following the rules in the [WhatWG URL Spec](https://url.spec.whatwg.org).

The following URL scope values are currently recognized by FxA:

- `https://identity.mozilla.com/apps/oldsync`: access to data in Firefox Sync.
- `https://identity.mozilla.com/apps/notes`: access to data in Firefox Notes.
- `https://identity.mozilla.com/account/subscriptions`: access to subscription data from Subscription Platform.

### Scope Matching and Implication

We say that a scope value A _implies_ another scope value B if they are exactly equal, or if A represents a more general capability than B. Similarly, a scope A implies scope value B if there is some scope value in A that implies B. This is the basic operation used to check permissions when processing an OAuth token.

Consumers of OAuth tokens should avoid directly parsing and comparing scopes where possible, and instead use the existing implementation in the `fxa-shared` node module.

For consumers that must implement their own scope checking, the rules for implication can be summarized as:

- For URL scope values, `A` implies `B` if `A` is a parent resource of `B`.
- For short-name scope values, split on the ":" character,  and `A` implies `B` if either:
  - `B[-1]` is not "write" and `A` is a prefix of `B`, or.
  - `A[-1]` is "write", and:
    - `A[:-1]` is a prefix of `B`, or
    - `B[-1]` is "write" and `A[:-1]` is a prefix of `B[:-1]`

More precisely, the algoritm for checking implication is:

- If `A` is a `https://` URL, then:
  - If `B` is not a `https://` URL, then fail.
  - If the origin of `B` is different than that of `A`, then fail.
  - If the path component list of `A` is not a prefix of the path
    component list of `B`, then fail.
  - If `A` has a fragment, then:
    - If `B` does not have a fragment, then fail.
    - If `B` has a fragment that differs from `A`, then fail.
  - Otherwise, succeed.
- Otherwise:
  - If `B` is a `https://` URL, then fail.
  - Split `A` and `B` into components based on `:` delimiter.
  - If the last component of `B` is `write`, then:
    - If the last component of `A` is not `write`, then fail.
  - If the last component of `A` is `write`, remove it.
  - If `A` is not a prefix of `B`, then fail.
  - Otherwise, succeed.

Below are some testcases against which scope-checking code can be validated.

Valid implications:

- `profile:write` implies `profile`.
- `profile` implies `profile:email`.
- `profile:write` implies `profile:email`.
- `profile:write` implies `profile:email:write`.
- `profile:email:write` implies `profile:email`.
- `profile profile:email:write` implies `profile:email`.
- `profile profile:email:write` implies `profile:display_name`.
- `profile https://identity.mozilla.com/apps/oldsync` implies `profile`.
- `profile https://identity.mozilla.com/apps/oldsync` implies `https://identity.mozilla.com/apps/oldsync`.
- `https://identity.mozilla.com/apps/oldsync` implies `https://identity.mozilla.com/apps/oldsync#read`.
- `https://identity.mozilla.com/apps/oldsync` implies `https://identity.mozilla.com/apps/oldsync/bookmarks`.
- `https://identity.mozilla.com/apps/oldsync` implies `https://identity.mozilla.com/apps/oldsync/bookmarks#read`.
- `https://identity.mozilla.com/apps/oldsync#read` implies `https://identity.mozilla.com/apps/oldsync/bookmarks#read`.
- `https://identity.mozilla.com/apps/oldsync#read profile` implies `https://identity.mozilla.com/apps/oldsync/bookmarks#read`.

Invalid implications:

- `profile:email:write` does _not_ imply `profile`.
- `profile:email:write` does _not_ imply `profile:write`.
- `profile:email` does _not_ imply `profile:display_name`.
- `profilebogey` does _not_ imply `profile`.
- `profile:write` does _not_ imply `https://identity.mozilla.com/apps/oldsync`.
- `profile profile:email:write` does _not_ imply `profile:write`.
- `https` does _not_ imply `https://identity.mozilla.com/apps/oldsync`.
- `https://identity.mozilla.com/apps/oldsync` does _not_ imply `profile`.
- `https://identity.mozilla.com/apps/oldsync#read` does _not_ imply `https://identity.mozilla.com/apps/oldsync/bookmarks`.
- `https://identity.mozilla.com/apps/oldsync#write` does _not_ imply `https://identity.mozilla.com/apps/oldsync/bookmarks#read`.
- `https://identity.mozilla.com/apps/oldsync/bookmarks` does _not_ imply `https://identity.mozilla.com/apps/oldsync`.
- `https://identity.mozilla.com/apps/oldsync/bookmarks` does _not_ imply `https://identity.mozilla.com/apps/oldsync/passwords`.
- `https://identity.mozilla.com/apps/oldsyncer` does _not_ imply `https://identity.mozilla.com/apps/oldsync`.
- `https://identity.mozilla.com/apps/oldsync` does _not_ imply `https://identity.mozilla.com/apps/oldsyncer`.
- `https://identity.mozilla.org/apps/oldsync` does _not_ imply `https://identity.mozilla.com/apps/oldsync`.

## Pairwise Pseudonymous Identifiers

A Pairwise Pseudonymous Identifier (PPID) is defined in the [OpenID Connect Spec](https://openid.net/specs/oidc-core-1_0.html#Terminology) as:

> Identifier that identifies the Entity to a Relying Party that cannot be correlated with the Entity's PPID at another Relying Party.

Put another way, PPIDs provide a single user with distinct userids across distinct Relying Parties (RPs), enhancing user privacy by preventing cross-site correlation based on userid.

By default, Firefox accounts provides the same userid to all Mozilla-internal RPs to facilitate cross service correlation. As Mozilla expands its product offering to include white labeled 3rd party services, we want to uphold Mozilla's principles regarding user privacy by providing external services with only the minimal data necessary.

PPIDs allow Mozilla to enforce our privacy stance by providing each PPID enabled RP with a distinct userid for a given user. For example, a user that signs into 2 PPID enabled services would have 3 distinct userids:

- FxA userid, only seen by Mozilla properties
- PPID for service 1, known by Mozilla and service 1
- PPID for service 2, known by Mozilla and service 2

PPIDs prevents service 1 and service 2 from correlating user data with each other based on userid alone. _PPIDs only prevent correlation based on userid_, transient information such as IP address, shared 3rd party cookies, and user-agent information can still be used by RPs to correlate users. This also assumes that RPs are unable to fetch user profile information such as email address and display name that could be used as additional data points.

PPIDs are returned as the `sub` claim within an [OIDC ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) or [OAuth JWT Access Token](https://tools.ietf.org/html/draft-ietf-oauth-access-token-jwt).

### Further enhancing privacy through PPID rotation

User privacy can be further enhanced by preventing long term profiles from being built for a given user through PPID rotation. Firefox accounts supports two methods of PPID rotation, RP initiated, and server initiated.

#### RP initiated PPID rotation

Any PPID enabled RP that receives JWT access tokens or OIDC ID tokens can initiate PPID rotation by specifying an additional parameter, `ppid_seed`, when requesting tokens from `/token` endpoints on the OAuth server. `ppid_seed` must be an integer between 0 and 1024, and can be rotated at any time.

#### Server initiated PPID rotation

By default, Firefox accounts does not enforce sub rotation, but for sensitive RPs where long term user profiles are undesirable, Firefox accounts can enforce periodic rotation without depending on the RP to pass in a `ppid_seed`. The default period is 6 hours.

### Ensuring 3rd parties are unable to access user information

An OAuth access token is a bearer token that can be presented by anyone to an OAuth service provider to access a protected resource. If a JWT access token contains a PPID `sub` claim that is meant to protect a user's privacy, but is granted the `profile` scope allows the service provider to present the same access token to the FxA profile server and learn the user's true identity. As such, tokens _MUST NOT_ be requested with the `profile` scope or any of its implicants such as `profile:uid` or `profile:email`.

## PPIDs and logging

PPIDs are not used by internal Mozilla properties and are not logged.

### PPID generation

PPIDs are generated using [HKDF](https://tools.ietf.org/html/rfc5869) with the following inputs:

- **km**: `client_id`.`userid_hex`.`ppid_seed||0`.`serverEnforcedRotationInput`
- **info**: `oidc ppid sub`
- **salt**: A secret configured by Ops
- **len**: 16 bytes, which leads to a 32 hex character result

#### Server enforced rotation input

The server enforced rotation input defaults to the string `0`. If server enforced rotation is enabled for the client, it is calculated as follows:

```
serverEnforcedRotationInput = Math.floor(Date.now() / ROTATION_PERIOD)
```

If an RP requests two tokens in short succession, their `sub` claims could be different if the first token was generated previous to the rotation epoch and the second after.

### The future

Firefox accounts does not currently support [sector identifiers](https://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg). Sector identifiers allow multiple client_ids to receive the same PPID, this would be useful if the RP has applications on multiple platforms, e.g., an app on Android, iOS, and an addon in Firefox.


## PKCE Support

> Proof Key for Code Exchange by OAuth Public Clients

Firefox Accounts OAuth flow supports the [PKCE RFC7636](https://tools.ietf.org/html/rfc7636).  This feature helps us authenticate clients such as WebExtensions and Native apps and any other clients that do not have a server component or a secure way to store a `client_secret`.

To better understand this protocol please read the [Proof Key for Code Exchange (RFC 7636) by Authlete Inc.](https://www.authlete.com/documents/article/pkce/index).

You'll need to include support parameters `code_challenge_method`, `code_challenge` and `code_verifier`.

At this time Firefox Accounts requires you to use the `S256` flow, we do not support the `plain` code challenge method.

## prompt=none support

`prompt=none` enables authorized RPs to check a user's authentication state and receive an OAuth grant or access token without requiring user interaction.

More formally, `prompt=none` is a flow described by the [OpenID Connect spec](https://openid.net/specs/openid-connect-core-1_0.html) as:

> The Authorization Server MUST NOT display any authentication or consent user interface pages. An error is returned if an End-User is not already authenticated or the Client does not have pre-configured consent for the requested Claims or does not fulfill other conditions for processing the request. The error code will typically be login_required, interaction_required, or another code defined in Section 3.1.2.6. This can be used as a method to check for existing authentication and/or consent.

### prompt=none usage is controlled

Usage of `prompt=none` with `login_hint` / `email` is controlled to an authorized list of RPs, since
it bypasses the normal authorization flow and use could easily fall afoul of user expectations.

However, _all_ RPs can check the user's FxA login state using `id_token_hint`: since RPs not on the
authorized list can only obtain an [id_token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) by
going through the normal authorization flow, it is safe to assume an RP presenting the `id_token`
as part of a `prompt=none` flow has already been granted authorization.

### Requesting `prompt=none` during authorization

[`prompt=none` and either `login_hint=<email>` or `id_token_hint=<ID Token>`](/api#tag/OAuth-Server-API-Overview/operation/getAuthorization) are appended onto the query parameters when opening the `/authorization` endpoint.

```
GET https://accounts.firefox.com/authorization?client_id=ea3ca969f8c6bb0d&state=2sfas415FSSF@A5f&scope=profile&prompt=none&login_hint=conscious.chooser%40mozilla.com
```

If a different user is currently signed in to the email specified by the `login_hint` or `id_token_hint`, an [`account_selection_required` error will be returned](#handling-errors).

### Handling errors

Most `prompt=none` failures cause the user to be redirected back to the RP's `redirectURI` with `state` and `error` query parameters.

The following is a table of [OIDC compliant error codes](https://openid.net/specs/openid-connect-core-1_0.html#AuthError) &rarr; reasons

| error                          | reason                                    |
| ------------------------------ | ----------------------------------------- |
| `invalid_request`              | prompt=none is not enabled                |
| &nbsp;                         | OR `login_hint` is missing                |
| &nbsp;                         | OR scoped keys are requested              |
| &nbsp;                         | OR the `id_token_hint` token is invalid   |
| `unauthorized_client`          | prompt=none is not enabled for the client |
| `* interaction_required`       | account or session is not verified        |
| `* login_required`             | user is not signed in                     |
| `* account_selection_required` | a different user is signed in             |

`*` indicates the user must take some form of action to recover

As an example, suppose the `authorization` request from the previous section failed because the user is not signed in and assume the `redirectURI` for client `ea3ca969f8c6bb0d` is `https://service.firefox.com/oauth/complete`. The user would be redirected to:

```js
GET https://service.firefox.com/oauth/complete?state=2sfas415FSSF@A5f&error=login_required
```

#### Recovering from errors

At this point, the RP knows the user must authenticate to Firefox Accounts before OAuth codes or access tokens are returned. The RP can generate a new `state` and try again without the `prompt=none` query parameter:

```js
GET https://accounts.firefox.com/authorization?client_id=ea3ca969f8c6bb0d&state=gASDF-3df@A5f&scope=profile&login_hint=conscious.chooser%40mozilla.com
```

:::caution
When `prompt=none` is not specified, FxA handles `login_hint` as a suggestion, users are still able to authenticate/authorize using a different email. If the user specified in `login_hint` _MUST_ be used, specify [`action=force_auth`](/api#tag/OAuth-Server-API-Overview/operation/getAuthorization) when redirecting back to FxA.

If a different user is allowed to sign in, it may be necessary to clear locally held session state before redirecting back to FxA.
:::

### Handling user logout

Whenever the user terminates a session at the RP, any access and refresh tokens held by the RP for that session should be destroyed. Destroying the access and refresh tokens will ensure an entry for the session no longer appears in the [Devices and Apps](https://accounts.firefox.com/settings#connected-services) list.

#### Destroying an access token

```js
POST https://oauth.accounts.firefox.com/v1/destroy
{
  access_token: <access_token>
}
```

#### Destroying a refresh token

```js
POST https://oauth.accounts.firefox.com/v1/destroy
{
  refresh_token: <refresh_token>
}
```

More information on destroying tokens can be found on the [OAuth server's API docs](/api#tag/OAuth-Server-API-Overview/operation/postDestroy).

#### SSO logout

Several concerns are noted, most importantly:

> ...there's potentially confusing behaviour around logging out of an FxA relier. If I use FxA to sign in to AMO, and then I sign out in AMO, I could reasonably expect to have to enter my password again if I want to sign back in. But we don't have a way for AMO to signal back to FxA that the user signed out.

This concern is not currently addressed as none of the [OIDC logout flows](https://medium.com/@robert.broeckelmann/openid-connect-logout-eccc73df758f) are currently supported.

RPs can protect themselves a little bit here by not using `prompt=none` unless they still have a valid local login session for that user. If the users signs out of the RP, they will always see some UI when trying to sign back in, even if it's just the "Continue as X" button rather than a password prompt.

### prompt=none and security

For users that are already authenticated to Firefox Accounts, `prompt=none` bypasses the FxA authorization screen and redirects back to the RP without any user interaction. This behavior applies equally to users with 2FA enabled and could easily cause confusion with users. The Firefox Accounts team only enables the use of `prompt=none` for a service if both a good use case exists and the integration has been audited.

### Future directions

Support for and OIDC RP Initiated Logout may go some way to reducing user confusion on what it means to sign out of an RP and whether they should have to enter their password again. Upon signing out of the RP, RPs that support the OIDC RP Initiated Logout protocol will redirect the user to FxA where they are given the option to destroy their FxA session as well.

## Management of JWT Signing Keys

This server uses signed [JWTs](https://jwt.io/) to represent various kinds of security token, including:

- `id_token`s as defined by [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html)
- `access_token`s as defined by [JWT Profile for OAuth 2.0 Access
  Tokens](https://datatracker.ietf.org/doc/draft-ietf-oauth-access-token-jwt/)
- Security Event Tokens as defined by [RFC8417](https://tools.ietf.org/html/rfc8417)

RPs are expected to verify the signatures on these JWTs by fetching our public keys via the
[OpenID Connect Discovery Protocol](https://openid.net/specs/openid-connect-discovery-1_0.html),
which involves:

1. Fetching our main OpenID metadata document at https://accounts.firefox.com/.well-known/openid-configuration
2. Extracting the contained `"jwks_uri"` entry
3. Fetching a [JWK Set](https://tools.ietf.org/html/rfc7517) document from that URI
4. Respecting standard HTTP cache-control headers on those resources

We thus have a coordination problem between this server and its RPs when it comes to changing our
JWT signing keys. Let `T_cache` be the max age in the cache-control headers of our metadata documents,
and `T_tokens` be the maximum lifetime of any token issued by this service. Then:

- We must advertise a new signing key in our JWK Set for at least `T_cache` seconds before we start
  using it to sign tokens. If we don't, RPs with a cached copy of our JWK Set may not know to trust
  the new key, resulting in spurious verification failures and/or fragile logic to refresh the cached
  copy on-demand when verification fails.
- We must continue to advertise an old signing key in our JWK Set for at least `T_tokens` seconds
  after we stop using it to sign tokens. If we don't, RPs who refresh their cache of our JWK Set may
  treat tokens signed with that key as invalid before they expire, resulting in spurious verification
  failures.

To help manage this, the server config has slots for three different keys, one required and the others
optional:

- `openid.key`: The private key that is actively being used to sign tokens. This key is required.
- `openid.newKey`: A new private key that we intend to start using to sign tokens in the future.
  This key is optional, but can be specified in order to start advertising it before use.
- `openid.oldKey`: The _public_ component of a key we previously used to sign tokens. This key is
  optional, but can be specified in order to continue advertising it while tokens bearing its signature
  may be active.

The procedure for rotating the active signing key is:

- Create the new signing key and configure it as `openid.newKey`, while leaving the existing `openid.key` intact.
  - This can be performed using `../scripts/prepare-new-signing-key.js`.
- Deploy to all server instances, then wait for at least `T_cache` seconds plus some margin for clock error.
- Take the public component of `openid.key` and configure it as `openid.oldKey`, then move `openid.newKey`
  to `openid.key`.
  - This can be performed using `../scripts/activate-new-signing-key.js`.
- Deploy to all server instances, then wait for at least `T_tokens` seconds plus some margin for clock error.
- Remove `openid.oldKey` from the configuration.
  - This can be performed using `../scripts/retire-old-signing-key.js`.
- Deploy to all server instances, then celebrate a job well done.

This scheme keeps things fairly simple, but it also means that each key rotation event must be at least
`T_cache + T_tokens` seconds apart. If this proves to be a problem in practice, we could reduce the limit
to `T_cache` by keeping a _list_ of old signing keys rather than a single key.

For our main production environment, secret keys are managed via [SOPS](https://github.com/mozilla/sops).
If you're working in such an environment you can do this to extract the keys from SOPS into local files:

```
./scripts/sops-key-config.js extract path/to/encrypted/config.yaml
```

Then, after operating on them locally using the above key-rotation scripts, you can insert the modified
values back into SOPS via:

```
./scripts/sops-key-config.js insert path/to/encrypted/config.yaml
```
