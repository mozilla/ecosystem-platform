---
id: google-iap
title: Google IAP
sidebar_label: Google IAP
---

## Introduction

As of November 2021, Subscription Platform (SubPlat) supports [Google IAP](https://developer.android.com/google/play/billing) integrations for products with Mozilla VPN as one example. An integration allows us to maintain an awareness of a Google IAP subscriber's subscription status for a given Android app, including any state changes, which we forward on to the relevant relying party (RP).

Importantly, Google provides read-only access to Google IAP subscriptions. Consequently, we do not (and cannot) modify Google IAP subscriptions (e.g. making plan changes such as upgrades).

A more technical discussion (geared toward Firefox Accounts (FxA) engineers) can be found in [Google IAP Integration](/ecosystem-platform/tutorials/subscription-platform#google-iap-integration).

### Recent changes to Google Play Billing Library

As of May 2022, the Google Play Billing Library introduced changes in the way subscription products are defined and managed in the Google Play Console. This includes the deprecation of the `SkuDetails` class and renaming all `sku` references to the more aptly named `productId`.

Importantly, Google has included backwards compatibility to allow for a gradual migration. In our codebase, we are currently still referencing the outdated `sku`. However, as this is a How-to Guide for RPs, and what one can expect to see in Google Play Console, this guide will reference all new field names, and in particular, `productId`.

For more information on these changes and updated field mappings, see [Understanding subscriptions](https://support.google.com/googleplay/android-developer/answer/12154973) and [May 2022 subscription changes guide](https://developer.android.com/google/play/billing/compatibility).

## Prerequisites

This guide assumes you are already integrated with FxA/SubPlat; please see [Integration with Subscription Platform](/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform) for more information.

Ideally, you will also want to grant 1-2 SubPlat engineers working on the integration developer access to your Android app in [Google Play Console](https://play.google.com/console) ([example bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1726184)). This allows us to access your Android app’s [Google Play Developer API](https://developers.google.com/android-publisher) keys, to look up needed app-specific information and to configure an endpoint to receive [Real-time developer notifications (RTDN)](https://developer.android.com/google/play/billing/rtdn-reference).

## Configuration

These steps can be done by a product manager or developer and in parallel with steps in [SubPlat API Calls](#subplat-api-calls). More information regarding specific Stripe metadata keys mentioned below can be found in the [Subscription Platform integration tutorial](/ecosystem-platform/tutorials/subscription-platform#stripe-productplans).

### Create an IAP configuration document

This document represents a list of Play Store plans (identified uniquely by their Play Store [`productId`](https://support.google.com/googleplay/android-developer/answer/140504#zippy=%2Ccreate-a-new-subscription) for your product.

1. Go into Google Play Console and find details about your Android app by [`productId`](https://support.google.com/googleplay/android-developer/answer/140504#zippy=%2Ccreate-a-new-subscription).
2. Create a configuration document similar in form to https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/guardian-vpn (omitting iOS plans) using the details retrieved in Step 1. This can be in a Google document for now.
   - Note: The only information SubPlat uses from the VPN document currently is the `productId` and `platform`. The VPN configuration document is structured in this way for historical reasons. We may change how this information is structured for future integrations.
3. File a ticket in the [FXA Jira project](https://mozilla-hub.atlassian.net/browse/FXA) to create a new document in SubPlat's "IAP config" Firestore collection, and provide the document from Step 2 along with an `appName`.
   - `appName` is a human-readable name that SubPlat uses to uniquely identify your app in our system (e.g. `"guardian-vpn"` is the `appName` for the Mozilla VPN in the link above).
     When the ticket is complete and deployed, you should be able to view your configuration at https://api.accounts.firefox.com/v1/oauth/subscriptions/iap/plans/${appName}.

### Add Google Play Developer API keys in SubPlat

A SubPlat engineer with developer access to Google Play Console (see [Prerequisites](#prerequisites)) can configure this for you when ready.

Google Play Developer API keys are needed for SubPlat to make calls to Google API. For more information on how to obtain these keys, see [Setting up API keys](https://support.google.com/googleapi/answer/6158862).

### Send Real-time developer notifications to SubPlat

A SubPlat engineer with developer access to Google Play Console (see [Prerequisites](#prerequisites)) can configure this for you when ready.

When ready, the Production endpoint in RTDN must be updated with SubPlat's notification endpoint in order for our system to receive RTDN.

### Map Google IAP to Stripe plans

In order to know what capabilities to grant a given Google IAP user, we map Play Store `productId`s to [Stripe `price` or `plan`](https://support.stripe.com/questions/how-to-create-products-and-prices) IDs (`price`s supersede `plan`s).

1. Go into the Google Play Console and find your Android app’s human-readable `productId`s.
2. In the Stripe dashboard for the desired environment (stage or production), create a new, valid product in Stripe and a new, valid plan underneath that product.
   - We hope to simplify this process in SubPlat 3.0, expected in 2023; see this [Jira comment](https://mozilla-hub.atlassian.net/browse/PSP-64?focusedCommentId=627245) for more details.
3. Add each Play Store `productId` as a comma-separated value to a new `playSkuIds` metadata property on the newly created plan.

### Prevent Google IAP subscribers from double subscribing

As noted previously, we don’t support upgrades or any plan changes for Google IAP subscribers. However, it is possible for a Google IAP subscriber to try to sign up again for your product on the SubPlat website. Follow these steps to prevent them from double subscribing.

1. In the Stripe dashboard for the given environment (stage or production), remove any `productSet` properties that may have been previously set on the newly created product/plan from [Map Google IAP to Stripe plans](#map-google-iap-to-stripe-plans).
2. Add a `productSet` metadata key with a value equal to the comma-separated list of all the unique `productSet`s for all your product’s plans in the environment to the new product referenced in Step 1. Without their own `productSet` specified, the new plan will inherit its product’s `productSet`.

## SubPlat API Calls

These steps can be done by a developer and in parallel with the steps in [Configuration](#configuration).

As mentioned in the [Introduction](#introduction), SubPlat has read-only access to Play Store subscription information. We will store Google IAP subscribers' data in our system and update the information when we receive notifications from RTDN, broadcasting updates in real time to the relevant RPs.

### Getting the current subscription status for a FxA user

Assuming you are already integrated with FxA generally (see [Prerequisites](#prerequisites)), are receiving subscription updates for other types of subscriptions (e.g. for PayPal or Stripe), and you have completed the [mapping of Play Store to Stripe plans](#map-google-iap-to-stripe-plans), no further work is required to continue receiving these updates for Google IAP subscribers. You can also pull this information from FxA with the existing [`/account/profile`](/ecosystem-platform/api#tag/Account/operation/getAccountProfile) endpoint without any further changes.

### Registering a Google IAP subscriber

SubPlat needs to be able to associate a Google IAP subscription in Google's system to a specific FxA user. This is done by registering each Google IAP subscriber with the [`/subscriptions/iap/play-token/${appName}`](/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapPlaytokenAppname) endpoint.

By design, we allow only one FxA user per Play Store [`productId`](https://support.google.com/googleplay/android-developer/answer/140504#zippy=%2Ccreate-a-new-subscription), which is how Google uniquely identifies the user's device when the subscription was purchased.

This endpoint can be used to register a new Google IAP subscriber or to migrate an existing Google IAP subscriber. For the latter, see [(Optional) Migrate existing Google IAP subscribers to SubPlat](#optional-migrating-existing-google-iap-subscribers-to-subplat).

### (Optional) Migrating existing Google IAP subscribers to SubPlat

This section only applies to products that currently have a direct integration with Google who need to migrate existing subscribers to SubPlat.

This step can be done by a developer. Before proceeding, complete the steps under [Configuration](#configuration) and [SubPlat API Calls](#subplat-api-calls). See also the [Testing your integration](#testing-your-integration) section.

To migrate existing subscribers to SubPlat, use the existing registration endpoint ([`/subscriptions/iap/play-token/${appName}`](/ecosystem-platform/api#tag/Subscriptions/operation/postOauthSubscriptionsIapPlaytokenAppname)) to register each existing user with SubPlat.

## Testing your integration

Currently, there is no sandbox or separate test environment. To create a test subscription, append `(Stage)` to the end of a subscription title in the Google Play Console to differentiate from a Production subscription. This approach will enable RPs to test multiple scenarios to understand what to expect.

### End-to-end testing of SubPlat APIs

After development and the steps above are complete (and importantly, before involving QA), it is recommended for the lead RP integration engineer to pair with the lead SubPlat integration engineer to test the following:

- [Getting the current subscription status for a FxA user](#getting-the-current-subscription-status-for-a-fxa-user)
- [Registering a Google IAP subscriber](#registering-a-google-iap-subscriber)
- [Send Real-time developer notifications to SubPlat](#send-real-time-developer-notifications-to-subplat)
- [(Optional) Migrating existing Google IAP subscribers to SubPlat](#optional-migrating-existing-google-iap-subscribers-to-subplat)
