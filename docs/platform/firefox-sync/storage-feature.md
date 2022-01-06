---
id: storage-feature
title: Storage
sidebar_label: Storage
---

## Overview
Firefox Sync is designed to work with multiple storage options, allowing users to host their own Sync servers in order to connect to self hosted storage options. Currently, Sync storage supports MySQL, SQLite, and Spanner.

The current version of the Sync Storage API is 1.5. 

## Schema

The Sync Storage API defines an HTTP web service used to store and retrieve simple JSON objects called Basic Storage Objects (BSOs), which are organized into named Collections. For more detailed schema information, please refer to the [SyncStorage 1.5 API docs](https://mozilla-services.readthedocs.io/en/latest/storage/apis-1.5.html). 

## MySQL & SQLite

Although Spanner is the database of choice in production, it's not always ideal for testing local changes (or if you want to self-host). We also support MySQL and SQLite, which can be configured [here](https://github.com/mozilla-services/syncserver/blob/master/syncserver.ini#L23) in the syncserver.

## Spanner

Google's [Cloud Spanner](https://cloud.google.com/spanner/) was selected in 2019 as a viable replacement for the existing production MySQL nodes mainly due to it's highly scalable infrastructure. There is one major Spanner-specific tradeoff that has been made within the Sync server logic in order to work with it, which is worth mentioning here:

* We needed to change our `limits.max_total_records` from `10,000` to [`1,666`](https://github.com/mozilla-services/syncstorage-rs/blob/master/spanner_config.ini) due to [this issue](https://github.com/mozilla-services/syncstorage-rs/issues/333) which stems from a Spanner [limitation for mutations per commit](https://cloud.google.com/spanner/quotas). This limits to `20,000 mutation operations`. This number is deceptively smaller than it appears however, due to the [fact that inserts and updates count each column as a single operation](https://cloud.google.com/spanner/quotas#note2).
