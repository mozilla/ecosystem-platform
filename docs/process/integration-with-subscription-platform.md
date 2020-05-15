---
id: integration-with-subscription-platform
title: Integration with Subscription Platform
sidebar_label: Integration with Subscription Platform
---

## Overview

The Subscription Platform handles all aspects of subscription management for Firefox Accounts. Integrations require first handling basic integration with FxA, after which the additional subscription capabilities can be determined, configured, and deployed. When integrated with the Subscription Platform, an additional event will be sent via [webhook][webhook] and the users subscription capabilities will be added to the [user’s profile data][profile-data].

## Terminology

Stripe is used to handle payments and subscriptions in the Subscription Platform. Terminology dealing with products and plans uses the [Stripe definitions of Product/Plan](https://stripe.com/docs/billing/subscriptions/products-and-plans).

### Subscription Capability

Each product is associated with the capabilities that it confers to a user. A bundle product may include multiple capabilities provided by varying [relying parties (RPs)][relying-party], or a single product may confer a single capability provided by multiple RPs. These capabilities are typically RP-specific.

Subscription capabilities are lower-case strings that will be included in the users profile data and  [webhook] [subscription state notifications].

### FxA Event Broker

Service that distributes [relying party events] to FxA integrations that have a registered [webhook] URL. These events are only sent to integrations that a FxA user has logged into.

## Pre-Development

Before getting started, you should have had a RRA-style meeting with the Firefox Accounts team. During or shortly after this meeting, an initial subscription capability string should have been agreed upon. If the product/plan did not exist yet, one will be created for the FxA stage environment.

You will need up to three defined strings to develop a subscription platform integration:

- Subscription Capability string
- Product id, one for each environment (If building a lead page)
- Plan id, one for each environment (If building a lead page)

If your integration includes an application service, it will need a [webhook] handler to receive [relying party events] from the FxA Event Broker.

### Tiers and Upgrades

If your product consists of multiple different subscription tiers (Foo Silver, Foo Gold, Foo Platinum), different capabilities can be assigned for each level as needed. The Accounts team can configure metadata for each tier in Stripe so that users can upgrade between tiers without needing to re-enter CC information.

### Billing Cycle Durations

Sub Plat currently supports subscription billing cycles of one month, six months and one year. These will be represented as a set of `planID`s associated with a single `productId`. An accounts team member can help you configure each plan as needed.

### Demoing Subscription Flows

The FxA Team maintains the Firefox Fortress package `fxa/packages/fortress` in order to demonstrate various Sub Plat capabilities including tiers & different cycle durations. This package runs at `127.0.0.1:9292`, and is an up-to-date representation of Sub Plat features. In order complete the demo, you will need access to a Stripe dev instance. An Accounts team member can provide this upon request. Please see our [developer docs][config] to learn more.

## Development

Integration with FxA is the primary development task to complete for a working subscription integration. The additional Subscription Capability string will be included as the `subscriptions` field in the response from the FxA Profile Server.

### Lead Pages

If your integration includes lead pages to start a subscription flow, you will need to include the product and plan id's in the subscription 'buy' URL. This link for production has the form of:

```
https://{hostname}/subscriptions/products/{productId}?plan={planId}
```

Valid hostnames for the FxA environments:

- Production - `accounts.firefox.com`
- Stage - `accounts.stage.mozaws.net`
- Development - `latest.dev.lcip.org`

Note that valid values for `productId` and `planId` will vary with environment as a different Stripe account is associated with each.

Additionally, if your product has multiple associated plans in any environment, you will need to ensure that you are routing users correctly.

### Webhook Events

If your integration includes an application service, [subscription state notifications] will also be sent via [webhook] to your registered [webhook] URL.

## Testing

When integrated with the FxA stage or development environments, subscription sign-up's can be tested using [Stripe test cards](https://stripe.com/docs/testing#cards).

[relying party events]: https://github.com/mozilla/fxa/tree/master/packages/fxa-event-broker#relying-party-event-format
[subscription state notifications]: https://github.com/mozilla/fxa/tree/master/packages/fxa-event-broker#subscription-state-change
[relying-party]: https://en.wikipedia.org/wiki/Relying_party
[webhook]: https://en.wikipedia.org/wiki/Webhook
[profile-data]: https://mozilla.github.io/application-services/docs/accounts/faq.html#what-information-does-firefox-accounts-store-about-the-user
[config]: /ecosystem-platform/docs/fxa-engineering/fxa-sub-platform#configuration
