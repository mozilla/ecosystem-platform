---
id: sub-plat-contentful
title: SubPlat - Contentful
sidebar_label: Subscription Platform - Contentful
---

# Managing Subscriptions with Contentful

Product managers and Relying parties can manage Mozilla Subscriptions with [Contentful](https://www.contentful.com/content-platform/), a headless content management system (CMS).

## Getting Started

You can log into Contentful through [Mozilla Dashboard](https://sso.mozilla.com/dashboard).

- If you do not have access to Subscription Platform in Contentful, please let us know in the `#subscription-platform` Slack channel. You will receive an invite via email to verify your account.

Once logged in, you can determine the environment you are currently in by checking the navigation bar. This is also where you can navigate between environments.

<img src={require('../../assets/subplat-contentful-nav.png').default} alt="Navigation bar" width="400" />

## Managing Content

The Content tab is where all content entries can be found once they are created. You will be able to search and filter down relevant content based on structure and metadata to find specific entries to view, edit, or delete.

<img src={require('../../assets/subplat-contentful-add-entry.png').default} alt="Add Entry" width="500" />

A new content entry can be added by clicking the "Add entry" button located at the top right of the page and selecting the desired entry based on our content models below.

| Content models   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capability       | **Required.** Capabilities enabled by the subscription product that services honor, and that customers are entitled to depending on the offering purchased.<br /> - Product managers are to provide the name(s) of capabilities and the Stripe Product ID (from Stripe) to SubPlat Engineers. <br /> - SubPlat Engineers are to add capabilities (and link the related service) into Contentful. <br /> - Product managers are to add capability(ies) to the Capabilities field in Offering.                                                                                                                                                                                                                                                                                                                                       |
| Common content   | Optional. Content used on multiple pages (e.g., Privacy Notice URL, TOS URL, Success Action Button URL, etc.), not specific to a certain component. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected.<br/>- Product managers are to create and add this entry to Offering, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Coupon Config    | **WORK IN PROGRESS - Keep coupon configuration in Stripe until further notice**<br />Optional. Coupon configuration options of the Stripe Promotion Codes valid in specified countries for the product offering. <br/>- Product managers are to create and add this entry to Offering, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| IAP              | Optional. IAP configurations that include the Apple App Store productIds and/or Google Play product SKUs (now called product IDs) that are mapped to this Offering. <br/>- Product managers are to create and add this entry to Offering, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Offering         | **Required.** The configuration of the subscription product. This entry includes the Stripe Product ID from Stripe of the product offering, and requires the Capabilities and Purchase entries.<br/>If the product has multiple tiers, each tier should be a separate offering (e.g., 123Done Basic, 123Done Pro, 123Done Premium, etc).<br/>If the product has legacy single-currency product plans, add their Stripe Plan IDs in the Stripe Legacy Plans field.<br/>If applicable, this entry should be added to a Subgroup if a customer is able to upgrade from or to this product offering (see Subgroup). <br/>- Product managers are to create this entry.<br /> **NOTE: The Countries field is currently a feature that is work in progress. Please reach out if countries are missing in which the product is available** |
| Purchase         | **Required.** This entry requires the related Purchase Details and Offering entries to the product offering.<br/>The Stripe Plan Choices field should only include the Stripe Plan IDs of the new multi-currency plans that should be available on the Checkout page for this product.<br/>Note: Legacy single-currency product plans should be added to the Stripe Legacy Plans field in Offering.<br/>- Product managers are to create and add this entry to Offering.                                                                                                                                                                                                                                                                                                                                                           |
| Purchase Details | **Required.** Details related to the product offering, such as product name and webIconURL. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected. As a reminder, product managers can either create a pull request to add the product icons to the repo, or share the icons with SubPlat Engineers, to add to the CDN for the webIconURL.<br/>- Product managers are to create and add this entry to Purchase.                                                                                                                                                                                                                                                                                                                                          |
| Service          | **Required.** Mapping of the services to relevant OAuth configuration of the product and its capabilities. <br/>- Product managers and SubPlat engineers are to confirm the OAuth ID of the product (assigned from Accounts team). <br/>- SubPlat Engineers are to add service (and link the related capabilities) into Contentful. <br/>- Product managers are to add service in the Service field in Offering.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Subgroup         | Optional. A collection of subscription products in which only one product is active at a time. The order of the offerings in the Offering field is the order in which a customer can upgrade from and to within the sub group.<br/>- Product managers are to create this entry and add Offerings, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Creating a new product

A subscription product can be entered into Contentful by creating an Offering entry, in which you will need the Stripe Product ID from Stripe. An Offering entry also requires the following entries (which can be added into Contentful in any order):

- Capability
  - If the capabilities for the product offering are not yet in Contentful, please let us know in the `#subscription-platform` Slack channel.
- Purchase
  - A Purchase entry requires a Purchase Details entry

If applicable, the following entries can also be linked to the product offering:

- Common Content
- Coupon Config
- IAP

Once all entries are complete and ready to ship, be sure to set the status of all related content entries to the product offering to "Published". Once set to "Published" status, you may need to refresh the checkout page of the product offering to see the changes.

### ... what if my product has multiple locales?

When creating the Offering for the product, select the countries that the product should be available in the Countries field.

In addition, the sidebar of any entry will have a Translation section. Check that "Multiple Locales" is selected in the dropdown, then click "Change", select/deselect the locales to include for the product, and save changes.

Once saved, be sure to complete the translation fields in Common Content and Purchase Details, if applicable.

If countries or locales are not included in the selection, please let us know in the `#subscription-platform` Slack channel.

<img src={require('../../assets/subplat-contentful-single-locale.png').default} alt="Changing to multiple locales" width="400" />
<img src={require('../../assets/subplat-contentful-locales.png').default} alt="Adding locales" width="400" />

### ... what if my product is currency-specific or a multiple currency offering?

There is no need to include currency in Contentful.

### ... what if my product has tiered plans?

Each tiered plan should have its own Offering with the product name and tier level in the Internal Name (e.g. 123Done Basic, 123Done Pro, 123Done Premium, etc).

:::note Each tiered plan should have its own Stripe Product ID
:::

### ... what if my product is a bundle?

In Offering, include the capabilities for the product in the Capabilities field.

For example, in the "Bundle - 123 Foxkeh" Offering below, this offering includes the capabilities for both "123Done Pro Plus" and "CookingWithFoxkeh 2".

<img src={require('../../assets/subplat-contentful-bundle.png').default} alt="Bundle" width="500" />

### ... what if my product can be upgraded from or to another product?

Once the Offering has been created, you can add it to either a new or existing Subgroup. In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position.

For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "Bundle - 123 Foxkeh".

<img src={require('../../assets/subplat-contentful-subgroup.png').default} alt="Subgroup" width="500" />

### ... what if my product has archived plans?

In Offering, add the Stripe Plan ID(s) of the archived plan(s) in the Stripe Legacy Plans field.
