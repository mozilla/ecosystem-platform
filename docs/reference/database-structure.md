---
title: Database Structure
---

Current as of `February 2nd, 2023`

Below you'll find some ER diagrams of the Firefox Accounts and Subscription
Platform databases.  Some notes:

- You'll find very few enforced foreign keys.  This was a choice made a long
  time ago because of the tooling being used at the time.  We'd make a
  different choice now (and you can see newer tables do have foreign keys).
- Unless noted, all charsets are some form of `utf8`.

<!-- Author's note: The ER diagram below is broken up into several mermaid 
     declarations.  This is only for readability in docusaurus because 
     otherwise the final diagram's elements are too small to be readable.  
     If mermaid gets zoom sometime or if we add FKs which rearrange how 
     mermaid draws the diagram in the future we might be able to remove the 
     arbitrary divisions.
-->


## Database: `fxa`

```mermaid
erDiagram
    accountCustomers {
        binary uid PK "16 bytes"
        varchar stripeCustomerId
        bigint createdAt "unsigned"
        bigInt updatedAt "unsigned"
    }
    accountResetTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary tokenData "32 bytes; CONFIDENTIAL"
        binary uid "Unique Key, 16 bytes"
        bigint createdAt "unsigned"
    }
    accounts {
        binary uid PK "16 bytes"
        varchar normalizedEmail
        varchar email
        binary emailCode "16 bytes; CONFIDENTIAL, used to verify email"
        tinyint emailVerified
        binary kA "32 bytes; CONFIDENTIAL, master key for 'class-A' material"
        binary wrapWrapKb "32 bytes; CONFIDENTIAL, key for 'class-B' material. Only unwrappable on the client."
        binary authSalt "32 bytes; CONFIDENTIAL"
        binary verifyHash "32 bytes; CONFIDENTIAL"
        tinyint verifierVersion
        bigint verifierSetAt
        bigint createdAt
        varchar locale
        bigint lockedAt "unsigned"
        bigint profileChangedAt "unsigned"
        bigint keysChangedAt "unsigned"
        text ecosystemAnonId
        bigint disabledAt "unsigned"
        bigint metricsOptOutAt "unsigned"
    }
    dbMetadata {
        varchar name
        varchar value
    }
```
```mermaid
erDiagram
    deviceCommandIdentifiers {
        int commandId PK "unsigned"
        varchar commandName
    }
    deviceCommands {
        binary uid PK "16 bytes"
        binary deviceId "16 bytes"
        int commandId PK "unsigned"
        varchar commandData "CONFIDENTIAL, used to encrypt commands"
    }
    devices {
        binary uid PK "16 bytes"
        binary id PK "16 bytes"
        binary sessionTokenId "32 bytes; CONFIDENTIAL"
        varchar name
        varchar nameUtf8
        varchar type
        bigint createdAt "unsigned"
        varchar callbackURL "CONFIDENTIAL"
        char callbackPublicKey
        char callbackAuthKey
        tinyint callbackIsExpired
        binary refreshTokenId "32 bytes; CONFIDENTIAL"
    }
    emailBounces {
        varchar email PK
        tinyint bounceType "unsigned"
        tinyint bounceSubType "unsigned"
        bigint createdAt PK "unsigned"
        tinyint emailTypeId "unsigned"
        varchar diagnosticCode
    }
```
```mermaid
erDiagram
    emailTypes {
        smallint id PK "unsigned"
        varchar emailType
    }
    emails {
        int id PK
        varchar normalizedEmail
        varchar email
        binary uid "16 bytes"
        binary emailCode "CONFIDENTIAL"
        tinyint isVerified
        tinyint isPrimary
        bigint verifiedAt "unsigned"
        bigint createdAt "unsigned"
    }
    keyFetchTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary authKey "32 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        binary keyBundle "96 bytes; CONFIDENTIAL"
        bigint createdAt "unsigned"
    }
    linkedAccounts {
        binary uid PK "16 bytes"
        varchar id PK
        tinyint providerId PK
        bigint authAt "unsigned"
        tinyint enabled
    }
```
```mermaid
erDiagram
    passwordChangeTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary tokenData "32 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        bigint createdAt "unsigned"
    }
    passwordForgotTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary tokenData "32 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        binary passcode "16 bytes; CONFIDENTIAL"
        bigint createdAt "unsigned"
        smallint tries "unsigned"
    }
    paypalCustomers {
        binary uid PK "16 bytes"
        char billingAgreementId PK
        varchar status
        bigint createdAt "unsigned"
        bigint endedAt "unsigned"
    }
    recoveryCodes {
        binary uid "16 bytes"
        binary codeHash "32 bytes; CONFIDENTIAL"
        binary salt "32 bytes; CONFIDENTIAL"
    }
```
```mermaid
erDiagram
    recoveryKeys {
        binary uid PK "16 bytes"
        text recoveryData "CONFIDENTIAL"
        binary recoveryKeyIdHash "32 bytes; CONFIDENTIAL"
        bigint createdAt "unsigned"
        bigint verifiedAt "unsigned"
        tinyint enabled
    }
    securityEventNames {
        int id PK
        varchar name
    }
    securityEvents }|--|| securityEventNames : named
    securityEvents {
        binary uid "16 bytes"
        int nameId FK
        tinyint verified
        binary ipAddrHmac "32 bytes"
        bigint createdAt
        binary tokenVerificationId "16 bytes"
    }
    sentEmails }|--|| emailTypes : is
    sentEmails {
        int id PK "unsigned"
        binary uid "16 bytes"
        smallint emailTypeId "unsigned"
        json params
        bigint sentAt "unsigned"
    }
```
```mermaid
erDiagram
    sessionTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary tokenData "32 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        bigint createdAt "unsigned"
        varchar uaBrowser
        varchar uaBrowserVersion
        varchar uaOS
        varchar uaOSVersion
        varchar uaDeviceType
        bigint lastAccessTime "unsigned"
        varchar uaFormFactor
        bigint authAt "unsigned"
        int verificationMethod
        bigint verifiedAt
        tinyint mustVerify
    }
    signinCodes {
        binary hash PK "32 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        bigint createdAt "unsigned"
        binary flowId "32 bytes"
    }
    totp {
        binary uid "16 bytes"
        varchar sharedSecret "CONFIDENTIAL"
        bigint epoch "CONFIDENTIAL"
        bigint createdAt "unsigned"
        tinyint verified
        tinyint enabled
    }
    unblockCodes {
        binary uid PK "16 bytes"
        binary unblockCodeHash PK "32 bytes; CONFIDENTIAL"
        bigint createdAt
    }
```
```mermaid
erDiagram
    unverifiedTokens {
        binary tokenId PK "32 bytes; CONFIDENTIAL"
        binary tokenVerificationId "16 bytes; CONFIDENTIAL"
        binary uid "16 bytes"
        tinyint mustVerify
        binary tokenVerificationCodeHash "32 bytes; CONFIDENTIAL"
        bigint tokenVerificationCodeExpiresAt "unsigned"
    }
    verificationReminders {
        binary uid PK "16 bytes"
        varchar type PK
        bigint createdAt
    }
```


## Database: `fxa_oauth`

```mermaid
erDiagram
    clientDevelopers {
        binary rowId PK "8 bytes"
        binary developerId "16 bytes"
        binary clientId "8 bytes"
        timestamp createdAt
    }
    clients {
        binary id PK "8 bytes"
        varchar name
        varchar imageUri
        varchar redirectUri
        tinyint canGrant
        tinyint publicClient
        timestamp createdAt
        tinyint trusted
        varchar allowedScopes
        binary hashedSecret "32 bytes; CONFIDENTIAL"
        binary hashedSecretPrevious "32 bytes; CONFIDENTIAL"
        text notes
    }
    codes {
        binary code PK "32 bytes; CONFIDENTIAL"
        binary clientId "8 bytes"
        binary userId "16 bytes"
        varchar scope
        timestamp createdAt
        bigint authAt
        varchar amr
        tinyint aal
        tinyint offline
        varchar codeChallengeMethod
        varchar codeChallenge "CONFIDENTIAL"
        mediumtext keysJwe "CONFIDENTIAL"
        bigint profileChangedAt
        binary sessionTokenId "32 bytes"
    }
    dbMetadata {
        varchar name PK
        varchar value
    }
```
```mermaid
erDiagram
    developers {
        binary developerId PK "16 bytes"
        varchar email
        timestamp createdAt
    }
    refreshTokens {
        binary token PK "32 bytes; CONFIDENTIAL"
        binary clientId "8 bytes"
        binary userId "16 bytes"
        varchar scope
        timestamp createdAt
        timestamp lastUsedAt
        bigint profileChangedAt
    }
    scopes {
        varchar scope PK
        tinyint hasScopedKeys
    }
    tokens {
        binary token PK "32 bytes; CONFIDENTIAL"
        binary clientId "8 bytes"
        binary userId "16 bytes"
        varchar type
        varchar scope
        timestamp createdAt
        timestamp expiresAt
        bigint profileChangedAt
    }
```

## Database: `fxa_profile`

```mermaid
erDiagram
    avatar_providers {
        int id PK
        varchar name
    }
    avatar_selected ||--|{ avatars : chooses
    avatar_selected {
        binary userId PK "16 bytes"
        binary avatarId "16 bytes"
    }
    avatars }|--|| avatar_providers : from
    avatars {
        binary id PK "16 bytes"
        barchar url
        binary userId "16 bytes"
        int providerId
    }
    dbMetadata {
        varchar name PK
        varchar value
    }
    profile {
        binary userId PK "16 bytes"
        varchar displayName
    }
```
