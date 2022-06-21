---
title: Rate limiting
---

Last updated: `June 21th, 2022`

The [Customs server](https://github.com/mozilla/fxa/blob/main/packages/fxa-customs-server/README.md) is the service responsible for maintaining and implementing rate limiting in FxA.
It was developed to help detect and deter [fraud and abuse](https://wiki.mozilla.org/Identity/Firefox_Accounts/Fraud_and_abuse).

Currently, only it is used by the [Firefox Accounts Auth Server](https://github.com/mozilla/fxa-auth-server).

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
