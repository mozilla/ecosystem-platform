---
id: sub-plat-contentful
title: SubPlat - Contentful
sidebar_label: Subscription Platform - Contentful
---

import contentfulNavigationBar from '../../assets/subplat-contentful-nav.png';
import contentfulAddEntry from '../../assets/subplat-contentful-add-entry.png';
import contentfulBundle from '../../assets/subplat-contentful-bundle.png';
import contentfulSubGroup from '../../assets/subplat-contentful-subgroup.png';
import contentfulSingleLocale from '../../assets/subplat-contentful-single-locale.png';
import contentfulLocales from '../../assets/subplat-contentful-locales.png';

# Managing Subscriptions with Contentful

Product Managers and Relying parties can manage Mozilla Subscriptions with [Contentful](https://www.contentful.com/content-platform/), a headless content management system (CMS).

## Getting Started

You can log into Contentful through [Mozilla Dashboard](https://sso.mozilla.com/dashboard).

- If you do not have access to Subscription Platform in Contentful, please let us know in the `#subscription-platform` Slack channel. You will receive an invite via email to verify your account.

Once logged in, you can determine the environment you are currently in by checking the navigation bar. This is also where you can navigate between environments.

<img src={contentfulNavigationBar} alt="Navigation bar" width="400" />

## Managing Content

The Content tab is where all content entries can be found once they are created. You will be able to search and filter the list for specific entries to view, edit, or delete.

A new content entry can be added by clicking the "Add entry" button located at the top right of the page and selecting the desired entry based on our [content models](#glossary-of-content-models).

<img src={contentfulAddEntry} alt="Add Entry" width="500" />

## Creating a new product

A subscription product can be entered into Contentful by creating an [Offering](#offering) entry, in which you will need the Stripe Product ID. An Offering entry also requires the following entries, which can be added into Contentful in any order:

- [Capability](#capability). The capability enabled by the subscription product. If a product has multiple capabilities, each capability should have its own entry and all related capabilities for the product should be added to the Capabilities field of the Offering.
  - Each Capability should link to a [Service](#service) entry, which will need the OAuth Client ID for the service that was assigned from the Accounts team. As a reminder, IDs are unique between stage and prod environments.
- [Purchase](#purchase). This entry includes all of the Stripe Plan ID(s) related to the product and should be added to the Default purchase field of the Offering.
  - Each Purchase will need a [Purchase Details](#purchase-details) entry, which requires the Web Icon URL for the product.

If applicable, the following entries can also be linked to the product/offering:

- [Common Content](#common-content)
- [Coupon Config](#coupon-config)
- [IAP](#iap)

Once all entries are complete and ready to ship, be sure to set the status of all related content entries to "Published".

### ... what if my product has multiple locales?

When creating the [Offering](#offering) for the product, select the countries that the product should be available in the Countries field.

In addition, the sidebar will have a Translation section. Check that "Multiple Locales" is selected in the dropdown, then click "Change", select/deselect the locales to include for the product, and save changes.

If countries or locales are not included in the selection, please let us know in the `#subscription-platform` Slack channel.

<img src={contentfulSingleLocale} alt="Changing to multiple locales" width="400" />
<img src={contentfulLocales} alt="Adding locales" width="400" />

### ... what if my product is currency-specific or a multiple currency offering?

There is not need to include currency in Contentful.

### ... what if my product has tiered plans?

Each tiered plan should have its own [Offering](#offering) with the product name and tier level in the Internal Name. Each Offering should include:

- all related capabilities for the tiered plan in the Capabilities field, and
- a [Purchase](#purchase) entry that includes all related Stripe Plan ID(s) for the tiered plan in the Default purchase field

:::note Each tiered plan should have its own Stripe Product ID
:::

### ... what if my product is a bundle?

Once the [Service](#service) and [Capability](#capability) have been created, add the capability to a new or existing [Offering](#offering). In Offering, you will see a Capabilities field, in which all of the related capabilities for the product should be included.

For example, in the "Bundle - 123 Foxkeh" Offering below, this offering includes the capabilities for both "123Done Pro Plus" and "CookingWithFoxkeh 2".

<img src={contentfulBundle} alt="Bundle" width="500" />

### ... what if my product can be upgraded from or to another product?

Once the [Offering](#offering) has been created, you can add it to either a new or existing [Subgroup](#sub-group). In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position.

For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "Bundle - 123 Foxkeh".

<img src={contentfulSubGroup} alt="Subgroup" width="500" />

### ... what if my product has archived plans?

In [Offering](#offering), add the Stripe Plan ID(s) of the archived plan(s) in the Legacy Plans field.

## Glossary of Content Models

The content models and their respective fields include the following:

- [Capability](#capability)
- [Common content](#common-content)
- [Coupon Config](#coupon-config)
- [IAP](#iap)
- [Offering](#offering)
- [Purchase](#purchase)
- [Purchase Details](#purchase-details)
- [Service](#service)
- [Subgroup](#sub-group)

### Capability

Capabilities that [services](#service) honor, and that customers are entitled to depending on the [offering](#offering) they've purchased.

| Field         | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| Internal name | Required.                                                        |
| Slug          | Required.                                                        |
| Description   | Optional.                                                        |
| Services      | Optional. The [service](#service) associated to this Capability. |

### Common content

Content used on multiple pages, not specific to a certain component.

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internal name                 | Required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Privacy Notice URL            | Required. The URL for the webpage containing the Privacy Notice for the product offering.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Privacy Notice Download URL   | Required. The URL for a downloadable version of the Privacy Notice for the product offering. This has the same requirements as Terms Of Service Download URL.                                                                                                                                                                                                                                                                                                                                                                          |
| Terms of Service URL          | Required. The URL for the webpage containing the Terms of Service for the product offering.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Terms of Service Download URL | Required. The URL for a downloadable version of the Terms of Service for the product offering, used in emails. This must be a URL to the FxA CDN at https://accounts-static.cdn.mozilla.net. It can be either: <br/>a) a full, direct URL to a PDF (e.g. https://accounts-static.cdn.mozilla.net/legal/Mozilla_VPN_ToS/en-US.pdf), or, <br/>b) a URL without the language and file extension (e.g. https://accounts-static.cdn.mozilla.net/legal/mozilla_vpn_tos). See the "Legal Document Download URL" section for more information. |
| Cancellation URL              | Optional. Override URL for the Cancellation Survey for the product offering. This parameter is used as a hyperlink in emails sent to the customer when their subscription is cancelled due, manual cancellation, Mozilla account deletion, or failed payment.                                                                                                                                                                                                                                                                          |
| Email icon                    | Optional. Image URL for the product icon in email content. This must be a URL to the FxA CDN at https://accounts-static.cdn.mozilla.net.                                                                                                                                                                                                                                                                                                                                                                                               |
| Success Action Button Label   | Optional. An alternative label for the subscription success action button. The action is specified by successActionButtonURL.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Success Action Button URL     | Required. The download or subscription success action URL for the [Offering](#offering).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Newsletter Label Text Code    | Optional. A code used to determine which pre-defined labels to add to the newsletter checkbox. Valid values are `snp`, `hubs`, `mdnplus`. If no code is provided, the default label text is displayed. See examples of each string value in [Storybook](https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-payments-server/index.html?path=/story/components-newuseremailform--default).                                                                                                                         |
| Newsletter Slug               | Optional. Slugs that represent the available newsletters to send if a customer opts to sign up for them. Valid slug values are `mozilla-accounts`, `security-privacy-news`, `hubs`, `mdnplus`. Defaults to `mozilla-accounts`.                                                                                                                                                                                                                                                                                                         |

### Coupon config

Additional Coupon configuration options that are not currently supported by Stripe.

| Field                  | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| Internal name          | Required.                                                                        |
| Countries              | Optional. The countries in which the promotion codes can be applied.             |
| Stripe Promotion Codes | Optional. All of the Stripe promotion codes valid for the [Offering](#offering). |

### IAP

IAP configuration options required for IAP integrations.

| Field             | Description                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internal name     | Required.                                                                                                                                                                                                                     |
| Apple Product IDs | Optional. All of the Apple App Store productIds that map to this [Offering](#offering). There must only be one Stripe plan per App Store productId per environment (development/stage/production).                            |
| Google SKUs       | Optional. All of the Google Play product SKUs (now called product IDs) that map to this [Offering](#offering). There must only be one Stripe plan per Google Play product SKU per environment (development/stage/production). |

### Offering

Configuration of the subscription product.

| Field               | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Internal name       | Required.                                                                                          |
| Description         | Optional.                                                                                          |
| API Identifier      | Required. Identifier used in the URL path to uniquely identify this Offering.                      |
| Stripe Product ID   | Required. The Stripe Product ID of this Offering.                                                  |
| Countries           | Optional. The countries in which the Offering is available.                                        |
| Default purchase    | Required. The default [Purchase](#purchase) configuration to be used if no experiment is provided. |
| Experiment purchase | Optional. Experiment purchase configurations for this Offering.                                    |
| Capabilities        | Required. The [Capability](#capability) offered if a customer subscribes to this Offering.         |
| Coupon Config       | Optional. The [Coupon config](#coupon-config) offered if a customer subscribes to this Offering.   |
| IAP                 | Optional. The [IAP](#iap) associated to this Offering.                                             |
| Common Content      | Optional. The [Common content](#common-content) for this Offering.                                 |
| Legacy Plans        | Optional. All archived Stripe Plan IDs associated to this Offering.                                |

### Purchase

Purchase flow related configuration options.

| Field               | Description                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| Internal name       | Required.                                                                                              |
| Description         | Optional.                                                                                              |
| Stripe Plan Choices | Required. All active Stripe Plan IDs associated to the Stripe Product ID of the [Offering](#offering). |
| Purchase details    | Required. The associated [Purchase details](#purchase-details).                                        |
| Offering            | Required. The associated [Offering](#offering).                                                        |

### Purchase details

Available Purchase details component configuration options.

| Field         | Description                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internal name | Required.                                                                                                                                                                        |
| Details       | Optional. Feature details for the product. Each new line will be a new point in a bullet-point list in the product.                                                              |
| Product name  | Required. Title string override for the product name.                                                                                                                            |
| Subtitle      | Optional. A subtitle for the product, usually displayed beneath the name in UI.                                                                                                  |
| Web Icon      | Required. Image URL for product icon in web content. This must be a URL to the FxA CDN at https://accounts-static.cdn.mozilla.net. Product icon will be resized to 64x64 pixels. |

### Service

Mapping of the services to relevant OAuth configuration of the product and its capabilities.

| Field           | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Internal name   | Required.                                                                                        |
| Description     | Optional.                                                                                        |
| OAuth Client ID | Required. The OAuth Client ID assigned from the Accounts team. These IDs differ per environment. |
| Capabilities    | Optional. All [capabilities](#capability) enabled by this product for all Relying Parties.       |

### Sub group

A collection of subscription products in which only one product is active at a time.

| Field         | Description                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internal name | Required.                                                                                                                                                                          |
| Group name    | Optional. Name of the sub group                                                                                                                                                    |
| Offering      | Required. All [offerings](#offering) included in the subscription group. The order of the offerings is the order in which a customer can upgrade from and to within the sub group. |
