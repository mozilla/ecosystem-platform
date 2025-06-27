---
title: Rate limiting
---

# Customs V2 Docs

FxA now uses a rate-limit library that communicates with a dedicated Redis instance to conduct rate-limiting operations. The following is essentially just a rehashed version of the libraries readme file which can be found here. Always check the lib's readme for the most up to date doc!

## Defining Rules

This library is driven by a simple grammar for defining rules. The grammar is as follows:

` ${action} : ${property} : ${attempts} : ${window} : ${duration} : ${policy}`

Where a 'section' is separated by ':' and leading and trailing whitespace within a section is trimmed.
Note that comments can be added by starting a line with '#'. Adding comments explaining what the rulesets try to achieve is encouraged!

- `action`   - This is the user action being checked and counted. For example, accountLogin would check when an account login is attempted.
- `property` - The property/attribute we are counting for a given action. Options are ip, email, ip_email, uid and ip_uid.
- `attempts` - Number of tries until the rule is considered violated and block (or ban) occurs
- `window`   - Time span over which actions are counted. Once the window ends, actions are allowed again.
- `duration` - How long the block (or ban) remains active. Note that while the block is active, attempts are not counted!
- `policy`   - Determines what happens after a rate limit is exceeded. Options are block, ban, or report

### Property Options

Here the valid options that can be provided in the property column, and their significance.

- ip        - The user's IP. This is often useful for 'ban' policies, where we want to flag an IP that is making a large number of requests.
- ip_email  - The user's IP with the user's email appended. This is useful for ensuring one user cannot impact another user's experience.
- email     - The user's email. This is useful only when the account isn't known and for some reason, we don't want to use ip_email.
- uid       - The user's account id. This can be useful for stopping a user that has logged in from doing something malicious, like trying to mine data.
- ip_uid    - The user's account id with the user's uid appended. This is useful for ensuring one user cannot impact another user's experience.

### Policy Options

The block on policy describes what happens when a rate limit is exceeded. Or in other words when a given block on property is has seen more than the 
the allotted max attempts.

- block  - The action+property for the rule is no longer permitted until the duration expires or the user provides an unblock code on sign in and clears the block.
- ban    - Any and all rules for the given property are no longer permitted until the duration expires. Bans cannot be cleared by end users! So be very careful defining bans.
- report - The rule for the given action and property is only reported on, i.e. we emit metrics that can be monitored, but we do not actually block the action/property.  

### The 'default' Rule

To avoid lots of repetitive configuration, we have one special rule known as the 'default' rule. This rule
is used as a fallback in the event an action is supplied to the rate limiter, but it cannot be found in the
set of configured rules. When the 'default' rule is used, the action count is still kept distinct per action, 
but the policy from the default rule is used.

For example, if we were to call

`rateLimit.check('foo', { ip:0.0.0.0})`

And our rules file looked like this:

```
default : ip       : 100 : 10 minutes : 10 minutes : block
bar     : ip_email : 5   : 10 minutes : 10 minutes : block
```

Then we'd increment the redis count for action foo blocking on ip, but we'd use the default rule's settings to 
determine the rate limit. So the redis state would like this after calling check:

  `rate-limit:attempts:ip=0.0.0.0:foo:100-600-600 => 1`

### Testing & Development Considerations

When developing new features, running functional test suites locally, or running smoke tests remotely, rate-limiting behavior can be annoying — or even downright disruptive. To work around this, there are a few options:

- You override ride them via an environment variable, RATE_LIMIT__RULES="" _(Preferred option, since it works across the board.)_
- You use dev.json and override the config, { rateLimit: { rules: "" } }
- You can set the maxAttempt to be all be very high (or vary low if you want to test blocking scenarios quickly). _(Not great, you might accidently commit your changes.)_
- You can simply delete the contents of the rules in rate-limit-rules.txt. _(Not preferred cause you might accidently commit the change!)_

_ Note, you could also just add your IP to the RATE_LIMIT__IGNORE_IPS filter as mentioned below. Same options above apply here as to where / how you set this filter._

#### Exclude specific attributes like ip, email, or UID
When running smoke tests against a remote server, the first approach may not work — so we also support excluding specific emails or IP addresses from being checked by the rate limiter. To do this, define these values in your server's config file and pass them to the rate limiter.

 - Email ignore values can use regex filters.
 - IP addresses and UIDs must be exact string matches.

_Note that when using the email filter, checks run on IP only may still be susceptible to getting blocked! For this reason the IP filter might be a better approach if you can use static IPs._

### Auth Server specifics

The auth server has a special config for auto checking all endpoints. To turn this on set `RATE_LIMIT__CHECK_ALL_ENDPOINTS=true`. 

At the time of writing this isn't currently enabled, but it might be in the future. And if it is, a couple things to note:

- When this is enabled, we should define the 'default' rule! Otherwise calls will fall back to the legacy customs service, and this could result in a spike of blocked requests.
- It's also important to note that individual endpoints can be configured with the following pattern, `${HTTP_METHOD}_${PATH}` where path is lower case and non alpha numeric characters are converted to underscores.
- Some endpoints like `/v1/verify` have very high traffic, so specific rules should be added for these endpoints. For example `post__v1_verify : 100 : ip : 1 minute : 1 minute : report` would be a safe rule to add if turning on check all end points.
- Alternatively we might even consider skipping high traffic endpoints from rate-limiting checks. To do this add the high traffic endpoint to the `RATE_LIMIT__SKIP_ENDPOINTS` config setting.


### Graphql Specifics

Graphql also has the ability to run custom checks on on various actions. To do this simply decorate the endpoint to protect with `@UseGuards(GqlCustomsGuard('updateDisplayName'))`, where updateDisplayName is the action you wan to rate limit.

Same as auth-server, you can define default rules in the rate-limit-rules.txt file, or via the RATE_LIMIT__RULES env. 

_At the time of writing, there is no way to check all graphql endpoints automatically..._


### New Blocking Scenarios

We have begun to collect blocking scenarios as a team in an attempt to strategize around how to provide rules that protect our end users, but also aren't overly aggressive or annoying. If you are interested in these scnearios, or are considering adding a new one, please reach out to an FxA team member or look for the blocking scenarios in our internal docs for more info on how we approach setting up robust rate limiting rules.


_________

## Legacy Customs V1 Docs (Kept for historical Record, will be removed!)

Last updated: `June 21th, 2022`

The [Customs server](https://github.com/mozilla/fxa/blob/main/packages/fxa-customs-server/README.md) is the service responsible for maintaining and implementing rate limiting in FxA.
It was developed to help detect and deter [fraud and abuse](https://wiki.mozilla.org/Identity/Firefox_Accounts/Fraud_and_abuse).

Currently, only it is used by the [Mozilla accounts Auth Server](https://github.com/mozilla/fxa-auth-server).

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
