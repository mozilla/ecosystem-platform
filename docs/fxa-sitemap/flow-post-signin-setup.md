---
title: Extra setup steps
sidebar_label: Extra setup
---

# Extra setup steps

Screens that interrupt a sign-in or sign-up to finish account setup before the user reaches their destination. Never entered directly.

## Map

```mermaid
flowchart TD
  auth(["Sign in or Sign up"])
  auth -->|RP requires two-step auth| totp["Set up an authenticator app<br/>/inline_totp_setup"] --> recovery["Save backup codes<br/>/inline_recovery_setup"] --> rp
  auth -->|Sync, no recovery key| key["Create account recovery key<br/>/inline_recovery_key_setup"] --> pair
  auth -->|passwordless or Google/Apple account entering Sync| setpw["Create a password<br/>/post_verify/set_password"] --> pair
  auth -->|new account for an RP| welcome["Welcome to the service<br/>/post_verify/service_welcome"] --> rp
  auth -->|nothing needed| settings(["Settings"])
  rp(["Relying party"])
  pair(["Pairing / CAD"])
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class auth,rp,pair,settings flow
  class totp,recovery,key,setpw,welcome step
  click auth href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click rp href "/ecosystem-platform/fxa-sitemap/flow-oauth-relying-party"
  click pair href "/ecosystem-platform/fxa-sitemap/flow-pairing"
  click settings href "/ecosystem-platform/fxa-sitemap/flow-settings"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/inline_totp_setup` | [InlineTotpSetup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-inlinetotpsetup--default) | The relying party requires two-step authentication; scan the QR code and confirm. |
| `/inline_recovery_setup` | [InlineRecoverySetup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-inlinerecoverysetup--choice-screen) | Save backup codes for the new authenticator. |
| `/inline_recovery_key_setup` | [InlineRecoveryKeySetup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-inlinerecoverykeysetup--step-one) | Sync users without a recovery key are offered one. |
| `/post_verify/set_password` | [SetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-postverify-setpassword--default) | A passwordless or Google/Apple account entering Sync needs a password for encryption keys. |
| `/post_verify/third_party_auth/set_password` | [SetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-postverify-setpassword--default) | Alias kept for in-flight links. |
| `/post_verify/service_welcome` | [ServiceWelcome](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-postverify-servicewelcome--from-signin) | Welcome interstitial naming the relying party. |
| `/post_verify/password/force_password_change` | force_password_change (legacy) | Mandatory password change. Sign in still hard-navigates here. |
| `/post_verify/finish_account_setup/set_password` | finish_account_setup (legacy) | Password for an account created by a subscription purchase, from reminder emails. |
| `/post_verify/newsletters/add_newsletters` | newsletters (legacy) | Newsletter opt-in. Not reachable from React. |
| `/post_verify/secondary_email/add_secondary_email`, `/post_verify/secondary_email/confirm_secondary_email`, `/post_verify/secondary_email/verified_secondary_email` | secondary_email (legacy) | Add a secondary email after verification. Settings does this now. |
