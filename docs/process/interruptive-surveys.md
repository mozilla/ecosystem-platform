---
id: interruptive-surveys
title: Interruptive Surveys
sidebar_label: Running Interruptive Surveys
---

## Overview

Interruptive surveys can be run on the fxa-content-server. Surveys are created in [survey gizmo](https://www.surveygizmo.com/) and configured in a file which lives at `fxa-content-server/server/config/surveys.json`. You can provide the server with various options to pinpoint a subset of users with the survey. Additionally,
you will need to ensure that the survey feature is turned
on view the environment variable, `SURVEYS_ENABLED`. If you would like to update the `doNotBotherSpan` (length of time between each survey shown), you can do so by setting `SURVEY_DONT_BOTHER_MS`.

## Survey Gizmo
Blah blah blah

## Configuration Options
* `id` - string - description of the survey, using dashes instead of spaces, to make the survey easier to grok for other teammates.
* `view` - string - view name, where the survey should show up to user
* `rate` - integer - NOT IMPLEMENTED rate at which the survey should be shown to qualifying users
* `url` - URL string - survey gizmo url
* `conditions` - object - conditions which must be met for the user to see the survey. Additional information below.⇩

### Conditions
* `platform` - string
* `browser` - string
* `relier` - string - The relier for which the user is authenticating
* `reliersList` - array - We wouldn't want to filter down to an exact matched list here, but would want to be able to survey people signing into service X who have already signed into service Y.
* `hasNonDefaultAvatar` - bool - (hypothesis, people that set an avatar are power users)
* `subscriptionsList` - array - we would want to be able to target users who have subscribed to anything and also a specific thing

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

After you have gotten your configuration object together and updated in `fxa-content-server/server/config/surveys.json`, You will need to ensure the survey feature is turned on(`SURVEYS_ENABLED`), by updating to the [deploy doc](https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit) for the upcoming release.
