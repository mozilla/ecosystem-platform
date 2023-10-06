---
id: product-metrics
title: RP Product Metrics in Looker
sidebar_label: Product metrics
---

Last updated: `Oct 6th, 2023`

## Introduction

As of [September 30th, 2023](https://mozilla-hub.atlassian.net/browse/FXA-6927), the Subscription Platform provides product dashboards in Looker that include subscription, customer, funnel, acquisition and error metrics for all integrated RPs. You can easily filter the dashboards by product to see only your product metrics.

A more technical discussion (geared toward FxA engineers) can be found in the [Metrics](/ecosystem-platform/reference/metrics) reference.

## Prerequisites

This guide assumes you are already integrated with FxA/the Subscription Platform; please see [Integration with Subscription Platform](/ecosystem-platform/relying-parties/tutorials/integration-with-subscription-platform) for more information.

It is recommended to review the data team's [Looker introduction Udemy course](https://mozilla.udemy.com/course/mozilla-looker-getting-started/learn/lecture/34914774#overview) and [docs](https://mozilla-hub.atlassian.net/wiki/spaces/DATA/pages/6849492/Looker+Training+Resources) as well as [Looker's official documentation](https://cloud.google.com/looker/docs/intro) if you have never used it before.

## Accessing the SubPlat product dashboards in Looker

Anyone at Mozilla can view the SubPlat Looker dashboards, which are in the [Subscription Platform folder](https://mozilla.cloud.looker.com/folders/1355) and include:
* [SubPlat Subscriptions](https://mozilla.cloud.looker.com/dashboards/1329)
* [SubPlat Checkout](https://mozilla.cloud.looker.com/dashboards/1371)

### SubPlat Subscriptions dashboard

The Subscriptions dashboard leverages one or more Subscription Platform > Logical Subscription(s) explores in Looker. This pulls data indirectly from our subscription providers (i.e. Stripe, Apple and Google), so it allows us to see information like:
 * Customer and subscription totals and changes over time
 * Subscription lifecycle events like start, end and plan changes (i.e. upgrades or downgrades)

#### What is a Logical Subscription?

Think of this as a subscription provider's view on a subscription. For example, Stripe doesn't know about bundled subscriptions, so a bundle is considered a single subscription.

Currently, only Stripe and PayPal subscriptions are reflected in these explores. Once [DENG-975](https://mozilla-hub.atlassian.net/browse/DENG-975) and [DENG-976](https://mozilla-hub.atlassian.net/browse/DENG-976) are complete, these explores will also include Google and Apple IAP subscriptions, respectively.

### SubPlat Checkout dashboard

The Checkout dashboard leverages the Firefox Accounts > All Event Counts explore in Looker and is based on user events pulled from SubPlat's application logs, so it allows us to see information like:
* Conversion funnel events during checkout
* New subscriber acquisition
* Errors encountered during checkout

#### What is Checkout?

Checkout is the process by which a user subscribes, upgrades or downgrades their subscription through SubPlat's website.

### How the dashboards get updated

There are ETLs (Extract, Transform and Load jobs) that run daily. 

You can see when data for a given panel in a dashboard was last updated by clicking on the overflow menu in the top right corner of the panel, clicking "Explore from here", selecting the Table Metadata > Last Modified Date > Date dimension in the left side bar and rerunning the data to populate that column.

:::note
The date the data was updated captures data up to and including the day prior to the update. For example, a Last Modified Date of 2023-10-03 indicates that the data in the panel is up to and including data from 2023-10-02 UTC.
:::

## Filtering the SubPlat product dashboard for your product(s)

While the default dashboards show subscription and customer data for all products, there are a number of top level dashboard filters including a Product Name filter.

Simply click the Product Name filter at the top of the dashboard and check every product you'd like to see data for, then click the "Update" button to update the dashboard.

## Looker tips and tricks
* When you apply dashboard filters, the dashboard URL changes, and this URL can be easily bookmarked or shared to automatically apply the same filters (such as product name and/or a date range).
  * E.g. https://mozilla.cloud.looker.com/dashboards/1329?Date=2023%2F09%2F26+to+2023%2F10%2F04&Product+Name=Mozilla+VPN%2CMozilla+VPN+%26+Firefox+Relay is a deep link that filters by product name for Mozilla VPN and Mozilla VPN & Firefox Relay for the date range of 2023-09-26 to 2023-10-03.
* When viewing a panel with a legend, clicking a legend item toggles its visibility, and alt + clicking the legend item singles just that item out in the panel.
* Some panels have a small Info icon. If you hover over the icon, it will tell you more information about that panel.
* Use as small a date range as possible for faster results when updating dashboards, panels or data in an explore.
* When exploring the data for a given panel (say by clicking the overflow menu on the panel from a dashboard and clicking "Explore from here"), any filters applied will also update the SQL query in the SQL tab of the bottom-most Data section in the main content area.

## How to get help

* Have a Looker or other data question? Ask in the [`#data-help` Slack channel](https://app.slack.com/client/T027LFU12/C4D5ZA91B).
* Have a product question about one of the SubPlat dashboards? Ask in the [`#subscription-platform` Slack channel](https://app.slack.com/client/T027LFU12/CG0AJ6E77).
