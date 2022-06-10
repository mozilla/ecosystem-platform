---
title: Storybook Deploys with CircleCI
---

Several of the packages in this repository use [Storybook](https://storybook.js.org/) to build and demonstrate user interface components (mostly in React). These notably include [fxa-settings](#UPDATE-ME), [fxa-payments-server](#UPDATE-ME), and [fxa-react](#UPDATE-ME).

The latest Storybook builds on the main branch, can be found [here](https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/index.html).

For most [test runs in CircleCI](https://github.com/mozilla/fxa/blob/main/.circleci/config.yml), a static build of each package's Storybook for the relevant commit is published to a website we host on Google Cloud Platform. [Click here](https://storage.googleapis.com/mozilla-storybooks-fxa/index.html) to view the index page.

:::tip
You can find the Storybook build associated with a given commit on GitHub by clicking the "Details" link next to a **storybooks: pull request** check, accessible via clicking the green check mark next to the commit title.

![Example showing how to preview a Storybook build](../assets/storybook-circleci.png)
:::

## Maintaining Storybook Builds

If you've been given access, the Google Cloud Platform project dashboard for the website can be [found here](https://console.cloud.google.com/home/dashboard?project=storybook-static-sites).

We use [mozilla-fxa/storybook-gcp-publisher](https://github.com/mozilla-fxa/storybook-gcp-publisher) for publishing Storybook builds. Refer to its repository for full documentation.

For quick reference, here are a few [CircleCI environment variables](https://github.com/mozilla-fxa/storybook-gcp-publisher#basic-1) used by `storybook-gcp-publisher` that are relevant to FxA operations in CircleCI. Occasionally they may need maintenance or replacement (e.g. in case of a security incident involving another tool that exposes variables):

- `STORYBOOKS_GITHUB_TOKEN` - personal access token on GitHub for use in posting status check updates
- `STORYBOOKS_GCP_BUCKET` - name of the GCP bucket to which Storybook builds will be uploaded
- `STORYBOOKS_GCP_PROJECT_ID` - the ID of the GCP project to which the bucket belongs
- `STORYBOOKS_GCP_CLIENT_EMAIL` - client email address from GCP credentials with access to the bucket
- `STORYBOOKS_GCP_PRIVATE_KEY_BASE64` - the private key from GCP credentials, encoded with base64 to accommodate line breaks
