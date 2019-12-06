---
id: fxa-metrics
title: Metrics
sidebar_label: Metrics
---

Last updated: `November 26th, 2019`

# What types of metrics are there?
The FxA metrics ecosystem is somewhat arcane and esoteric, so a brief history of how we got to where we are may be helpful to understand the landscape.

In the beginning there were activity events. These were basic events emitted from the auth and oauth (and profile?) servers, visualised via the now-defunct accounts dashboard:

* https://metrics.services.mozilla.com/accounts-dashboard/
* https://github.com/mozilla/accounts-dashboard

They provided useful insights from a high level about things like how many sign-ins and sign-ups there were. But they didn’t allow us to follow a user’s journey through a sign-in or sign-up flow, which include email verification steps that may take place across multiple devices.

So the flow events were created, stored in Redshift and visualised in Redash (and the existing activity metrics were moved to Redshift/Redash at the same time):

* https://sql.telemetry.mozilla.org/
* https://github.com/mozilla/fxa-activity-metrics/

Flow events include two extra pieces of metadata, a flow id and a flow begin-time, which gave us more detailed insight into user behaviour. And, unlike the activity events, these were also emitted by client-side code in the content server.

The flow events proved handy for some use-cases that they weren’t meant for, so we started piggy-backing other things like performance metrics, post-sign-in activity and email events on them too. That stressed the infrastructure somewhat, but also gave us the ability to e.g. directly link perf metrics to user behaviour, which was an unexpected new superpower.

The stressed infrastructure meant queries ran pretty slowly though and they required SQL knowledge. And the organic growth of the event schema meant there were issues around inconsistent nomenclature confusing people. And they were ingested via Heka, which meant working with an unfamiliar language (Lua) in an environment that was hard to meaningfully test without just pushing your changes and seeing whether they worked. And we never got round to ingesting the events more frequently than daily, so people were frustrated about having to wait a day to see stuff show up in charts.

For all of those reasons, Amplitude was chosen as a paid-for replacement for the more producty metrics we were sending to Redshift:

* https://analytics.amplitude.com/org/31251
* https://github.com/mozilla/fxa-amplitude-send

The event schema was designed in advance, so it would be less confusing to understand and we sent them to Amplitude in real time from the very beginning, so there was no inertia around making them show up instantly in the UI. And nobody needed to wrestle with SQL any more.

But the limited event schema we have in Amplitude means there are some things we can’t see there, so the stuff in Redshift+Redash remains a useful resource, especially for devs.

# How are metrics emitted?

## Auth server

Activity events, flow events and amplitude events are all just mozlog-format log lines. There are functions for each of them in the module `lib/log.js`, respectively called `activityEvent`, `flowEvent` and `amplitudeEvent`. However, to reduce boilerplate in the codebase they’re actually invoked via calls to `request.emitMetricsEvent`. That function is defined in `lib/metrics/events.js` and is decorated onto the request object by some code in `lib/server.js`.

Activity events must have a `uid` property. Some call sites also set `device_id`. Properties containing user agent information and the OAuth client id are set automatically based on the request object.

Flow events have their properties set automatically too, either from the request object or, if there is an authentication token of some kind, from data stored against the uid and token id in memcached. This data is widely referred to as `metricsContext` throughout the codebase and has a lifetime of 2 hours, which is kind of an arbitrary limit that allows us to fetch data for most flows while ignoring dubious data from stale or non-authentic sources. The `metricsContext` is written to memcached via calls to `request.stashMetricsContext` (where it’s copied from the request data) and `request.propagateMetricsContext` (where it’s copied from some other stashed data). Those functions are both defined in `lib/metrics/context.js` and decorated onto the request object in `lib/server.js`.

Amplitude events are not explicitly emitted, because they can all be mapped to from previously-existing activity or flow events. Those mappings are defined by structures called `EVENTS` and `FUZZY_EVENTS` in `lib/metrics/amplitude.js`. Any event matching a string key from `EVENTS` or a regex key from `FUZZY_EVENTS` gets transformed into the corresponding event by common code in the `fxa-shared` package (it’s also used by the content server). Most of the properties on those events are set automatically, although there are still some cases where data must be set explicitly at the call site.

## Content server

Again, flow events and amplitude events in the content server are just mozlog-format log lines. But before they can be logged on the back-end, the front-end has to submit them to the endpoint POST `/metrics` first. This is handled by the module `app/scripts/lib/metrics.js`.

The front-end also needs to make sure it has a `flowId` and `flowBeginTime`, either from `data- attributes` on the body element that were set by the back-end, or from data propagated in the resume token. In both cases, the data is loaded by `app/scripts/models/flow.js`.

After they reach the back-end, events are processed by `server/lib/flow-event.js`. And, just like the auth server, there are `EVENTS` and `FUZZY_EVENTS` mappings to control transformations to amplitude events in `server/lib/amplitude.js`.

## Payments server

One thing to keep in mind is that users should not access the pages on Payments directly.  The Content server will redirect them to the Payments server, along with metrics related query params.  Those query params are:

- `flow_id`
- `flow_begin_time`
- `device_id`

They are converted to `camelCase` once in Payments.

The main module on the front end for emitting events is `src/lib/flow-events.ts`.  Its `init` function is called in `src/App.tsx`, during which the three query params above are passed into the module.

_All_ Amplitude events are emitted from `src/store/amplitude-middleware.ts`.  They are triggered by [Redux actions][redux-actions].

A call to `logAmplitudeEvent` results in a `POST` to `/metrics`, which is handled by `server/lib/routes/post-metrics.js`.  The events are log lines in identitical formats to those emitted by Content server.

# How are metrics ingested?

## Redshift

Activity and flow events are one of the last remaining datasets that is still being processed by our old Heka-based data pipeline. The data pipeline team are keen to migrate us away from there asap, but so far it didn’t happen yet. It would also benefit us to migrate away, since fear of breaking the Heka filter has discouraged us from making changes to the flow event schema in the past.

The Heka filter does some processing on the events and then writes them once-per-day to CSV files stored in S3 buckets:

* s3://net-mozaws-prod-us-west-2-pipeline-analysis/fxa-retention/data/events/* (activity events)
* s3://net-mozaws-prod-us-west-2-pipeline-analysis/fxa-flow/data/* (flow events)
* s3://net-mozaws-prod-us-west-2-pipeline-analysis/fxa-email/data/email-events/* (email events, which can be thought of as a variation of the flow events emitted by email-handling code in the auth server)

The CSV files are then processed by python scripts in the `mozilla/fxa-activity-metrics` repo, running on the fxa-admin EC2 instance (managed by jrgm and jbuck):

* https://github.com/mozilla/fxa-activity-metrics/
* https://github.com/mozilla-services/cloudops-deployment/blob/master/projects/fxa/puppet/modules/fxa_admin/manifests/init.pp

The scripts import the data to a Redshift cluster managed by Ops, then expire old data.

For activity events, the table names are:

* activity_events
* daily_activity_per_device
* daily_multi_device_users

For flow events, the table names are:

* flow_events
* flow_metadata

For email events, the table names are:

* email_events

All of the tables named above contain a rolling 3-month window of data, to keep query times reasonable. We also maintain sampled datasets that have longer windows. Those are suffixed with `*_sampled_50` for the 50%-sampled dataset, which has a 6-month rolling window, and `*_sampled_10` for the 10%-dataset, which has a 2-year rolling window.

The tables are visible in Redash, under the “FxA Activity Metrics” data source.

## Amplitude

Our Amplitude events are sent to a GCP pubsub queue from stackdriver, this stuff is managed by jbuck. We have a node script that listens to the queue and then sends the events to Amplitude:

* https://github.com/mozilla/fxa-amplitude-send/blob/master/pubsub/index.js

We manage to avoid any of the complicated batching logic recommended by some of the Amplitude documentation because our device ids for Amplitude are not persistent, they’re randomly-generated on every page load. So we don’t fall foul of the rate limits, except occasionally if there is some automated testing that thrashes a load of events in quick succession. There are issues open in the fxa repo about the device id thing, it was supposed to be a temporary measure but it’s been like that for years now so…

We do split some of the Amplitude metrics out to the [Identify API][amplitude-identify-api] so we can use its $append syntax. But most stuff just goes in to the plain [HTTP API][amplitude-http-api].

# How do I...

## ...create a new activity event?

0. Add the event name to `ACTIVITY_EVENTS` in `lib/metrics/events.js`. Unless it’s also a flow event (most new events will be one or the other), you should also add it to `NOT_FLOW_EVENTS` in the same module.
0. Emit the new event in code like `request.emitMetricsEvent('foo.bar', { uid })`.
0. Wherever you emit it, add test cases to cover that the event is correctly logged.

## ...create a new flow event?

### Auth server
0. Emit the new event in code like `request.emitMetricsEvent('foo.bar')`.
0. Wherever you emit it, add test cases to cover that the event is correctly logged.
0. Be aware that flow events are only emitted if you have a `metricsContext`. If there’s one in the payload for the current route, you’re all good. If not, the code will try to read one from memcached for you. But a previous call to `request.stashMetricsContext` or `request.propagateMetricsContext` will need to have been made with the token that your request is authenticated by. Maybe that’s done already, maybe it isn’t, you’ll need to trace the request flow and grep the code.

### Content server
0. On the front-end, make sure your view has mixed in `FlowEventsMixin`.
0. view and engage events will be emitted automatically when you add the mixin, for other events you need to call `this.logFlowEvent` from your view.
0. Add test coverage for the new event to your view unit tests.

## ...create a new email event?
You don’t need to do this, it’s all set up to work automatically.

## ...create a new Amplitude event?
0. The first step is to make sure it’s been approved by Alex or Leif, because the Amplitude schema is tightly controlled and we pay per event.

### Auth server
0. Amplitude events are all triggered by activity or flow events, so the first step is to ensure there’s one of those (see above if you need to create a new one).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `lib/metrics/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `test/local/metrics/amplitude.js`. Every event should have its own test case in that module.

### Content server
0. Amplitude events are all triggered by flow or screen events, so the first step is to ensure there’s one of those (see above if you need to create a new flow event).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `server/lib/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `tests/server/amplitude.js`. Every event should have its own test case in that module.

# What other docs are there?
* https://github.com/mozilla/fxa/blob/master/packages/fxa-auth-server/docs/metrics-events.md
* https://github.com/mozilla/fxa/blob/master/packages/fxa-content-server/docs/client-metrics.md
* https://github.com/mozilla/application-services/blob/master/docs/product-portal/accounts/metrics.md



[amplitude-http-api]: https://help.amplitude.com/hc/en-us/articles/204771828-HTTP-API
[amplitude-identify-api]: https://help.amplitude.com/hc/en-us/articles/205406617-Identify-API-Modify-User-Properties
[redux-actions]: https://redux.js.org/basics/actions
