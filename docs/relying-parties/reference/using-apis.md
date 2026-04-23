---
id: using-apis
title: Using APIs
sidebar_label: Using APIs
---

# Using APIs

The Ecosystem Platform provides [some OAuth APIs for relying parties](/api#tag/OAuth-Server-API-Overview) to use while providing OAuth services to customers.  **Relying Parties should only use OAuth API endpoints**.  Usage and expectations are detailed below.  Narrower requirements and rate limits may apply to more specific APIs.

If these rules change significantly we'll notify the [firefox-accounts-notices group](https://groups.google.com/a/mozilla.com/g/firefox-accounts-notices).  If you're using this API please subscribe to that group.


## API versioning

Mozilla accounts APIs are versioned and breaking changes will be pushed out in newer versions of the APIs.  When newer versions of the API are announced we'll also communicate how long we will support the older versions of the APIs.

### Minor changes

Mozilla accounts may change existing APIs in non-breaking ways, for example, adding a new field to a JSON response.  It's expected that clients will not fail if new fields are added.


## Global Rate Limits

During periods of maintenance or heavy load, the server may request that clients enter a "back-off" state, in which they avoid making further requests.

At such times, you may receive a `429 Too Many Requests` or a `503 Service Unavailable` response with a `Retry-After` header denoting the number of seconds to wait before issuing any further requests. It will also include an `errno` and a `retryAfter` field matching the value of the `Retry-After` header in the body.

For example, the following response indicates that the client should suspend making further requests for 30 seconds:

```
HTTP/1.1 503 Service Unavailable
Retry-After: 30
Content-Type: application/json

{
  "code": 503,
  "errno": 201,
  "error": "Service Unavailable",
  "message": "Service unavailable",
  "info": "https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/docs/api.md#response-format",
  "retryAfter": 30,
  "retryAfterLocalized": "in a few seconds"
}
```

## Handling Expired Access Tokens

OAuth access tokens are short-lived and will eventually expire. When a resource server returns a `401 Unauthorized` response, the RP should attempt to obtain a new access token using its refresh token before treating the failure as fatal.

The recommended approach is:

1. Make the API request with the current access token.
2. If you receive a `401`, use the refresh token to request a new access token from the FxA OAuth server.
3. Retry the original request with the new access token.
4. If the refresh token request also returns a `401`, the user has disconnected the RP from their account (or their session has been otherwise invalidated). At this point the RP should discard stored tokens and prompt the user to re-authenticate.

Avoid immediately prompting re-authentication on every `401` without first attempting a token refresh — this creates unnecessary friction for users whose access token has simply expired.
