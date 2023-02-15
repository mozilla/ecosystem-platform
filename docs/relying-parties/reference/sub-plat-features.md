---
id: sub-plat-features
title: Subscription Features
sidebar_label: Subscription Features
---

Before reading this page, it will be useful to have a grounding in Sub Plat terminology. Please see the Subscription Platform Overview for more information.

## Payment Methods

The Subscription Platform currently supports payments with major credit cards through Stripe and Paypal. Supported Products with Mobile products may also integrate to Apple and Google IAP through the Subscription Platform.

## Staffed Support

Subscription Platform integrates with ZenDesk to provide staffed support. The Subscription Platform team partners with the Support Team to manage ZenDesk. The Support team is directly responsible for provisioning resourcing for support and setting up SLAs for your subscription offerings.

## Data Reporting

Data reporting consists of standard FxA funnel metrics, Stripe data & ZenDesk ticket data in addition to any telemetry you collect in your offering. Please see [this document](./metrics-for-relying-parties.md) to understand access and status for all of these endpoints.

## Geo-Restrictions

 **The Subscription Platform does not implement any geo-restrictions**. Instead, we rely on Stripe to reject credit cards from countries that our legal team has not given us permission to ship in. This means that if you're building a lead page to market a subscription product, you will be responsible for geo-restricting access to the Subscription Platform.

## Currency & Market Support

The Subscription Platform currently supports several [currencies and markets](https://mozilla-hub.atlassian.net/l/cp/MMwzvYV4).

Importantly, if you wish to offer your product in multiple different currencies, you will have to configure your marketing page to correctly route different users to different plans depending on their region. You will also need to set up individual stripe plans for each currency.

Reach out to the Subscription Platform team in Slack at #subscription-platform to request additional market support so that we may advise you on next steps toward coverage.


### Billing intervals

The Subscription Platform supports billing intervals of one-month, six months, and one year. Subscriptions auto-renew and do not expire until a user cancels them.

Like currencies, each billing interval represents a separate **plan** in Stripe. This means, if you wish to offer multiple different intervals, you will need to implement multiple different **plans**.

### Tiers & upgradable subscriptions

The Subscription Platform supports upgradable subscriptions between tiers of a product. This is a streamlined way to organize a set of subscription products that are related. For example, you might wish to sell a subscription to Firefox Private Network Proxy for $2.99 a month with an optional upgrade to unlock the Firefox Private Network VPN for $4.99 a month.

Rather than making a user go through an entire payments Flow, Sub Plat allows upgrades with a single click. Users are charged a pro-rated amount for the the upgrade for their current billing cycle and in subsequent billing cycles they will be charged the full amount of their new subscription.


[team page]: /ecosystem-platform/docs/process/integration-with-subscription-platform
[jira board]: https://jira.mozilla.com/secure/RapidBoard.jspa?rapidView=360&projectKey=FXA&view=detail&quickFilter=1923#
