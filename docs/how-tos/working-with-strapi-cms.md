---
title: Working with Strapi CMS
---

Last updated: `June 30th, 2025`

This guide will help you set up and use the [Strapi](https://strapi.io/) CMS for customizing Mozilla Accounts (FxA) UI content. It covers local development, configuration, and how to create and test customizations for relying parties.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Cloning and Running Strapi Locally](#cloning-and-running-strapi-locally)
4. [Configuring the Environment](#configuring-the-environment)
5. [Starting Strapi and Creating an Admin Account](#starting-strapi-and-creating-an-admin-account)
6. [Verifying Content Types](#verifying-content-types)
7. [Generating an API Key](#generating-an-api-key)
8. [Configuring the Auth Server](#configuring-the-auth-server)
9. [Enabling CMS on the Frontend](#enabling-cms-on-the-frontend)
10. [Testing the Integration](#testing-the-integration)
11. [Creating a Relying Party Customization](#creating-a-relying-party-customization)
12. [Landing Code Back into fxa-strapi Repo](#landing-code-back-into-fxa-strapi-repo)
13. [Additional Resources](#additional-resources)

---

## Overview

Mozilla Accounts (FxA) supports UI customization via a headless CMS powered by Strapi. This allows product and engineering teams to update UI text, button colors, and branding for different relying parties (clients) without code changes or redeploys.

- **Strapi** is used as the CMS backend.
- FxA services fetch customization data from Strapi via GraphQL.
- Customizations are keyed by `clientId` and `entrypoint`.

---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- FxA monorepo checked out and running locally (see [FxA README](https://github.com/mozilla/fxa/blob/main/README.md))
- [Strapi CMS repo](https://github.com/mozilla/fxa-strapi) access

---

## Cloning and Running Strapi Locally

```sh
git clone git@github.com:mozilla/fxa-strapi.git
cd fxa-strapi
git checkout dev  # Default branch is 'dev'
npm install
```

---

## Configuring the Environment

Create a `.env` file in the root of the `fxa-strapi` directory. Example:

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=FAKE_lP4c+wIfUGvGfXYeSuB14w==,ZbmOJP9trfesnFPuTQ/WvA==,nTF1wJ4XqUwv4qBlAj0Ijg==,LD/8nTcgIF3mePHfMQlhtA==
API_TOKEN_SALT=FAKE_aENAQ8ttWWaCm9SghTFt5Q==
ADMIN_JWT_SECRET=FAKE_8b7a2+FwZgwy+yDi6aTXiQ==
TRANSFER_TOKEN_SALT=FAKE_NZ01ljrheWx+G02YouasyQ==

# Database (using SQLite for local dev)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
DATABASE_SSL=false
JWT_SECRET=gHJHpD/CaaGpWhWnytFaqQ==
```

> **Note:** For other database options, see the [Strapi docs](https://docs.strapi.io/dev-docs/configurations/database).

---

## Starting Strapi and Creating an Admin Account

```sh
npm run develop
```

- This should open a browser window to register your Strapi admin account.
- Create your local admin account.

---

## Verifying Content Types

After logging in to the Strapi admin panel (`http://localhost:1337/admin`):

- Ensure the following content types exist:
    - **Accounts**
    - **PageConfig**
    - **Shared**
- These are required for FxA CMS integration. If missing, check the Strapi repo for model definitions or migrations.

---

## Generating an API Key

1. Go to **Settings** → **API Tokens** (`http://localhost:1337/admin/settings/api-tokens/`)
2. Click **Create new API Token**
3. Set:
    - **Name:** (e.g., `local-dev`)
    - **Duration:** Unlimited
    - **Permissions:** Full access
4. Save the token somewhere safe. You’ll need it for the FxA Auth Server config.

---

## Configuring the Auth Server

Update your FxA Auth Server configuration to enable CMS and point to your local Strapi instance.

- Edit `secrets.json` or set the corresponding environment variables:

```json
"cms": {
  "enabled": true,
  "strapiClient": {
    "firestoreCacheTTL": 1,
    "memCacheTTL": 1,
    "apiKey": "<YOUR_API_TOKEN>",
    "graphqlApiUri": "http://localhost:1337/graphql"
  }
}
```

- Replace `<YOUR_API_TOKEN>` with the API token you generated above.

- Restart the auth server after making changes.

---

## Enabling CMS on the Frontend

Enable CMS in the FxA Content Server (frontend):

- Edit your local `fxa-content-server/config/local.json`:

```json
"cms": {
  "enabled": true
}
```

- Start the stack:

```sh
yarn install
yarn start
```

- Open Firefox (or your browser of choice):

```sh
yarn firefox
```

- Open the account page from the Firefox desktop menu (hamburger menu).

---

## Testing the Integration

- When you visit the account page, the frontend should make a request to:

  ```
  http://localhost:9000/v1/cms/config?clientId=<CLIENT_ID>&entrypoint=<ENTRYPOINT>
  ```

- You can inspect network requests in your browser’s dev tools to confirm.

---

## Creating a Relying Party Customization

1. In Strapi, go to **Content Manager** → **Relying Parties**  
   (`http://localhost:1337/admin/content-manager/collection-types/api::relying-party.relying-party`)
2. Click **Create new entry**
3. Fill in the required fields:
    - **clientId:** The OAuth client ID for the relying party.
    - **Name:** A human-readable name (e.g., `123done-app`).  
      _Tip: Use a combination of clientId and entrypoint for clarity._
    - **Entrypoint:** The entrypoint string (e.g., `app`, `fxa_avatar_menu`).
4. Enter shared components:
    - **buttonColor:** Hex value (e.g., `#592ACB`)
    - **logoUrl**, **logoAltText**, etc.
5. Fill out details for each page:
    - **EmailFirstPage**
    - **SignupSetPasswordPage**
    - **SignupConfirmCodePage**
    - **SignupConfirmedSyncPage**  
      _Note: All pages are required, even if not used by your client. (See [issue to make these optional](https://github.com/mozilla/fxa-strapi/issues))_
6. Save the entry.

---

## Viewing Your Customization

- Start a login or signup flow in the client.
- Ensure the `clientId` and `entrypoint` in the URL match your Strapi entry.
- Refresh the page to see your customization applied.

---

## Landing Code Back into fxa-strapi Repo

After making changes to your local Strapi instance, you need to deploy them through the environment pipeline.

### Development Deployment

1. Create a new PR with your generated files
2. Merge the PR into the `dev` branch
3. Changes automatically deploy to: https://legendary-beauty-40336b81b4.strapiapp.com/
4. Verify permissions are correctly set for your RelyingParty config

### Stage Deployment

1. Merge the `dev` branch into the `stg` branch
2. Strapi instance updates automatically at: https://special-dream-8c48be3fee.strapiapp.com

### Production Deployment

1. Merge the `stg` branch into the `prod` branch
2. Production deployment takes ~10 minutes to complete

> **Note:** Deploy to stage and production a few days before a tag release to ensure readiness.

---

## Additional Resources

- [FxA Strapi CMS Repo](https://github.com/mozilla/fxa-strapi)
- [FxA Monorepo](https://github.com/mozilla/fxa)
- [Strapi Documentation](https://docs.strapi.io/)
- [FxA Developer Docs](https://mozilla.github.io/ecosystem-platform/docs/fxa/)
- [FxA Slack Channel](https://mozilla.slack.com/archives/C03QY2X1K) (`#fxa`)

---

## Troubleshooting

- **No customization appears?**
    - Check that CMS is enabled in both backend and frontend configs.
    - Confirm the API token is correct and has full access.
    - Ensure the `clientId` and `entrypoint` match between the client and Strapi.
    - Inspect network requests for errors.

- **Missing content types?**
    - Check the Strapi repo for model definitions and migrations.

- **Need to reset Strapi?**
    - Delete `.tmp/data.db` and restart Strapi to reset the local database.

---

If you have questions or run into issues, check the [FxA Slack](https://mozilla.slack.com/archives/C03QY2X1K) or file an issue in the [fxa-strapi repo](https://github.com/mozilla/fxa-strapi/issues).

---`st