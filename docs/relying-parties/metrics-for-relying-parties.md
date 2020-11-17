---
id: metrics-for-relying-parties
title: Metrics for Relying Parties
sidebar_label: Metrics
---

Last updated: `December 3rd, 2019`

## Relying-Party Hosted Email Form

Reliers must do either one of the following when integrating with Firefox Accounts:
0. Self-host the first step in the FxA authentication flow themselves (e.g. the form capturing the user's email)
0. Send users to a FxA-hosted form at https://accounts.firefox.com/.

In the first case, when the email entry form is hosted by the relying party, the relying party must:

0. When the page that hosts the FxA form loads, have it make an XHR call to `https://accounts.firefox.com/metrics-flow`. The domain name of the request should match the FxA page that is being redirected to (e.g. https://accounts.firefox.com). You can use `fetch` to get this info.
0. Include the following query parameters in the above request (see chart below for descriptions):
  * `entrypoint`
  * `entrypoint_experiment`
  * `entrypoint_variation`
  * `utm_source`
  * `utm_campaign`
  * `form_type`
  * An example: `https://accounts.firefox.com/metrics-flow?entrypoint=my_page&utm_source=my_referrer&utm_campaign=my_campaign&form_type=email`
0. The response from `metrics-flow` will be a JSON object that contains the fields `flowId` and `flowBeginTime`. These values will need to be propagated to FxA as query parameters, which can be done using hidden form fields with the names `flow_id` and `flow_begin_time`. You can see an example of how the [about:welcome][about:welcome] page does this by looking [here][param-example].

Following these instructions will provide FxA and the relying party with the data needed to ensure a healthy user flow.

## Relying-Party "Engage" Events

_Note: this is a limited, temporary solution for cross-product metrics that is due to be replaced in early 2020. Please contact the FxA team if you think you need access._

The metrics that the Firefox Accounts platform sends to Amplitude reflect mainly direct interactions with FxA. These are mostly authentication events (registering, logging in, etc) or events related to account management (e.g. changes to a user’s account settings). This means that interaction events within “relying” products of FxA (such as Firefox Monitor) that do not involve authentication are not logged to the FxA amplitude metrics system. To address this shortcoming, FxA-relying products can log metrics about product usage directly via the FxA metrics system. FxA has not previously allowed for the direct logging of these types of metrics by relying products, but we feel that this change is necessary to ensure that company-level metrics accurately reflect product usage.

Only one event is allowed per RP, and the required query parameters are different from other requests:

0. When the event of interest occurs, the RP server (not the user's browser) should submit a GET request to `https://accounts.firefox.com/metrics-flow` with the `Origin` header set to the RP's registered FxA OAuth domain.
0. Include the following query parameters in the request:
  * `event_type` - the static string “engage” - this ping tells us that a user engaged with a service in some way that we’ve defined out of band
  * `service` - the oauth client identifier for the RP, this is an opaque 8-byte hex string that isn’t private
  * `uid` - the Firefox Accounts user id - this is an opaque hex string that identifies the user across all FxA relying parties. Here, it’s the user who has engaged with the service in some way. (In the future, we plan to replace this with an anonymous / pseudonymous identifier supplied by ecosystem telemetry)

Note that the RP's domain needs to be manually  added to the FxA `allowed_metrics_flow_origins` list before these events will be accepted. Otherwise, they will be silently dropped.

## Metrics-Related Query Parameters

The values that are passed in the parameters below are subject to validation via regular expressions. **If the parameter values do not conform to their associated regexes in [this file][flow-events] then all metrics events associated with the non-conforming parameters will not be logged!**

|Name|Description|Example Values|Validation regex|Amplitude Chart Example|
|----|-----------|--------------|----------------|-----------------------|
|`entrypoint`|The specific page or browser UI element containing the first step of the FxA sign-in/sign-up process (e.g., enter email form)|`firstrun`|<!--begin-validation-entrypoint-->^[\w.-]+$<!--end-validation-entrypoint-->|[Firstrun form views][amplitude-firstrun]|
|`entrypoint_experiment`|Identifier for the experiment the user is part of (if any)||<!--begin-validation-entrypoint_experiment-->^[\w.-]+$<!--end-validation-entrypoint_experiment-->||
|`entrypoint_variation`|Identifier for the experiment variation the user is part of (if any)||<!--begin-validation-entrypoint_variation-->^[\w.-]+$<!--end-validation-entrypoint_variation-->||
|`form_type`|For self-hosted forms only (see above) the type of form that the user submits to begin the FxA flow|either: `email` if the form captures the user's email, otherwise `other`||NA|
|`utm_source`|Unambiguous identifier of site or browser UI element that linked to the page containing the beginning of the FxA sign-in/sign-up process |`blog.mozilla.org`|<!--begin-validation-utm_source-->^[\w\/.%-]+$<!--end-validation-utm_source-->|[Registration form views segmented by utm_source][amplitude-regform]|
|`utm_campaign`|More general label for the campaign that the site is part of|`firstrun`|<!--begin-validation-utm_campaign-->^[\w\/.%-]+$<!--end-validation-utm_campaign-->|TBD|
|`utm_content`|Used to track the name of an A-B test|`my-experiment`|<!--begin-validation-utm_content-->^[\w\/.%-]+$<!--end-validation-utm_content-->|TBD|
|`utm_term`|Used to track the cohort or variation in an A-B test|`my-experiment-var-a`|<!--begin-validation-utm_term-->^[\w\/.%-]+$<!--end-validation-utm_term-->|TBD|
|`utm_medium`|What type of link was used to direct to the page, if it came through a marketing campaign|`email`, `cpc`|<!--begin-validation-utm_medium-->^[\w\/.%-]+$<!--end-validation-utm_medium-->|TBD|
|`context`|Not relevant to metrics, but this is **required** to be set to one of `fx_desktop_v3`, `fx_fennec_v1` or `fx_ios_v1` if `service=sync`. Please use the value that reflects the most likely operating system of the user.|`fx_desktop_v3`, `fx_fennec_v1`, `fx_ios_v1`|<!--begin-validation-context-->^[0-9a-z_-]+$<!--end-validation-context-->/|NA|

**Note these may not be all the parameters you need to pass for your integration to work!** A more exhaustive but [less detailed list can be found here.][query-params] What is documented above are only the parameters that are relevant for metrics analysis in (e.g.) amplitude.

Other Notes:
* You must have access to the mozilla amplitude account to see the example charts. If you are a Mozilla employee, please contact Leif for information on gaining access to amplitude.

* Regarding `utm_term`: note that the current usage of this parameter is different from what is typical. In most scenarios, it is used to track the search terms that led the users to the page. If you would like to use the parameter in this way, please inform the Firefox Accounts team.


[amplitude-firstrun]: https://analytics.amplitude.com/mozilla-corp/chart/n8cd9no
[amplitude-regform]: https://analytics.amplitude.com/mozilla-corp/chart/f5sz7kt
[about:welcome]: about:welcome
[param-example]: https://github.com/mozilla/activity-stream/blob/06aeeb331e9dd497e4d115d0e6cba51b9b25b36c/content-src/asrouter/templates/StartupOverlay/StartupOverlay.jsx#L30
[flow-events]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/server/lib/flow-event.js
[query-params]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md
