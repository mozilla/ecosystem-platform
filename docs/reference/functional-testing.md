---
title: "Functional Tests"
---

Current as of `October, 2023`

End to end functional testing of the entire FxA ecosystem is achieved by a [comprehensive suite of Playwright tests](https://github.com/mozilla/fxa/tree/main/packages/functional-tests/tests). These tests are situated within the `packages` directory and are organized into distinct folders corresponding to their respective functionality, such as sign-in, sync, OAuth, and others. These tests can be run through the packages directory using the below command:

```bash
$ yarn workspace functional-tests test
```

The full set of functional tests (high, medium and low) is run on [CircleCI](./tests-in-circleci) on every check in and every time a pull request is merged to main.
The High priority tests are tagged as Severity 1 tests, medium priority as Severity 2 and low priority tests are non-tagged. The Production smoke test suite comprises all the Severity 1 (High Priority) tests which are run during the production deployments. Similarly, all the Severity 1 (High Priority) and Severity 2 (Medium Priority) tests make up the Stage smoke test suite, run during the Stage deployments. **The full suite of tests that includes high, medium and low priority tests are run for every PR check in on CircleCI for local environment.**
There is also a notification system in place for when there is a stage or prod smoke test suite failure to alert the FxA team via Slack messaging.

## How to decide priority (high, medium, low) for a test?
Deciding the priority of tests is a crucial part of test management. The priority of a test case can vary depending on factors such as its impact on the application, its criticality, and the frequency of execution. Here's how you can decide the priority of your tests:

* High Priority test
1. Tests that directly impact business-critical functionalities and could lead to significant financial losses, legal issues, or data breaches if they fail.
2. Tests for features that, if they fail, would result in a poor user experience or significantly impede users from achieving their goals
3. Tests that need to pass before other tests can be executed, preventing the testing of other critical areas.
For eg: Subscription tests, FxA sign-in/sign-up tests, sync/OAuth sign-in tests etc

* Medium Priority test
1. Tests that are essential for the application but not as critical as high-priority tests. Their failure may cause significant disruptions but not catastrophic consequences.
2. Tests for features where issues are noticeable but do not severely hinder the user experience
3. Tests that are less dependent but need to run before low-priority tests.
For eg: Reset password, Post-verify and cached/blocked sign-in tests

* Low Priority test
1. Tests for non-essential or rarely used features. Failure of these tests may not significantly impact the core functionality of the application.
2. Tests for features that rarely affect the user experience or have workarounds available.
3. Tests with no dependencies on other tests.
For eg: Password validation tests

The suite uses [Playwright](https://playwright.dev/docs/intro) framework for automation testing. Also check out the [API reference](https://playwright.dev/docs/api/class-test).

The functional tests can seem impenetrable, don't worry, they'll become second nature after a while. They continually save our bacon, and every new feature should have corresponding functional tests.

## Why are there so many test suites that seem to do the same thing?
A close look at the tests makes it look like there are a lot of tests that do
the same thing, and you are right. Sometimes this is intentional, sometimes it's not.

Many tests are intentionally duplicated across each of the different integration types
to ensure the end to end flow for that integration works as expected. For example,
there are "sign in" tests for each of:

* fx_desktop_v3 (Firefox Desktop Sync)
* oauth (OAuth RPs)

In each of these, the behaviors and screen to screen transitions can be subtly different. For example, Sync based integrations should show a "connect another device" screen when
the user finishes signing in, but most OAuth integrations redirect back to the RP.

If two tests are obviously testing the same thing or one is a subset of another,
it's OK (and encouraged) to remove duplicates.

## How do I?

### Run a single test
A single test can be run using the `grep` flag. You'll need to find the name of the test you want to run.

```bash
$ yarn workspace functional-tests test --grep="<name of test here>"
```

### Add a new test file

#### Create the test file
```bash
$ touch functional-tests/tests/<name_of_file>.spec.ts
```

#### Add the severity tag to the file
Test cases are grouped by severity (1-4) so that it's easy to identify the impact of a failure.

Use `test.describe('severity-#', ...)` to designate the severity for a group of tests. For example:

```ts
test.describe('severity-1', () => {
  test('create an account', async ({ pages: { login } }) => {
    //...
  });
});
```

### Make use of common selectors

Playwright tests interact with the DOM and require element selectors to be able to perform actions like clicking or testing
whether an element exists or is visible. Instead of embedding selectors within the tests, use selectors
from the [pages dir](https://github.com/mozilla/fxa/tree/main/packages/functional-tests/pages). To keep the tests readable and high-level we use the [page object model](https://playwright.dev/docs/test-pom) pattern. Pages are organized by url "route" when possible in the pages directory, and made available to tests in the fixture as pages. For guidance on writing POMs there's [pages/README.md](https://github.com/mozilla/fxa/blob/main/packages/functional-tests/pages/README.md)

```ts
test('create an account', async ({ pages: { login } }) => {
  // login is a POM at pages/login.ts
  await login.goto();
  //...
});
```

Adding selectors to page class makes it much easier to update tests if an element's selector changes. Instead of search/replace on the selector everywhere, update it in page class and leave the tests be.

### Example test suite

Below is a simplified annotated example of a test suite that deletes an FxA account.

```ts
import { test, expect } from '../../lib/fixtures/standard';

test.describe('severity-1 #smoke', () => {
  test('delete account', async ({
    credentials,
    pages: { settings, deleteAccount, page },
  }) => {
    test.slow();
    await settings.goto();
    await settings.clickDeleteAccount();
    await deleteAccount.checkAllBoxes();
    await deleteAccount.clickContinue();

    // Enter incorrect password
    await deleteAccount.setPassword('incorrect password');
    await deleteAccount.submit();

    // Verifying that the tooltip throws error
    expect(await deleteAccount.toolTipText()).toContain('Incorrect password');

    // Enter correct password
    await deleteAccount.setPassword(credentials.password);
    await deleteAccount.submit();
    const success = await page.waitForSelector('.success');
    expect(await success.isVisible()).toBeTruthy();
  });
});
```

Above example makes use of the POM model which has a `settings` and `deleteAccount` page class. This page class holds all the selectors and functions, such as `clickDeleteAccount`, `checkAllBoxes` etc. This example also makes use of the assertions provided in Playwright using the `expect()` and `toContain()`.

### Find an element
Use the `page.locator()` function:

```ts
async cannotCreateAccountHeader() {
    return this.page.locator(selectors.COPPA_HEADER);
  }
```

### Check if an element is visible
Use the `page.locator().isVisible()` function:

```ts
async cannotCreateAccountHeader() {
    return this.page.locator(selectors.COPPA_HEADER).isVisible();
  }
```

### Type into an element
Use the `page.locator().fill()` or `page.locator().type()`  function:

```ts
setRecoveryKey() {
    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).fill('1234');
  }
```

```ts
setRecoveryKey() {
    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).type('1234');
  }
```

### Check an element's value
Use the LocatorAssertions with `expect`. Such as `toContain()`, `toContainText()`, `toMatch()` etc

```ts
 expect(await deleteAccount.toolTipText()).toContain('Incorrect password');
```

### Click on an element
Use the `page.locator().click()` function:

```ts
async clickSignIn() {
    return this.page.locator(selectors.SUBMIT_USER_SIGNED_IN).click();
  }
```

### Create a unique email
Use the `createEmail` function or make use of the `credentials.email` in place of emails.

```ts
const email = createEmail();
```

### Simulate interaction with the browser, e.g., WebChannels
Browser based integrations all require FxA to communicate with the browser.

For example, every time Firefox Desktop loads, FxA asks Firefox for info
on the user currently signed into Firefox as well as a list of "capabilities"
the browser supports. This is done via the `fxaccounts:fxa_status` WebChannel message.

Within functional tests, we do not want to actually drive the browser, nor depend on potentially unknown states. Instead we intercept messages sent to the browser and
stub out responses. To ease development, default responses are hooked up for
`fxaccounts:fxa_status` and `fxaccounts:can_link_account`.

Responses to these can both be overridden by providing a `command` and `data` parameter in the `createCustomEventDetail()`. An example from [sync sign up test](https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/tests/syncV3/signUpWithCWTS.spec.ts#L35):

```ts
...
const eventDetailStatus = createCustomEventDetail(
        FirefoxCommand.FxAStatus,
        {
          signedInUser: null,
          capabilities: {
            choose_what_to_sync: true,
            multiService: true,
            engines: ['history'],
          },
        }
      );
...
```

### Emulate a specific user-agent

By default, all functional tests run with the [user-agent string](https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts)

> Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0,


If your code relies on parsing the user agent string for a particular version number, use the `forceUA` query parameter
of `goto()` to specify a UA string override.

A list of pre-defined user-agent strings is found in [ua-strings.ts](https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts).

```ts
const query = new URLSearchParams({
        forceUA: uaStrings['desktop_firefox_71'],
      });
      await page.goto(
        `${
          target.contentServerUrl
        }?context=fx_desktop_v3&service=sync&automatedBrowser=true&${query.toString()}`
      );
...
```

### Add a new helper in the page class
It's easy! When adding new forms that must be completed in multiple tests,
using a helper function makes life so much easier and code much more maintainable.
Add your helper method inside the page class under the [pages dir](https://github.com/mozilla/fxa/tree/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages).

## Why do my tests fail?

### Assuming an action has completed, a.k.a., timing issues

This is far and away the number one reason why functional tests fail. Always remember
that Playwright will run tests as fast as it possibly can, it's not like a real user
sitting in front of a computer where it takes time to type or move the mouse. Also keep
in mind that testing locally does not incur network latency. Finally, tests run on
CircleCI are run in virtual machines, backend requests and even the
test runners are often an order of magnitude slower than local machines.

One of the most common problems is clicking on a submit button and then immediately
checking text, an input element value, or an attribute value, of an element on a
subsequent screen without actually ensuring the screen is visible. The high level
helper functions *try* to take this into account, but sometimes fail. The simplest
approach to this is to **wait for some expected DOM mutation to occur**
before any further assertions.

### Cross test contamination

Sometimes tests pass when run in isolation, but fail as soon
as the whole suite is run. This is usually caused by cross
test state contamination. Often times in the test preceding
the failing test, a user is signed in and the failing test
assumes no user is signed in.

In the `beforeEach` method of your suite, always be sure to call [clearCache()](https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages/login.ts#L539). By default, `clearCache()` tries clearing localStorage and cookies.

### An element is not visible or is fading in

One common problem is that playwright *sometimes* refuses to read attribute values
on DOM elements unless they are 100% visible, meaning elements that are in the process
of being faded in or out sometimes causes errors. This is particularly problematic
on tooltips and status messages that use animations.

If this occurs, use the `locator().isVisible()` or `waitForSelector()`.

```ts
const error = await page.locator('.error').isVisible();
```

```ts
const error = await page.waitForSelector('.error');
```

### Avoiding Race condition while writing tests

> Use `waitFor` function to wait for specific conditions to be met, such as an element to appear or be visible, or an attribute to change. Use these functions instead of hard-coding time delays in your tests.

Example:

```ts
async showError() {
  const error = this.page.locator('#error');
  await error.waitFor({ state: 'visible' });
  return error.isVisible();
}
```

> Use the `waitForUrl` or `waitForNavigation` function to wait for page navigation to complete before continuing with the test.

Example:

```ts
async clickForgotPassword() {
  await this.page.locator(selectors.LINK_RESET_PASSWORD).click();
  await this.page.waitForURL(/reset_password/);
}
```
```ts
async performNavigation() {
  const waitForNavigation = this.page.waitForNavigation();
  await this.page.locator('button[id=navigate]').click();
  return waitForNavigation;
}
```

> Use unique selectors to identify elements on the page to avoid confusion or ambiguity in selecting the correct element.

Example:

```ts
this.page.getByRole('link', { name: 'name1' });
```
```ts
this.page.locator('[data-testid="change"]');
```
```ts
this.page.locator('#id');
```
```ts
this.page.locator('.class');
```

> Use locator actions to wait for an element to appear before interacting with it.

Example:

```ts
performClick() {
  return this.page.locator('button[id=Save]').click();
}
```

> Use Promise.all to execute multiple asynchronous tasks simultaneously and wait for them to complete before continuing with the test.

Example:

```ts
async signOut() {
  await Promise.all([
    this.page.locator('#logout').click(),
    this.page.waitForResponse(/\/api\/logout/),
  ]);
}
```

> Use `beforeEach` and `afterEach` to set up and tear down the test environment, or using `test.slow()` to mark the test as slow and tripling the test timeout, or running a test in a particular environment etc.

> When writing any test that uses Firefox Sync, use the `newPagesForSync` helper function. This function creates a new browser and a new browser context to avoid any Sync data being shared between tests. After your test is complete, ensure that the browser is closed to free up memory.

Example:

```ts
let syncBrowserPages;
test.beforeEach(async ({ target, pages: { login } }) => {
  test.slow();
  syncBrowserPages = await newPagesForSync(target);
});

test.afterEach(async () => {
  await syncBrowserPages.browser?.close();
});

test('open directly to /signup page, refresh on the /signup page', async ({
  target,
}) => {
  // Open new pages in browser specifically for Sync
  const { page, login } = syncBrowserPages;
  // ... The rest of your test
});
```

By following these best practices, you can minimize the likelihood of race conditions in your Playwright tests and ensure more reliable and consistent test results.
