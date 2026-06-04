---
title: Authentication Schemes
---

Last updated: `June 4, 2026`

Auth-server accepts two authentication schemes on its token-protected routes: prefixed Bearer tokens (preferred) and Hawk (legacy fallback). Both work on the same routes. New clients should use Bearer, and the remaining Hawk clients are planned to move to it.

See [ADR-0022](https://github.com/mozilla/fxa/blob/main/docs/adr/0022-deprecate-hawk.md) for the decision and its history.

## Prefixed Bearer tokens

Bearer is the preferred scheme for every client, and the one new integrations should use. In-monorepo callers ([`fxa-auth-client`](https://github.com/mozilla/fxa/tree/main/packages/fxa-auth-client) to `fxa-auth-server`) already send the token this way, in the `Authorization` header:

```
Authorization: Bearer <prefix>_<hex>
```

The prefix marks the token kind:

| Prefix | Token kind |
| ------ | ---------- |
| `fxs_` | sessionToken |
| `fxk_` | keyFetchToken (and keyFetchTokenWithVerificationStatus) |
| `fxar_` | accountResetToken |
| `fxpf_` | passwordForgotToken |
| `fxpc_` | passwordChangeToken |

`keyFetchToken` and `keyFetchTokenWithVerificationStatus` share the `fxk_` prefix because the client derives a single keyFetch credential.

The prefix keeps the wire format separate from the OAuth refresh-token Bearer scheme and from Hawk, so one route can accept all three without ambiguity.

## Hawk (legacy)

Hawk is a fallback, kept only for compatibility. Firefox Desktop, iOS, and Android use it today: they talk to auth-server directly rather than through `fxa-auth-client`. The plan is to migrate these clients to Bearer; the server keeps Hawk until that work is done. Hawk signs each request with a key derived from the token, and the [onepw protocol HAWK Notes](../explanation/onepw-protocol#hawk-notes) describe the derivation.

## Multi-strategy routes

Protected routes use Hapi multi-strategy chains. Auth-server tries Bearer first and falls back to Hawk. Around 65 route auth configs were switched, across the session, keyFetch, accountReset, passwordForgot, passwordChange, and verifiedSession strategies.

## Migration and observability

`fxa-auth-client` sends Bearer on every request and no longer signs with Hawk. To watch the split in production, auth-server emits a StatsD counter `auth.strategy.used`, tagged with `scheme` (`bearer` or `hawk`) and `kind` (the token kind).

## Security tradeoff

Hawk binds each request to its host, URI, and a nonce. Bearer does not, so a leaked Bearer token can be replayed against more requests than a leaked Hawk header. Token rotation and the customs ratelimiter are the mitigations. A leaked session token still exposes only profile and device metadata, not the password, secret keys, or Sync data.
