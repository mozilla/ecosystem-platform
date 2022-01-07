---
title: Interruptive Surveys
---

:::caution
This feature is being removed in [FXA-3880](https://mozilla-hub.atlassian.net/browse/FXA-3880)
:::

## Overview

FxA surveys are meant to be short (1-3 questions) and probe for general
qualitative information about FxA users (eg. why are you changing your password
today?)

Interruptive surveys can be run on the fxa-content-server. Surveys are created
in [surveyGizmo](https://www.surveygizmo.com/) and configured in a file which
lives at `fxa-content-server/server/config/surveys.json`. You can provide the
server with various options to pinpoint a subset of users with the survey.
Additionally, you will need to ensure that the survey feature is turned on view
the environment variable, `SURVEYS_ENABLED`. If you would like to update the
`doNotBotherSpan` (length of time between each survey shown), you can do so by
setting `SURVEY_DONT_BOTHER_MS`.

## Setting Up Surveys

### General Process

In order to run a survey in FxA, please start by filing a
[user research bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=User%20Research)
in Bugzilla and flag the ticket as a `consultation`. This bug should CC Jennifer
Davis (UR), Chelsea Lewis (EPM) John Gruen (PM) and Alex Davis (PM). Please add
[FxA Interrupt Survey] to the title of your ticket.

In addition to the standard info in the UR bug form, please include the
following.

- Are you targeting a specific RP? If so which one?
- Are you targeting a specific view (settings, forgot password etc)? If so,
  which one?
- Are you targeting paying subscription customers?

If you're not sure about any of these, that's fine. The UR & FxA teams can work
with you to zero in on the correct deployment recipe for your survey.

**Before launching, you will need documented approval for your survey from UR,
Product and Legal.**

Once your survey has been built and reviewed, the FxA team will deploy it as
needed during our standard weekly release.

### SurveyGizmo Access

We have heavily restricted access to creating and editing surveys for FxA. In
order to edit surveys in FxA, you will need to do the following:

1. Sign in to SurveyGizmo using [sso.mozilla.com](https://sso.mozilla.com)
2. Set up 2FA inside SurveyGizmo
3. Be added to the `FxA_Product` group by one of the FxA PMs, or a SurveyGizmo
   admin

In general though, PMs and UR folks can set up surveys and provide appropriate
URLs to launch surveys.

### For survey builders

In order to build appropriately formatted surveys, you will first need access to
the `FxA_Product` group in SurveyGizmo.

#### Creating a new survey

- Look in the SurveyGizmo sidebar for `FxA Interrupt Surveys`
- In this folder, you will see a survey called `FxA Interrupt Template`, by
  clicking on the vertical ellipse at the end of the row, you will be able to
  make a copy of this survey.
- When you create the survey, please make sure you set the team to `FxA_Product`

#### Required Survey Bits

If you're using the standard template, you will see two special "Actions" in the
survey builder.

- **Hidden Value Action** - This is the first field on the survey. Hidden from
  users it is intended to capture query param data appended to each survey by
  FxA. This field is not currently used, but the FxA team will be adding
  parametric data to surveys soon.
- **Javascript Action** - **IMPORTANT: If you delete this action your survey
  will not close correctly.** This is located on the last page of the survey
  after the last question. This field contains a bit of custom JavaScript that
  creates a postMessage event that FxA listens for to handle survey completion
  correctly. If you change or edit your survey to remove pages, please make sure
  this JS Action stays on the last page of your survey with questions present!

#### Formatting & Styling Surveys

As of this writing, FxA interrupt surveys are only formatted to accept radio,
checkbox, and open textarea style questions in SurveyGizmo. Please limit one
question per page.

Other question types may present formatting issues due to the small size of the
survey as presented to users.

If you need to update the CSS of your survey to accommodate a new question type,
please make sure to update the CSS file in both your survey as well as the
original `FxA Interrupt Template` CSS file. In this way, your improvements will
carry forward to future surveys.

You can can edit survey CSS from the editor by going to the `Style` tab. From
here, look for the `HTML/CSS editor` in the lower right. Please do not mess with
the GUI theme editor options on the left side of the screen.

## Configuration Options

- `id` - string - description of the survey, using dashes instead of spaces, to
  make the survey easier to grok for other teammates.
- `view` - string - view name, where the survey should show up to user
- `rate` - integer - rate at which the survey should be shown to qualifying
  users
- `url` - URL string - survey gizmo url
- `conditions` - object - conditions which must be met for the user to see the
  survey. Additional information below.⇩

### Conditions

- `platform` - string
- `browser` - string
- `relier` - string - The relier for which the user is authenticating
- `reliersList` - array - We wouldn't want to filter down to an exact matched
  list here, but would want to be able to survey people signing into service X
  who have already signed into service Y.
- `hasNonDefaultAvatar` - bool - (hypothesis, people that set an avatar are
  power users)
- `subscriptionsList` - array - we would want to be able to target users who
  have subscribed to anything and also a specific thing

Example:

```json
[
  {
    "id": "password-reset",
    "conditions": {
      "browser": "firefox"
    },
    "view": "settings",
    "url": "https://www.surveygizmo.com/s3/5622367/Password-Reset-1"
  }
]
```

After you have gotten your configuration object together and updated in
`fxa-content-server/server/config/surveys.json`, You will need to ensure the
survey feature is turned on(`SURVEYS_ENABLED`), by updating to the
[deploy doc](https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit)
for the upcoming release.
