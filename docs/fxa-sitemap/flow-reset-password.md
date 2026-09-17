---
title: Reset password
sidebar_label: Reset password
---

# Reset password

Regaining access when the password is forgotten: prove control of the email with a code, then a second factor if enabled, then optionally an account recovery key to keep Sync data.

## Map

```mermaid
flowchart TD
  signin(["Sign in"]) -->|Forgot password?| reset["Enter email<br/>/reset_password"]
  reset --> confirm["Enter emailed code<br/>/confirm_reset_password"]
  confirm -->|two-step auth enabled| second["Second step: authenticator app,<br/>backup code, or recovery phone<br/>/confirm_totp_reset_password"]
  confirm -->|has account recovery key| key["Enter recovery key to keep Sync data<br/>/account_recovery_confirm_key"]
  confirm --> complete
  second --> complete
  key --> complete["Set new password<br/>/complete_reset_password,<br/>/account_recovery_reset_password with a key"]
  complete --> done["Done<br/>/reset_password_verified"]
  done --> settings(["Settings"])
  done --> rp(["Relying party"])
  done --> signin
  classDef page fill:#deebff,stroke:#0060df,stroke-width:1.5px,color:#15141a
  classDef step fill:#f9f9fb,stroke:#8f8f9d,color:#15141a
  classDef legacy fill:#f0f0f4,stroke:#8f8f9d,stroke-dasharray:5 3,color:#5b5b66
  classDef exit fill:#e3fff3,stroke:#017a40,color:#15141a
  classDef source fill:#fff4de,stroke:#c45a27,color:#15141a
  classDef flow fill:#f3e8ff,stroke:#7542e5,stroke-width:1.5px,color:#15141a
  classDef mode fill:#f0f0f4,stroke:#5b5b66,color:#15141a
  class reset page
  class confirm,second,key,complete,done step
  class signin,settings,rp flow
  click signin href "/ecosystem-platform/fxa-sitemap/flow-signin"
  click settings href "/ecosystem-platform/fxa-sitemap/flow-settings"
  click rp href "/ecosystem-platform/fxa-sitemap/flow-oauth-relying-party"
```

## Screens

| Route | Screen | Purpose |
| --- | --- | --- |
| `/reset_password` | [ResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-resetpassword--default) | Enter the account email. |
| `/confirm_reset_password` | [ConfirmResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-confirmresetpassword--with-resend-success) | Emailed code. Routes onward by second factor and recovery key. |
| `/confirm_totp_reset_password` | [ConfirmTotpResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-confirmtotpresetpassword--default) | Authenticator app code. |
| `/reset_password_totp_recovery_choice` | [ResetPasswordRecoveryChoice](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-resetpasswordrecoverychoice--default) | Backup code or recovery phone. |
| `/confirm_backup_code_reset_password` | [ConfirmBackupCodeResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-confirmbackupcoderesetpassword--default) | Backup authentication code. |
| `/reset_password_recovery_phone` | [ResetPasswordRecoveryPhone](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-resetpasswordrecoveryphone--basic) | SMS code. |
| `/account_recovery_confirm_key` | [AccountRecoveryConfirmKey](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-accountrecoveryconfirmkey--default) | Enter the account recovery key so Sync data survives. |
| `/complete_reset_password` | [CompleteResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-completeresetpassword--no-sync) | Set the new password. Warns Sync users about data loss without a key. |
| `/account_recovery_reset_password` | [CompleteResetPassword](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-completeresetpassword--no-sync) | Same screen after a valid key; data is kept. |
| `/reset_password_verified` | [ResetPasswordConfirmed](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-resetpasswordconfirmed--default) | Done. Continue to Settings or the relying party. |
| `/reset_password_with_recovery_key_verified` | [ResetPasswordWithRecoveryKeyVerified](https://mozilla.github.io/fxa/storybooks/main/fxa-settings/?path=/story/pages-resetpassword-resetpasswordwithrecoverykeyverified--recovery-key-generated) | Done; the used key is spent, so a new one is offered. |
