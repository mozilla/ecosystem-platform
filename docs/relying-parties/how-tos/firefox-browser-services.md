---
id: firefox-browser-services
title: Integrating a Service with Firefox
sidebar_label: Integrating a Service with Firefox
---

# Integrating a service with Firefox

This guide is for teams whose service runs inside Firefox and signs users in with their Mozilla account, such as VPN, Relay, Smart Window, and Monitor. It covers what you build in Firefox, how a user's authorization carries across your clients, and what to ask the FxA team for.

:::tip Talk to us early
Reach out to the FxA team in [#fxa](https://mozilla.slack.com/archives/C4D36CAJW) before you start. Several steps below need changes on our side, and some flows need a decision from your team first.
:::

## What Firefox provides and what you build

Firefox already knows how to sign a user in to their Mozilla account, store the resulting refresh token, and mint access tokens from it. It exposes this through its accounts module (`fxAccounts` on Desktop, the application-services account manager on mobile). None of this knows about your service.

**You write the integration code in Firefox** that calls those APIs with your service name, decides when to call them, and handles the results. Everything below that says "your integration" means this code, which your team adds to Firefox.

## Key terms

- **Service:** a Firefox feature the user signs in to, named by `service=<name>` on the FxA URL, such as `vpn` or `relay`. A service and its other clients, such as its website and apps, make up one **project**, as in Google's [cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity) model.
- **Canonical scope:** your service's own URL scope, such as `https://identity.mozilla.com/apps/vpn`. Your backend checks for it on an FxA access token to know the token was issued for your service.
- **Authorization:** FxA's record, against your canonical scope, that the user authorized your service. It applies on every device and on every client in your project that requests your canonical scope.

## Website sign-in vs. Firefox sign-in

These are two separate sign-ins:

- **Website sign-in**, which your project may or may not have, uses your own client ID and redirects back to your website. It doesn't sign the user in to Firefox, and your website can't tell Firefox it happened.
- **Firefox sign-in** uses the Firefox client ID with `service=<name>`. FxA talks to Firefox directly, and Firefox gets its own refresh token carrying every scope your service needs, including its canonical scope. Signing a user in to the browser, or authorizing your service in it, always goes through this path.

## Do you need an account-creation API?

:::important
If your service has its own account system, you need an API your integration can call to create a user's account in your service.
:::

A user who starts in Firefox may be signed out of Firefox entirely, or signed in to Firefox but for services other than yours. In both cases your integration first has Firefox sign them in or authorize your service, then calls your API with a Firefox access token carrying your canonical scope to create their account. Sending the user to your website to create an account instead means several round trips, and your website can't tell Firefox when it's done.

Relay does this today, and Monitor will. Services without their own account system, such as VPN and Smart Window, don't need it.

If you don't have this API yet and your project has its own account system, a good first milestone is users who are already signed in to Firefox and already use your service on another platform, such as your website or desktop app. They already have an account, so your integration can reach them through the [refresh token exchange](#the-refresh-token-exchange) alone. Later milestones that add signed-out users, or users new to your service, need the API.

## How to integrate your service with Firefox

At a high level:

1. **Register your service with FxA.** FxA needs your `service=<name>` value, your canonical scope, and the other scopes your service uses. See [What to ask the FxA team for](#what-to-ask-the-fxa-team-for).
2. **Have Firefox sign in or authorize with your service name.** Your integration opens the FxA sign-in flow through Firefox's accounts APIs, passing `service=<name>` rather than a list of scopes. FxA resolves the service to its scopes and grants them, which lets FxA offer optional services in one flow without the browser knowing about them ahead of time ([ADR 0049](https://github.com/mozilla/fxa/blob/main/docs/adr/0049-service-driven-scope-resolution.md)). Your website and other non-Firefox clients keep sending `scope` as usual.
3. **Request access tokens for your scopes.** Once Firefox holds a refresh token with your scopes, your integration asks the accounts API for an access token for your canonical scope and uses it with your backend.
4. **Call your account-creation API** if your service has its own account system and the user doesn't have an account yet.

Every Firefox sign-in also requests `profile`, or `profile:uid` where only the user ID is needed, because the browser shows the user's display name, avatar, and email as signed in. Your integration doesn't need to request it.

The two flows below cover the details for a user who is already signed in to Firefox and one who isn't.

## Sharing authorization across your clients

FxA follows Google's [cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity) model. Once a user authorizes your service from any of your clients, on any platform, your other clients don't need to ask again. For example, a user who signed in to the Relay website can use Relay in Firefox without authorizing at FxA again.

For this to work:

- **Request your canonical scope in every client that should share authorization:** your website, any standalone apps, and Firefox. Request it even if that client's own server never checks it. It grants no access beyond what your service already has.
- **Ask FxA to list each of those client IDs** for your service.
- **If a client isn't requesting your canonical scope yet, only new sign-ins count.** Once you add it, sign-ins from then on carry the authorization to your other clients. FxA doesn't backfill earlier sign-ins. Users whose last sign-in predates the change authorize once, through a one-click authorization screen at FxA, the first time Firefox needs your service.

See [ADR 0052](https://github.com/mozilla/fxa/blob/main/docs/adr/0052-token-exchange-requires-canonical-scope.md) for the decision.

A service with no canonical scope, one that only uses scopes like `profile` that a signed-in browser already holds, needs no separate authorization.

## The refresh token exchange

When a user who is already signed in to Firefox needs your service, your integration asks Firefox's accounts API for an access token with your scopes. If the refresh token Firefox holds doesn't have them yet, Firefox asks FxA to add them to that refresh token through a token exchange. FxA grants it without asking the user if they already authorized your service on any client. Otherwise FxA returns `403`, and your integration sends the user to FxA to authorize your service.

The exchange works the same way for any scope your service needs. The authorization check is keyed on your canonical scope, which is why every client in your project must request it. See the [token endpoint](/ecosystem-platform/api#tag/OAuth-Server-API-Overview/operation/postToken) for the request and response, and [ADR 0048](https://github.com/mozilla/fxa/blob/main/docs/adr/0048-refresh-tokens-and-account-level-authorization.md) for the design.

:::note Session tokens
Firefox Desktop currently gets its access tokens from its session token instead of a refresh token. That path is being phased out, so it isn't documented here. Build your integration on the refresh-token flow.
:::

### Flow for a user signed in to Firefox

1. **Wait for a user action that needs your service,** such as clicking your toolbar icon. Don't attempt the exchange just because the user signed in to a different service.

   FxA doesn't currently have an endpoint that tells Firefox whether the user has authorized your service without attempting the exchange. The list of attached clients (`fxAccounts.listAttachedOAuthClients()`) is not a substitute: it only shows which refresh tokens exist, not what the user authorized, so it misses users who authorized your service on your website and lists clients the user never consciously chose. If you need to know ahead of a user action, it's the only option today; use it knowing those limits, and tell us, since we can build a proper endpoint if a service needs one.

2. **Request an access token for your scopes** from Firefox's accounts API. If the refresh token already has them, Firefox mints the access token directly. Otherwise Firefox attempts the token exchange.
   - **Success:** Firefox stores the new refresh token and returns an access token for your service.
   - **`403`:** the user hasn't authorized your service. Show your "Get started" or "Try it" UI. On click, your integration opens FxA with `service=<name>`. A signed-in user sees a quick, one-click authorization screen with no password.
3. **If your service has its own account system** and the user doesn't have an account yet, call your account-creation API with the access token.

### Flow for a user signed out of Firefox

1. **Wait for a user action that needs your service.**
2. **Open the FxA sign-in flow with `service=<name>`** through Firefox's accounts API. The user signs in or signs up, and Firefox stores a refresh token with your service's scopes. FxA records the authorization.
3. **Request an access token for your canonical scope** from Firefox's accounts API.
4. **If your service has its own account system,** call your account-creation API with that token.

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

Expect more traffic to your API, and to FxA's token and introspection endpoints, once Firefox starts calling your service. Decide how often your integration calls your API, and cache results where you can, such as introspection results per access token. Follow the caching patterns Firefox already uses for similar calls.

## Related docs

- [Tokens reference](/ecosystem-platform/reference/tokens): session, refresh, and access tokens.
- [OAuth details](/ecosystem-platform/reference/oauth-details): scopes and scope values.
- [ADR 0048](https://github.com/mozilla/fxa/blob/main/docs/adr/0048-refresh-tokens-and-account-level-authorization.md): refresh tokens and account-level authorization.
- [ADR 0049](https://github.com/mozilla/fxa/blob/main/docs/adr/0049-service-driven-scope-resolution.md): `service=` instead of `scope=` for Firefox sign-ins.
- [ADR 0052](https://github.com/mozilla/fxa/blob/main/docs/adr/0052-token-exchange-requires-canonical-scope.md): requesting the canonical scope for the token exchange.
- [Google's cross-client identity](https://developers.google.com/identity/protocols/oauth2/cross-client-identity): the model FxA follows for sharing authorization across a project's clients.
