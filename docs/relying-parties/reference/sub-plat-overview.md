---
id: sub-plat-overview
title: Subscription Platform Overview
---

## Introduction

What is the Subscription Platform? Think of it as a catch-all name for a set of interdependent features that allow users to unlock premium value by entering into a subscription relationship with Mozilla, and that allows Mozilla to receive payment, track subscriptions and provide support to users. Breaking this down further, Sub Plat provides the following:

1. **Payment & Subscription Creation** - The initial payment funnel where users enter CC information to subscribe to a product. We use Stripe to handle transactions.
2. **Entitlement** - The ability for your app or apps to see and respond to a user's subscription status.
3. **Billing** - Ongoing billing & receipt emails once a subscription is entered.
4. **Subscription Management UI** - Settings that allow the user to update payment information.
5. **Subscription Support** - Staffed support for end users.
6. **Revenue and funnel metrics** - dashboards in Looker and Stripe that provide insights into conversion through the subscription funnel, as well as revenue data such as MRR and churn.

## How subscriptions work

From your product's perspective, subscriptions are basically just metadata that attach to a user's Firefox Account. Once a user has subscribed to your product, their FxA profile reflects their subscribed state and your product can respond accordingly.

Importantly, subscriptions are not locked to any one FxA-attached product by default, so if a user is subscribed to Firefox Foo, Firefox Bar can optionally see the subscription metadata as well. In this way, we can create subscription bundles that can span multiple different products or services. [These videos][videos] give a general overview of what subscription setup looks like.

If a user cancels their subscription, this metadata goes away and your product can go back to treating them as a non-subscribed user.

## Terminology

Before diving into [features](sub-plat-features.md) and [integration](../tutorials/integration-with-subscription-platform.md) how-tos, it's useful to align on key terminology.

### Relying Party

A [relying party (RP)][relying-party] is any service that uses Firefox Accounts. This can be a free or subscription service. Firefox Monitor, Mozilla VPN and Firefox Sync are all examples of relying parties.

### Product

 This term has a specific meaning in subscription world. A Product refers to one or more Relying Party services that are sold as a unit. For example, since we sell the Mozilla VPN alone, that is a product. If we were to sell another product Called Mozilla VPN Plus that bundled a password manager, that would be another product.

### Plan

This referrers to a product billed at a specific amount charged at a specific interval. So, if the product is Mozilla VPN, the Plan might Be *Mozilla VPN, billed monthly at $4.99 USD*.

Stripe is used to handle payments and subscriptions in the Subscription Platform. Terminology dealing with products and plans uses the [Stripe definitions of Product/Plan](https://stripe.com/docs/billing/subscriptions/products-and-plans).

### Capability

This is how your Relying Parties know they're subscribed. Each product is associated with the capabilities that it confers to a user. A bundle product may include multiple capabilities provided by varying [relying parties (RPs)][relying-party], or a single product may confer a single capability provided by multiple RPs. These capabilities are typically RP-specific.

Subscription capabilities are lower-case strings that will be included in the users profile data and webhook [subscription state notifications].

### FxA Event Broker

This is a service that distributes [relying party events] to FxA integrations that have a registered [webhook] URL. These events are only sent to integrations that a FxA user has logged into.

[relying party events]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#relying-party-event-format
[videos]: https://mana.mozilla.org/wiki/display/FJT/Tutorial+Videos
[webhook]: https://en.wikipedia.org/wiki/Webhook
[subscription state notifications]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change
[relying-party]: https://en.wikipedia.org/wiki/Relying_party
