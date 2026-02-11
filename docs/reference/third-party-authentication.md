---
title: Third Party Authentication
---

Last updated: `Sep 06th, 2023`

FxA currently supports Apple and Google as third party authentication providers.

### Design

For both Google and Apple authentication we use the oauth authorization code flow. The scopes requested are the default account
profile scopes for a user, `openid email profile`. Using this flow allows FxA to not require loading any additional
libraries on our domain.

At the end of the third party oauth flow, FxA receives an OpenID connect `id_token` and uses that to create
the associated FxA account. After successfully creating a Firefox account, a session token is created
and then the user is sent through the FxA OAuth flow and redirected back to the relying party. Note that
at the end of this flow, the relying party gets an FxA OAuth token.

Please reference the [feature doc](https://docs.google.com/document/d/1pFzugkDOIR6eoXrBCx9FWWJhfnxFgWnRtk2mWFOp8DQ/edit#heading=h.qrbb2drvq5dg) for
additional design details and flow charts. Note also the [Apple Usage Guidelines](https://developer.apple.com/sign-in-with-apple/usage-guidelines-for-websites-and-other-platforms/).

### How to enable third party authentication for relying party

Third party authentication is currently enabled for all relying on parties (except Sync). If a user only has a linked third party account and no password then attempts to login to Sync, they will be prompted to create a password.

### How to setup Google auth locally

To enable Google auth locally, you will need to create a new OAuth client in the Google Cloud Console.

1. Go to [Google Cloud Console](https://console.cloud.google.com) and sign in with your Mozilla account if needed.

2. Click the project picker (top bar), then choose **New Project**.
   - **Project name:** Whatever you like (e.g. `YourName FxA Dev`)
   - **Organization:** `firefox.gcp.mozilla.com`
   - **Location:** `developers`
   - Click **Create**.

3. Go to [Auth Clients](https://console.cloud.google.com/auth/clients) for your new project and click **Create Client**.
   - **Application type:** Web application
   - **Name:** Whatever you like (e.g. `Mozilla Accounts`)
   - **Authorized JavaScript origins:**
     - `http://localhost:3030`
     - `http://localhost`
   - **Authorized redirect URIs:**
     - `http://localhost:3030/oauth/signin`
     - `http://localhost:3030/post_verify/third_party_auth/callback`
   - Click **Create**.

4. Your client ID and client secret will be shown. Set these credentials in your `.env`:

   ```
   GOOGLE_AUTH_CLIENT_ID=your-client-id
   GOOGLE_AUTH_SECURITY_EVENTS_CLIENT_IDS=your-client-id
   GOOGLE_AUTH_CLIENT_SECRET=your-client-secret
   ```

5. Go to **Audience** and publish the app so you can use any Google account locally. You may see the publishing status set to "Testing" — click **Publish App** and confirm "Push to production". Either option (Testing or In Production) will work, but "Testing" requires you to add allowed test emails.

6. You may need to wait several minutes before the client is fully activated. Do a full `yarn stop` and then start with dotenv:

   ```
   dotenv -- yarn start mza
   ```

:::note
You may need to clear out any old values set in configs, as you can also have these values set in auth-server and content-server config files instead of using environment variables. If after restarting and trying to log in with Google the client ID in the URL does not match the value you set in your `.env`, search the repo for `googleAuthConfig` to make sure it's not set in a different gitignored file.
:::

### How to setup Apple auth locally

To create an Apple OAuth client you will need to have an Apple developer account. To run Apple authentication locally you
will also need to have https unfortunately, see [setup instructions](#how-to-setup-local-env-for-https).

#### Auth server config

Update the auth server [config](https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-auth-server/config/index.ts#L140) to reflect the current client.

```
  appleAuthConfig: {
    clientId: {
      default: 'com.mozilla.firefox.accounts.auth',
      env: 'APPLE_AUTH_CLIENT_ID',
      format: String,
      doc: 'Apple auth client id',
    },
    clientSecret: {
      default: 'SSHH',
      env: 'APPLE_AUTH_CLIENT_SECRET',
      format: String,
      doc: 'Apple auth client secret',
    },
    redirectUri: {
      default:
        'https://localhost.dev:3030/post_verify/third_party_auth/callback',
      env: 'APPLE_AUTH_REDIRECT_URI',
      format: String,
      doc: 'Apple auth redirect uri',
    },
    tokenEndpoint: {
      default: 'https://appleid.apple.com/auth/token',
      env: 'APPLE_AUTH_TOKEN_ENDPOINT',
      format: String,
      doc: 'Apple auth token endpoint',
    },
  },
```

#### Content server config

Update config to reflect your [client](https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L272).

```
  appleAuthConfig: {
    enabled: {
      default: true,
      env: 'APPLE_AUTH_ENABLED',
      format: String,
    },
    clientId: {
      default: 'com.mozilla.firefox.accounts.auth',
      env: 'APPLE_AUTH_CLIENT_ID',
      format: String,
      doc: 'Apple auth client id',
    },
    redirectUri: {
      default:
        'https://localhost.dev:3030/post_verify/third_party_auth/callback',
      env: 'APPLE_AUTH_REDIRECT_URI',
      format: String,
      doc: 'Apple auth redirect uri',
    },
    authorizationEndpoint: {
      default: 'https://appleid.apple.com/auth/authorize',
      env: 'APPLE_AUTH_AUTHORIZATION_ENDPOINT',
      format: String,
      doc: 'Apple auth token endpoint',
    },
  },
```

### How to view third party authentication screen

Once Apple and Google clients are configured, you can simply open `http://localhost:3030/?forceExperiment=thirdPartyAuth&forceExperimentGroup=google`.

### How to setup local env for https

For local https you can use [mkcert](https://github.com/FiloSottile/mkcert) to create your certs. Once those are created you will need to update your host file to point to the https enabled domain.

Ex. On OSX you can run `sudo nano /etc/hosts` and add `localhost.dev` for https

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
127.0.0.1       localhost.dev
```

To enable auth and content server to run in https mode you will need to update [config](https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L385) to specify a key file from mkcert and toggle `use_https` to true.

### How Apple auth generates secrets

All Apple login requests generate a secret just for that request. It follows the same process found in this [blog](https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple).
