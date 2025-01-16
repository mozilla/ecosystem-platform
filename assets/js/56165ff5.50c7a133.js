"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9449],{58991:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"reference/database-structure","title":"Database Structure","description":"Current as of patch level 157","source":"@site/docs/reference/database-structure.md","sourceDirName":"reference","slug":"/reference/database-structure","permalink":"/ecosystem-platform/reference/database-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/database-structure.md","tags":[],"version":"current","frontMatter":{"title":"Database Structure"},"sidebar":"docs","previous":{"title":"Canceling Subscriptions to Plan","permalink":"/ecosystem-platform/reference/canceling-subscriptions-to-plan"},"next":{"title":"Emails","permalink":"/ecosystem-platform/reference/emails"}}');var t=a(74848),r=a(28453);const s={title:"Database Structure"},d=void 0,c={},o=[{value:"Database: <code>fxa</code>",id:"database-fxa",level:2},{value:"Database: <code>fxa_oauth</code>",id:"database-fxa_oauth",level:2},{value:"Database: <code>fxa_profile</code>",id:"database-fxa_profile",level:2}];function b(n){const e={code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Current as of patch level ",(0,t.jsx)(e.code,{children:"157"})]}),"\n",(0,t.jsx)(e.p,{children:"Below you'll find some ER diagrams of the Mozilla accounts and Subscription\nPlatform databases.  Some notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"You'll find very few enforced foreign keys.  This was a choice made a long\ntime ago because of the tooling being used at the time.  We'd make a\ndifferent choice now (and you can see newer tables do have foreign keys)."}),"\n",(0,t.jsxs)(e.li,{children:["Unless noted, all charsets are some form of ",(0,t.jsx)(e.code,{children:"utf8"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"database-fxa",children:["Database: ",(0,t.jsx)(e.code,{children:"fxa"})]}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    accountCustomers {\n        binary uid PK "16 bytes"\n        varchar stripeCustomerId\n        bigint createdAt "unsigned"\n        bigInt updatedAt "unsigned"\n    }\n    accountResetTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "Unique Key, 16 bytes"\n        bigint createdAt "unsigned"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    accounts {\n        binary uid PK "16 bytes"\n        varchar normalizedEmail\n        varchar email\n        binary emailCode "16 bytes; CONFIDENTIAL, used to verify email"\n        tinyint emailVerified\n        binary kA "32 bytes; CONFIDENTIAL, master key for \'class-A\' material"\n        binary wrapWrapKb "32 bytes; CONFIDENTIAL, key for \'class-B\' material. Only unwrappable on the client."\n        binary authSalt "32 bytes; CONFIDENTIAL"\n        binary verifyHash "32 bytes; CONFIDENTIAL"\n        tinyint verifierVersion\n        bigint verifierSetAt\n        bigint createdAt\n        varchar locale\n        bigint lockedAt "unsigned"\n        bigint profileChangedAt "unsigned"\n        bigint keysChangedAt "unsigned"\n        text ecosystemAnonId\n        bigint disabledAt "unsigned"\n        bigint metricsOptOutAt "unsigned"\n        varchar clientSalt "CONFIDENTIAL"\n        binary verifyHashVersion2 "32 bytes; CONFIDENTIAL"\n        binary wrapWrapKbVersion2 "32 bytes; CONFIDENTIAL, key for \'class-B\' material. Only unwrappable on the client."\n        tinyint atLeast18AtReg\n    }\n    accounts }|--|{ accountGroups: in\n    groups }|--|{ accountGroups: in\n    accountGroups {\n        binary uid PK "FK 16 bytes"\n        smallint group_id PK "FK unsigned"\n        enum role "admin,owner,participant"\n        enum managed_by "automatic,manual"\n        bigint expires "unsigned"\n        text notes\n    }\n    accounts }|--o{ carts: has\n    carts {\n        binary id PK "16 bytes"\n        binary uid "16 bytes"\n        enum state "start,processing,success,fail"\n        varchar errorReasonId\n        varchar offeringConfigId\n        varchar interval\n        varchar experiment\n        json taxAddress\n        varchar currency\n        bigint createdAt "unsigned"\n        bigint updatedAt "unsigned"\n        varchar couponCode\n        varchar stripeCustomerId\n        varchar stripeSubscriptionId\n        varchar email\n        int amount\n        smallint version "unsigned"\n        enum eligibilityStatus "create,upgrade,downgrade,blocked_iap,invalid"\n    }\n    dbMetadata {\n        varchar name\n        varchar value\n    }\n    groups {\n        smallint id PK "unsigned"\n        varchar name\n        varchar display_name\n        varchar capabilities\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    deviceCommandIdentifiers {\n        int commandId PK "unsigned"\n        varchar commandName\n    }\n    deviceCommands {\n        binary uid PK "16 bytes"\n        binary deviceId "16 bytes"\n        int commandId PK "unsigned"\n        varchar commandData "CONFIDENTIAL, used to encrypt commands"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    devices {\n        binary uid PK "16 bytes"\n        binary id PK "16 bytes"\n        binary sessionTokenId "32 bytes; CONFIDENTIAL"\n        varchar name\n        varchar nameUtf8\n        varchar type\n        bigint createdAt "unsigned"\n        varchar callbackURL "CONFIDENTIAL"\n        char callbackPublicKey\n        char callbackAuthKey\n        tinyint callbackIsExpired\n        binary refreshTokenId "32 bytes; CONFIDENTIAL"\n    }\n    emailBounces {\n        varchar email PK\n        tinyint bounceType "unsigned"\n        tinyint bounceSubType "unsigned"\n        bigint createdAt PK "unsigned"\n        tinyint emailTypeId "unsigned"\n        varchar diagnosticCode\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    emailTypes {\n        smallint id PK "unsigned"\n        varchar emailType\n    }\n    emails {\n        int id PK\n        varchar normalizedEmail\n        varchar email\n        binary uid "16 bytes"\n        binary emailCode "CONFIDENTIAL"\n        tinyint isVerified\n        tinyint isPrimary\n        bigint verifiedAt "unsigned"\n        bigint createdAt "unsigned"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    keyFetchTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary authKey "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        binary keyBundle "96 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n    }\n    linkedAccounts {\n        binary uid PK "16 bytes"\n        varchar id PK\n        tinyint providerId PK\n        bigint authAt "unsigned"\n        tinyint enabled\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    passwordChangeTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n    }\n    passwordForgotTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        binary passcode "16 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        smallint tries "unsigned"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    paypalCustomers {\n        binary uid PK "16 bytes"\n        char billingAgreementId PK\n        varchar status\n        bigint createdAt "unsigned"\n        bigint endedAt "unsigned"\n    }\n    recoveryCodes {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        binary codeHash "32 bytes; CONFIDENTIAL"\n        binary salt "32 bytes; CONFIDENTIAL"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    recoveryKeys {\n        binary uid PK "16 bytes"\n        text recoveryData "CONFIDENTIAL"\n        binary recoveryKeyIdHash "32 bytes; CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        bigint verifiedAt "unsigned"\n        varchar hint\n        tinyint enabled\n    }\n    securityEventNames {\n        int id PK\n        varchar name\n    }\n    securityEvents }|--|| securityEventNames : named\n    securityEvents {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        int nameId FK\n        tinyint verified\n        binary ipAddrHmac "32 bytes"\n        bigint createdAt\n        binary tokenVerificationId "16 bytes"\n        varchar ipAddr\n    }\n    sentEmails }|--|| emailTypes : is\n    sentEmails {\n        int id PK "unsigned"\n        binary uid "16 bytes"\n        smallint emailTypeId "unsigned"\n        json params\n        bigint sentAt "unsigned"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    sessionTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenData "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n        varchar uaBrowser\n        varchar uaBrowserVersion\n        varchar uaOS\n        varchar uaOSVersion\n        varchar uaDeviceType\n        bigint lastAccessTime "unsigned"\n        varchar uaFormFactor\n        bigint authAt "unsigned"\n        int verificationMethod\n        bigint verifiedAt\n        tinyint mustVerify\n        tinyint providerId\n    }\n    signinCodes {\n        binary hash PK "32 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        bigint createdAt "unsigned"\n        binary flowId "32 bytes"\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    totp {\n        bigint id PK "unsigned"\n        binary uid "16 bytes"\n        varchar sharedSecret "CONFIDENTIAL"\n        bigint epoch "CONFIDENTIAL"\n        bigint createdAt "unsigned"\n        tinyint verified\n        tinyint enabled\n    }\n    unblockCodes {\n        binary uid PK "16 bytes"\n        binary unblockCodeHash PK "32 bytes; CONFIDENTIAL"\n        bigint createdAt\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    unverifiedTokens {\n        binary tokenId PK "32 bytes; CONFIDENTIAL"\n        binary tokenVerificationId "16 bytes; CONFIDENTIAL"\n        binary uid "16 bytes"\n        tinyint mustVerify\n        binary tokenVerificationCodeHash "32 bytes; CONFIDENTIAL"\n        bigint tokenVerificationCodeExpiresAt "unsigned"\n    }\n    verificationReminders {\n        binary uid PK "16 bytes"\n        varchar type PK\n        bigint createdAt\n    }'}),"\n",(0,t.jsxs)(e.h2,{id:"database-fxa_oauth",children:["Database: ",(0,t.jsx)(e.code,{children:"fxa_oauth"})]}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    clientDevelopers {\n        binary rowId PK "8 bytes"\n        binary developerId "16 bytes"\n        binary clientId "8 bytes"\n        timestamp createdAt\n    }\n    clients {\n        binary id PK "8 bytes"\n        varchar name\n        varchar imageUri\n        varchar redirectUri\n        tinyint canGrant\n        tinyint publicClient\n        timestamp createdAt\n        tinyint trusted\n        varchar allowedScopes\n        binary hashedSecret "32 bytes; CONFIDENTIAL"\n        binary hashedSecretPrevious "32 bytes; CONFIDENTIAL"\n        text notes\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    codes {\n        binary code PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar scope\n        timestamp createdAt\n        bigint authAt\n        varchar amr\n        tinyint aal\n        tinyint offline\n        varchar codeChallengeMethod\n        varchar codeChallenge "CONFIDENTIAL"\n        mediumtext keysJwe "CONFIDENTIAL"\n        bigint profileChangedAt\n        binary sessionTokenId "32 bytes"\n    }\n    dbMetadata {\n        varchar name PK\n        varchar value\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    developers {\n        binary developerId PK "16 bytes"\n        varchar email\n        timestamp createdAt\n    }\n    refreshTokens {\n        binary token PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar scope\n        timestamp createdAt\n        timestamp lastUsedAt\n        bigint profileChangedAt\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    scopes {\n        varchar scope PK\n        tinyint hasScopedKeys\n    }\n    tokens {\n        binary token PK "32 bytes; CONFIDENTIAL"\n        binary clientId "8 bytes"\n        binary userId "16 bytes"\n        varchar type\n        varchar scope\n        timestamp createdAt\n        timestamp expiresAt\n        bigint profileChangedAt\n    }'}),"\n",(0,t.jsxs)(e.h2,{id:"database-fxa_profile",children:["Database: ",(0,t.jsx)(e.code,{children:"fxa_profile"})]}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    avatar_providers {\n        int id PK\n        varchar name\n    }\n    avatar_selected ||--|{ avatars : chooses\n    avatar_selected {\n        binary userId PK "16 bytes"\n        binary avatarId "16 bytes"\n    }\n    avatars }|--|| avatar_providers : from\n    avatars {\n        binary id PK "16 bytes"\n        barchar url\n        binary userId "16 bytes"\n        int providerId\n    }'}),"\n",(0,t.jsx)(e.mermaid,{value:'erDiagram\n    dbMetadata {\n        varchar name PK\n        varchar value\n    }\n    profile {\n        binary userId PK "16 bytes"\n        varchar displayName\n    }'})]})}function y(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(b,{...n})}):b(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>d});var i=a(96540);const t={},r=i.createContext(t);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);