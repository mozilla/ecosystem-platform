---
id: using-apis
title: Using APIs
sidebar_label: Using APIs
---

# Using APIs

The Ecosystem Platform provides [some OAuth APIs for relying parties](/api#tag/OAuth-Server-API-Overview) to use while providing OAuth services to customers.  **Relying Parties should only use OAuth API endpoints**.  Usage and expectations are detailed below.  Narrower requirements and rate limits may apply to more specific APIs.

If these rules change significantly we'll notify the [mozilla-accounts-notices group](https://groups.google.com/a/mozilla.com/g/mozilla-accounts-notices).  If you're using this API please subscribe to that group.


## API versioning

Mozilla accounts APIs are versioned and breaking changes will be pushed out in newer versions of the APIs.  When newer versions of the API are announced we'll also communicate how long we will support the older versions of the APIs.

### Minor changes

Mozilla accounts may change existing APIs in non-breaking ways, for example, adding a new field to a JSON response.  It's expected that clients will not fail if new fields are added.

### Behaviour change: `auth_time` and `auth_at` semantics (August 2026)

:::warning
`auth_time` (in ID tokens, JWT access tokens, and introspection responses) and `auth_at` (in token
responses) now report **the most recent authentication event on the session**, rather than the
password sign-in that created it.

Previously these reflected only the point at which the user signed in with their password. If the
user later completed a second-factor challenge — a TOTP code, a backup authentication code, a
recovery-phone code — the timestamp did not move. It now does.

This applies to **every relying party**, not only those using
[step-up authentication](/relying-parties/how-tos/step-up-authentication). It is a correctness fix:
OIDC defines `auth_time` as "time when the end-user authentication occurred", and a session that had
a password at T1 and a second factor at T2 authenticated at T2.

**What to check:** if you use `auth_time` or `auth_at` as a proxy for "when this session began" —
for example to compute a session age, expire something on a schedule, or key a cache — that
assumption no longer holds. The value can now move forward during a session. Code that treats it as
"how recently did the user prove who they are" is unaffected and is the intended reading.
:::


## Global Rate Limits

During periods of maintenance or heavy load, the server may request that clients enter a "back-off" state, in which they avoid making further requests.

At such times, you may receive a `429 Too Many Requests` or a `503 Service Unavailable` response with a `Retry-After` header denoting the number of seconds to wait before issuing any further requests. It will also include an `errno` and a `retryAfter` field matching the value of the `Retry-After` header in the body.

For example, the following response indicates that the client should suspend making further requests for 30 seconds:

```
HTTP/1.1 503 Service Unavailable
Retry-After: 30
Content-Type: application/json

{
  "code": 503,
  "errno": 201,
  "error": "Service Unavailable",
  "message": "Service unavailable",
  "info": "https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#response-format",
  "retryAfter": 30,
  "retryAfterLocalized": "in a few seconds"
}
```

## Handling Expired Access Tokens

OAuth access tokens are short-lived and will eventually expire. When a resource server returns a `401 Unauthorized` response, the RP should attempt to obtain a new access token using its refresh token before treating the failure as fatal.

The recommended approach is:

1. Make the API request with the current access token.
2. If you receive a `401`, use the refresh token to request a new access token from the FxA OAuth server.
3. Retry the original request with the new access token.
4. If the refresh token request also returns a `401`, the user has disconnected the RP from their account (or their session has been otherwise invalidated). At this point the RP should discard stored tokens and prompt the user to re-authenticate.

Avoid immediately prompting re-authentication on every `401` without first attempting a token refresh — this creates unnecessary friction for users whose access token has simply expired.

This applies to a `401` caused by an expired token. If the response carries a `WWW-Authenticate`
header with `error="insufficient_user_authentication"`, refreshing will not help — see
[Handling insufficient authentication](#handling-insufficient-authentication).

## Handling insufficient authentication

A `401` does not always mean your access token expired. A resource server that requires
[step-up authentication](/relying-parties/how-tos/step-up-authentication) answers with a `401`
carrying a `WWW-Authenticate` challenge:

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="insufficient_user_authentication",
  error_description="A second factor is required for this operation",
  acr_values="AAL2",
  max_age="0"
```

**Refreshing the access token is the wrong response to this challenge.** The elevation conveyed by
`acr` and `auth_time` is deliberately not carried by refresh tokens, so a refreshed token is
guaranteed to fail the same check — the retry loops without ever succeeding. Instead, re-run the
authorization flow, passing the `acr_values` and `max_age` from the challenge.

Distinguish the two cases by reading the `error` value out of the `WWW-Authenticate` header:

| `error` | Meaning | Correct response |
|---------|---------|------------------|
| absent, or `invalid_token` | The access token is expired or invalid | Refresh, then retry |
| `insufficient_user_authentication` | The token is valid but the user's authentication is not strong or not recent enough | Re-run the authorization flow with the challenged `acr_values` / `max_age` |

See [step-up authentication](/relying-parties/how-tos/step-up-authentication#implementing-the-resource-server-side-rfc-9470-3)
for how to emit this challenge from your own resource server.
