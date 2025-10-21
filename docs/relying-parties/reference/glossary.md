---
title: Glossary
sidebar_label: Glossary
---

Last updated: `Jan  16th, 2025`

This is a working document, it is intended to facilitate teams’ alignment through a common language. Please contribute to it.

:::tip
The design team maintains [their own glossary](https://acorn.firefox.com/latest/content/word-list/mozilla-accounts-9UwXB5P1) as well.
:::


### offering
A generic term that includes one or more products, services, features, and/or applications.

### product team
At Mozilla, “product team” is a generic term for teams that provide an offering (see above)—i.e., they build one or more products, services, features, and/or applications.

### subscription
A transactional agreement: the subscribing user will pay in exchange for an offering.

At Mozilla, a subscription is a means or a mode for “product teams” to deliver an offering to Mozilla end users.

:::note
"subscription" is also a term used by the Webpush specification to indicate a notification agreement between a site and an end user.  So you would "subscribe" to slack to get notifications when something of interest is mentioned. Associated items include "Subscription Info" which contains what's needed to send a "Subscription Update" to a user.
:::

### Subscription Platform (formerly Subscription Services)
The Subscription Platform is the Mozilla platform that offers subscription product teams:
- Authentication
- Subscription payments and billing
- Staffed customer service & support
- CRM integration
- Revenue recognition & dashboards

The Subscription Platform Team is an umbrella term for the cross-org team administering that platform on behalf of subscription service teams. The team includes the FxA team and an Operations team comprised of IT and Support.

### Mozilla Accounts (formerly Firefox Accounts - often still abreviated as FxA)
Firefox Accounts (FxA) enables users to register for a FxA identity. With an FxA identity, a user can sign in, make payments, and receive “paid support,” i.e. a higher level of tracked/ticketed support provided to paid subscribers. FxA also provides scoped keys, which enable products and services to perform client side encryption (in the app, rather than on the server) of sensitive user data. Encrypted data that is stored on a server is safe from prying eyes, its contents cannot be read by anyone without the key - including the product/service (if done properly), external attackers, governments, or even Mozilla.

When Clients integrate with FxA, they are enabling their users to use an FxA identity in the context of their product/service. In the current model, users with paid subscriptions can thus access payment and “paid support.” When Clients integrate with FxA, they are also enabling their users to traverse without friction between products and services within the Firefox ecosystem.

### Relying Party
A Mozilla product team that relies on FxA to manage authentication or the Subscription Platform.

This is an industry term.

E.g., Monitor is a relying party for FxA.

### Client
An OAuth Client. Distinct from a relying party.

### Partner
External company that provides a product or service to a user, that makes use of the Subscription Platform.

Note that Partners delivering a service using FxA to login, act as Reliers.

### User
The User is a prospective or current FxA holder.

:::note 
Note that “The OAuth 2.0 spec refers to the user as the ‘resource owner.’ The resource owner is the person who is giving access to some portion of their account. The resources in this case can be data (photos, documents, contacts), services (posting a blog entry, transferring funds), or any other resource requiring access restrictions. Any system that wants to act on behalf of the user must first get permission from them. — From the [OAuth website](https://www.oauth.com/oauth2-servers/definitions/).
:::

### OAuth 2.0
OAuth 2.0 is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

OAuth 2.0 allows FxA users to delegate access to OAuth 2.0 protected resources for that user. An addition to OAuth 2.0, OpenID Connect allows us to do login flows to internal/external sites for a FxA user. Google documents these separately for their Identity system: https://developers.google.com/identity/protocols/OpenIDConnect

### WebPush
WebPush is part of the Application Services Team’s catalog of services.

WebPush is the protocol that allows instantaneous communication between two devices. Only the term “WebPush”—and not “Push” or “Autopush”—should be used, unless referring to Mozilla's Push server.

The WebPush service allows for rapid messaging (e.g. this is how we do Broadcast/Megaphone, Send Tab, and a few other functions.)

Note that prospective reliers may want to use this service, and WebPush is not widely understood or supported by the team.

:::note
“WebPush” is the specification for server-published notifications to the web browser. “Autopush” is the project name of the WebPush server used by Mozilla. “Push” is the synonym that has grown to encompass both of these. Unfortunately, these terms tend to be used interchangeably.
:::

### MFA
Multi-Factor Authentication, also known as 2FA.

### GDPR
[General Data Protection Regulation](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations_en), EU law governing use of personal data across all member states.

### Scope
A list of capabilities/permissions that an FxA user has granted to a client, allowing it to access data and perform operations on the user's behalf. For example a client that can read the user's profile data and access their data in Firefox Sync might have been granted the scope `profile https://identity.mozilla.com/apps/oldsync`. [Ref](/reference/oauth-details#oauth-scopes)

### Scope Value
A particular capability/permission that an FxA user may grant to a client, such as `profile` or `https://identity.mozilla.com/apps/oldsync`.

### Scoped Key
Client-side key material associated with a particular scope value, which clients will need to use to access the data associated with that scope value. For example `https://identity.mozilla.com/apps/oldsync` has a corresponding encryption key which the client must obtain (and remember!) in order to actually access the user's sync data.