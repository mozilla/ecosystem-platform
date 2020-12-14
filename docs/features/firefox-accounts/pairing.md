---
id: pairing
title: Pairing authentication
sidebar_label: Pairing authentication
---

## Overview

A Firefox Account user can connect a new device to their account without entering a password by relying on a already connected device through a mechanism called pairing.

Currently, the pairing implementation is limited to a mobile device (Firefox Android and iOS) scanning a QR code displayed on a computer (Firefox Desktop) already connected to a Firefox Account.

## User Flow

Let's assume that the user is already signed-in to their Desktop Firefox profile.
On their mobile device, Firefox invites them to navigate to firefox.com/pair on their Desktop browser which, after a confirmation of intent, generates a QR code.
On their mobile device, the user scans that QR code, each device confirms the connection, and finally the mobile device joins the Firefox Account.

A detailed technical user-flow is available [here](https://lucid.app/lucidchart/9a420c19-1e92-42a5-8eae-908a442c1044/edit?page=0).

## Implementation

### High-level description of the flow

1. Desktop opens a communication channel with the [Channel Server](https://github.com/mozilla-services/channelserver), locally generates a key to secure the communication, and advertises these via QR code.
2. Mobile scans the QR code and connects to the same communication channel. The two devices exchange messages to perform a TLS1.3-like PSK handshake that encrypts and authenticates further communication on this channel ([Pairing Channel](https://github.com/mozilla/fxa-pairing-channel)).
3. Mobile initiates an FxA OAuth flow, but rather than opening a webpage for the user to grant access locally, it sends the OAuth request to Desktop for the user to action it there.
4. The devices exchange some metadata and show confirmation screens to allow user to authorize the connection.
5. Desktop uses its existing connection to FxA to authorize the OAuth request and sends the result back to Mobile.
6. Mobile completes its OAuth flow just as if it had received an OAuth redirect back from a locally-displayed webpage.

### Detailed implementation description

The implementation is described [here](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/pairing-architecture.md).

Please note that the [FxA Pairing Flow - Application Layer](https://lucid.app/lucidchart/1bc1b604-0047-4542-8827-ed8518b0433e/edit?page=0) should be treated as the __source of truth__ regarding the pairing protocol and kept up-to-date.

### Where does the code live?

- [Channel Server](https://github.com/mozilla-services/channelserver)
- [Pairing Channel](https://github.com/mozilla/fxa-pairing-channel)
- [Desktop client implementation](https://searchfox.org/mozilla-central/rev/23c25cd32a1e87095301273937b4ee162f41e860/services/fxaccounts/FxAccountsPairing.jsm) ([UI](https://searchfox.org/mozilla-central/rev/23c25cd32a1e87095301273937b4ee162f41e860/browser/components/preferences/fxaPairDevice.js))
- [Mobile client implementation](https://github.com/mozilla/application-services/blob/40bef1314d9cf20fdfa8e1c1539a5205c4bdd462/components/fxa-client/src/oauth.rs#L111-L136)
- [Content server implementation](https://github.com/mozilla/fxa/blob/44bbb161d958f084c1bb39902554f69a2333de90/packages/fxa-content-server/app/scripts/models/pairing/supplicant-state-machine.js)

## Security concerns and desired security properties

Described [here](https://docs.google.com/document/d/1mFf0sfEK8o1csXLeyK1x4GS9SUMIq4q8bu25LiydPew/edit#heading=h.ur0lafl8z0a0).

## Possible evolutions

- Reverse pairing: allow a computer to connect to an account by scanning a QR code with an already connected mobile Firefox.
- Pairing using a code to type: more accessible, allows device without a back camera to pair (i.e. 2 computers).
