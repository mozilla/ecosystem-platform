---
id: step-up-authentication
title: Step-up authentication
sidebar_label: Step-up Authentication
---

Last updated: `August 27th, 2026`

Step-up authentication lets a relying party require the user to complete a fresh two-factor
challenge before a sensitive action, even though the user is already signed in. Mozilla accounts
implements the authorization-server half of [RFC 9470][rfc9470] (*OAuth 2.0 Step Up Authentication
Challenge Protocol*) on top of the standard OpenID Connect [`acr_values`][oidc-acr] and
[`max_age`][oidc-authrequest] request parameters.

## When to use it

Use step-up for operations where a stolen cookie or a leaked token should not be enough on its own:

- Deleting an account, an add-on, or another primary object
- Adding or removing collaborators
- Generating or replacing API keys
- Changing critical settings

Step-up is **not** the same as [`prompt=login`](/relying-parties/reference/query-parameters#prompt).
`prompt=login` re-prompts for the user's **password**. Step-up deliberately does not ask for a
password — it asks for a **second factor** (TOTP, a backup authentication code, a recovery phone
code). Asking for a password again does not prove possession of a second factor, which is the
property you actually want for an anti-fraud check.

## Requesting elevation

Add either or both of these parameters to your authorization request:

| Parameter | Value | Effect |
|-----------|-------|--------|
| `acr_values` | `AAL2` | The grant is only issued if the user's session has reached authentication assurance level 2 — that is, the user has completed a second factor. |
| `max_age` | Integer, seconds | The grant is only issued if the user's most recent authentication event is no older than this. |

```
GET https://accounts.firefox.com/authorization
  ?client_id=<your client id>
  &redirect_uri=<your redirect uri>
  &scope=profile
  &state=<random state>
  &response_type=code
  &acr_values=AAL2
  &max_age=0
```

If the session already satisfies the request, the user confirms the account they are signed in as
— the usual "continue as" screen — and is redirected back to you with an authorization code. No
second-factor challenge is shown. If the session does not satisfy the request, Mozilla accounts
challenges the user for a second factor first, then completes the redirect as normal.

Note that a step-up request does not send `action`, so the existing signed-in session is reused
rather than the user being asked to sign in again.

:::note
`acr_values` is a space-separated list per the OIDC specification, but **`AAL2` is the only value
Mozilla accounts recognises**. Any other token in the list is silently ignored — it will not produce
an error and will not change the outcome. Do not rely on unrecognised values being rejected.
:::

`max_age` is validated as an integer of `0` or greater. There is no upper bound.

### How the round trip looks

```mermaid
sequenceDiagram
participant UA as User-Agent<br>(Browser)
participant FxA as Mozilla accounts
participant RP as Relying Party

UA->>RP: User requests a sensitive action
RP->>UA: Redirect to /authorization w/ acr_values=AAL2&max_age=N
UA->>FxA: Authorization request
FxA-->>FxA: Compare session AAL and auth event age
alt Session already satisfies the request
  FxA->>UA: Confirm signed-in account; no second factor requested
else Session is below AAL2, or too old
  FxA->>UA: Prompt for second factor (TOTP / backup code / recovery phone)
  UA->>FxA: Submit second factor
  FxA-->>FxA: Refresh the session authentication event
  FxA->>UA: Redirect back to RP w/ code
end
UA->>RP: Redirect w/ code
RP->>FxA: Exchange code for tokens
FxA->>RP: Tokens carrying acr and auth_time
RP-->>RP: Verify acr and auth_time before performing the action
```

## Choosing a `max_age`

This is the most consequential decision you will make integrating step-up. `max_age` is your only
control over how *per-transaction* the elevation actually is.

| `max_age` | Behaviour | Use when |
|-----------|-----------|----------|
| *omitted* | Elevation is satisfied if the session has **ever** reached AAL2 — possibly weeks ago. Not per-transaction in any meaningful sense. | You only care that the account has 2FA and the user used it at some point in this session. |
| `0` | Satisfied only by a challenge completed within the last few seconds. Effectively a challenge on every action. | Destructive or irreversible operations. |
| `60`–`300` | One challenge covers a short burst of related actions. | A multi-step workflow where challenging at each step would be hostile. |
| `900`+ | A "sudo window". Any authorization request from that session during the window is elevated without a new challenge. | Rarely. Prefer a shorter window plus an explicit re-challenge. |

Two properties are easy to miss and will bite you:

:::warning
**There is a five-second grace period.** Freshness is evaluated as
`now - auth_time > max_age + 5`. Without it, `max_age=0` could never be satisfied — the
challenge-to-redirect round trip always advances the clock past `auth_time`, so the RP would
re-challenge in an infinite loop. The practical effect is that `max_age=0` means "challenged within
the last five seconds", not "challenged this instant". For any `max_age` above a minute or so the
grace period is negligible.
:::

:::warning
**Freshness is a property of the user's Mozilla accounts session, not of your relationship with the
user.** The authentication event is shared across every relying party using that browser session. If
the user completes a second-factor challenge for another RP, that challenge also satisfies your
`max_age` for its duration. A short `max_age` narrows this window but does not eliminate it. If you
need a challenge bound to one specific action, you must additionally track in your own application
which action the elevation was obtained for.
:::

## Reading the result

Elevation is reported through three claims. **Which of them you can see depends on where you look:**

| Claim | ID token | JWT access token | Introspection | Format |
|-------|:--------:|:----------------:|:-------------:|--------|
| `acr` | yes | yes | yes | String reporting the level *achieved*, `"AAL1"` or `"AAL2"` |
| `auth_time` | yes | yes | yes | Seconds since the Unix epoch |
| `amr` | yes | **no** | yes | Array of strings, e.g. `["pwd","otp"]` |
| `fxa-aal` | yes | no | no | Number, e.g. `2` |

An example introspection response for an elevated access token:

```json
{
  "active": true,
  "scope": "profile",
  "client_id": "<your client id>",
  "token_type": "access_token",
  "acr": "AAL2",
  "auth_time": 1755648000,
  "amr": ["pwd", "otp"],
  "iat": 1755648003000,
  "exp": 1755649803000
}
```

:::warning
**`auth_time` is in seconds. `iat` and `exp` on the introspection response are in milliseconds.**
This asymmetry is intentional and retained for backwards compatibility: `auth_time` follows the OIDC
convention, while `iat`/`exp` predate it on this endpoint. Comparing them directly without
converting will be wrong by a factor of 1000.
:::

### Verify the claims yourself

Do not treat a successful redirect as proof that the requirement was met. Check the claims:

```js
const MAX_AGE_SECONDS = 0;
const LEEWAY_SECONDS = 5;

function isElevated(claims) {
  if (claims.acr !== 'AAL2') {
    return false;
  }
  if (typeof claims.auth_time !== 'number') {
    return false;
  }
  const ageSeconds = Math.floor(Date.now() / 1000) - claims.auth_time;
  return ageSeconds <= MAX_AGE_SECONDS + LEEWAY_SECONDS;
}
```

Two reasons this matters. First, a token can reach your resource server by a path that did not
involve the authorization request you made. Second, `max_age` is enforced at the moment the grant is
issued, not for the lifetime of the resulting token — an access token minted under `max_age=0` is
still valid long after the elevation has conceptually expired. **The freshness window is yours to
enforce.**

### `amr` does not tell you which factor was used

`amr` reports authentication *method classes*, not specific methods. TOTP, backup authentication
codes, and recovery-phone codes all report as `otp`. If you need to distinguish "the user did
something recently" you must key off `auth_time` advancing, not off a change in `amr`.

## Which token type will you receive?

Mozilla accounts issues either opaque access tokens or JWT access tokens, decided per client:

- **Opaque tokens (the default).** Most relying parties receive these. They carry no claims — you
  must call [`/introspect`](/api#tag/OAuth-Server-API-Overview/operation/postIntrospect) to read
  `acr`, `auth_time`, and `amr`.
- **JWT access tokens.** Only issued to clients on an explicit allow-list. Validate them locally
  against the JWKS from the [discovery document][discovery]. Note that `amr` is **not** included in
  the JWT access token — only `acr` and `auth_time`. If you need `amr`, read it from the ID token.

There is currently no way to discover which of these you will be issued. Confirm it with the Mozilla
accounts team when you request credentials, or inspect a token: a JWT access token has three
base64url segments and a `typ` of `at+JWT`, while an opaque token is a plain hex string.

:::note
Short-lived JWT access tokens are not persisted server-side, so introspecting one returns
`active: false`. This is by design, not a bug. Clients issued JWT access tokens are expected to
validate them locally rather than introspect them.
:::

## Elevation does not survive a token refresh

:::danger
A token obtained via `grant_type=refresh_token` carries **no** `acr`, **no** `auth_time`, and **no**
`amr`. Refreshing silently drops the elevation.
:::

This is deliberate. The authentication event is recorded against the authorization code and copied
onto the access token minted from it. Refresh tokens store no authentication event at all, and the
refresh grant never re-evaluates `acr_values` or `max_age` — there is no user present to challenge.
If elevation survived a refresh, an attacker holding a refresh token could mint elevated tokens
indefinitely.

The consequence for your integration: **to re-elevate, re-run the authorization flow.** Do not
refresh. A refreshed token will still introspect as `active: true`, so a check that only looks at
`active` will pass while the elevation is gone.

## Users who do not have a second factor

If the user has no AAL2 method on their account, Mozilla accounts asks them to enrol one inline
rather than failing the request. From your side this is invisible — it happens between your redirect
and the redirect back, and your original OAuth parameters (`state`, `redirect_uri`, `scope`,
`acr_values`, `max_age`) are carried through the enrolment flow. When the user finishes, they land
back at your `redirect_uri` with a code, elevated.

You should still handle the case where the user abandons the flow and never returns — treat it the
same as any other incomplete authorization.

Enrolment is protected by an emailed one-time code: before the user can add a second factor, they
must confirm a code sent to their account email. A session alone is not enough to enrol a factor and
complete step-up. From your side this is one more screen in a flow you do not control; the contract
at your `redirect_uri` is unchanged.

## Step-up with `prompt=none`

[`prompt=none`](/reference/oauth-details#promptnone-support) forbids any user interaction, which is
directly at odds with a step-up challenge. If you combine the two and the session does not already
satisfy the requirement, Mozilla accounts cannot challenge the user, so it fails the request instead:
the user is redirected to your registered `redirect_uri` with

```
?error=unmet_authentication_requirements&state=<your state>
```

This is the [RFC 9470][rfc9470] section 5 / [OIDC][oidcuar] failure code. Treat it as "the session is
not elevated and I must ask interactively" — retry the same request **without** `prompt=none`.

:::note
This redirect ships with the release containing FXA-12860. Before that release, a `prompt=none`
step-up request routes the user into an interactive challenge, which the parameter is supposed to
forbid, and you are never told the request failed.
:::

## Implementing the resource-server side (RFC 9470 §3)

Everything above covers Mozilla accounts' role as the **authorization server**. RFC 9470 also
defines a **resource server** role, and that half is yours to implement. If your API is called with
a token that is valid but insufficiently elevated, answer with a `401` carrying a
`WWW-Authenticate` challenge that tells the client what to ask for:

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="insufficient_user_authentication",
  error_description="A second factor is required for this operation",
  acr_values="AAL2",
  max_age="0"
```

The `acr_values` and `max_age` parameters in the challenge are the values the client should send on
its next authorization request. This is what makes the loop self-describing: your API declares the
requirement, and the client does not need it hard-coded.

On receiving this specific challenge, the client must **re-run the authorization flow** with those
parameters.

:::warning
Do not respond to an `insufficient_user_authentication` challenge by refreshing the access token.
The general advice in [Handling expired access tokens](/relying-parties/reference/using-apis#handling-expired-access-tokens)
— refresh first, re-authenticate only if that fails — is correct for an *expired* token and wrong
for this one. Refreshing produces a token with no elevation at all, so the retry fails identically
and the user is stuck in a loop. Distinguish the two cases by the `error` value in the
`WWW-Authenticate` header.
:::

## Testing

The `123done` test relying party in the [fxa monorepo](https://github.com/mozilla/fxa) exercises the
full flow against a local or staging stack:

- `GET /api/step_up` sends `acr_values=AAL2` with a configurable `max_age`
- `GET /api/token_claims` introspects the current access token and shows `acr`, `auth_time`, `amr`
- `GET /api/refresh_token` demonstrates elevation being dropped by a refresh

## Current limitations

Be aware of these before you design around step-up. Each is tracked and may change.

- **An abandoned interactive challenge tells you nothing.** `unmet_authentication_requirements` is
  returned for [`prompt=none`](#step-up-with-promptnone) requests only. If the user simply walks away
  from a second-factor prompt, or backs out of enrolling one, there is no error redirected to your
  `redirect_uri` — the flow dead-ends in Mozilla accounts. Handle it as a timeout on your side. A
  ticket for the decline case is expected to follow. (FXA-12860)
- **The discovery document does not advertise step-up support.**
  `.well-known/openid-configuration` does not include `acr_values_supported`, and `claims_supported`
  does not list `acr`, `auth_time`, or `amr`. Do not feature-detect from the discovery document.
- **Passkey users may be asked to enrol TOTP.** A passkey sign-in produces a session that is already
  AAL2, but the account-level check does not currently count passkeys as a second factor. A
  passkey-only user requesting an elevated grant may be routed into TOTP enrolment they do not
  strictly need. (FXA-14312)

[rfc9470]: https://datatracker.ietf.org/doc/html/rfc9470
[oidc-acr]: https://openid.net/specs/openid-connect-core-1_0.html#acrSemantics
[oidc-authrequest]: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
[oidcuar]: https://openid.net/specs/openid-connect-unmet-authentication-requirements-1_0.html
[discovery]: https://accounts.firefox.com/.well-known/openid-configuration
