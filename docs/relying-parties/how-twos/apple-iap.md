---
id: apple-iap
title: Apple IAP
sidebar_label: Apple IAP
---

## Introduction
As of December 2022, the Subscription Platform supports [Apple IAP](https://developer.apple.com/app-store/subscriptions/) integrations for products with Mozilla VPN as one example. An integration allows us to maintain an awareness of an Apple IAP subscriber's subscription status for a given iOS app, including any state changes, which we forward on to the relevant relying party.

Importantly, Apple provides read-only access to Apple IAP subscriptions. Consequently, we do not (and cannot) modify Apple IAP subscriptions (e.g. making plan changes such as upgrades).

A more technical discussion (geared toward FxA engineers) can be found in [Apple IAP Integration](/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration).

## Prerequisites
This guide assumes you are already integrated with FxA/the Subscription Platform; please see [Integration with Subscription Platform](/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform) for more information.

Ideally, you will also want to grant 1-2 Subscription Platform engineers working on the integration developer access to your iOS app in [App Store Connect](https://appstoreconnect.apple.com/) ([example bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1760053)). This allows us to access your iOS app’s [App Store Server API](https://developer.apple.com/documentation/appstoreserverapi) keys, to look up needed app-specific information and to configure an endpoint to receive App Store Server notifications.

## Configuration
These steps can be done by a product manager or developer and in parallel with steps in [SubPlat API Calls](#subplat-api-calls). More information regarding specific Stripe metadata keys mentioned below can be found in the [Subscription Platform integration tutorial](/ecosystem-platform/tutorials/subscription-platform#stripe-productplans).

### Create an IAP configuration document
This document represents a list of App Store plans (identified uniquely by their App Store [`productId`s](https://developer.apple.com/documentation/appstoreserverapi/productid/) for your product.

1. Go into App Store Connect and find your iOS app’s human-readable [`productId`](https://developer.apple.com/documentation/appstoreserverapi/productid/)s and [`bundleId`](https://developer.apple.com/documentation/appstoreserverapi/bundleid/).
2. Create a configuration document similar in form to https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn (omitting Android plans) including a `bundleId` property. This can be in a Google document for now.
    * Note: The only information SubPlat uses from the VPN document currently is the `productId` and `platform`. The VPN configuration document is structured in this way for historical reasons. We may change how this information is structured for future integrations.
3. File a ticket in the [FXA Jira project](https://mozilla-hub.atlassian.net/browse/FXA) to create a new document in SubPlat's "IAP config" Firestore collection, and provide the document from Step 2 along with an `appName`.
    * `appName` is a human-readable name that SubPlat will use internally to uniquely identify your app in our system (e.g. `"guardian-vpn"` is the `appName` for the Mozilla VPN in the link above).
    When the ticket is complete, you should be able to view your configuration at https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/${appName}.

### Add App Store Server API keys in SubPlat

A SubPlat engineer with developer access to App Store Connect (see [Prerequisites](#prerequisites)) can configure this for you when ready.

App Store Server API keys are needed for SubPlat to make calls to Apple’s API. See [Apple IAP Integration](/ecosystem-platform/tutorials/subscription-platform#apple-iap-integration) for more information on how to obtain these keys.

### Send App Store Server notifications to SubPlat

A SubPlat engineer with developer access to App Store Connect (see [Prerequisites](#prerequisites)) can configure this for you when ready.

The Sandbox and, when ready, Production endpoints in App Store Connect must be updated with SubPlat's notification endpoint in order for our system to receive App Store Server notifications.

### Map Apple IAP to Stripe plans
In order to know what capabilities to grant a given Apple IAP user, we map App Store Connect `productId`s to [Stripe `price` or `plan`](https://support.stripe.com/questions/how-to-create-products-and-prices) IDs (`price`s supersede `plan`s).

1. Go into App Store Connect and find your iOS app’s human-readable `productId`s.
2. In the Stripe dashboard for the desired environment (stage or production), create a new, valid product in Stripe and a new, valid plan underneath that product.
    * We hope to simplify this process in SubPlat 3.0, expected in 2023; see this [Jira comment](https://mozilla-hub.atlassian.net/browse/PSP-64?focusedCommentId=627245) for more details.
3. Add each App Store `productId` as a comma-separated value to a new `appStoreProductIds` metadata property on the newly created plan.

### Prevent Apple IAP subscribers from double subscribing
As noted previously, we don’t support upgrades or any plan changes for Apple IAP subscribers. However, it is possible for an Apple IAP subscriber to try to sign up again for your product on the Subscription Platform website. Follow these steps to prevent them from double subscribing.

1. In the Stripe dashboard for the given environment (stage or production), remove any `productSet` properties that may have been previously set on the newly created product/plan from [Map Apple IAP to Stripe plans](#map-apple-iap-to-stripe-plans).
2. Add a `productSet` metadata key with a value equal to the comma-separated list of all the unique `productSet`s for all your product’s plans in the environment to the new product referenced in Step 1. Without their own `productSet` specified, the new plan will inherit its product’s `productSet`.

## SubPlat API Calls

These steps can be done by a developer and in parallel with the steps in [Configuration](#configuration).

As mentioned in the [Introduction](#introduction), SubPlat has read-only access to App Store subscription information. We will store Apple IAP subscribers' data in our system and update the information when we receive notifications from the App Store server, broadcasting updates in real time to the relevant relying parties.

### Getting the current subscription status for an FxA user
Assuming you are already integrated with FxA generally (see [Prerequisites](#prerequisites)), are receiving subscription updates for other types of subscriptions (e.g. for PayPal or Stripe), and you have completed the [mapping of App Store to Stripe plans](#map-apple-iap-to-stripe-plans), no further work is required to continue receiving these updates for Apple IAP subscribers. You can also pull this information from FxA with the existing [`/account/profile`](/ecosystem-platform/api#tag/Account/operation/getAccountProfile) endpoint without any further changes. 

### Registering an Apple IAP subscriber
SubPlat needs to be able to associate an Apple IAP subscription in Apple's system to a specific FxA user. This is done by registering each Apple IAP subscriber with the [`/subscriptions/iap/app-store-transaction/${appName}`](/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname) endpoint.

By design, we allow only one FxA user per App Store [`originalTransactionId`](https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/), which is how Apple uniquely identifies a subscription.

This endpoint can be used to register a new Apple IAP subscriber or to migrate an existing Apple IAP subscriber. For the latter, see [(Optional) Migrate existing Apple IAP subscribers to the Subscription Platform](#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform).

### (Optional) Migrating existing Apple IAP subscribers to the Subscription Platform

This section only applies to products that currently have a direct integration with Apple who need to migrate existing subscribers to the Subscription Platform.

These steps can be done by a developer. While step 1 can be completed in parallel, otherwise perform this migration after completing the steps under [Configuration](#configuration) and [SubPlat API Calls](#subplat-api-calls). See also the [Testing your integration](#testing-your-integration) section.

1. File a ticket in the [FXA Jira project](https://mozilla-hub.atlassian.net/browse/FXA) to add a temporary scope for `'profile:subscriptions'` to the App Store registration endpoint.
    * Example ticket to add [FXA-5833](https://mozilla-hub.atlassian.net/browse/FXA-5833) and remove [FXA-5848](https://mozilla-hub.atlassian.net/browse/FXA-5848).
2. Use the existing registration endpoint ([`/subscriptions/iap/app-store-transaction/${appName}`](/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapAppstoretransactionAppname)) to register each existing user with SubPlat.
    * Important: While SubPlat routes can handle thousands of requests per second, we recommend limiting requests to 10-20 per minute to start and potentially increase that if there are no issues. This is because, at the time of writing, the App Store Server APIs docs don’t list a rate limit threshold, and we make more than one request to Apple for each SubPlat request.

## Testing your integration

:::caution
Like many systems, Apple's Sandbox environment does not necessarily exhibit behavior consistent with what is stated in their docs. When in doubt, directly test the scenario in question, potentially more than once, to understand what to expect.
:::

### End-to-end testing of SubPlat APIs

After development and the steps above are complete (and importantly, before involving QA), it is recommended for the lead RP integration engineer to pair with the lead SubPlat integration engineer to test the following:
* [Getting the current subscription status for an FxA user](#getting-the-current-subscription-status-for-an-fxa-user)
* [Registering an Apple IAP subscriber](#registering-an-apple-iap-subscriber)
* [Receiving a Sandbox notification in our stage environment](#send-app-store-server-notifications-to-subplat)
* [(Optional) Migrating existing Apple IAP subscribers to the Subscription Platform](#optional-migrating-existing-apple-iap-subscribers-to-the-subscription-platform)

### Idiosyncrasies of the App Store Server API

* The unique subscription identifier used by Apple ([original transaction ID](https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid/)) is per App Store account. When testing with different FxA accounts, it is therefore necessary to either:
    * (Recommended) Use a separate Sandbox App Store account for each FxA account.
    * [Clear the Sandbox App Store account's purchase history](https://mozilla-hub.atlassian.net/browse/PSP-509?focusedCommentId=592265) in App Store Connect in between test cases.
* Unlike in Production where Apple retries notifications several times over a period of days, in the Sandbox environment, Apple [only sends each notification once with no retries](https://developer.apple.com/documentation/appstoreservernotifications/responding_to_app_store_server_notifications).
* In the Sandbox environment, [subscriptions autorenew at an accelerated rate and auto-expire after 12 renewals](https://help.apple.com/app-store-connect/#/dev7e89e149d) if no action is taken otherwise.