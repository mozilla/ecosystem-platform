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
12. [Customizing the Content Entry View](#customizing-the-content-entry-view)
13. [Viewing your Customization](#viewing-your-customization)
14. [Landing Code Back into fxa-strapi Repo](#landing-code-back-into-fxa-strapi-repo)
15. [Localization of Strapi content](#localization-of-strapi-content)
16. [Additional Resources](#additional-resources)
17. [Troubleshooting](#troubleshooting)

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

## Customizing the Content Entry View

Strapi supports limited customization of the **content entry view** (the form used to create or edit entries). This is primarily useful for adding short descriptions or guidance text to help editors enter correct data.

### Permissions and access

To edit the entry view, you must have:

* **Admin access**, or
* A role with permission to **configure content types and views**

Important notes:

* Some users **cannot see roles or permissions at all**. In these cases, request support from the **FxA** or **SubPlat** teams.
* Depending on your permissions, you may see a **restricted edit view** that does **not include the Description field**. If so, you cannot add helper text yourself.

### Environment-specific behavior

⚠️ **View configuration does not carry across environments.**
Any changes made in **dev** must be repeated manually in **stage** and **prod**.

### Ways to edit the view (not equivalent)

There are multiple entry points to “edit the view,” and they do **different things**:

* **From the list view (`Configure the view`)**

  * Controls **table columns**, sorting, filters, and list behavior
  * Does **not** allow editing field descriptions

* **From an entry or new entry**

  * Allows editing **field-level settings**
  * This is where you can add **Descriptions** for form fields

To add descriptions, you must use the **entry-level configuration**, not the list view.

### How to add descriptions to fields

1. Open the **Strapi Admin** dashboard.
2. Navigate to **Content Manager**. (NOT Content-Type Builder)
3. Open an existing entry *or* create a new entry for the content type.
4. Open the **Configure the view**.
5. Select a field.
6. Add text to the **Description** field.
7. Save the configuration.
8. Verify the description appears in the entry form.

📹 *Screen recording:*

https://github.com/user-attachments/assets/65669ea8-1119-4fb7-a0c0-b5530ee24918

### Recommendations

* Avoid repeating what’s already obvious from the field name.
* Add links (for example to Storybook component) when helpful for context.
* Add examples if content must be added in a specific format.
* Add information that reduces ambiguity at the moment of data entry.

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

## Localization of Strapi content

Strings in production are extracted to Pontoon through coordination of fxa and fxa-cms-l10n repos.

Note: Strings added to dev or stage Strapi are not extracted for localization.

See: [fxa-cms-l10n repository](https://github.com/mozilla/fxa-cms-l10n)

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
 
- **Collection type is missing from the Content Manager**
    - If a newly created collection type does not appear in the Content Manager, this is usually due to permissions.
        - The collection type may not be enabled for your role under Content Manager permissions
        - Your role may not have access to view, create, or edit entries for that type
    - How to fix:
        - Go to Settings → Users & Permissions → Roles
        - Select your role and enable the collection type under Content Manager
        - If you do not have access to roles or permissions, request help from the FxA or SubPlat teams.
    - This is expected Strapi behavior and does not indicate an issue with the collection type itself.

- **Need to reset Strapi?**
    - Delete `.tmp/data.db` and restart Strapi to reset the local database.

---

If you have questions or run into issues, check the [FxA Slack](https://mozilla.slack.com/archives/C03QY2X1K) or file an issue in the [fxa-strapi repo](https://github.com/mozilla/fxa-strapi/issues).
