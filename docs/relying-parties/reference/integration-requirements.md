---
title: Requirements for Integration
sidebar_label: Integration Requirements
---

Last updated: `June 8th, 2023`


## Maintain a point of contact 
We communicate with our relying parties via the [firefox-accounts-notices group](https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices).  You must subscribe to this list.

## Subscribe to and process events
Firefox accounts maintains an [event broker which is a webhook delivery system to communicate with relying parties](/relying-parties/tutorials/integration-with-fxa#webhook-events).  You must [register an endpoint to receive events](/relying-parties/tutorials/integration-with-fxa#register-for-webhooks).  You will receive events you may or may not care about but some events require you to perform actions:

- **A user opts out of metrics** (the `metricsEnabled` boolean in the profile):  When this is `false` you must not collect any metrics tied to the user.  Any existing metrics should be deleted.  This boolean should be checked each time a profile is requested.
- **A user deletes their account** (event `https://schemas.accounts.firefox.com/event/delete-user`):  The relying party must delete all user records for the deleted user.

## Respect API backoff headers
Please see [this section on rate limits](/relying-parties/reference/using-apis).

## Practice Good User Data Hygiene
0. Accounts should use uid rather than email address as the primary key. An account’s primary email address can change.
0. [Primary email changed notifications](https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#profile-change) should update the contact email stored with the account.
0. Profile information should not be shared with 3rd parties without explicit consent.
0. [Destroy any outstanding access tokens and refresh tokens](/api#tag/Oauth/operation/postOauthDestroy) whenever a user signals their session or account should be terminated, e.g., the user signs out of your site, closes their account on your site, or unsubscribes from all functionality.

## Self Hosted Login Flow
If you're hosting your own login page you need to send top-of-funnel metrics to FxA:

0. Initialize top of funnel metrics by calling [/metrics-flow request][metrics-flow-request] with the required query parameters:
   1. `entrypoint` This is a string identifying the source of the request and should be agreed upon by the Firefox Accounts team.
   1. `form_type` This is either `email` (you have an input on your form for an email address) or `button` (you just have a 'sign in' button)
   1. `utm_source`
   1. `utm_campaign`
0. Propagate the `email`, `flow_id` and `flow_begin_time` query parameters, which are returned from the [/metrics-flow request][metrics-flow-request], in the request to `/authentication`.

To test without CORS errors your test application must have one of the following URLs:

- http://127.0.0.1:8001
- http://localhost:8000
- http://127.0.0.1:8000
- Or be in the `ALLOWED_METRICS_FLOW_ORIGINS` list (used for production entities)
