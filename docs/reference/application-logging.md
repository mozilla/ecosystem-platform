---
title: Application Logging
---

## Application Logging

In FxA Javascript/Typescript server-side applications, logging is emitted via [mozlog] which adheres to the [mozlog schema] format. The log messages are captured from `stdout` and aggregated into Google [BigQuery] via Stackdriver. Application exceptions are captured via [Sentry] and sent to our Sentry instance.

Stage and development logging is grouped under the `fxa-nonprod` project, while accessing the `fxa-prod` logs requires additional special access privileges.

### Capturing Event Details

Once a `mozlog` instance is created, log events are captured with a dot concatenated string indicating an (ideally) unique location of the logging statement that is clear where in the code-base it was made, along with any additional fields to include.

Creating a `mozlog` instance can be done by instantiating the log object with a configuration object:

```javascript
const logConfig = {
    app: 'fxa-content-server',
    fmt: 'heka',
    level: 'info'
};
const log = require('mozlog')(logConfig);
```

It can then be used to log with:

```javascript
log.error('push.sendPush', {uid, deviceId, err });
```

The above log event will have a `jsonPayload.type` set to `push.sendPush`, while the additional object properties will be attached as the `jsonPayload.fields` object.

### Viewing Event Logs

Using [bigquery], the logs can be retrieved from the application service that generated them by narrowing down the `stdout` table used and the originating service by its container name *or* querying the service table directly.

Container names for currently deployed services that output to `stdout` tables:

* `payments` - FxA Payment Server
* `amplitude` - FxA Amplitude Send
* `eventbroker` - FxA Event Broker

As these change over time, a quick way to determine available container names can be done using a `DISTINCT` query (using the desired date):

```sql
SELECT DISTINCT(resource.labels.container_name)
FROM `moz-fx-fxa-nonprod-375e.fxa_stage_logs.stdout_20191204`
```

The [bigquery] console has tab-complete for table-names and SQL statements to make query generation easy.

Accessing logs from the FxA Auth Server, FxA Auth Db MySQL Service, etc. requires querying the appropriate table. Some table prefix examples from `stage`:

* fxa-auth-server - `moz-fx-fxa-nonprod-375e.fxa_stage_logs.docker_fxa_auth_20191205`
* fxa-auth-db-server - `moz-fx-fxa-nonprod-375e.fxa_stage_logs.docker_fxa_auth_db_20191204`

A full list of these tabale prefixes can be found in the [bigquery] console by clicking on the left side drop-down and expanding it under `fxa_stage_logs` (or prod). FxA services all start with `docker_fxa_`.

[sentry]: https://sentry.io/
[bigquery]: https://console.cloud.google.com/bigquery
[mozlog]: https://github.com/mozilla/mozlog/
[mozlog schema]: https://wiki.mozilla.org/Firefox/Services/Logging#MozLog_JSON_schema
