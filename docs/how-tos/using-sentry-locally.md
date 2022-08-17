---
title: Using Sentry.io for Local Development
---

FxA uses [sentry.io](https://sentry.io) to monitor errors and performance in production / staging. FxA developers can also use [sentry.io](https://sentry.io) during local development. Here are a few scenarios where enabling sentry locally might be helpful:

- Validating that an error reproduced locally aligns with an error reported in staging or production.
- Auditing performance / errors after exploratory testing, functional testing, or a load test.
- Gaining a better understanding of calls made by a certain workflow or endpoint. 

To enable sentry for local development, simply set these environment variables in your root-level `.env` file (that you may need to create) to their respective DSN settings. When these variables are defined, sentry will be activated. 

```
SENTRY_ENV=local
SENTRY_DSN_ADMIN_PANEL=
SENTRY_DSN_AUTH=
SENTRY_DSN_CONTENT=
SENTRY_DSN_CUSTOMS=
SENTRY_DSN_EVENT_BROKER=
SENTRY_DSN_GRAPHQL_API=
SENTRY_DSN_PAYMENTS=
SENTRY_DSN_PROFILE=
SENTRY_DSN_SUPPPORT_PANEL=
SENTRY_DSN_BROWSERID=
```

:::tip
DSN settings can be found by going to sentry.io, navigating to the project's _settings_, and selecting _client keys_. For example, the setting for SENTRY_DSN_ADMIN_PANEL can be found [here](https://sentry.io/settings/mozilla/projects/fxa-admin-panel/keys/).
:::

:::tip
Each variable name links to the sentry.io page containing the DSN value you need to set. Asking a fellow engineer for a copy-and-paste of the environment variables and their values might be the fastest route though... 
:::

:::tip
It's totally acceptable to only specify the DSN values for the projects you care about. 
:::

Once the local environment is configured, stop and start the FxA stack and proceed with exploratory testing. Then go to [sentry.io](https://sentry.io), log in with SSO, and [filter to the local environment](https://docs.sentry.io/product/sentry-basics/environments/). Performance stats and errors from your system will be visible. It may take several minutes for the error to propagate, so if you don't see the error and are confident the configuration is good, check back later.

Keep in mind that developers share the local environment in sentry, so it’s best practice to leave these DSN environment variables undefined when sentry is not actively being used. Doing so will reduce noise in the sentry 'local' environment and make the developer experience better for those who are actively using sentry.

To easily enable / disable sentry for local development, defining the SENTRY_DSN_* environment variables in the .env file in the root of FXA is a good approach. This file is git ignored, so the settings won’t accidentally get leaked, and the [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) utility makes managing this trivial. *You must install dotenv-cli globally for this to work!* Here’s a quick example of temporarily running the FxA stack with sentry enabled via the .env file.

```
# Double check that the .env file has the proper SENTRY_DSN_* values configured.
cat .env

# Make sure dev stack has been stopped. PM2 pulls in env state on start, not restart.
yarn stop

# Start the stack with the .env file applied.
dotenv -- yarn start 
```
