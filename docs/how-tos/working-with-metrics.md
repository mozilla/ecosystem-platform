---
title: Working with Metrics
---

Last updated: `March 21st, 2022`

Other relevant documents include our [metrics reference](../reference/metrics) and [metrics explanation](../explanation/metrics).

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

### Auth server
0. Amplitude events are all triggered by activity or flow events, so the first step is to ensure there’s one of those (see above if you need to create a new one).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `lib/metrics/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `test/local/metrics/amplitude.js`. Every event should have its own test case in that module.

### Content server
0. Amplitude events are all triggered by flow or screen events, so the first step is to ensure there’s one of those (see above if you need to create a new flow event).
0. If you’re triggering from a specific event, add a new mapping to the `EVENTS` object in `server/lib/amplitude.js`. If you’re triggering from a set of events, add a mapping to `FUZZY_EVENTS` instead.
0. Add a new test case for the new event to `tests/server/amplitude.js`. Every event should have its own test case in that module.