---
title: Metrics
---

Last updated: `March 21st, 2022`

Please read our [metrics reference](../reference/metrics) before this document as it has the context of our current system in it.  The document below is about *application metrics*.


# A brief history
The FxA metrics ecosystem is arcane and esoteric, so a brief history of how we got to where we are may be helpful to understand the landscape.

In the beginning there were simple *activity events*. These were basic events emitted from the auth and oauth servers, visualised via now defunct dashboards.

They provided useful insights from a high level about things like how many sign-ins and sign-ups there were. But they didn’t allow us to follow a user’s journey through a sign-in or sign-up flow, which include email verification steps that may take place across multiple devices.

So the *flow events* were created, stored in Redshift and visualised in Redash (and the existing activity metrics were moved to Redshift/Redash at the same time).

Flow events include two extra pieces of metadata, a flow id and a flow begin-time, which gave us more detailed insight into user behaviour. And, unlike the activity events, these were also emitted by client-side code in the content server.

The flow events proved handy for some use-cases that they weren’t meant for, so we started piggy-backing other things like performance metrics, post-sign-in activity and email events on them too. That stressed the infrastructure somewhat, but also gave us the ability to e.g. directly link perf metrics to user behaviour, which was an unexpected new superpower.

The stressed infrastructure meant queries ran pretty slowly though and they required SQL knowledge. And the organic growth of the event schema meant there were issues around inconsistent nomenclature confusing people. And they were ingested via Heka, which meant working with an unfamiliar language (Lua) in an environment that was hard to meaningfully test without just pushing your changes and seeing whether they worked. And we never got round to ingesting the events more frequently than daily, so people were frustrated about having to wait a day to see stuff show up in charts.

For all of those reasons, at the end of 2017 Amplitude was chosen as a paid-for replacement for the more producty metrics we were sending to Redshift.  We called these *Amplitude Events*.

These had some really good properties:
* The event schema was designed in advance, so it would be less confusing
* We sent these events in real time.  This was a huge improvement over the 24hr+ lag we were used to
* Nobody had to wrestle with SQL any more

They also had some really bad properties:
* The Amplitude service is expensive and we send a lot of events
* Due to #1, we decided to only send a subset of events.  This means there were now two places you have to look if you don't know exactly what you need.

In June 2020 we stopped using Amplitude due to cost.  That leaves us with a lot of things referring to *amplitude events* still.  That's fine for identifying that subset of events, but understand we don't actually use Amplitude anymore.

## So, where does that leave us?

Well, it's a bit complicated and you should make sure you've read our [metrics reference](../reference/metrics) first.

In the `firefox_accounts` dataset in the `mozdata` project:

* `fxa_[server]_*` tables will be most of the amplitude events
* `fxa_log_[server]_*` tables will be most of the flow events

However, there are a bunch of other tables in there as well.  In short, only experience can really help you find the data you are looking for if there isn't already a dashboard for it.  Ask the FxA team or #data-help in slack.

# How are metrics emitted?

## Auth server

Activity events, flow events, and amplitude events are all just mozlog-format log lines. There are functions for each of them in the module `lib/log.js`, respectively called `activityEvent`, `flowEvent` and `amplitudeEvent`. However, to reduce boilerplate in the codebase they’re actually invoked via calls to `request.emitMetricsEvent`. That function is defined in `lib/metrics/events.js` and is decorated onto the request object by code in `lib/server.js`.

Activity events must have a `uid` property. Some call sites also set `device_id`. Properties containing user agent information and the OAuth client id are set automatically based on the request object.

Flow events have their properties set automatically as well, either from the request object or, if there is an authentication token of some kind, from data stored against the uid and token id in memcached. This data is widely referred to as `metricsContext` throughout the codebase and has a lifetime of 2 hours, which is an arbitrary limit that allows us to fetch data for most flows while ignoring dubious data from stale or non-authentic sources. The `metricsContext` is written to memcached via calls to `request.stashMetricsContext` (where it’s copied from the request data) and `request.propagateMetricsContext` (where it’s copied from some other stashed data). Those functions are both defined in `lib/metrics/context.js` and decorated onto the request object in `lib/server.js`.

Amplitude events are not explicitly emitted (note the exception in [fxa-payments-server](#payments-server)), because they can all be mapped to from previously-existing activity or flow events. Those mappings are defined by structures called `EVENTS` and `FUZZY_EVENTS` in `lib/metrics/amplitude.js`. Any event matching a string key from `EVENTS` or a regex key from `FUZZY_EVENTS` gets transformed into the corresponding event by common code in the `fxa-shared` package (it’s also used by the content server). Most of the properties on those events are set automatically, although there are still some cases where data must be set explicitly at the call site.

All events are validated against a shared schema, then logged accordingly to `docker-fxa-auth` or `stdout`. These logs are loaded into BigQuery into partitioned tables. As BigQuery uses schema auto-detection, if the BigQuery data type changes, the log line won't go to the partitioned table, but instead to an error table.

StatsD is used to capture latency performance metrics on SQS calls, SNS calls, Stripe calls, and any HTTP API requests handled by `lib/backendService.js` (e.g. requests to our customs server).  It is also used to time the server's request handling on all routes.

## Content server

Again, flow events and amplitude events in the content server are just mozlog-format log lines. But before they can be logged on the back-end, the front-end has to submit them to the endpoint POST `/metrics` first. This is handled by the module `app/scripts/lib/metrics.js`.

The front-end also needs to make sure it has a `flowId` and `flowBeginTime`, either from `data- attributes` on the body element that were set by the back-end, or from data propagated in the resume token. In both cases, the data is loaded by `app/scripts/models/flow.js`.

After they reach the back-end, events are processed by `server/lib/flow-event.js`. And, just like the auth server, there are `EVENTS` and `FUZZY_EVENTS` mappings to control transformations to amplitude events in `server/lib/amplitude.js`.

## Event Broker

StatsD is used to collect SQS processing latency metrics and message type counts.  Details are on [the package's README][event-broker-readme].

## Payments server

Flow metrics are required, as metrics will not be recorded on the Payments server without them. As the Content server redirects users to the Payments server along with metrics-related query params, users should not directly access the pages on Payments. Those query params are as follows:

- `flow_id`
- `flow_begin_time`
- `device_id`

These query params are converted to `camelCase` once in Payments.

The main module on the front end for emitting events is `src/lib/flow-events.ts`.  Its `init` function is called in `src/App.tsx`, during which the three query params above are passed into the module.

A call to `logAmplitudeEvent` results in a `POST` to `/metrics`, which is handled by `server/lib/routes/post-metrics.js`.  The events are log lines in identitical formats to those emitted by Content server and are sent in batches using `navigator.sendBeacon`. Once validated at the request level and against a shared "amplitude" schema, the event is logged to `stdout`. These logs are loaded into BigQuery into partitioned tables. As BigQuery uses schema auto-detection, if the BigQuery data type changes, the log line won't go to the partitioned `stdout` table, but instead to an error table.

The Payments frontend reports the timing data surfaced by [Navigation Timing Level 2][navigation-timing-2] back to the server side, which then sends the calculated performance metrics to our statsD server.  One major difference between these performance metrics and those in Redshift for Content Server is that these do not have a flow id to connect the timings into a performance overview for a particular request.

## Relying Parties

See [metrics for relying parties][rp-metrics].

# What other docs are there?

:::caution
These are pretty old and may not be accurate
:::

* https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/metrics-events.md
* https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/client-metrics.md

[redux-actions]: https://redux.js.org/basics/actions
[event-broker-readme]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#metrics
[navigation-timing-2]: https://www.w3.org/TR/navigation-timing-2/
[rp-metrics]: ../relying-parties/reference/metrics-for-relying-parties.md
