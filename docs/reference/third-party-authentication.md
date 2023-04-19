---
title: Third Party Authentication
---

Last updated: `April 06th, 2022`

FxA currently supports Apple and Google as third party authentication providers. This feature
was developed to support migrating Pocket users over to FxA. To maintain feature parity with Pocket, FxA added
support for users to log in with their existing Apple/Google accounts within the FxA ecosystem.

### Design

For both Google and Apple authentication we use the oauth authorization code flow. The scopes requested are the default account
profile scopes for a user, `openid email profile`. Using this flow allows FxA to not require loading any additional
libraries on our domain.

At the end of the third party oauth flow, FxA receives an OpenID connect `id_token` and uses that to create
the associated FxA account. After successfully creating a Firefox account, a session token is created
and then the user is sent through the FxA OAuth flow and redirected back to the relying part. Note that 
at the end of this flow, the relying party gets an FxA OAuth token.

Please reference the [feature doc](https://docs.google.com/document/d/1pFzugkDOIR6eoXrBCx9FWWJhfnxFgWnRtk2mWFOp8DQ/edit#heading=h.qrbb2drvq5dg) for 
additional design details and flow charts.

### How to enable third party authentication for relying party

Third party authentication is currently enabled for our test client 123Done and Pocket. To enable for another
client, you will need to add the `clientId` in the [feature flag](https://github.com/mozilla/fxa/blob/841743d8bdab55c0766289e89d5231550de97112/packages/fxa-content-server/app/scripts/lib/experiments/grouping-rules/third-party-auth.js#L22).

```
const ROLLOUT_CONFIG = {
  // 123Done
  dcdb5ae7add825d2: GROUPS,
  // Pocket
  '7377719276ad44ee': GROUPS,
  '749818d3f2e7857f': GROUPS,
};
```

Note that this experiment is disabled by default. If you would like to go through the flow, load email-first screen and append query params `?forceExperiment=thirdPartyAuth&forceExperimentGroup=google`.

### How to setup Google auth locally

To enable Google auth locally, you will need to either setup a new client in the Google developer console or use the default config.

#### Auth server config

Update the auth server [config](https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-auth-server/config/index.ts#L167) to reflect the current client.

```
  googleAuthConfig: {
    clientId: {
      default:
        '210899493109-gll5587a3bo8huare772alo08734o4kh.apps.googleusercontent.com',
      env: 'GOOGLE_AUTH_CLIENT_ID',
      format: String,
      doc: 'Google auth client id',
    },
    clientSecret: {
      default: 'SSHH',
      env: 'GOOGLE_AUTH_CLIENT_SECRET',
      format: String,
      doc: 'Google auth client secret',
    },
    redirectUri: {
      default: 'http://localhost:3030/post_verify/third_party_auth/callback',
      env: 'GOOGLE_AUTH_REDIRECT_URI',
      format: String,
      doc: 'Google auth redirect uri',
    },
    tokenEndpoint: {
      default: 'https://oauth2.googleapis.com/token',
      env: 'GOOGLE_AUTH_TOKEN_ENDPOINT',
      format: String,
      doc: 'Google auth token endpoint',
    },
  },
```

Note that you should update your `secrets.json` file in `/packages/fxa-auth-server/config/` to override the `clientSecret`.
This will help reduce the risk of accidentally committing secrets into git.

#### Content server config

Update the content server [config](https://github.com/mozilla/fxa/blob/e31b9deb2d7e6ca89b9fc932f2c4f0fa0a89e93c/packages/fxa-content-server/server/lib/configuration.js#L246) to reflect the Google client.

```
  googleAuthConfig: {
    enabled: {
      default: true,
      env: 'GOOGLE_AUTH_ENABLED',
      format: String,
    },
    clientId: {
      default:
        '210899493109-gll5587a3bo8huare772alo08734o4kh.apps.googleusercontent.com',
      env: 'GOOGLE_AUTH_CLIENT_ID',
      format: String,
      doc: 'Google auth client id',
    },
    redirectUri: {
      default: 'http://localhost:3030/post_verify/third_party_auth/callback',
      env: 'GOOGLE_AUTH_REDIRECT_URI',
      format: String,
      doc: 'Google auth redirect uri',
    },
    authorizationEndpoint: {
      default: 'https://accounts.google.com/o/oauth2/v2/auth',
      env: 'GOOGLE_AUTH_AUTHORIZATION_ENDPOINT',
      format: String,
      doc: 'Google auth token endpoint',
    },
  },
```

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

To create a secret key please reference this [blog](https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple). 
In their example, you can use a Ruby script to generate the client secret. At some point in the future we will need to generate these secrets on [each request](https://bannister.me/blog/generating-a-client-secret-for-sign-in-with-apple-on-each-request) because manually generated ones expire in 6 months.
