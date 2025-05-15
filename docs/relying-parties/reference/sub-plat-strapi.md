---
id: sub-plat-strapi
title: SubPlat - Strapi
sidebar_label: Subscription Platform - Strapi
---

# Managing Subscriptions with Strapi

Product managers and Relying parties can manage Mozilla Subscriptions with [Strapi](https://strapi.io/), a headless content management system (CMS).

## Getting Started

There are separate Strapi instances for each environment - [stage](https://special-dream-8c48be3fee.strapiapp.com/admin/auth/login) / [production](https://bold-life-f3ef2932ad.strapiapp.com/admin/auth/login).

- If you do not have access to Subscription Platform in Strapi, please let us know in the `#subscription-platform` Slack channel.

## Managing Content

Content Manager is where all content entries can be found once they are created. To find specific entries to view, edit, or delete, you can search and filter down relevant content within each collection type (e.g. capabilities, common content, etc).

A new content entry can be added by clicking the "Create new entry" button located at the top right of the collection type's page.

<img src={require('../../assets/subplat-strapi-new-entry.png').default} alt="Create new Entry" width="760" />

| Content models   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capability       | **Required.** Capabilities enabled by the subscription product that services honor, and that customers are entitled to depending on the offering purchased.<br /> - Product managers are to provide the name(s) of capabilities and the Stripe Product ID (from Stripe) to SubPlat Engineers. <br /> - SubPlat Engineers are to add capabilities (and link the related service) into Strapi. <br /> - Product managers are to add capability(ies) to the Capabilities field in Offering.                                                                                                                                                                                                                                                                                                                                          |
| Common content   | Optional. Content used on multiple pages (e.g., Privacy Notice URL, TOS URL, Success Action Button URL, etc.), not specific to a certain component. If the product offering is available in other locales, select the desired locale in the dropdown menu located on the top right of the page, and fill in translations.<br/>- SubPlat Engineers are to add locales if missing from the dropdown menu. <br/>- Product managers are to create this entry (as well as fill in translations) and add it to Offering, if applicable.                                                                                                                                                                                                                                                                                                 |
| Coupon Config    | **WORK IN PROGRESS - Keep coupon configuration in Stripe until further notice**<br />Optional. Coupon configuration options of the Stripe Promotion Codes valid in specified countries for the product offering. <br/>- Product managers are to create and add this entry to Offering, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| IAP              | Optional. IAP configurations that include the Apple App Store productIds and/or Google Play product SKUs (now called product IDs) that are mapped to this Offering. <br/>- Product managers are to create and add this entry to Offering, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Offering         | **Required.** The configuration of the subscription product. This entry includes the Stripe Product ID from Stripe of the product offering.<br/>It requires the Capabilities and Purchase entries, as well as the `internalName`, `apiIdentifier`, and `countries` fields.<br/>If the product has multiple tiers, each tier should be a separate offering (e.g., 123Done Basic, 123Done Pro, 123Done Premium, etc).<br/>If the product has legacy single-currency product plans, add their Stripe Plan IDs in the Stripe Legacy Plans field.<br/>If applicable, this entry should be added to a Subgroup if a customer is able to upgrade from or to this product offering (see Subgroup).<br/>- SubPlat Engineers are to add countries if missing from the dropdown menu.<br/>- Product managers are to create this entry.<br /> |
| Purchase         | **Required.** This entry requires the related Purchase Details and Offering entries to the product offering.<br/>The Stripe Plan Choices field should only include the Stripe Plan IDs of the new multi-currency plans that should be available on the Checkout page for this product.<br/>Note: Legacy single-currency product plans should be added to the Stripe Legacy Plans field in Offering.<br/>- Product managers are to create and add this entry to Offering.                                                                                                                                                                                                                                                                                                                                                          |
| Purchase Details | **Required.** Details related to the product offering, such as product name and webIconURL. If the product offering is available in other locales, select the desired locale in the dropdown menu located on the top right of the page. <br/>As a reminder, product managers can either create a pull request to add the product icons to the repo, or share the icons with SubPlat Engineers, to add to the CDN for the webIconURL.<br/>- SubPlat Engineers are to add locales if missing from the dropdown menu. <br/>- Product managers are to create this entry (as well as fill in translations) and add it to Purchase.                                                                                                                                                                                                     |
| Service          | **Required.** Mapping of the services to relevant OAuth configuration of the product and its capabilities. <br/>- Product managers and SubPlat engineers are to confirm the OAuth ID of the product (assigned from Accounts team). <br/>- SubPlat Engineers are to add service (and link the related capabilities) into Strapi. <br/>- Product managers are to add service in the Service field in Offering.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Subgroup         | Optional. A collection of subscription products in which only one product is active at a time. The order of the offerings in the Offering field is the order in which a customer can upgrade from and to within the sub group.<br/>- Product managers are to create this entry and add Offerings, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Creating a new product

A subscription product can be entered into Strapi by creating an Offering entry, in which you will need the Stripe Product ID from Stripe. While you can start creating entries in Strapi in any order, we recommend first creating and/or checking that the following entries exists, as they will ultimately be needed in the Offering entry:

- Common Content
- Purchase Details
- Purchase
  - A Purchase entry requires a Purchase Details entry
  - NOTE: You will need to come back to this entry to select and save the respective offering once it has been created
- Capability
  - If the capabilities for the product offering are not yet in Strapi, please let us know in the `#subscription-platform` Slack channel.

If applicable, create and add the following to the product offering:

- Coupon Config
- IAP
- Sub group

Once all entries are complete and ready to ship, be sure to set the status of all related content entries to the product offering to "Published" and check that the Published tab includes all desired information. Once set to "Published" status, you may need to refresh the checkout page of the product offering to see the changes.

### ... what if my product is only available in specific countries?

In the Offering entry, select the country (or countries) in which the product is available in the dropdown menu of the required `countries` field.

If a country is missing from the dropdown menu, please let us know in the `#subscription-platform` Slack channel.

### ... what if my product has multiple locales?

In Common Content and Purchase Details entries, there is a dropdown menu for locales located on the top right of the page. Select the desired locale and complete the necessary translation fields (if convenient, you can also fill in fields from another locale using the button next to the dropdown). Once saved, be sure to publish the entry as well.

If locales are missing from the dropdown menu, please let us know in the `#subscription-platform` Slack channel.

<img src={require('../../assets/subplat-strapi-locale-dropdown.png').default} alt="Selecting locale" width="400" />

### ... what if my product is currency-specific or a multiple currency offering?

There is no need to include currency in Strapi.

### ... what if my product has tiered plans?

Each tiered plan should have its own Offering with the product name and tier level in the Internal Name (e.g. 123Done Basic, 123Done Pro, 123Done Premium, etc).

:::note Each tiered plan should have its own Stripe Product ID
:::

### ... what if my product is a bundle?

In Offering, include the capabilities for the product in the Capabilities field.

For example, in the "123 Foxkeh" Offering below, the capabilities "123donePro" (for 123 Done Pro Plus) and "foxkeh" (for Cooking with Foxkeh) are included in the Capabilities field.

<img src={require('../../assets/subplat-strapi-bundle.png').default} alt="Bundle" width="500" />

### ... what if my product can be upgraded from or to another product?

Once the Offering has been created, you can add it to either a new or existing Subgroup. In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position.

For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "123 Foxkeh".

<img src={require('../../assets/subplat-strapi-subgroup.png').default} alt="Subgroup" width="500" />

### ... what if my product has archived plans?

In Offering, add the Stripe Plan ID(s) of the archived plan(s) in the Stripe Legacy Plans field.
