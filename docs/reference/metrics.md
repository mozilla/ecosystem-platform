---
title: Metrics
---

Last updated: `Sep 15th, 2023`

Firefox accounts collects metrics from servers running our code and clients accessing our services.  Mozilla takes data collection seriously so our policies and processes around it may seem more complex than most organizations but it is in an effort to grant agency to users over their own data.

Note that the [Mozilla Data Collection policies](https://wiki.mozilla.org/Data_Collection) apply to Firefox Accounts.

Our code is deployed to a staging environment before it goes to production so the metrics detailed below are available for both environments.  The details below will focus mostly on production.

Keep in mind that Firefox accounts allows users to opt-out of data collection via a toggle on the account settings page.

We also have a [metrics section which expands on the history of our system and how these are implemented](../explanation/metrics).

## Application metrics

:::caution
This is all undergoing major changes now with the move to GCP as well as a migration to using Glean.  Hopefully we can remove this message in 2024 and simplify these docs.
:::

These are logs from Firefox accounts code.  These are probably the most useful logs for product decision making as they were written by hand by engineers.  They are also the most complex.

* Example data recorded
  * See the [taxonomies in the Mozilla Data Docs](https://docs.telemetry.mozilla.org/datasets/fxa.html).
  * As we move to Glean the dictionaries here will remain up to date automatically:  [Frontend](https://dictionary.telemetry.mozilla.org/apps/accounts_frontend) and [Backend](https://dictionary.telemetry.mozilla.org/apps/accounts_backend)
* Recorded with
  * These are logged via [mozlog](https://github.com/mozilla/mozlog/) as regular server logs.
  * The logs are immediately ingested into [GCP Cloud Logging](https://cloud.google.com/logging)
  * From there they are passed and stored in BigQuery in the `moz-fx-fxa-prod.gke-fx-fxa-prod` or `moz-fx-fxa-nonprod.gke-fx-fxa-stage` projects depending on which environment they are coming out of.  These projects are relatively restricted and not for general consumption.
  * Every 24 hours, [some ETL jobs](https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts_derived) run which create derived tables from the original logs and store them in the `mozdata` project in BigQuery.  `mozdata` is accessible by anyone at Mozilla.  Please note: *Derived tables do not include all the events or details in the original logs.  You can read the queries that create the derived tables to see what is included.*

  * Additionally, there are some [user-facing datasets](https://github.com/mozilla/bigquery-etl/tree/main/sql/moz-fx-data-shared-prod/firefox_accounts) of that same data, and also in `mozdata`, which are designed to be easier to use.
* Accessible via
  * [BigQuery](https://console.cloud.google.com/bigquery?).  Look for the `firefox_accounts` dataset in the `mozdata` project.  *Be aware that there are large amounts of data in BigQuery and you can spend a lot of money if you don't restrict your queries.*
  * Looker is backed by BigQuery and there is a [Firefox Accounts folder](https://mozilla.cloud.looker.com/folders/374) there
  * There are [several dashboards in grafana](https://earthangel-b40313e5.influxcloud.net/?orgId=1&search=open&query=fxa) with a mix of these metrics on them
  * See the section below about raw logs also


### Working with Raw Logs

If you need real-time data you need to be looking at the raw logs in `moz-fx-fxa-prod.gke-fx-fxa-prod` or `moz-fx-fxa-nonprod.gke-fx-fxa-stage`.  Otherwise there will be a 24 hour delay.  We don't run our normal metrics out of those logs because it is too expensive and slow.

As noted above, these datasets are restricted but if you have access you'll find each package logging to those datasets in either the `stderr` or `stdout` tables.  You can (and should) filter your queries by the package.  For example, to only look at logs from `fxa-customs-server` we would filter where `labels.k8s_pod_deployment="customs" AND resource.labels.container_name="customs"`.  This will capture the pod name and the container name.  We need to filter on both because each pod runs the package as well as nginx.


## Crashes

* Example data recorded:
  * `t is undefined` and a link to the JS that failed to run
  * `An internal validation check failed.` and details about what the software expected to see and what it actually saw
* Recorded with
  * Sentry
* Accessible via
  * [Sentry](https://sentry.prod.mozaws.net/operations/)
  * Look for any project starting with `fxa-`.  Eg. `fxa-auth-prod` and `fxa-content-client-prod`

## Server Health

* Example data recorded
  * There are 30 healthy hosts running
  * A host is running at 100% cpu
* Recorded with
  * The reporting tools built into the clouds we use
* Accessible via
  * In their most detailed form, you'd need access to the cloud consoles themselves, but most of the data is also available in our Grafana instance.  [Here is one of our dashboards hitting CloudWatch for metrics](https://earthangel-b40313e5.influxcloud.net/d/HqOQKXoZk/fxa-auth-prod-elb?orgId=1)

## Front-end Performance 

* Example data recorded
  * It took 400ms to load `/settings`
* Recorded with
  * As of this writing we record the data using our own library (which maybe isn't totally accurate) and write the data via `statsd` which ends up in influxdb.  We expect to move to [Sentry Performance](https://sentry.io/for/performance/) soon
* Accessible via
  * Look for the `svcops_aws` project in Grafana.  [Here is a dashboard with some examples](https://earthangel-b40313e5.influxcloud.net/d/1tthDDrWk/content-server?orgId=1)