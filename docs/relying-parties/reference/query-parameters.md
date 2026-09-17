---
title: Query Parameters
---

Current as of `August 20th, 2026`


Query parameters are used to pass data from the relying party to Mozilla accounts.

## OAuth parameters

### `acr_values`

Specifies the [Authentication Context Class Reference][acr] values the session must satisfy before
a grant is issued. Space-separated, per the OIDC specification.

#### Options

- `AAL2` - Require that the user has completed two-factor authentication (authenticator assurance
  level 2) for this session. If they have not, they are challenged for a second factor before the
  authorization completes. This is the only value Mozilla accounts recognises; any other value in
  the list is silently ignored.
  See the [step-up authentication guide](/relying-parties/how-tos/step-up-authentication) for more info.

#### When to specify

When authenticating a user for OAuth ahead of a sensitive action, where being signed in is not
sufficient assurance on its own.

Not compatible with `prompt=none`: a session that does not already meet the requirement cannot be
challenged without interaction, so the request fails with
`error=unmet_authentication_requirements`. See
[step-up with `prompt=none`](/relying-parties/how-tos/step-up-authentication#step-up-with-promptnone).

### `client_id`

Specify the OAuth client_id of the relier being signed in to.

#### When to specify

When authenticating a user for OAuth.

### `max_age`

The maximum permissible age, in seconds, of the user's most recent authentication event. If the
session's last authentication is older than this, the user is challenged for a second factor before
the authorization completes.

Freshness is evaluated with a five-second grace period, so `max_age=0` means "authenticated within
the last few seconds" rather than "authenticated this instant". Choosing a value is the main
trade-off in a step-up integration - see
[Choosing a `max_age`](/relying-parties/how-tos/step-up-authentication#choosing-a-max_age).

#### Options

An integer of `0` or greater. There is no upper bound.

#### When to specify

When authenticating a user for OAuth and the *recency* of their authentication matters, not only
that they authenticated at some point. Commonly paired with `acr_values=AAL2`.

### `prompt`

Specifies whether the content server prompts for permissions consent. Only applicable for `trusted` relying parties.
Untrusted relying parties always show the prompt.

#### Options

- `consent` - Show the permissions prompt if any additional
  permissions are required. Only applicable for `trusted` relying parties.
  Untrusted relying parties always show the prompt.
- `none` - Require no user interaction if the user is signed in.
  Only applicable for authorized relying parties that are not requesting
  keys. An error is returned to the RP for all others.
  See the [prompt=none doc](/reference/oauth-details#promptnone-support) for more info.
- `login` - Always prompt the user for their password and re-authenticate
  regardless if they have signed into the browser or have a cached session.

#### When to specify

When authenticating a user for OAuth.

### `redirect_uri`

Which URI should a user be redirected back to upon completion of the OAuth transaction.

#### When to specify

When authenticating a user for OAuth.

### `scope`

Specify the OAuth scope requested.

#### Options

- `profile`

#### When to specify

When authenticating a user for OAuth.

### `state`

Specify an OAuth state token.

#### When to specify

When authenticating a user with OAuth.

## Firefox/Sync parameters

### `action`

Specifies the behavior of users sent to `/`. As of December 2019, the only supported
`action` is `email` and `force_auth`.

Specifying `action=email` causes the "email-first" flow where unauthenticated users are
first asked to enter their email address w/o a password. If an account exists for the
address, the user is asked to login, if no account exists, the user is asked to create
an account.

#### Options

- `email`
- `force_auth`

#### When to specify

When authenticating a user

### `entrypoint`

If they user arrived at Mozilla accounts from within Firefox browser chrome, specify where in Firefox the user came from.

### `entrypoint_experiment` and `entrypoint_variation`

If an experiment is running at the entrypoint, set these properties to the name of the experiment and the variation that the user is part of.

#### When to specify

Universal

### `service`

Specify which non-OAuth service a user is signing in to.

#### Options

- `sync`

#### When to specify

Only available if `context` equals `fx_desktop_v3` or `fx_ios_v1`

### `setting`

Specify a profile field to make editable.

#### Options

- `avatar`

#### When to specify

If Mozilla accounts is opened to `/settings` and a profile field should be made editable.

- /settings

## Generic parameters

### `context`

Specify an alternate context in which Mozilla accounts is being run, if not as a standard web page.

#### Options

- `fx_desktop_v3` - Mozilla accounts is being used to sign in to Sync on
  Firefox Desktop using WebChannels. Used to add the `syncPreferencesNotification`
  capability
- `fx_ios_v1` - Mozilla accounts is being used to sign in to Sync on Firefox
  for iOS using CustomEvents.

### `email`

When used on `/signin`, `/oauth/signin`, `/signup`, or `/oauth/signup`, suggest a user to sign in. If set to the string `blank`, an empty sign in form will be displayed and no suggested accounts will appear.

When specified at `/force_auth`, the user will be forced to sign in as the specified email. If an account does not exist for the specified email, the user will be unable to sign in.

#### When to specify

If the user's email address is already known.

**MUST** be specified when using force_auth, either via `?action=force_auth` in the OAuth flow, or browsing directly to `/force_auth` for Sync.

### `utm_campaign`

The Google Analytics `utm_campaign` field. Will be passed back to the relier
when authentication completes.

#### When to specify

Universal

### `utm_content`

The Google Analytics `utm_content` field. Will be passed back to the relier
when authentication completes.

#### When to specify

Universal

### `utm_medium`

The Google Analytics `utm_medium` field. Will be passed back to the relier
when authentication completes.

#### When to specify

Universal

### `utm_source`

The Google Analytics `utm_source` field. Will be passed back to the relier
when authentication completes.

#### When to specify

Universal

### `utm_term`

The Google Analytics `utm_term` field. Will be passed back to the relier
when authentication completes.

#### When to specify

Universal

## Email verification parameters

### `code`

Used in the verification flows to specify the verification code.

#### When to use

Should not be used by relying parties.

### `uid`

Used in two cases:

1. By the verification flows to specify the user id of the user being verified.
1. By relying parties when loading a settings page to specify which account should be used.

#### When to use

Relying parties who send users to a settings page to e.g., set an avatar, can pass a uid to
ensure users with multiple accounts update the avatar for the correct account.

:::warning
Options below are experimental and have no guarantees.
:::


## Experimental/development parameters

### `automatedBrowser`

Used by functional tests to indicate the browser is being automated.

#### Options

- `true`
- `false` (default)

### `disable_local_storage`

Used by functional tests to synthesize localStorage being disabled.

#### Options

- `0`
- `1`

#### When to use

Should not be used by relying parties. Should only be used by functional tests.

### `forceExperiment`

Force a particular AB test.

#### Options

- `emailFirst` - Should the user go through the email-first flow?

### `forceExperimentGroup`

Force the user into a particular AB test experiment group.

#### Options

- `control` - default behavior.
- `treatment` - new behavior.

## Reset Password parameters

### `reset_password_confirm`

Used to skip the confirmation form to reset a password

#### Options

- `true` (default)
- `false`

#### When to use

Should not be used by relying parties.
Should only be used for accounts that must be reset.

### `emailToHashWith`

Allows you to override the default email that a reset password is hashed with.

#### Options

- user's current primary email (default)

#### When to use

After a user has changed their primary email you need to hash with the original account email
if they perform a reset password.

## Secondary email parameters

#### Options

- `true`
- `false` (default)

#### When to specify

- /settings/emails

[acr]: https://openid.net/specs/openid-connect-core-1_0.html#acrSemantics
