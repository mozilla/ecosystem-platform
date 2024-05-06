---
id: integration-with-fxa
title: Integration with FxA
sidebar_label: Integration with FxA
---

Last updated: `September 7th, 2023`

## Overview

Mozilla accounts integration is available for Mozilla groups on request. This integration is handled using [OpenID Connect (OIDC)][openidconnect], [OAuth 2.0][oauth], and [webhooks][webhook] for authentication, authorization, and receiving events regarding FxA users. Integrations with FxA assume the role of a [Relying Party (RP)][relying-party] and/or a [Resource Server (RS)][resource server] depending on the type of integration, with FxA assuming the role of an OpenID Provider.

:::note
This tutorial will help you integrate with Mozilla accounts but there are [additional requirements a relying party is expected to fulfill and maintain](/relying-parties/reference/integration-requirements).  Please ensure you're in compliance with expectations to continue uninterrupted service.
:::

## Pre-Development

Before starting integration, please send a request to fxa-staff[at]mozilla.com to request a short meeting so we can all document our expectations and timelines.  Please include answers to the following questions in the email:

0. **What type of Relying Party / Resource Server are you integrating?**
    Examples would be, a web site, a native app, a browser, an API, or an extension in the browser.

    Most integrations will be a Relying Party, not a Resource Server. [See below for clarification](#relying-party-vs-resource-server) on the differences.

0. **Do you know how to implement OIDC/OAuth?**

0. **Will you need read access to a user’s profile data?**
    See [available profile data](#profile-data).

0. **Will you need *ongoing* read access to a user’s profile data even if the user isn't actively logging in?**
    If necessary, a relying party can use a _refresh token_ to query
    for a user's profile data, whether or not that user is logged in to the
    relying party.  For example, if a user changes their email address and
    the relying party wants to update their local database with the changes.

    A refresh token is given out if `access_type=offline` when making the
    authorization request.

0. **Will you need *write* access to a user’s profile data?**
    Only the `avatar` and `displayname` can be changed remotely.  See the [API
    documentation][api-docs].

0. **Will you need to access Sync data?**
    This is likely only needed for browser integrations.  Most relying parties
    will not need this.

0. **Will you need encryption keys to encrypt user data?**
    Optionally, when a relying party gets their access token they can also get
    a stable encryption key back (this is a _scoped key_).  This key is derived
    from the user's password and **if the user changes or forgets their
    password this key will change**.

0. **Will your application display its own “enter your email” form?**
    Providing your own form can give users a tight knit experience, but you'll
    need to send your own [top of funnel
    metrics](#self-hosted-email-first-flow) if you do.

0. **Who are the stakeholders?**

0. **Who can be contacted for important updates, e.g., API changes?**

0. **What is the schedule and key dates?**
    At a minimum, when will QA start, when do you want to be live?

0. **Roughly, what amount of traffic do you expect?**

0. **Will your integration provide a subscription service?**
    If it will, please describe the products your integration will provide
    service for.

0. **Will your integration include subscription lead pages?**
    These are generally marketing pages that include a link to start the
    subscription flow.

0. **Will you utilize JWT tokens?**
    This is rare.  [Learn more](../../reference/tokens#jwt-access-tokens).

We communicate with our relying parties via the [firefox-accounts-notices group][firefox-accounts-notices].  Please join this list to avoid any surprises.

## OpenID Connect Integration

### Relying Party vs. Resource Server

A Relying Party (RP) is an application or website that outsources its user authentication functionality to an OpenID Provider, defined as part of the OpenID specifications. The user will be prompted to login to the Relying Party with their Firefox Account, and is able to see the login as a distinct [Connected Service][connected-services] in FxA Settings. OpenID Connect contains many specifications for a variety of identity exchange and authorization, based on the OAuth 2.0 framework of specifications.

A Relying Party may also act as a Resource Server, an OAuth 2.0 term for an API server. In that case a user will never see a direct Relying Party login and will not see a distinct row in their Connected Devices list on the FxA Settings page. Services that are accessed via Firefox (Sync, Relay, etc.) using its OAuth token are all examples of Resource Servers. Their access shows up in FxA Settings as the browser session the user is logged into.

### Development

:::note
You are encouraged to use [our staging servers](https://accounts.stage.mozaws.net/) to develop against.  Our staging server has a persistent database and changes made there are saved.  Spot testing and some new accounts are fine but you are expected to clean up any significant amount of data (eg. accounts made from automated testing).  If you're using PyFxA [here is an example](https://pypi.org/project/PyFxA/#testing-email-addresses) using `destroy_account()`.
:::

0. Review the [OpenID Connect][how connect works] and [OAuth 2.0][oauth] documentation.
0. Register for staging OAuth credentials by filing an issue in the SVCSE project in [Mozilla's Jira](https://mozilla-hub.atlassian.net). See [OAuth credentials](#oauth-credentials).
0. Your development servers should point to: `https://oauth.stage.mozaws.net`.
0. User authentication follows the [OpenID Connect][openidconnect] protocol.
0. [Query parameters](#authorization-query-parameters) are set and validate when redirecting to Mozilla accounts.
0. If you are [hosting your own login form](#self-hosted-email-first-flow) initialize and propagate the top of funnel metrics.
0. [User data and account notifications are properly](#user-data-hygiene) handled and compliant with Firefox Account requirements.
0. An icon suitable to display in Firefox Account’s [Connected Services][connected-services] list has been sent to Firefox Account developers.  Please confirm with Mozilla accounts what the current requirements are.
0. If multiple [Resource Servers][resource server] are accessed, create a distinct token for communicating with each server, limited to only the scopes required by that server.  This may mean dropping your initial access token and using a refresh token to get additional, less privileged access tokens.

### Preparing for Production

0. Update your deployment bug asking for production OAuth credentials and setup of your production [webhook endpoint](#register-for-webhooks).
0. Production servers point to `https://oauth.accounts.firefox.com/`.  Additional endpoints can be discovered dynamically at `https://accounts.firefox.com/.well-known/openid-configuration`.
0. Someone from the FxA team has reviewed the integration code and tested the flow.

### User Authentication with OpenID Connect in a nutshell

0. Create a state token (randomly generated and unguessable) and associate it with a local session.
0. Send [/authentication request](#authorization-query-parameters) to Mozilla accounts. Upon completion, Mozilla accounts redirects back to your app with state and code.
0. Confirm the returned state token by comparing it with the state token associated with the local session.
0. Exchange the code for an access token and possibly a refresh token.
0. If you asked for `scope=profile` you can fetch user profile information, using the access token, from the FxA Profile Server.
0. Associate the profile information with the local session and create an account in the local application database as needed.

### OAuth Credentials

OAuth Client Credentials are needed for each application accessing FxA. For example, a website that users can login to with mobile applications for iOS and Android should request 3 sets of OAuth credentials, one for each mobile app/platform, and one for the web service.

0. client_id - a public identifier that is used to identify your service. Can be public.
0. client_secret - a private secret that is sent from the backend when interacting with the OAuth server. Must not be shared publicly, checked into a public repository, or bundled with compiled code.

### Profile Data
Mozilla accounts only stores core identity data and associated profile information about users. Mozilla accounts does not store user data specific to relying services. Core identity data stored in Mozilla accounts includes:

* a stable user identifier (uid)
* the user provided email address
* the user's locale provided by the browser during account creation
* an optional display name
* an optional profile image


### /authorization query parameters

0. `client_id` (required)
0. `scope` (required). This is a space separated string. Review the list of [scopes](#scopes).
0. `state` (required).  This must be a randomly generated unguessable string.
0. `entrypoint` (required).  This is for metrics purposes and should represent the service making the request.  This should be agreed upon by the Mozilla accounts team.
0. `email` (required for [self hosted email-first flow](#self-hosted-email-first-flow))
0. `flow_begin_time` (required for [self hosted email-first flow](#self-hosted-email-first-flow))
0. `flow_id` (required for [self hosted email-first flow](#self-hosted-email-first-flow))
0. `code_challenge` (required for PKCE) This is a hash of a randomly generated string.
0. `code_challenge_method` (required for PKCE) As of this writing only `s256` is supported.
0. `action` (suggested).  This should be either `email` or `force_auth`.
0. `access_type` (suggested).  This should be either `online` or `offline`.
0. `utm_campaign` (suggested)
0. `utm_source` (suggested)
0. `utm_medium` (optional)
0. `utm_term` (optional)

### Scopes

This will be `scope=profile` for most Relying Parties, but there is [further documentation](/reference/oauth-details#oauth-scopes) which integrations acting as a [Resource Server][resource server] should be aware of.

### Webhook Events

If your integration includes an application service that stores profile information, you should create a [webhook] URL handler to handle [Security Event Tokens (SET)][set] for [Relying Party events][rp events]. These events will need to be verified using the FxA JWT keys that can be found from following the `jwks_uri` in the FxA well-known open-id configuration. For production, this URL is `https://accounts.firefox.com/.well-known/openid-configuration`.

The FxA JWT public keys should be retrieved from this URL at start-up, and used to verify the webhook JWT. The [documentation on verifying a JWT](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html) for Step 1/2 are applicable to FxA JWT events.

Integrations that are acting as a [Resource Server][resource server] will need to respond successfully with a 200 status code even if the user referenced has not used the integration.

If you're using TypeScript, an example of verifying a JWT is shown here:

```typescript
import http from 'http';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';


function authenticate(request: http.IncomingMessage): object {
    // Assuming this is how you retrieve your auth header.
    const authHeader = request.headers.authorization;

    // Require an auth header
    if (!authHeader) {
        throw Error('No auth header found');
    }

    // Extract the first portion which should be 'Bearer'
    const headerType = authHeader.substr(0, authHeader.indexOf(' '));
    if (headerType !== 'Bearer') {
        throw Error('Invalid auth type');
    }

    // The remaining portion, which should be the token
    const headerToken = authHeader.substr(authHeader.indexOf(' ') + 1);

    // Decode the token, require it to come out ok as an object
    const token = jwt.decode(headerToken, { complete: true });
    if (!token || typeof token === 'string') {
        throw Error('Invalid token type');
    }

    // Verify we have a key for this kid, this assumes that you have fetched
    // the publicJwks from FxA and put both them in an Array.
    const jwk = publicJwks.find(j => j.kid === token.header.kid);
    if (!jwk) {
        throw Error('No jwk found for this kid: ' + token.header.kid);
    }
    const jwkPem = jwkToPem(jwk);

    // Verify the token is valid
    const decoded: string | object = jwt.verify(headerToken, jwkPem, {
        algorithms: ['RS256'],
    });
    if (!isIdToken(decoded)) {
        throw Error('Invalid token format: ' + decoded);
    }
    // This is the JWT data itself.
    return decoded;
}
```

Webhooks are processed from our event broker service. Currently, we emit events for password change, profile change, subscription change and delete account.

For additional documentation please reference the [readme](https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md).

### Register for webhooks

Once you have setup a service to receive webhook events, you can then register the webhook url by creating a pull request in [cloudops-infra](https://github.com/mozilla-services/cloudops-infra). To edit webhooks coming from FxA stage, you'll need to edit [projects/fxa/tf/nonprod/envs/stage/resources/eventbroker.tf](https://github.com/mozilla-services/cloudops-infra/blob/master/projects/fxa/tf/nonprod/envs/stage/resources/eventbroker.tf#L16-L77). To edit webhooks coming from FxA prod you'll need to edit [projects/fxa/tf/prod/envs/prod/resources/eventbroker.tf](https://github.com/mozilla-services/cloudops-infra/blob/master/projects/fxa/tf/prod/envs/prod/resources/eventbroker.tf#L16-L82). You'll need to add your client id to `endpoint_topic_config`, and your webhook url to `endpoint_subscription_config`. See an [example PR](https://github.com/mozilla-services/cloudops-infra/pull/3727).

Integrations that are acting as a [Resource Server][resource server] should indicate their role when having their webhook URL endpoint configured by the FxA team, this is a separate option in the webhook configuration.

## Some flow diagrams

### A full oauth flow
```mermaid
sequenceDiagram
participant UA as User-Agent<br>(Browser)
participant FxA as Mozilla accounts
participant RP as Relying Party

UA->>RP: User visits site
RP->>UA: Display UI
UA->>RP: User clicks login
RP-->>RP: Generate state token
RP->>UA: Set cookie with state token, initiate redirect to FxA
UA->>FxA: Redirect to FxA w/ state token
FxA->>UA: Display UI
UA->>UA: Authenticate, authorize
UA->>FxA: Send authorization
FxA-->>FxA: Generate OAuth credentials
FxA->>UA: Initiate redirect to RP w/ OAuth credentials, state token
UA->>RP: Redirect to RP w/ OAuth credentials, state token, cookie
RP-->>RP: Compare state token in URL w/ state token in cookie
alt state token match
  RP->>FxA: Use OAuth credentials
else state token mismatch
  RP->>UA: Inform user an error occurred
end
```



[allowed-metrics-flow-origins]: https://github.com/mozilla/fxa-dev/blob/docker/roles/content/tasks/main.yml#L56
[api-docs]: https://github.com/mozilla/fxa/blob/main/packages/fxa-profile-server/docs/API.md#api-endpoints
[connected-services]: https://accounts.firefox.com/settings#connected-services
[fxa-scope-documentation]: https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/oauth/scopes.md
[firefox-accounts-notices]: https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices
[metrics-flow-request]: https://mozilla.github.io/application-services/docs/accounts/metrics.html#self-hosted-email-forms-and-metrics-tracking-aka-the-fxa-email-first-flow
[oauth]: https://auth0.com/docs/protocols/oauth2
[openidconnect]: https://openid.net/connect/
[how connect works]: https://openid.net/developers/how-connect-works/
[profile-data]: https://mozilla.github.io/application-services/docs/accounts/faq.html#what-information-does-firefox-accounts-store-about-the-user
[resource server]: https://www.oauth.com/oauth2-servers/the-resource-server/
[relying-party]: https://en.wikipedia.org/wiki/Relying_party
[rp events]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#relying-party-event-format
[set]: https://tools.ietf.org/html/rfc8417
[webhook]: https://en.wikipedia.org/wiki/Webhook
