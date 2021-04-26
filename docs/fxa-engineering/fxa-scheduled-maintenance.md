---
id: fxa-scheduled-maintenance
title: Scheduled Maintenance
sidebar_label: Scheduled Maintenance
---

## Scheduled Maintenance

When planning scheduled maintenance that will result in downtime for Firefox Accounts you must follow these procedures to notify users. Activities that can cause downtime include:

- MySQL changes requiring failover
- Redis changes requiring failover

## Scheduling Procedure

1. Pick a time to perform the scheduled maintenance. Based on historical traffic patterns, Saturday at 11PM ET is a good default choice. Think about how long you'll need to apply changes. 30 minutes is a good default choice, but ensure that gives you wiggle room if it takes longer than expected.
2. Announce the scheduled maintenance in the Firefox Accounts + Operations meeting on Tuesday. Talk through what change is being made, rollback procedures, impact on users, that sort of thing
3. Draft a notice containing:
  - The time (include a link to https://time.is/compare for easier timezones)
  - The change being made 
  - Impact on users
  - Example: 
    > On [2021-04-24 at 11pm ET](https://time.is/2300_24_Apr_2021_in_Toronto?Firefox_Accounts_scheduled_maintenance) (this Saturday) we will be upgrading the Firefox Accounts oauth database to a larger instance size. End users will not be able to sign in or make new subscriptions for 5-10 minutes.
4. Send the notice to firefox-accounts-notices@mozilla.com
5. Send the notice to Slack channels:
  - #fxa
  - #subscription-platform
6. Set maintenance window for [Kinto Webextensions](https://moz-svc-ops.pagerduty.com/service-directory/PLMUB9U/activity) so Sven doesn't get paged

## Downtime Procedure Notes

- Take a snapshot if you're making changes to MySQL or Redis
- Re-up your scheduled maintenance notice in Slack before maintenance begins
- Send a Slack message when scheduled maintenance has been completed
