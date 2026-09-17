---
title: OAuth relying party
sidebar_label: OAuth relying party
---

# OAuth relying party

A Mozilla product or a native client borrows the sign-in and sign-up screens and gets an OAuth code back. The screens are the ordinary ones; the wrapper differs. Protocol details: [OAuth details](../reference/oauth-details.md).

## Map

```mermaid
flowchart TD
  rp["Relying party website or app"] -->|"/authorization with client_id, scope,<br/>state, redirect_uri, action"| authz["Validate, then route by action<br/>/authorization"]
  authz -->|action=email or none| index["Email first with RP branding<br/>/oauth"]
  authz -->|action=signin or force_auth| signin(["Sign in"])
  authz -->|action=signup| signup(["Sign up"])
  index --> signin
  index --> signup
  signin --> extra(["Extra setup steps, if any"])
  signup --> extra
  extra --> code{{"Authorization code"}}
  code -->|web relying party| redirect["Redirect to redirect_uri<br/>with code and state"]
  code -->|Firefox, Thunderbird| wc["WebChannel message<br/>fxaccounts:oauth_login"]
  code -->|mobile scoped keys| success["Signed in<br/>/oauth/success/:clientId"]
  signin -->|untrusted RP, legacy| perms["Permissions<br/>/signin_permissions"]
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class rp source
  class authz,success step
  class index page
  class signin,signup,extra flow
  class code,redirect,wc exit
  class perms legacy
  click signin href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click signup href "/ecosystem-platform/fxa-sitemap/flow-signup"
  click extra href "/ecosystem-platform/fxa-sitemap/flow-post-signin-setup"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/authorization` | AuthorizationContainer | No UI. Validates the OAuth params, handles `prompt=none`, then navigates by `action`. |
| `/oauth` | [Index](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-index--default) | Email first with the relying party's name and logo. |
| `/oauth/signin`, `/oauth/signup`, `/oauth/force_auth` | see [Sign in](./flow-signin.md), [Sign up](./flow-signup.md) | The regular screens with relying-party branding. |
| `/post_verify/service_welcome` | [ServiceWelcome](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-postverify-servicewelcome--from-signin) | Welcome interstitial for a new account. |
| `/oauth/success/:clientId` | [PairSuccess](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-pair-success--default) | Terminal screen for clients that receive the code without a redirect. |
| `/signin_permissions`, `/signup_permissions` | permissions (legacy) | Scope consent for untrusted relying parties. Not reachable from React. |
| `/subscriptions` | redirect (legacy) | Redirects to the Subscription Platform. |

## Notes

- **Exit**: web relying parties get a redirect to `redirect_uri` with the code; native clients (Firefox, Thunderbird) get a WebChannel message and stay on a success screen.
- `acr_values=AAL2` means the relying party requires two-step authentication, which inserts `/inline_totp_setup`.
- Native client ids: Firefox desktop `5882386c6d801776`, Firefox iOS `1b1a3e44c54fbb58`, Firefox for Android `a2270f727f45f648`, Thunderbird `8269bacd7bbc7f80`.
