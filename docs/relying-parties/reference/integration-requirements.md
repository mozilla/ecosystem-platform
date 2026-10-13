---
title: Requirements for Integration
sidebar_label: Integration Requirements
---

Last updated: `October 13th, 2026`


## Maintain a point of contact 
We communicate with our relying parties via the [mozilla-accounts-notices group](https://groups.google.com/a/mozilla.com/g/mozilla-accounts-notices).  You must subscribe to this list.

## Subscribe to and process events
Mozilla accounts maintains an [event broker which is a webhook delivery system to communicate with relying parties](/relying-parties/tutorials/integration-with-fxa#webhook-events).  You must [register an endpoint to receive events](/relying-parties/tutorials/integration-with-fxa#register-for-webhooks).  See [Account Events](/reference/account-events) for the full list of events and their payloads.  You will receive events you may or may not care about but some events require you to perform actions:

- **A user opts out of metrics** (the `metricsEnabled` boolean in the profile):  When this is `false` you must not collect any metrics tied to the user.  Any existing metrics should be deleted.  This boolean should be checked each time a profile is requested.
- **A user deletes their account** (event `https://schemas.accounts.firefox.com/event/delete-user`):  The relying party must delete all user records for the deleted user.

## Respect API backoff headers
Please see [this section on rate limits](/relying-parties/reference/using-apis).

## Practice Good User Data Hygiene
0. Accounts should use uid rather than email address as the primary key. An account’s primary email address can change.
0. [Primary email changed notifications](https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#profile-change) should update the contact email stored with the account.
0. Profile information should not be shared with 3rd parties without explicit consent.
0. [Destroy any outstanding access tokens and refresh tokens](/api#tag/Oauth/operation/postOauthDestroy) whenever a user signals their session or account should be terminated, e.g., the user signs out of your site, closes their account on your site, or unsubscribes from all functionality.

## Maintain Active Account Tables
FxA deletes accounts that have been inactive for two years or longer.  To avoid deleting accounts that RPs consider active but FxA does not, FxA needs RPs to maintain active account tables in a BigQuery dataset within FxA's GCP project.

An active accounts table is a single-column table with a list of account UIDs.  The table must be updated regularly.  (Daily is preferred.)  RPs have complete control over their tables; FxA will not edit these tables.

See [Create Active Accounts BigQuery Table](/relying-parties/tutorials/integration-with-fxa#step-5-create-active-accounts-bigquery-table) on how to create a table for an OAuth client.

FxA's inactive-accounts batch job will stop with an error if any RP tables are empty or stale to prevent false negatives.

RPs can update their table however they wish.  Current approaches include:

- [BigQuery Scheduled Queries](https://docs.cloud.google.com/bigquery/docs/scheduling-queries)
- [load_table_from_json](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-json) from a Django management command cronjob

## Self Hosted Login Flow
If you're hosting your own login page you need to send top-of-funnel metrics to FxA:

0. Initialize top of funnel metrics by calling [/metrics-flow request][metrics-flow-request] with the required query parameters:
   1. `entrypoint` This is a string identifying the source of the request and should be agreed upon by the Mozilla accounts team.
   1. `form_type` This is either `email` (you have an input on your form for an email address) or `button` (you just have a 'sign in' button)
   1. `utm_source`
   1. `utm_campaign`
0. Propagate the `email`, `flow_id` and `flow_begin_time` query parameters, which are returned from the [/metrics-flow request][metrics-flow-request], in the request to `/authentication`.

To test without CORS errors your test application must have one of the following URLs:

- http://127.0.0.1:8001
- http://localhost:8000
- http://127.0.0.1:8000
- Or be in the `ALLOWED_METRICS_FLOW_ORIGINS` list (used for production entities)
