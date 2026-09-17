---
title: Google / Apple
sidebar_label: Google / Apple
---

# Google / Apple

Signing in or up with a Google or Apple account. The buttons sit on the email-first, sign-in, and sign-up screens; the round trip returns to one callback route. Reference: [Third-party authentication](../reference/third-party-authentication.md).

## Map

```mermaid
flowchart TD
  from(["Sign in or Sign up"]) --> start
  start["Google or Apple button on<br/>Email first, Sign in, Sign up<br/>/"] -->|"state = current URL"| provider["accounts.google.com or<br/>appleid.apple.com"]
  provider -->|code| cb["Verify, link account,<br/>reload the original URL<br/>/post_verify/third_party_auth/callback"]
  cb -->|error or cancel| start
  cb -->|two-step auth enabled| totp["Authenticator code<br/>/signin_totp_code"]
  cb -->|Sync needs a password| setpw["Create a password<br/>/post_verify/set_password<br/>(alias /post_verify/third_party_auth/set_password)"]
  cb --> extra
  totp --> extra
  setpw --> extra
  extra(["Extra setup steps, if any"]) --> settings(["Settings"])
  extra --> rp(["Relying party"])
  extra --> pair(["Pairing / CAD"])
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class start page
  class provider source
  class cb,totp,setpw step
  class from,extra,settings,rp,pair flow
  click from href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click extra href "/ecosystem-platform/fxa-sitemap/flow-post-signin-setup"
  click settings href "/ecosystem-platform/fxa-sitemap/flow-settings"
  click rp href "/ecosystem-platform/fxa-sitemap/flow-oauth-relying-party"
  click pair href "/ecosystem-platform/fxa-sitemap/flow-pairing"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/`, `/signin`, `/signup` | [ThirdPartyAuth](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/components-thirdpartyauth--default) | The Google and Apple buttons. `state` carries the current accounts URL so the flow can resume. |
| `/post_verify/third_party_auth/callback` | ThirdPartyAuthCallback | Exchanges the provider code, links the account, then reloads the saved URL. No UI beyond a spinner. |
| `/post_verify/third_party_auth/set_password` | [SetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-postverify-setpassword--default) | The linked account has no password and Sync needs one. Alias of `/post_verify/set_password`. |
| `/settings/create_password` | [PageCreatePassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-createpassword--default) | Add a password to a Google/Apple-only account. |

## Notes

- Apple returns by form POST; the content server turns it into a GET with `provider=apple`.
- The linked account appears in Settings under Linked accounts, with an unlink action.
