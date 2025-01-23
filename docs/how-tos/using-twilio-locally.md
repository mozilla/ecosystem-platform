---
title: Using Twilio For Local Development and Testing
---


# About Twilio

We use Twilio to send SMS messages to confirm and validate backup recovery phones. We are currently using Twilio's SMS api, but may also include the Twilio verify API in future versions of the recovery phone service. Regardless, the process of setting up and testing a twilio account should be pretty similar. The steps are as follows.


1. Go to twilio.com and sign up. You should use your @mozilla.com email and signup / in with google's oauth.
1. Once in twilio, go to your 'api keys'. There should be a link on the landing page.
1. On the api keys page, you'll see separate keys for 'test credentials'. Be sure to use the 'test credential keys' for local development!
1. Now in the root of fxa open up your .env file. (If one does not exist, create it.)
1. Add `RECOVERY_PHONE__TWILIO__ACCOUNT_SID=#####` where `#####` is your test account sid value.
1. Add `RECOVERY_PHONE__TWILIO__AUTH_TOKEN==#####` where `#####` is your test account auth token value.
1. Add `RECOVERY_PHONE__ENABLED=true`
1. Start up the stack with env applied, `dotenv -- yarn start`

_Note that another option is simply updating the local.json config files to override the config values._


# Validating The Twilio Integration

The auth server has a test suite that allows us to run integration tests against the Twilio API. This relies on using test credentials setup in the previous step. Running these integration tests on your dev environment is a great way to validate
that the Twilio integration is in fact configured correctly and working. 

Here's the steps to do this:
1. Make sure you've followed the steps in the 'Configuring Twilio' section above.
1. Just to make sure we have a clean slate run `yarn stop`
1. Next start the infrastructure, which spin up required mysql and redis instances locally. `yarn start infrastructure`
1. Next run the integration tests. `dotenv -- nx test-integration fxa-auth-server remote`



# Notes on Testing with Twilio


For almost all test cases we can rely on Twilio magic phone numbers. These numbers represent different possible success and error states when sending out messages. For example, when a sending a valid text message use `+15005550006` as the from number and any valid number as the ‘to’ phone number, the SMS will appear to go through. Note, that using a non real phone number like `+12345678900` for the `to` phone number is a good idea, since it avoids hardcoding a potentially real phone number, and this is also a magic number that plays nicely with Twilio's lookup api. For more examples and ideas for testing, see the recovery-phone integration tests @ `fxa-auth-server/test/remote/recovery_phone_tests.js`.

Another trick for testing confirmation codes with magic numbers is peeking at the Redis database state. Each confirmation code is stored in redis until it’s verified. The simplest way to look at redis is with `redis-commander` (`npm install -g redis-commander`). This will bring up a web ui, and let you browse through all the key value pairs held in Redis. Codes for recovery-phones will be held under keys prefixed with `recovery-phone:`.

For more info about testing and magic phone numbers in general check out the following Twilio docs:

- https://www.twilio.com/docs/messaging/tutorials/automate-testing
- https://www.twilio.com/docs/iam/test-credentials#test-sms-messages
- https://www.twilio.com/docs/lookup/magic-numbers-for-lookup
