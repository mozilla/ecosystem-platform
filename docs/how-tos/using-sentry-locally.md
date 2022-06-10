---
title: Using Sentry.io for Local Development
---

FxA uses [sentry.io](https://sentry.io) to monitor errors and performance in production / staging. FxA developers can also use [sentry.io](https://sentry.io) during local development. Here are a few scenarios where enabling sentry locally might be helpful:

- Validating that an error reproduced locally aligns with an error reported in staging or production.
- Auditing performance / errors after exploratory testing, functional testing, or a load test.
- Gaining a better understanding of calls made by a certain workflow or endpoint. 

To enable sentry for local development, simply set these environment variables in your root-level `.env` file (that you may need to create) to their respective DSN settings. When these variables are defined, sentry will be activated. 

- SENTRY_ENV=local
- [SENTRY_DSN_ADMIN_PANEL](https://sentry.io/settings/mozilla/projects/fxa-admin-panel/keys/)
- [SENTRY_DSN_AUTH](https://sentry.io/settings/mozilla/projects/fxa-auth/keys/)
- [SENTRY_DSN_CONTENT](https://sentry.io/settings/mozilla/projects/fxa-content/)
- [SENTRY_DSN_CUSTOMS](https://sentry.io/settings/mozilla/projects/fxa-customs/)
- [SENTRY_DSN_EVENT_BROKER](https://sentry.io/settings/mozilla/projects/fxa-event-broker/keys/)
- [SENTRY_DSN_GRAPHQL_API](https://sentry.io/settings/mozilla/projects/fxa-graphql-api/keys/)
- [SENTRY_DSN_PAYMENTS](https://sentry.io/settings/mozilla/projects/fxa-payments/keys/)
- [SENTRY_DSN_PROFILE](https://sentry.io/settings/mozilla/projects/fxa-profile/keys/)
- [SENTRY_DSN_SUPPPORT_PANEL](https://sentry.io/settings/mozilla/projects/fxa-support-panel/)
- [SENTRY_DSN_BROWSERID](https://sentry.io/settings/mozilla/projects/fxa-browserid-verify/keys/)

:::tip
Each variable name links to the sentry.io page containing the DSN value you need to set. Asking a fellow engineer for a copy-and-paste of the environment variables and their values might be the fastest route though... 
:::

Once the local environment is configured, stop and start the FxA stack and proceed with exploratory testing. Then go to [sentry.io](https://sentry.io), log in with SSO, and [filter to the local environment](https://docs.sentry.io/product/sentry-basics/environments/). Performance stats and errors from your system will be visible.

Keep in mind that developers share the local environment in sentry, so it’s best practice to leave these DSN environment variables undefined when sentry is not activley being used. Doing so will reduce noise in the sentry 'local' environment and make the developer experience better for those who are actively using sentry.

To easily enable / disable sentry for local development, defining the SENTRY_DSN_* environment variables in the .env file in the root of FXA is a good approach. This file is git ignored, so the settings won’t accidentally get leaked, and the [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) utility makes managing this trivial. Here’s a quick example of temporarily running the FxA stack with sentry enabled via the .env file.

```
# If you don’t already have dotenv installed, install it.
yarn global add dotenv-cli

# Double check that the .env file has the proper SENTRY_DSN_* values configured.
cat .env

# Make sure dev stack has been stopped. PM2 pulls in env state on start, not restart.
yarn stop

# Start the stack with the .env file applied.
dotenv -- yarn start 
```
