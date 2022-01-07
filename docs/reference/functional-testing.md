---
title: "Functional Tests"
---

Current as of `March 11th, 2021`

End to end testing of the entire FxA ecosystem is provided by a [comprehensive suite of Selenium tests](https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional) in the fxa-content-server package. Tests can be run by going to the content-server package directory and typing:

```bash
$ npm run test-functional
```

The full set of functional tests is run on [CircleCI](./fxa-tests-circleci) on every checkin and every time a pull request is merged to main.
This full set consist of a smoke test suite(https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_smoke) which runs the high priority test cases first and upon success the full suite of regression tests(https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_regression) are run. If there is a failure in the smoke test suite, the regression suite won't be run until the failures have been fixed.
There is also a notification system in place for when these failures occur to alert the FxA team via Slack messaging.

[The Intern](https://theintern.io/) library is used to run the tests, which itself is a wrapper around the [Leadfoot](https://theintern.io/docs.html#Leadfoot/2/api/Command) WebDriver library.

The functional tests can seem impenetrable, don't worry, they'll become second nature after a while. They continually save our bacon, and every new feature should have corresponding functional tests.

## Why are there so many test suites that seem to do the same thing?
A close look at the tests makes it look like there are a lot of tests that do
the same thing, and you are right. Sometimes this is intentional, sometimes it's not.

Many tests are intentionally duplicated across each of the different integration types
to ensure the end to end flow for that integration works as expected. For example,
there are "sign in" tests for each of:

* fx_desktop_v3 (Firefox Desktop Sync)
* fx_fennec_v1 (Firefox for Android Sync)
* fx_ios_v1 (Firefox for iOS Sync)
* oauth (OAuth RPs)

In each of these, the behaviors and screen to screen transitions can be subtly different. For example, Sync based integrations should show a "connect another device" screen when
the user finishes signing in, but most OAuth integrations redirect back to the RP.

If two tests are obviously testing the same thing or one is a subset of another,
it's OK (and encouraged) to remove duplicates.

## How do I?

### Run a single test
A single test can be run using intern's `grep` flag. You'll need to find the name of the test you want to run.

```bash
$ npm run test-functional -- --grep="<name of test here>"
```

### Add a new test file

#### Create the test file
```bash
$ touch tests/functional/<name_of_file>.js
```

#### Add the file to the list

Edit [tests/functional.js](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional.js) and add the name of the file
to the list.

#### Fill in the test file
See [Example test suite](#example-test-suite).

### Make use of common selectors

As seen in [Example test suite](#example-test-suite) Selenium tests interact with the
DOM and require element selectors to be able to perform actions like typing or testing
whether an element exists. Instead of embedding selectors within the tests, use selectors
from the [selectors.js](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional/lib/selectors.js) file. Selectors are namespaced
by their screen name. If a selector or screen namespace is not available, feel free to add it.

Adding selectors to selectors.js makes it much easier to update tests if an element's selector changes. Instead of search/replace on the selector everywhere, update it in selectors.js and leave the tests be.

### Example test suite

Below is a simplified annotated example of a test suite that checks the privacy policy.

```js
// intern is a global variable and does not need to be imported
const { registerSuite } = intern.getInterface('object');
const FunctionalHelpers = require('./lib/helpers');
const selectors = require('./lib/selectors');

const ENTER_EMAIL_URL = intern._config.fxaContentRoot;
const PP_URL = intern._config.fxaContentRoot + 'legal/privacy';

const {
  // name of helpers to import. There are helpers
  clearBrowserState,
  createEmail,
  openPage,
  type,
} = FunctionalHelpers;

registerSuite('privacy policy', {
  beforeEach: function() {
    // this.remote provides a reference to the remote browser
    // `clearBrowserState` avoids cross test contamination
    return this.remote.then(clearBrowserState({ force: true }));
  },

  tests: {
    'test the privacy policy works': function() {
      return this.remote

        // open the ENTER_EMAIL_URL page and wait for the
        // element defined by the ENTER_EMAIL.HEADER selector
        .then(
          openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER)
        )

        // type the email created by `createEmail` into the
        // element defined by the ENTER_EMAIL.EMAIL selector
        .then(type(selectors.ENTER_EMAIL.EMAIL, createEmail()))

        // click on the ENTER_EMAIL.SUBMIT element, wait for the
        // SIGNUP_PASSWORD.HEADER element.
        .then(
          click(
            selectors.ENTER_EMAIL.SUBMIT,
            selectors.SIGNUP_PASSWORD.HEADER
          )
        )

        .then(
          // click on the SIGNUP_PASSWORD.PRIVACY_POLICY element,
          // wait for the PRIVACY_POLICY.HEADER element.
          click(
            selectors.SIGNUP_PASSWORD.PRIVACY_POLICY,
            selectors.PRIVACY_POLICY.HEADER
          )
        )
        .then(
          // click on the back link (PRIVACY_POLICY.LINK_BACK),
          // ensure we go back to SIGNUP_PASSWORD.HEADER
          click(
            selectors.PRIVACY_POLICY.LINK_BACK,
            selectors.SIGNUP_PASSWORD.HEADER
          )
        );
    },
  },
});
```

Very few low level [Leadfood commands](https://theintern.io/docs.html#Leadfoot/2/api/Command) are used directly, instead we prefer to use [higher level helpers](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/tests/functional/lib/helpers.js). Leadfoot commands are often *too* low level and end up requiring a lot
of code to do simple actions. Our high level helpers usually require less code and
often provide extra functionality, e.g., ensuring an element is visible before attempting
to type into it.

### Check if an element exists

Use the [testElementExists](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L194:L202) helper:

```js
.then(testElementExists(selectors.SETTINGS.HEADER))
```

Note, this only tests that an element exists, however, the element *may be hidden*. For visibility, see [Check if an element is visible](#check-if-an-element-is-visible).

### Check if an element is visible

Use the [visibleByQSA](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L125-L192) helper.

```js
.then(visibleByQSA(selectors.SETTINGS.HEADER))
```

### Type into an element
Use the [type](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L301-L356) helper method.

```js
.then(type(selectors.ENTER_EMAIL.EMAIL, 'testuser@testuser.com'))
```

### Check an element's value
Use the [testElementValueEquals](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2107:L2122) helper method.

```js
.then(
  testElementValueEquals(
    selectors.ENTER_EMAIL.EMAIL, 'testuser@testuser.com'
  )
)
```

### Click on an element
Use the [click](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L204-L276) helper method.

```js
.then(
  click(
    // click on this element
    selectors.ENTER_EMAIL.SUBMIT,
    // wait for this element
    selectors.SIGN_IN_PASSWORD.HEADER
  )
)
```

### Create a unique email
Use the [createEmail](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/lib/helpers.js#L24:L29) helper method.

```js
const email = createEmail();
```

### Create a user
First, see [create a unique email](#create-a-unique-email) to create a unique email. Emails should be unique across all tests and test runs to avoid any cross test contamination.
Then use the [createUser](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2180:L2200) helper method.

```js
const email = createEmail();
...
// creates a pre-verified user with email `email` and password `PASSWORD123123123`
// Users are by default unverified.
.then(createUser(email, 'PASSWORD123123123', { preVerified: true }))
```

### Submit a form
See [Click on an element](#click-on-an-element).

### Test A/B tests

To avoid test failures due to random selections, by default all A/B tests are disabled within functional tests.
So that A/B tests can be tested, it is possible to force a single experiment and experiment group using URL query
parameters.

When opening your page, specify the `forceExperiment` and `forceExperimentGroup` query parameters:

```js
...
.then(openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {
  query: {
    forceExperiment: 'my-new-experiment-name',
    forceExperimentGroup: 'treatment'
  }
}))
```

### Simulate interaction with the browser, e.g., WebChannels
Browser based integrations all require FxA to communicate with the browser. See [WebChannels in Desktop and Fennec](./fxa-webchannel-protocol) and [WebChannels in Fenix](./fxa-oauth-webchannel-protocol) for background information.

For example, every time Firefox Desktop loads, FxA asks Firefox for info
on the user currently signed into Firefox as well as a list of "capabilities"
the browser supports. This is done via the [fxaccounts:fxa_status](./fxa-webchannel-protocol#fxaccounts-fxa_status) WebChannel message.

Within functional tests, we do not want to actually drive the browser, nor depend on potentially unknown states. Instead we intercept messages sent to the browser and
stub out responses. To ease development, default responses are hooked up for
`fxaccounts:fxa_status` and `fxaccounts:can_link_account`.

Responses to these can both be overridden by providing a `webChannelResponses` object
in the `options` parameter of `openPage`. An example from [sync_v3_sign_in.js](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/sync_v3_sign_in.js#L55-L62):

```js
...
.then(
  openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {
    query,
    webChannelResponses: {
      // simulate the user declining whether two Sync accounts
      // can be joined.
      'fxaccounts:can_link_account': { ok: false },
    },
  })
)
...
```

Your test can check whether the expected data was sent in a WebChannel
message to the browser using the [storeWebChannelMessageData](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L1150-L1189) and [getWebChannelMessageData](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L1191-L1208) helper functions.

```js
...
.then(storeWebChannelMessageData('fxaccounts:login'))
.then(
  fillOutEmailFirstSignIn('testuser@testuser.com', 'PASSWORDCXVZ')
)
.then(getWebChannelMessageData('fxaccounts:login'))
.then(messageData => {
  assert.equal(messageData.email, 'testuser@testuser.com');
})
...
```

### Emulate a specific user-agent

By default, all functional tests run with the [user-agent string](https://github.com/mozilla/fxa/blob/a86e324a6a2d72684bcd7a632e22d5ab5aa005cd/packages/fxa-content-server/tests/tools/firefox_profile_creator.js#L6)

> Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0 FxATester/1.0

That's right, Firefox 40 - Firefox 40 was the first version that supported WebChannels.

If your code relies on parsing the user agent string for a particular version number, use the `forceUA` query parameter
of `openPage` to specify a UA string override.

A list of pre-defined user-agent strings is found in [ua-strings.js](https://github.com/mozilla/fxa/blob/a86e324a6a2d72684bcd7a632e22d5ab5aa005cd/packages/fxa-content-server/tests/functional/lib/ua-strings.js).

```js
const uaStrings = require('./lib/ua-strings');

...
  openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER, {
    query: {
      forceUA: uaStrings['desktop_firefox_71']
    },
...
```

### Add a new helper
It's easy! When adding new forms that must be completed in multiple tests,
using helper function makes life so much easier and code much more maintainable.
Add your helper method to [helpers.js](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js).
Expose it [in the interface](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L2504).

There are so many helper functions for DOM manipulation that you'll likely be able
to make use of those to avoid [low level Leadfoot commands](https://theintern.io/docs.html#Leadfoot/2/api/Command).

## Why do my tests fail?

### Assuming an action has completed, a.k.a., timing issues

This is far and away the number one reason why functional tests fail. Always remember
that Selenium will run tests as fast as they possibly can, it's not like a real user
sitting in front of a computer where it takes time to type or move the mouse. Also keep
in mind that testing locally does not incur network latency. Finally, tests run on
CircleCI are run in virtual machines, backend requests and even the
test runner are often an order of magnitude slower than local machines.

One of the most common problems is clicking on a submit button and then immediately
checking text, an input element value, or an attribute value, of an element on a
subsequent screen without actually ensuring the screen is visible. The high level
helper functions *try* to take this into account, but sometimes fail. The simplest
approach to this is to **wait for some expected DOM mutation to occur**
before any further assertions.

An example of a problematic test:

```js
...
.then(click(selectors.ENTER_EMAIL.SUBMIT))
// We have not ensured the submission was successful by
// checking for the SIGNUP_PASSWORD's header.
.then(
  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)
)
```

A more robust solution is:

```js
...
// The 2nd parameter ensures SIGNUP_PASSWORD.HEADER is
// visible before continuing.
.then(
  click(
    selectors.ENTER_EMAIL.SUBMIT, selectors.SIGNUP_PASSWORD.HEADER
  )
)
.then(
  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)
)
```

An alternative way to wait is to use the [testElementExists](#check-if-an-element-exists) helper:

```js
...
.then(click(selectors.ENTER_EMAIL.SUBMIT))
.then(testElementExists(selectors.SIGNUP_PASSWORD.HEADER))
.then(
  testElementValueEquals(selectors.SIGNUP_PASSWORD.EMAIL, email)
)
```

### Cross test contamination

Sometimes tests pass when run in isolation, but fail as soon
as the whole suite is run. This is usually caused by cross
test state contamination. Often times in the test preceding
the failing test, a user is signed in and the failing test
assumes no user is signed in.

In the `beforeEach` method of your suite, always be sure to call [clearBrowserState](https://github.com/mozilla/fxa/blob/abfb9822760f9edf5175bdded0efa8e074b8ed84/packages/fxa-content-server/tests/functional/lib/helpers.js#L465). By default, `clearBrowserState` tries clearing localStorage, but this does not always work if actions from the previous test have not completed. Passing the `force: true` option will ensure browser state is cleared because it redirects away from the page the previous test was on.

```js
...
  beforeEach: function() {
    return this.remote.then(clearBrowserState({ force: true }));
  },
...
```

### An element is not visible or is fading in

One common problem is that Selenium *sometimes* refuses to read attribute values
on DOM elements unless they are 100% visible, meaning elements that are in the process
of being faded in or out sometimes cause errors. This is particularly problematic
on tooltips and status messages that use animations.

If this occurs, use the [visibleByQSA](#check-if-an-element-is-visible) helper to ensure
the element is fully visible.

```js
...
.then(visibleByQSA(selectors.ENTER_EMAIL.ERROR))
.then(testElementTextEquals(selectors.ENTER_EMAIL.ERROR, 'account no longer exists'))
```

### An element is obviously there and visible but Selenium says it cannot be found

See [An element is not visible or is fading in](#an-element-is-obviously-there-and-visible-but-selenium-says-it-cannot-be-found).

### staleElementReference

This can occur if your selector is not specific enough and an element with the same
selector is used on two screens.

For example, there is an email input field on the `/` and `/signin` or `/signup`
screens. If the email field is referenced on the `/` screen, and then the same selector
is used to reference the email element in `/signin`, unless
[guards are put in place to avoid timing issues](#assuming-an-action-has-completed-aka-timing-issues),
it's possible for the runner to grab a reference to the email field from the `/` screen because it thinks it's already at the `/signin` screen. There are two possible mitigations:

1. Ensure the screen transition has actually occurred by testing
 for the header of the expected screen before operating on any of it's DOM elements.
2. Use a more specific selector.

See also [Assuming an action has completed, a.k.a., timing issues](#assuming-an-action-has-completed-aka-timing-issues).

### timeout

Tests by default have 30 seconds to run. Sometimes a test needs longer. At the top of your test, you can change the timeout:

```js
'long running test': function () {
  // allow for a full minute
  this.timeout = 60*1000;
  return this.remote.then
    ...
},
...
```
