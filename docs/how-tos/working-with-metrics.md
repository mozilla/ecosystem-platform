---
title: Working with Metrics
---

Last updated: `July 16th, 2025`

Other relevant documents include our [metrics reference](../reference/metrics) and [metrics explanation](../explanation/metrics).

In Spring 2023, FxA began its migration to use Mozilla's [Glean](https://mozilla.github.io/glean/book/) for metrics.  At the time of writing, it is still ongoing.  Here you'll find the Glean related content at the top; information on older metric event types can be found at the bottom.

# How do I...

## ...find documentation on Glean?

[The Glean book](https://mozilla.github.io/glean/book/) is very good.  We use [Glean.js](https://github.com/mozilla/glean.js) in FxA.

## ...enable Glean in my local development environment?

### Auth server

Set the env var `AUTH_GLEAN_ENABLED` to true.

### Content server / Settings

0. Set the env var `GLEAN_ENABLED` to true.
0. Use `GLEAN_UPLOAD_ENABLED`, with a value of true or false, to toggle the [upload status](https://mozilla.github.io/glean/book/reference/general/toggling-upload-status.html).

## ...add more Glean events?

Initially FxA used a string metric for the event name, so adding an "event" merely involved a new string.  At the time of writing, we are migrating to Glean's event metric type.  To add a new event now, we need to declare it in the appropriate YAML.

For event specific properties, we have a `event.reason` string metric to capture some additional, `event.name`-specific information.  Moving forward, we should use the [`extra_keys`](https://mozilla.github.io/glean/book/reference/metrics/event.html#extra-metric-parameters) in the event for these event properties.

### Auth server

0. Update the YAML in `packages/fxa-shared/metrics/glean/fxa-backend-metrics.yaml`.
0. Run `yarn glean-generate` from `packages/fxa-auth-server`.
0. Update `gleanMetrics` in `packages/fxa-auth-server/lib/metrics/glean/index.ts` to add the event.  Ensure that you call the `record*` method on the new event by adding another case in the big switch statement in `createEventFn`.

### Content server

0. Update the YAML in `packages/fxa-shared/metrics/glean/fxa-ui-metrics.yaml`.
0. Run `yarn glean-generate` from `packages/fxa-content-server`.
0. Update `GleanMetrics` in `packages/fxa-content-server/app/scripts/lib/glean/index.ts` so its API exposes a function for the event.  Also ensure that you add the new event to the switch statement in `recordEventMetric`.

### Settings

0. Update the YAML in `packages/fxa-shared/metrics/glean/fxa-ui-metrics.yaml`.
0. Run `yarn glean-generate && yarn build` from `packages/fxa-shared`.
0. Add the event to `eventsMap` in `packages/fxa-shared/metrics/glean/web/index.ts`.
0. Update `recordEventMetric` in `packages/fxa-settings/src/lib/glean/index.ts` to include the new event in the switch statement.

## ...view the Glean pings while debugging?

### Auth server

Grep for `glean-server-event` in `auth-out.log`.

### Content server / Settings

0. Set `GLEAN_LOG_PINGS` to true to see the pings in the page's JS console.
1. Set `GLEAN_DEBUG_VIEW_TAG` to some string to see the pings in the [Debug Ping Viewer](https://debug-ping-preview.firebaseapp.com/).  For example, if you set a value of 'bchen-local-dev', then you can view the pings at https://debug-ping-preview.firebaseapp.com/pings/bchen-local-dev.

## ...create a new activity event?

0. Add the event name to `ACTIVITY_EVENTS` in `lib/metrics/events.js`. Unless it’s also a flow event (most new events will be one or the other), you should also add it to `NOT_FLOW_EVENTS` in the same module.
0. Emit the new event in code like `request.emitMetricsEvent('foo.bar', { uid })`.
0. Wherever you emit it, add test cases to cover that the event is correctly logged.

## ...create a new flow event?

### Auth server
0. Emit the new event in code like `request.emitMetricsEvent('foo.bar')`.
0. Wherever you emit it, add test cases to cover that the event is correctly logged.
0. Be aware that flow events are only emitted if you have a `metricsContext`. If there’s one in the payload for the current route, you’re all good. If not, the code will try to read one from Redis for you. But a previous call to `request.stashMetricsContext` or `request.propagateMetricsContext` will need to have been made with the token that your request is authenticated by. Maybe that’s done already, maybe it isn’t, you’ll need to trace the request flow and grep the code.

### Content server
0. On the front-end, make sure your view has mixed in `FlowEventsMixin`.
0. view and engage events will be emitted automatically when you add the mixin, for other events you need to call `this.logFlowEvent` from your view.
0. Add test coverage for the new event to your view unit tests.

## ...create a new email event?
You don’t need to do this, it’s all set up to work automatically.

## ...create a new Amplitude event?

### Auth server
0. Amplitude events are all triggered by activity or flow events, so the first step is to ensure there’s one of those (see above if you need to create a new one).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `lib/metrics/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `test/local/metrics/amplitude.js`. Every event should have its own test case in that module.

### Content server
0. Amplitude events are all triggered by flow or screen events, so the first step is to ensure there’s one of those (see above if you need to create a new flow event).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `server/lib/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `tests/server/amplitude.js`. Every event should have its own test case in that module.
