---
id: firefox-browser-services
title: Integrating a Service with Firefox
sidebar_label: Integrating a Service with Firefox
---

# Integrating a service with Firefox

This guide is for teams whose service runs inside Firefox and signs users in with their Mozilla account, such as VPN, Relay, Smart Window, and Monitor. It covers how Firefox signs users in to your service, how a user's authorization carries across your clients, and what to ask the FxA team for.

:::tip Talk to us early
Reach out to the FxA team in [#fxa](https://mozilla.slack.com/archives/C4D36CAJW) before you start. Several steps below need changes on our side, and some flows need a decision from your team first.
:::

## Key terms

- **Service:** a Firefox feature the user signs in to, named by `service=<name>` on the FxA URL, such as `vpn` or `relay`. A service and its other clients, such as its website and apps, make up one **project**, as in Google's [cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity) model.
- **Canonical scope:** your service's own URL scope, such as `https://identity.mozilla.com/apps/vpn`. Your backend checks for it on an FxA access token to know the token was issued for your service.
- **Authorization:** FxA's record, against your canonical scope, that the user authorized your service. It applies on every device and on every client in your project that requests your canonical scope.

## Website sign-in vs. Firefox sign-in

These are two separate sign-ins:

- **Website sign-in**, which your project may or may not have, uses your own client ID and redirects back to your website. It doesn't sign the user in to Firefox, and your website can't tell Firefox it happened.
- **Firefox sign-in** uses the Firefox client ID with `service=<name>`. FxA talks to Firefox directly over web channel messages, and Firefox gets its own refresh token. Signing a user in to the browser, or authorizing your service in it, always goes through this path.

## Do you need an account-creation API?

:::important
If your service has its own account system, you need an API Firefox can call to create a user's account in your service.
:::

A user who starts in Firefox may be signed out of Firefox, or signed in without an account in your service yet. In both cases Firefox signs them in first with the Firefox client ID, then calls your API with a Firefox access token carrying your canonical scope to create their account. Sending the user to your website to create an account instead means several round trips, and your website can't tell Firefox when it's done.

Relay does this today, and Monitor will. Services without their own account system, such as VPN and Smart Window, don't need it.

If you don't have this API yet and your project has its own account system, a good first milestone is users who are already signed in to Firefox and already use your service on another platform, such as your website or desktop app. They already have an account, so Firefox can reach them through the [refresh token exchange](#the-refresh-token-exchange) alone. Later milestones that add signed-out users, or users new to your service, need the API.

## How Firefox signs users in to your service

Firefox sends `service=<name>` on the authorization URL instead of `scope`. Firefox tells FxA which scopes each service needs in the `fxa_status` web channel message, as `capabilities.services[<service>].scope`, and FxA grants them. This supports signing in to several services in one flow, where FxA can offer optional services without the browser knowing about them ahead of time. See [ADR 0049](https://github.com/mozilla/fxa/blob/main/docs/adr/0049-service-driven-scope-resolution.md) and its addendum.

- **Read the granted scopes back.** FxA returns the scopes it granted as `scope` in the `fxaccounts:oauth_login` web channel message. They can differ from what was asked for, so don't assume them from `service`.
- **Re-authentication is the exception.** When Firefox re-authenticates a signed-in user, for example after a password change, it sends `scope` with all the scopes it currently needs instead of `service`.
- **Non-Firefox clients**, such as your website, keep sending `scope` as usual.

Every Firefox flow also requests `profile`, or `profile:uid` where only the user ID is needed. The browser needs the user's display name, avatar, and email to show them as signed in.

## Sharing authorization across your clients

FxA follows Google's [cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity) model. Once a user authorizes your service from any of your clients, on any platform, your other clients don't need to ask again. For example, a user who signed in to the Relay website can use Relay in Firefox without authorizing at FxA again.

For this to work:

- **Request your canonical scope in every client that should share authorization:** your website, any standalone apps, and Firefox. Request it even if that client's own server never checks it. It grants no access beyond what your service already has.
- **Ask FxA to list each of those client IDs** for your service.
- **If a client isn't requesting your canonical scope yet, only new sign-ins count.** Once you add it, sign-ins from then on carry the authorization to your other clients. FxA doesn't backfill earlier sign-ins. Users whose last sign-in predates the change authorize once, through a one-click authorization screen at FxA, the first time Firefox needs your service.

See [ADR 0052](https://github.com/mozilla/fxa/blob/main/docs/adr/0052-token-exchange-requires-canonical-scope.md) for the decision.

A service with no canonical scope, one that only uses scopes like `profile` that a signed-in browser already holds, needs no separate authorization.

## The refresh token exchange

When a user who is already signed in to Firefox needs your service, Firefox asks FxA to add your canonical scope to its existing refresh token. FxA grants it without asking the user if they already authorized your service on any client. Otherwise FxA returns `403`, and Firefox sends the user to FxA to authorize your service. See the [token endpoint](/ecosystem-platform/api#tag/OAuth-Server-API-Overview/operation/postToken) for the request and response, and [ADR 0048](https://github.com/mozilla/fxa/blob/main/docs/adr/0048-refresh-tokens-and-account-level-authorization.md) for the design.

:::note Session tokens
Firefox Desktop currently gets its access tokens from its session token instead of a refresh token. That path is being phased out, so it isn't documented here. Build your integration on the refresh-token flow.
:::

### Flow for a user signed in to Firefox

1. **Wait for a user action that needs your service,** such as clicking your toolbar icon. Don't attempt the exchange just because the user signed in to a different service. FxA doesn't currently have an endpoint to check authorization ahead of the exchange; we can build one if a service needs it.
2. **If Firefox's refresh token already has your canonical scope,** Firefox mints an access token for it directly.
3. **Otherwise, Firefox attempts the token exchange** with your canonical scope.
   - **Success:** Firefox uses the new refresh token to mint access tokens for your service.
   - **`403`:** the user hasn't authorized your service. Show your "Get started" or "Try it" UI. On click, Firefox opens FxA with `service=<name>`. A signed-in user sees a quick, one-click authorization screen with no password.
4. **If your service has its own account system** and the user doesn't have an account yet, Firefox calls your account-creation API.

Don't use the list of attached clients (`fxAccounts.listAttachedOAuthClients()`) to decide whether the user authorized your service. It only shows which refresh tokens exist. The exchange checks the user's authorization, so the exchange is the check.

### Flow for a user signed out of Firefox

1. **Wait for a user action that needs your service.**
2. **Firefox opens FxA with the Firefox client ID and `service=<name>`.** The user signs in or signs up.
3. **FxA grants your service's scopes and records the authorization.**
4. **Firefox reads the result** from the `fxaccounts:oauth_login` web channel message and stores its new refresh token.
5. **If your service has its own account system,** Firefox calls your account-creation API.

## What to ask the FxA team for

Your website or app:

- Request your canonical scope in every client that should share authorization.

FxA changes:

- Support your `service=<name>` value for Firefox sign-in and authorization.
- Add your service and canonical scope to the token exchange configuration, with the client IDs of your website and apps.
- Allow your canonical scope for the Firefox clients you integrate with.
- Optionally, allow passwordless sign-in for your service, where the user gets an email code instead of entering a password.

Also decide:

- The sign-in copy for your service, terms of service, and any entrypoint-specific copy. Firefox sends an `entrypoint` value for telemetry. Work with FxA Product on this, since it's editable in our Strapi CMS.
- The display name in the account's Connected Services list, such as "Firefox's built-in VPN".

## Plan for traffic

Expect more traffic to your API, and to FxA's token and introspection endpoints, once Firefox starts calling your service. Decide how often Firefox calls your API, and cache results where you can, such as introspection results per access token. Follow the caching patterns Firefox already uses for similar calls.

## Related docs

- [Tokens reference](/ecosystem-platform/reference/tokens): session, refresh, and access tokens.
- [OAuth details](/ecosystem-platform/reference/oauth-details): scopes and scope values.
- [ADR 0048](https://github.com/mozilla/fxa/blob/main/docs/adr/0048-refresh-tokens-and-account-level-authorization.md): refresh tokens and account-level authorization.
- [ADR 0049](https://github.com/mozilla/fxa/blob/main/docs/adr/0049-service-driven-scope-resolution.md): `service=` instead of `scope=` for Firefox sign-ins.
- [ADR 0052](https://github.com/mozilla/fxa/blob/main/docs/adr/0052-token-exchange-requires-canonical-scope.md): requesting the canonical scope for the token exchange.
- [Google's cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity): the model FxA follows for sharing authorization across a project's clients.
