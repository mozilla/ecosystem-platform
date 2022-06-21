---
title: Rate limiting
---

Last updated: `June 21th, 2022`

The [Customs server](https://github.com/mozilla/fxa/blob/main/packages/fxa-customs-server/README.md) is the service responsible for maintaining and implementing rate limiting in FxA.
It was developed to help detect and deter [fraud and abuse](https://wiki.mozilla.org/Identity/Firefox_Accounts/Fraud_and_abuse).

Currently, only it is used by the [Firefox Accounts Auth Server](https://github.com/mozilla/fxa-auth-server).

The Customs server uses a sliding window to keep track of the current count of a specific type of action and trims the count as needed.

### Policies

There are two types of policies:

- rate-limiting: slows down attackers by temporarily blocking requests for 15 minutes (see `config.limits.rateLimitIntervalSeconds`)
- block / ban: stops attacks by temporarily blocking requests for 24 hours (see `config.limits.blockIntervalSeconds`)

We currently have the following policies in place:

- rate-limiting when too many emails (`config.limits.maxEmails` defaults to 3) have been sent to the same email address in a given time period (`config.limits.rateLimitIntervalSeconds` defaults to 15 minutes)
- rate-limiting when too many requests to look up account status by email address (`config.limits.maxAccountStatusCheck`) have been sent from the same ip address during
- rate-limiting when too many sms (`config.limits.smsRateLimit.maxSms`) have been sent from the same ip address during period (`config.limits.smsRateLimit.limitIntervalSeconds` defaults to 60 minutes)
- rate-limiting when too many sms (`config.limits.smsRateLimit.maxSms`) have been sent from the same email address during period (`config.limits.smsRateLimit.limitIntervalSeconds` defaults to 60 minutes)
- rate-limiting when too many sms (`config.limits.smsRateLimit.maxSms`) have been sent to the same phone number during period (`config.limits.smsRateLimit.limitIntervalSeconds` defaults to 60 minutes)
- rate-limiting when too many failed login attempts (`config.limits.maxBadLogins` defaults to 2) have occurred for a given account and IP address, in a given time period (`config.limits.rateLimitIntervalSeconds` defaults to 15 minutes)
- rate-limiting too many attempts to verify randomly-generated codes (`config.limits.maxVerifyCodes` defaults to 10) have occurred for a given account and IP address, in a given time period (`config.limits.rateLimitIntervalSeconds` defaults to 15 minutes)
- manual blocking of an account (see `/blockEmail` API call)
- manual blocking of an IP address (see `/blockIp` API call)

The data that these policies are based on is stored in a memcache instance (keyed by `email`, `ip` or `ip + email` depending on the policy) and the code that implements them is split across these three files:

- `email_record.js` handles blocking and rate-limiting based only on the email address
- `ip_email_record.js` handles rate-limiting based on both the email and IP address of the request
- `ip_record.js` handles blocking based only on the IP address

The rate-limiting and blocking policies are conveyed to the auth server via the `block` property in the response to `/check`.

### Usage in Auth-server

In the auth-server, we utilized a helper library to make calls to the custom server api. The request could contain email, ip, and the action being performed.

For example, the call `customs.check(request, email, 'accountCreate')` would increment the `accountCreate` event for the user coming from this ip address and email.

Below are the current actions supported:

```javascript
// Actions that, if allowed, would allow an attacker
// to try a candidtate password against an account.
const PASSWORD_CHECKING_ACTION = {
  accountLogin: true,
  accountDestroy: true,
  passwordChange: true,
};

// Actions that, if allowed, would allow an attacker
// to try a guess at a randomly-generated security code.
// Code are higher entropy so we can allow more of these,
// but if you're doing it a lot, you're probably a baddie.
const CODE_VERIFYING_ACTION = {
  recoveryEmailVerifyCode: true,
  passwordForgotVerifyCode: true,
  verifyRecoveryCode: true,
  verifySessionCode: true,
  // not high entropy
  // changes at 60 seconds
  // limits by email
  verifyTotpCode: true,
};

// Actions that, if allowed, would allow an attacker
// to check whether an account exists or has certain
// properties for a particular user.
// Basically any unauthenticated endpoint that takes
// an email address as input.
const ACCOUNT_STATUS_ACTION = {
  accountCreate: true,
  accountLogin: true,
  accountDestroy: true,
  passwordChange: true,
  passwordForgotSendCode: true,
  accountStatusCheck: true,
  sendUnblockCode: true,
  recoveryKeyExists: true,
};

// Actions that send an email, and hence might make
// us look like spammers if abused.
const EMAIL_SENDING_ACTION = {
  accountCreate: true,
  createEmail: true,
  recoveryEmailResendCode: true,
  recoveryEmailSecondaryResendCode: true,
  passwordForgotSendCode: true,
  passwordForgotResendCode: true,
  sendUnblockCode: true,
};

// Actions that can send sms, and could make us
// very annoying to a user if abused.
const SMS_SENDING_ACTION = {
  connectDeviceSms: true,
};
```
