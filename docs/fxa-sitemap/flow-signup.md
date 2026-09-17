---
title: Sign up
sidebar_label: Sign up
---

# Sign up

Creating an account. Entry is always the email-first screen; an unknown email leads here.

## Map

```mermaid
flowchart TD
  entry(["Entry modes"]) --> index
  index["Email first<br/>/"] -->|unknown email| signup["Create password, confirm age,<br/>choose what to sync<br/>/signup"]
  index -->|passwordless sign-up| pwless["Emailed code<br/>/signin_passwordless_code"]
  signup --> code["Emailed confirmation code<br/>/confirm_signup_code"]
  signup -->|account exists| signin(["Sign in"])
  code -->|email bounced| bounced["Email bounced<br/>/signin_bounced"]
  code -->|Sync| confirmed_sync["Account confirmed for Sync<br/>/signup_confirmed_sync"] --> pair(["Pairing / CAD"])
  code --> extra
  pwless --> extra
  extra(["Extra setup steps, if any"]) --> settings(["Settings"])
  extra --> rp(["Relying party"])
  email_link["Email link: verify"] --> verified["Email verified<br/>/primary_email_verified, /signup_confirmed"]
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class index,signup page
  class pwless,code,bounced,confirmed_sync,verified step
  class email_link source
  class signin,pair,extra,settings,rp,entry flow
  click entry href "/ecosystem-platform/fxa-sitemap/entry-modes"
  click signin href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click pair href "/ecosystem-platform/fxa-sitemap/flow-pairing"
  click extra href "/ecosystem-platform/fxa-sitemap/flow-post-signin-setup"
  click settings href "/ecosystem-platform/fxa-sitemap/flow-settings"
  click rp href "/ecosystem-platform/fxa-sitemap/flow-oauth-relying-party"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/signup`, `/oauth/signup` | [Signup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signup--default) | Create a password and confirm age. Sync shows the "choose what to sync" list inline. |
| `/confirm_signup_code` | [ConfirmSignupCode](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signup-confirmsignupcode--with-success) | Emailed confirmation code. Completes the account. |
| `/signup_confirmed_sync` | [SignupConfirmedSync](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signup-signupconfirmedsync--desktop) | Sync confirmation, then `/pair`. |
| `/signup_confirmed`, `/signup_verified` | [SignupConfirmed](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signup-signupconfirmed--default-signed-in) | Generic confirmation. |
| `/primary_email_verified` | [PrimaryEmailVerified](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signup-primaryemailverified--basic-signed-in) | Confirmation after a verification link. |
| `/signin_passwordless_code` | [SigninPasswordlessCode](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signin-signinpasswordlesscode--default-signin) | Passwordless sign-up: the account is created on code entry. |
| `/verify_email`, `/verify_primary_email` | complete_sign_up (legacy) | Link-based verification. Current emails send codes. |
| `/choose_what_to_sync` | choose_what_to_sync (legacy) | Standalone Sync checklist, now inline on sign-up. |
| `/would_you_like_to_sync` | would_you_like_to_sync (legacy) | Post-verification Sync offer. Not reachable from React. |
| `/signup_permissions` | permissions (legacy) | Consent screen for untrusted relying parties. Not reachable from React. |

## Notes

- After the code, the exit is the same as for sign in: `/settings`, a relying-party redirect, or `/pair` for Sync. A new account for a relying party may see `/post_verify/service_welcome` first.
