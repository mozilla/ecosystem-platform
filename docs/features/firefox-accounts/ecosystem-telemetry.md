---
id: ecosystem-telemetry
title: Account Ecosystem Telemetry
sidebar_label: Ecosystem Telemetry
---

Last updated: `August 4th, 2020`

## Motivation

When users sign in with their Firefox Account, they expect a seamless experience across different
devices and products. To help us deliver on that experience, Mozilla's Product Managers need
to be able to gather usage and interaction metrics from across those different products and analyze a
user's experience of the product ecosystem as a whole. Account Ecosystem Telemetry lets us do that
in a way that puts user privacy first and aligns with our lean data practices.

A simple (and *highly discouraged!*) way to gather cross-product telemetry would be for each product to submit telemetry
pings that directly include the user's Firefox Account identifier, and then join metrics from different
products by matching on the user id.

It is **not recommended** for FxA relying parties to include the uid directly in metrics pings in this way.
We believe that such a setup exposes users to unnecessary privacy risks in the event of
a data breach or other unauthorized access to the metrics data, since the pings are easily linked
back to the user's personal information in their Firefox Account.

Instead, FxA relying parties should log a *pseudonym* in their metrics pings, an opaque identifier
that is unique to a particular account but is hard to correlate back to a specific user.
FxA provides access to an "ecosystem anonymized id" that can be used for this purpose.

Some details on how this pseudonym is calculated and managed are given below.
Mozilla employees can read more background and details in the
[internal technical planning document](https://docs.google.com/document/d/1rR3uJG8sVtow4plYu6M5Jp5e5zOSrLzdkUx8BdO8kOM/).

## Submitting Pings via Account Ecosystem Telemetry

To submit metrics pings via Account Ecosystem Telemetry, an RP should first coordinate with Mozilla's
[data pipeline team](https://docs.telemetry.mozilla.org/) to define a schema for
the pings and an appropriate ingestion endpoint to which they can be submitted.

When a user signs in to the RP with their Firefox Account, the RP should request
access to the user's account profile data and obtain the
[`ecosystemAnonId` field](https://github.com/mozilla/fxa/blob/main/packages/fxa-profile-server/docs/API.md#get-v1ecosystem_anon_id).
Access to this field is currently limited to Mozilla-owned RPs and requires the `profile:ecosystem_anon_id` scope.
The value of this field can be included in metrics pings to indicate that the contained events
came from that particular user.

If the RP is client-side software of which the user may be running multiple instances (that is, if it is
an OAuth "public client") then it should also generate a random UUID on first run and include this in its
metrics pings as the `ecosystemClientId` field. This helps identify metrics pings that were submitted by
the same instance of the software (similar to the `client_id` field used by main Firefox telemetry pings).

In addition to `ecosystemAnonId` and `ecosystemClientId`, the ping should include any usage or interaction metrics
that are relevant to the particular application (bearing in mind that this should all be [Category 1 or
Category 2 data](https://wiki.mozilla.org/Firefox/Data_Collection)).

For an example of a fully-formed Account Ecosystem Telemetry ping, please see the
[`account-ecosystem` ping](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/data/sync-ping.html)
submitted by Firefox Desktop.

## Ecosystem Telemetry Identifiers

### ecosystemUserId

To create a unique pseudonym for each account, we rely on Firefox Accounts' support for
[managing encryption keys](../../relying-parties/end-to-end-encryption) and define a new
[scoped key](https://docs.google.com/document/d/1IvQJFEBFz0PnL4uVlIvt8fBS_IPwSK-avK0BRIHucxQ/) for use
by the telemetry system. The scoped key identifier for this secret is the string "https://identity.mozilla.com/ids/ecosystem_telemetry".

More concretely: when a user signs in, the FxA login page uses their password to
[obtain the root key material](https://github.com/mozilla/fxa-auth-server/wiki/onepw-protocol)
for their account (`kB`) and then derive a secret value `ecosystemUserId` according to:

```
// This value can change if we ever need to rotate these identifiers.
keyRotationSecret = 0x"0000000000000000000000000000000000000000000000000000000000000000"

// This derives a purpose-specific secret from the root key material kB
ecosystemUserId = HKDF-SHA256(
  ikm = kB + keyRotationSecret,
  size = 48,
  salt = uid,
  context = "identity.mozilla.com/picl/v1/scoped_key\nhttps://identity.mozilla.com/ids/ecosystem_telemetry"
)[16:48]
```

This value is what will ultimately be used to identify that user's account when analyzing metrics.
Since it is derived from their root key material `kB`, the `ecosystemUserId` is unique to that users
account but cannot be directly linked back to it account.

However, this means that we cannot directly store this identifier in the user's account profile data
or share it with any server-side applications, because the whole point is that it's supposed to
be hard to correlate it back to a particular account! Before it can be stored as part of the user's
account, it must be encrypted it so that only the data pipeline can access the underlying value.

### ecosystemAnonId

The telemetry data pipeline manages a cryptographic key-pair and advertises the public
portion of the key as a [JWK](https://tools.ietf.org/html/rfc7517). After calculating `ecosystemUserId`,
the FxA login page uses this key to encrypt that secret value into a [JWE](https://tools.ietf.org/html/rfc7516).
We call the resulting encrypted value an `ecosystemAnonId` and it is stored on the FxA server as
part of the user's account profile data.

When the user signs in to an RP, that RP can read the `ecosystemAnonId` from the user's profile
and include it in metics pings. When those metrics pings are received by the data pipeline, it
will decrypt the `ecosystemAnonId` into the underlying `ecosystemUserId`. The resulting data set
can be grouped and analyzed by `ecosystemUserId` in order to understand usage and interaction data
from the same account across multiple different products.

### ecosystemClientId

For client-side applications, it is useful to also group and analyze metrics pings that came from
the same instance of that client. To achieve this, each application maintains a random UUID that is
created on first run and persists until uninstall, and submits this in ecosystem telemetry pings
as the `ecosystemClientId` field.

It is important that the `ecosystemClientId` is never shared with other server-side software, and
particularly that it is not stored on any servers in a way that would tie it back to the user's
FxA user id. If it were, then this value could be used to defeat the separation between the
metrics pseudonym `ecosystemUserId` and the user's real account data.