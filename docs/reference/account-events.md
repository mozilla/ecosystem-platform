---
title: Account Events
---

## Account Events

FxA broadcasts account lifecycle events (sign-ups, sign-ins, profile and subscription changes, deletions, and so on) to other systems. There are **two distinct delivery mechanisms** with different audiences, payloads, and transports.

- **Relying Party webhooks** — for OAuth relying parties. Delivered by `fxa-event-broker` over HTTPS as [Security Event Tokens (SETs)][set]: a curated subset of events with minimal payloads, signed and screened so an RP only hears about its own users.
- **Attached services events** — the full, raw event stream on FxA's privileged internal queue, consumed by trusted backend services (like Basket, `fxa-profile-server`, and `fxa-event-broker` itself) that have direct queue access. Published by `fxa-auth-server` to AWS SNS and consumed off SQS queues; richer payloads than the webhooks. This is an internal contract, **not** a public API.

A given event may flow through both: for example a `delete` is published as a raw SNS/SQS event (consumed internally) and also fanned out to subscribed RPs as a `delete-user` SET.

## Relying Party webhooks (Security Event Tokens)

`fxa-event-broker` consumes the internal event stream and re-delivers a curated subset to relying parties as signed [Security Event Tokens (SETs)][set] via HTTP POST to each RP's registered webhook endpoint. The broker only delivers to RPs the user has logged into, and only the events listed here. Relying parties register an endpoint, verify the JWT signature, and handle these events as described in [Integrating with FxA](../relying-parties/tutorials/integrating-with-fxa.md) — that guide covers registration, signature verification, and example handler code.

Every webhook is a SET: a JWT whose `events` claim maps an event identifier (a URI) to that event's payload. The envelope is identical for all events; only the identifier and payload differ:

```
{
  "iss": "https://accounts.firefox.com/",
  "sub": "FXA_USER_ID",
  "aud": "REMOTE_SYSTEM",
  "iat": 1565720808,
  "jti": "e19ed6c5-4816-4171-aa43-56ffe80dbda1",
  "events": {
    "<event identifier>": { <event payload> }
  }
}
```

### Password change

Identifier: `https://schemas.accounts.firefox.com/event/password-change`. Sent when the user reset or changed their password; the RP should terminate any login sessions established before `changeTime`.

| Payload field | Type   | Description                                                                          |
| ------------- | ------ | ------------------------------------------------------------------------------------ |
| `changeTime`  | number | Time (ms) the password changed. Logins established before this should be terminated. |

Example:

```json
{
  "iss": "https://accounts.firefox.com/",
  "sub": "FXA_USER_ID",
  "aud": "REMOTE_SYSTEM",
  "iat": 1565720808,
  "jti": "e19ed6c5-4816-4171-aa43-56ffe80dbda1",
  "events": {
    "https://schemas.accounts.firefox.com/event/password-change": {
      "changeTime": 1565721242227
    }
  }
}
```

### Profile change

Identifier: `https://schemas.accounts.firefox.com/event/profile-change`. Sent when the user changes their profile data in some manner. Any of the following trigger it:

- **Display name** — changed on the account settings page.
- **Email address** — changed on the settings page by updating the primary email address.
- **Profile image** — changed on the settings page.
- **Metrics collection enabled** — changed on the account settings page via the "Help Improve Mozilla Accounts" option in the `Data Collection and Use` section.
- **Locale** — changed through the admin panel; the user's language preference.
- **TOTP enabled** — changed through the admin panel.
- **Account disabled** — changed through the admin panel.
- **Account locked** — changed through the admin panel; returns to unlocked once the user accepts an account reset.
- **Subscription state** — typically when signing up for or canceling subscriptions.

The event signals only _that_ something changed, not _what_ (and the change may be outside the RP's granted scope), so the RP should drop any cached profile data for the user.

| Payload field | Type   | Description                      |
| ------------- | ------ | -------------------------------- |
| `uid`         | string | The account's unique identifier. |

Example:

```json
{
  "iss": "https://accounts.firefox.com/",
  "sub": "FXA_USER_ID",
  "aud": "REMOTE_SYSTEM",
  "iat": 1565720808,
  "jti": "e19ed6c5-4816-4171-aa43-56ffe80dbda1",
  "events": {
    "https://schemas.accounts.firefox.com/event/profile-change": {
      "uid": "cd1181e0532c45cb989a7c234641468e"
    }
  }
}
```

### Subscription state change

Identifier: `https://schemas.accounts.firefox.com/event/subscription-state-change`. Sent to RPs that provide a subscription capability when that capability becomes active or inactive.

| Payload field  | Type     | Description                                                                                                                                                      |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `capabilities` | string[] | List of affected subscription capabilities.                                                                                                                      |
| `isActive`     | boolean  | Whether the capabilities should be considered active.                                                                                                            |
| `changeTime`   | number   | Time (seconds) the change occurred in the payment system. The receiver MUST track this and discard any event whose `changeTime` is older than the last one seen. |

Example:

```json
{
  "iss": "https://accounts.firefox.com/",
  "sub": "FXA_USER_ID",
  "aud": "REMOTE_SYSTEM",
  "iat": 1565720808,
  "jti": "e19ed6c5-4816-4171-aa43-56ffe80dbda1",
  "events": {
    "https://schemas.accounts.firefox.com/event/subscription-state-change": {
      "capabilities": ["capability_1", "capability_2"],
      "isActive": true,
      "changeTime": 1565721242227
    }
  }
}
```

### Delete user

Identifier: `https://schemas.accounts.firefox.com/event/delete-user`. Sent when the account was deleted; the RP MUST delete all records for the user. The payload is an empty object (`{}`).

Example:

```json
{
  "iss": "https://accounts.firefox.com/",
  "sub": "FXA_USER_ID",
  "aud": "REMOTE_SYSTEM",
  "iat": 1565720810,
  "jti": "1b3d623a-300a-4ab8-9241-855c35586809",
  "events": {
    "https://schemas.accounts.firefox.com/event/delete-user": {}
  }
}
```

### Metrics opt-out / opt-in

Identifiers: `https://schemas.accounts.firefox.com/event/metrics-opt-out` and `https://schemas.accounts.firefox.com/event/metrics-opt-in`. Sent when the user opts out of (or back into) data collection from their account settings; the RP should stop (or resume) reporting metrics for the user. Metrics collection is enabled by default on account creation. The payload is an empty object (`{}`).

## Attached services events (raw SNS/SQS)

These are the raw notifications published by `fxa-auth-server` via `log.notifyAttachedServices(event, request, data)` (`packages/fxa-auth-server/lib/log.js`). Trusted backend services subscribe to receive them directly off SQS; they are not SET-encoded and are not delivered to relying-party webhooks. For example, `fxa-profile-server` consumes them to invalidate cached profile data, and `fxa-event-broker` fans a subset out to relying parties as the webhooks described above.

### Delivery and filtering

All events are published to a single SNS topic (`SNS_TOPIC_ARN` in the auth-server config). FxA publishes the full stream and does not decide who receives what — each consumer subscribes its own SQS queue to the topic and filters down to the events it cares about. To support that, every message carries two SNS message attributes: `event_type` (the event name, e.g. `login`) and `email_domain` (the domain portion of the user's email, when present).

How a consumer filters on those — via an SNS subscription filter policy, in its own consumer code, or both — is owned by that consumer and configured outside this codebase. A new internal consumer subscribes its own queue to the topic and filters on these attributes as needed.

### Event reference

Every message has the shape `{ "event": "<name>", "data": { … } }`, where `event` is the event name (also published as the `event_type` SNS attribute) and `data` holds the fields below. Field sets come from the `notifyAttachedServices` call sites in `fxa-auth-server` (the source of truth). `timestamp`, `ts`, `iss`, and `metricsContext` appear on every event.

#### `verified`

A new account sign-up — sent when a newly created account confirms its email.

| Field                    | Type     | Description                                                                                                                                                                                                          |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uid`                    | string   | Account id.                                                                                                                                                                                                          |
| `email`                  | string   | Primary email.                                                                                                                                                                                                       |
| `locale`                 | string   | Account locale.                                                                                                                                                                                                      |
| `service`                | string   | The service the account signed up through (e.g. `sync`, etc.), taken from the sign-up request's `service` parameter — a service name we receive in Firefox browser flows. Omitted when the sign-up didn't carry one. |
| `client_id`              | string   | The OAuth client id of the sign-up flow, when the sign-up came through an OAuth client.                                                                                                                              |
| `newsletters`            | string[] | Newsletter slugs the user opted into during sign-up, if any.                                                                                                                                                         |
| `country`, `countryCode` | string   | Geo-resolved from the request IP.                                                                                                                                                                                    |
| `userAgent`              | string   | Request user agent.                                                                                                                                                                                                  |
| `timestamp`              | number   | Event time in milliseconds.                                                                                                                                                                                          |
| `ts`                     | number   | Event time in float seconds.                                                                                                                                                                                         |
| `iss`                    | string   | Issuing FxA domain.                                                                                                                                                                                                  |
| `metricsContext`         | object   | Flow / metrics metadata from the request.                                                                                                                                                                            |

#### `login`

Sent when a user completes a sign-in.

:::info
`firstAuthorization` in `login` is not currently reliable for `sync` due to a bug in Firefox Desktop. New account sign-ups through Sync are accurate through the `verified` event.
:::

| Field                    | Type    | Description                                                                                                                                                                                                                                                             |
| ------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uid`                    | string  | Account id.                                                                                                                                                                                                                                                             |
| `email`                  | string  | Primary email.                                                                                                                                                                                                                                                          |
| `service`                | string  | The service the user signed into (e.g. `sync`, `relay`, `vpn` etc.) when the sign-in carries one in a query parameter — Firefox browser flows include them. An OAuth sign-in without a browser service sends the OAuth `client_id` instead for backwards compatibility. |
| `clientId`               | string  | The OAuth client id. Present only when the sign-in completes an OAuth authorization (signing into a relying party / service).                                                                                                                                           |
| `firstAuthorization`     | boolean | Present on OAuth sign-ins. `true` the first time the user authorizes this service (browser services, keyed on `service`) or relying party (web RPs, keyed on `clientId`); `false` otherwise. Derived from the `accountAuthorizations` ledger.                           |
| `deviceCount`            | number  | Number of registered devices.                                                                                                                                                                                                                                           |
| `country`, `countryCode` | string  | Geo-resolved from the request IP.                                                                                                                                                                                                                                       |
| `userAgent`              | string  | Request user agent.                                                                                                                                                                                                                                                     |
| `timestamp`              | number  | Event time in milliseconds.                                                                                                                                                                                                                                             |
| `ts`                     | number  | Event time in float seconds.                                                                                                                                                                                                                                            |
| `iss`                    | string  | Issuing FxA domain.                                                                                                                                                                                                                                                     |
| `metricsContext`         | object  | Flow / metrics metadata from the request.                                                                                                                                                                                                                               |

#### `profileDataChange`

Profile, primary email, 2FA, password, or subscription state changed; consumers should drop cached profile data.

| Field            | Type   | Description                               |
| ---------------- | ------ | ----------------------------------------- |
| `uid`            | string | Account id.                               |
| `timestamp`      | number | Event time in milliseconds.               |
| `ts`             | number | Event time in float seconds.              |
| `iss`            | string | Issuing FxA domain.                       |
| `metricsContext` | object | Flow / metrics metadata from the request. |

#### `primaryEmailChanged`

The account's primary email changed.

| Field            | Type   | Description                               |
| ---------------- | ------ | ----------------------------------------- |
| `uid`            | string | Account id.                               |
| `email`          | string | The new primary email.                    |
| `timestamp`      | number | Event time in milliseconds.               |
| `ts`             | number | Event time in float seconds.              |
| `iss`            | string | Issuing FxA domain.                       |
| `metricsContext` | object | Flow / metrics metadata from the request. |

#### `newsletters:update`

Newsletter subscriptions changed.

| Field                    | Type     | Description                               |
| ------------------------ | -------- | ----------------------------------------- |
| `uid`                    | string   | Account id.                               |
| `email`                  | string   | Primary email.                            |
| `locale`                 | string   | Account locale.                           |
| `newsletters`            | string[] | Current newsletter slugs.                 |
| `country`, `countryCode` | string   | Geo-resolved from the request IP.         |
| `userAgent`              | string   | Request user agent.                       |
| `timestamp`              | number   | Event time in milliseconds.               |
| `ts`                     | number   | Event time in float seconds.              |
| `iss`                    | string   | Issuing FxA domain.                       |
| `metricsContext`         | object   | Flow / metrics metadata from the request. |

#### `passwordChange`

The password was changed.

| Field            | Type   | Description                                               |
| ---------------- | ------ | --------------------------------------------------------- |
| `uid`            | string | Account id.                                               |
| `generation`     | number | The account's `verifierSetAt` timestamp after the change. |
| `timestamp`      | number | Event time in milliseconds.                               |
| `ts`             | number | Event time in float seconds.                              |
| `iss`            | string | Issuing FxA domain.                                       |
| `metricsContext` | object | Flow / metrics metadata from the request.                 |

#### `reset`

The password was reset.

| Field            | Type   | Description                                              |
| ---------------- | ------ | -------------------------------------------------------- |
| `uid`            | string | Account id.                                              |
| `generation`     | number | The account's `verifierSetAt` timestamp after the reset. |
| `timestamp`      | number | Event time in milliseconds.                              |
| `ts`             | number | Event time in float seconds.                             |
| `iss`            | string | Issuing FxA domain.                                      |
| `metricsContext` | object | Flow / metrics metadata from the request.                |

#### `subscription:update`

A subscription capability became active or inactive.

| Field                 | Type     | Description                                                    |
| --------------------- | -------- | -------------------------------------------------------------- |
| `uid`                 | string   | Account id.                                                    |
| `eventCreatedAt`      | number   | When the change occurred, in seconds.                          |
| `isActive`            | boolean  | `true` if the capabilities became active, `false` if inactive. |
| `productCapabilities` | string[] | The affected capabilities.                                     |
| `timestamp`           | number   | Event time in milliseconds.                                    |
| `ts`                  | number   | Event time in float seconds.                                   |
| `iss`                 | string   | Issuing FxA domain.                                            |
| `metricsContext`      | object   | Flow / metrics metadata from the request.                      |

#### `device:create`

A device/session was registered.

| Field            | Type    | Description                                  |
| ---------------- | ------- | -------------------------------------------- |
| `uid`            | string  | Account id.                                  |
| `id`             | string  | Device id.                                   |
| `type`           | string  | Device type.                                 |
| `isPlaceholder`  | boolean | Whether this is a placeholder device record. |
| `timestamp`      | number  | Device creation time, in milliseconds.       |
| `ts`             | number  | Event time in float seconds.                 |
| `iss`            | string  | Issuing FxA domain.                          |
| `metricsContext` | object  | Flow / metrics metadata from the request.    |

#### `device:delete`

A device was removed.

| Field            | Type   | Description                               |
| ---------------- | ------ | ----------------------------------------- |
| `uid`            | string | Account id.                               |
| `id`             | string | Device id.                                |
| `timestamp`      | number | Deletion time, in milliseconds.           |
| `ts`             | number | Event time in float seconds.              |
| `iss`            | string | Issuing FxA domain.                       |
| `metricsContext` | object | Flow / metrics metadata from the request. |

#### `delete`

The account was deleted.

| Field            | Type   | Description                               |
| ---------------- | ------ | ----------------------------------------- |
| `uid`            | string | Account id.                               |
| `timestamp`      | number | Event time in milliseconds.               |
| `ts`             | number | Event time in float seconds.              |
| `iss`            | string | Issuing FxA domain.                       |
| `metricsContext` | object | Flow / metrics metadata from the request. |

[set]: https://datatracker.ietf.org/doc/html/rfc8417
