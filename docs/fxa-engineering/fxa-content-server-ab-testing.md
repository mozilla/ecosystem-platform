---
id: fxa-content-server-ab-testing
title: "Experiments & A/B Testing in the fxa-content-server"
sidebar_label: "Experiments & A/B testing"
---

Current as of `December 3rd, 2019`

This document outlines how to add an experiment, A/B test, or phased rollout of a feature in the content server.

## Experiment grouping rules

Every new experiment, A/B test, or phased rollout needs an experiment grouping
rule. These rules decide whether a user is part of an experiment, and if so, which group.

An experiment grouping rule needs some metadata about the user, within
the rule the metadata is called `subject`.

### Creating a new rule

1. Copy [TEMPLATE.js](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/TEMPLATE.js) to a new grouping rule file.
2. Change `ChangeMeGroupingRule` class name to another name.
3. Change `this.name` from `CHANGE_ME` in the constructor.
4. Fill in the `choose` function. See [`choose` recipes](#choose-recipes) for guidance on different experiment types.
5. Include the new grouping rule file in [index.js](https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/index.js).
6. Add experiment name to one of [MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS](https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js) to ensure test name/group are reported to Amplitude.
7. Access in views, see [View recipes](#view-recipes).

## Determining choice within a view

Once a grouping rule has been created, a view can make choices depending
on whether the user is in the experiment, and if so which group. [ExperimentMixin](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/views/mixins/experiment-mixin.js) *must* be mixed in to the view for the view to have experiment capabilities.

See also: [View recipes](#view-recipes).

## Functional and manual testing

To avoid random breakage of functional tests due to experiments, by default, *all* experiments are disabled during test runs. It is however possible to force an
experiment using the `forceExperiment` and `forceExperimentGroup` query parameters.

Both of these examples force the user into the `treatment` group of the `my-new-experiment` experiment.

### Manual test

In the URL bar, open:
> https://accounts.firefox.com/settings?forceExperiment=my-new-experiment&forceExperimentGroup=treatment


### Functional test
```js
  ...
  'test new feature here': function () {
    this.remote
      .then(openPage('/settings', {
        query: {
          forceExperiment: 'my-new-experiment',
          forceExperimentGroup: 'treatment'
        }
      }))
      .then(testTreatmentGroupFunctionality());
  },
  ...
```

## Amplitude Metrics

As long as the experiment name is added to one of [MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS](https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js), the experiment name and group are reported to Amplitude and added to the user's `experiments` user property. The Amplitude experiment name is in the form:

```
amplitudeExperimentName = ${snake_case(experimentName)}_${snake_case(groupName)}`
```

## `choose` recipes

The `subject` parameter contains data used to determine the value returned from `choose`.

`subject` automatically [contains the following fields](https://github.com/mozilla/fxa/blob/cc74b2bf5be4184d20c919aaa199677ebfd431d1/packages/fxa-content-server/app/scripts/lib/experiment.js#L216):

| Field | Description |
|-------|---------|
|`account` | [Account model](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/app/scripts/models/account.js#L1) for the user. |
| `experimentGroupingRules` | A reference to *all* grouping rules. Used to recursively choose experiments |
| `forceExperiment` | the value of the `forceExperiment` query parameter. Used in functional/manual tests to force a particular experiment. |
| `forceExperimentGroup` | the value of the `forceExperimentGroup` query parameter. Used in functional/manual tests to force a particular experiment group. |
| `isMetricsEnabledValue` | A legacy of when metrics were sampled at 10%. Does not apply to Amplitude events. |
| `uniqueUserId` | A stable UUID that is distinct from the user's uid. The same `uniqueUserId` is used across multiple users of the same device to ensure multiple users of a single device receive the same experience.|

Additional fields can be passed to `choose` via [`getExperimentGroup`](https://github.com/mozilla/fxa/blob/16e6295edc5d805ea5f7e00217f20d0bdbf4a9c2/packages/fxa-content-server/app/scripts/lib/experiment.js#L208).

`uniqueUserId` is used to ensure multiple users receive the same experience on the same device. Conversely, a single user will have distinct `uniqueUserId`s on multiple devices. If the goal is for a single user to have the same experience across multiple devices, in the examples below replace `subject.uniqueUserId` with `subject.account.get('email')` or `subject.account.get('uid')`.

### feature flag

Return a boolean value.

```js
choose (subject = {}) {
  return subject.firefoxVersion >= MIN_FIREFOX_VERSION;
}
```

### Phased rollout feature flag

Use `bernoulliTrial` to return a Boolean value.

```js
const ROLLOUT_RATE = 0.3;
choose (subject = {}) {
  return this.bernoulliTrial(ROLLOUT_RATE, subject.uniqueUserId);
}
```

### A/B test

Use `uniformChoice` to return the bucket choice.

```js
choose (subject = {}) {
  const GROUPS = ['control', 'treatment'];
  return this.uniformChoice(GROUPS, subject.uniqueUserId);
}
```

### Phased rollout A/B test

Combine `bernoulliTrial` and `uniformChoice`.
First, use `bernoulliTrial` to determine if the user is
part of the experiment. If the user is part of the experiment,
use `uniformChoice` to determine which bucket.

```js
choose (subject = {}) {
  const ROLLOUT_RATE = 0.3;
  // first, determine if the user is part of the experiment.
  if (this.bernoulliTrial(ROLLOUT_RATE, subject.uniqueUserId)) {
    // User is part of the experiment, determine which bucket.
    // 15% of users will be in `control`, 15% in `treatment`
    const GROUPS = ['control', 'treatment'];
    return this.uniformChoice(GROUPS, subject.uniqueUserId);
  }
  return false;
}
```

### Recursive calls to other rules

`subject` will contain a reference to `experimentGroupingRules` which can
be used to recursively call other tests.

```js
choose (subject = {}) {
  const choice = this.uniformChoice(['recursive-rule-1', 'recursive-rule-2'], subject.uniqueUserId);
  return subject.experimentGroupingRules.choose(choice, subject);
}
```

### Mutually exclusive grouping rules

Recursive rules can be used to implement mutual exclusion amongst two or more grouping rules.

#### group_chooser.js

```js
constructor () {
  super();
  this.name = 'experiment-chooser';
}

choose (subject = {}) {
  return this.uniformChoice(['experiment-1', 'experiment-2'], subject.uniqueUserId);
}
```

#### experiment_1.js

```js
constructor () {
  super();
  this.name = 'experiment-1';
}

choose (subject = {}) {
  if (subject.experimentGroupingRules.choose('experiment-chooser') === this.name) {
    // user is part of the experiment-1, determine which bucket.
    const GROUPS = ['control', 'treatment'];
    return this.uniformChoice(GROUPS, subject.uniqueUserId);
  }
}
```

#### experiment_2.js

```js
constructor () {
  super();
  this.name = 'experiment-2';
}

choose (subject = {}) {
  if (subject.experimentGroupingRules.choose('experiment-chooser') === this.name) {
    // user is part of the experiment-2, determine which bucket.
    const GROUPS = ['control', 'treatment'];
    return this.uniformChoice(GROUPS, subject.uniqueUserId);
  }
}
```

## View recipes

### Add the ExperimentMixin
```js
import BaseView from './base';
import Cocktail from '../lib/cocktail';
import ExperimentMixin from './mixins/experiment-mixin'

class MyView extends BaseView {
  ...
}

Cocktail.extend(
  MyView,
  ExperimentMixin
);
```

### Get the experiment group, report the choice to Amplitude

This is the most common form as well as the most flexible because
it does everything necessary to report to Amplitude.

```js
const experimentGroup = this.getAndReportExperimentGroup('experiment-2');
if (experimentGroup === 'treatment') {
    // do something awesome here.
}
```

### Get the experiment group without reporting choice to Amplitude
```js
const experimentGroup = this.getExperimentGroup('experiment-2');
if (experimentGroup === 'treatment') {
    // do something awesome here.
}
```


### Is user in an experiment?
```js
if (this.isInExperiment('experiment-2')) {
    // do something awesome here.
}
```

### Is user in a group?
```js
if (this.isInExperimentGroup('experiment-2', 'treatment')) {
    // do something awesome here.
}
```


### Pass additional data to `choose`
```js
const country = getCountrySomehow();
const experimentGroup = this.getExperimentGroup('experiment-2', {
  // can be used by `choose` to gate a feature on the user's country
  country
});
if (experimentGroup === 'treatment') {
    // do something awesome here.
}
```

## Ensuring experiment metrics are reported to Amplitude

As noted in [Creating a new rule](#creating-a-new-rule), the experiment name
*must* be added to one of [MANUAL_EXPERIMENTS or STARTUP_EXPERIMENTS](https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/app/scripts/lib/experiment.js) to ensure experiment metrics are reported to Amplitude.

Within a view, if the user is part of an experiment, `this.createExperiment(experimentName, groupName)` must be called.