---
id: integration-with-subscription-platform
title: Integration with Subscription Platform
sidebar_label: Integration with Subscription Platform
---

Last updated: `Oct 6th, 2023`

## Setting up A Subscription

### Pre-Development

#### File A ticket

First thing's first. File an FxA ticket in Jira. This ticket can be used to track documentation for your subscription. You can use the component "Subscription Platform" but otherwise, don't worry too much about format for your issue. We will use this request to set up an initial meeting and get the ball rolling. We will track your subscription setup in Confluence in order to keep sensitive details such as price and release dates and market confidential.

#### Have a kickoff meeting

Once your ticket is filed, you should have had a RRA-style meeting with the Mozilla accounts team. During or shortly after this meeting, an initial subscription capability string or strings should be agreed upon.

We will use this meeting to do the following:

1. Set up a Confluence page to track basic info about your product such as name & capability string or strings
2. Get a rough estimate of your shipping timeline (don't worry if this isn't 100% pinned down)
3. Get a staging subscription set up for you to start testing with

### Development

Integration with FxA is the primary development task to complete for a working subscription integration. The additional Subscription Capability string will be included as the `subscriptions` field in the response from the FxA Profile Server.

If your integration includes an application service, it will need a webhook handler to receive relying party events from the FxA Event Broker.

#### Demoing Subscription Flows

The FxA Team maintains the Firefox Fortress package `fxa/packages/fortress` in order to demonstrate various SubPlat capabilities including tiers & different cycle durations. This package runs at `127.0.0.1:9292`, and is an up-to-date representation of SubPlat features. In order complete the demo, you will need access to a Stripe dev instance. An Accounts team member can provide this upon request. Please see our [developer docs][config] to learn more.

#### Setting up your marketing pages

If your integration includes lead pages to start a subscription flow, you will need to include the product and plan id's in the subscription 'buy' URL. This link for production has the form of:

```
https://{hostname}/subscriptions/products/{productId}?plan={planId}
```

Valid hostnames for the FxA environments:

- Production - `accounts.firefox.com`
- Stage - `accounts.stage.mozaws.net`

Note that valid values for `productId` and `planId` will vary with environment as a different Stripe account is associated with each.

Additionally, if your product has multiple associated plans in any environment, you will need to ensure that you are routing users correctly. The most likely cases for this would be:

1. If your product has plans with different billing intervals (monthly, annually)
1. If your product has plans in different currencies

Importantly, the Subscription Platform does not currently provide any inbuilt capabilities for routing users to a correct currency or for showing multiple plans to a user at once. If this is a requirement for your product, you must provide the appropriate UI and routing to ensure that users end up on the correct payment page for the correct product.

#### Webhook Events

If your integration includes an application service, [subscription state notifications] will also be sent via [webhook] to your registered [webhook] URL.

#### Testing

When integrated with the FxA stage or development environments, subscription sign-up's can be tested using [Stripe test cards](https://stripe.com/docs/testing#cards).

#### Ensure your product(s) are included in SubPlat's Looker dashboards

Once you have your products and plans configured in Stripe and/or Contentful, and before you deploy your integration to production, file a [Data Org ticket in Jira](https://mozilla-hub.atlassian.net/jira/software/c/projects/DO/boards/269) to add your product(s) to the SubPlat ETL.

See [Product metrics in Looker](#product-metrics-in-looker) for more information.

## Evaluating the current user flow

To see the user experience without setting up your localhost you can subscribe to any of the existing subscriptions that we have available. If you want to try out the upgrade flow please use MDN Plus.

- VPN - https://www-dev.allizom.org/en-US/products/vpn/#pricing
- Relay Premium - https://stage.fxprivaterelay.nonprod.cloudops.mozgcp.net/
- MDN Plus - https://developer.allizom.org/en-US/plus#subscribe

Once you selected a plan please create a new user. You can use the following Credit Card number: 4242424242424242 with any 3 digit CVC and a valid expiration date. NOTE: this is a test card and is only available on staging. Once you complete the subscription you can look at the email communications sent out by the SubPlat team.

To cancel your subscription simply go to https://accounts.stage.mozaws.net/subscriptions and press the cancel button.

To upgrade your subscription sign in to your account using the step above and go to the MDN Plus link. The website will now display your current plan and the upgrade options.

## Integration with Google IAP

To integrate your android app with the Subscription Platform, please see [Google IAP](/ecosystem-platform/relying-parties/how-tos/google-iap).

## Integration with Apple IAP

To integrate your iOS app with the Subscription Platform, please see [Apple IAP](/ecosystem-platform/relying-parties/how-tos/apple-iap).

## Product metrics in Looker

To view product metrics in Looker for your products and/or services, please see [Metrics for Relying Parties](/ecosystem-platform/relying-parties/how-tos/product-metrics).

[relying party events]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#relying-party-event-format
[subscription state notifications]: https://github.com/mozilla/fxa/tree/main/packages/fxa-event-broker#subscription-state-change
[relying-party]: https://en.wikipedia.org/wiki/Relying_party
[webhook]: https://en.wikipedia.org/wiki/Webhook
[profile-data]: https://mozilla.github.io/application-services/docs/accounts/faq.html#what-information-does-firefox-accounts-store-about-the-user
[config]: /ecosystem-platform/tutorials/subscription-platform#configuration
