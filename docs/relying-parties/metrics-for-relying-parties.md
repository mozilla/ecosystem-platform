---
id: metrics-for-relying-parties
title: Metrics for Relying Parties
sidebar_label: Metrics
---

Last updated: `October 10th, 2019`

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

## Metrics-Related Query Parameters

The values that are passed in the parameters below are subject to validation via regular expressions. **If the parameter values do not conform to their associated regexes in [this file][flow-events] then all metrics events associated with the non-conforming parameters will not be logged!**

|Name|Description|Example Values|Validation regex|Amplitude Chart Example|
|----|-----------|--------------|----------------|-----------------------|
|`entrypoint`|The specific page or browser UI element containing the first step of the FxA sign-in/sign-up process (e.g., enter email form)|`firstrun`|<!--begin-validation-entrypoint-->^[\w.:-]+$<!--end-validation-entrypoint-->|[Firstrun form views][amplitude-firstrun]|
|`entrypoint_experiment`|Identifier for the experiment the user is part of (if any)||<!--begin-validation-entrypoint_experiment-->^[\w.:-]+$<!--end-validation-entrypoint_experiment-->||
|`entrypoint_variation`|Identifier for the experiment variation the user is part of (if any)||<!--begin-validation-entrypoint_variation-->^[\w.:-]+$<!--end-validation-entrypoint_variation-->||
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
[flow-events]: https://github.com/mozilla/fxa/blob/master/packages/fxa-content-server/server/lib/flow-event.js
[query-params]: https://github.com/mozilla/fxa/blob/master/packages/fxa-content-server/docs/query-params.md