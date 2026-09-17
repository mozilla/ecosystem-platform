---
title: Settings
sidebar_label: Settings
---

# Settings

The signed-in account page at `/settings`: one long page of sections, plus a sub-page for each edit. Any settings URL is also an entry point: a signed-out visitor is sent through sign-in and back.

## Map

```mermaid
flowchart TD
  entry["Any Settings URL: bookmark, email link,<br/>RP 'manage account', Firefox menu"] -->|signed out| signin(["Sign in"]) --> settings
  entry -->|signed in| settings["Account page<br/>/settings"]
  settings --> profile["Profile: display name, avatar,<br/>secondary email<br/>/settings/display_name"]
  settings --> security["Security: password, passkeys, recovery key,<br/>two-step auth, recovery phone, activity<br/>/settings/change_password"]
  settings --> delete["Delete account<br/>/settings/delete_account"]
  security -.MFA guard.-> reauth(["Sign in step, then back"])
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class entry source
  class signin,reauth flow
  class settings,profile,security,delete page
  click signin href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click reauth href "/ecosystem-platform/fxa-sitemap/flow-signin"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/settings` | [PageSettings](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings--cold-start) | Profile, Security, Connected services, Linked accounts, Data collection, Delete account. |
| `/settings/display_name` | [PageDisplayName](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-displayname--default) | Display name. |
| `/settings/avatar`, `/settings/avatar/change` | [PageAvatar](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-avatar--default) | Profile picture. The `change` path is a redirect kept for Firefox. |
| `/settings/emails`, `/settings/emails/verify` | [PageSecondaryEmailAdd](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-secondaryemailadd--default) | Add and confirm a secondary email. |
| `/settings/change_password` | [PageChangePassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-changepassword--default) | Change password. Also the target of `/.well-known/change-password`. Accounts without a password are redirected to `/settings/create_password`. |
| `/settings/create_password` | [PageCreatePassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-createpassword--default) | First password for a passwordless or Google/Apple account. |
| `/settings/passkeys/add` | [PagePasskeyAdd](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-passkeyadd--ceremony-in-progress) | Register a passkey. |
| `/settings/account_recovery` | [PageRecoveryKeyCreate](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-recoverykeycreate--create-key-with-success) | Create or replace the account recovery key. |
| `/settings/two_step_authentication` | [Page2faSetup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-twostepauthsetup--with-recovery-phone-option) | Enable two-step authentication and choose a backup method. |
| `/settings/two_step_authentication/change` | [Page2faChange](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-twostepauthchange--default) | Switch authenticator app. |
| `/settings/two_step_authentication/replace_codes` | [Page2faReplaceBackupCodes](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-replacebackupcodes--replace-existing-codes) | New backup codes. Linked from the low-codes email. |
| `/settings/recovery_phone/setup`, `/settings/recovery_phone/remove` | [PageRecoveryPhoneSetup](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-recoveryphonesetup--add-with-success) | Add or remove the recovery phone. |
| `/settings/recent_activity` | [PageRecentActivity](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-recentactivity--default) | Security event history. |
| `/settings/clients` | [ConnectedServices](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/components-settings-connectedservices--default) | Redirects to the Connected services section of `/settings`: devices and services with access. |
| `/settings/delete_account` | [PageDeleteAccount](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-settings-deleteaccount--default) | Delete the account. |
| `/security_events`, `/secondary_email_verified` | legacy | Older screens replaced by Recent activity and Settings. |

## Notes

- Sensitive edits are wrapped in an MFA guard: an old or low-assurance session is sent to the matching sign-in step and returned to Settings.
- A Sync client that reaches Settings without a valid session sees [SignoutSync](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-signoutsync--basic), asking the user to sign out of Sync manually.
