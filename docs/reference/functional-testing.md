---
title: "Functional Playwright Tests"
---

Current as of `May, 2024`

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

### Make use of common locators

Playwright tests interact with the DOM and require element locators to be able to perform actions like clicking or testing
whether an element exists or is visible. Instead of embedding locators within the tests, use locators
from the [pages dir](https://github.com/mozilla/fxa/tree/main/packages/functional-tests/pages). To keep the tests readable and high-level we use the [page object model](https://playwright.dev/docs/test-pom) pattern. Pages are organized by url "route" when possible in the pages directory, and made available to tests in the fixture as pages. For guidance on writing POMs there's [pages/README.md](https://github.com/mozilla/fxa/blob/main/packages/functional-tests/pages/README.md)

```ts
test('create an account', async ({ pages: { login } }) => {
  // login is a POM at pages/login.ts
  await login.goto();
  //...
});
```

Centralizing locators to POMs (Page Object Models) reduces the code change scope and impact when they require updating. It is preferable to use user-facing built in locators when possible (see [Locators](https://playwright.dev/docs/locators))

### Example test suite

Below is a simplified annotated example of a test case that deletes an FxA account.

```ts
import { test, expect } from "../../lib/fixtures/standard";

test.describe("severity-1 #smoke", () => {
  test("delete account", async ({
    target,
    page,
    pages: { deleteAccount, settings, signin },
    testAccountTracker,
  }) => {
    const credentials = await testAccountTracker.signUp();
    await page.goto(target.contentServerUrl);
    await signin.fillOutEmailFirstForm(credentials.email);
    await signin.fillOutPasswordForm(credentials.password);

    await expect(settings.settingsHeading).toBeVisible();

    await settings.goto();
    await settings.deleteAccountButton.click();

    await expect(deleteAccount.deleteAccountHeading).toBeVisible();
    await expect(deleteAccount.step1Heading).toBeVisible();

    await deleteAccount.checkAllBoxes();
    await deleteAccount.continueButton.click();

    await expect(deleteAccount.step2Heading).toBeVisible();

    await deleteAccount.passwordTextbox.fill("incorrect password");
    await deleteAccount.deleteButton.click();

    await expect(deleteAccount.tooltip).toHaveText("Incorrect password");
  });
});
```

The above example makes use of the `deleteAccount`, `settings` and `signin` POMs. These page classes hold all the relevent locators and functions, such as `fillOutEmailFirstForm`, `fillOutPasswordForm` and `checkAllBoxes`, needed to execute this test flow. This example also makes use of the auto-awaiting assertions provided in Playwright.

### Find an element

Use the built in locators, such as the `page.getByRole()` function:

```ts
  get continueButton() {
    return this.page.getByRole('button', { name: 'Continue' });
  }
```

### Type into an element

Use the `page.locator().fill()` or `page.locator().type()` function:

```ts
await deleteAccount.passwordTextbox.fill("incorrect password");
```

```ts
await deleteAccount.passwordTextbox.type("incorrect password");
```

### Check an element's visibility

Use the auto-awaiting `toBeVisible()` assertion function:

```ts
await expect(deleteAccount.deleteAccountHeading).toBeVisible();
```

### Check an element's value

Use the auto-awaiting `toContainText()`, `.toHaveText()`, `toHaveValue()` etc

```ts
await expect(deleteAccount.tooltip).toHaveText("Incorrect password");
```

### Click on an element

Use the `page.locator().click()` function:

```ts
await deleteAccount.deleteButton.click();
```

### Create a unique email, password or setup an account

Use the [TestAccountTracker](https://github.com/mozilla/fxa/blob/main/packages/functional-tests/lib/testAccountTracker.ts) when in need of an email or password. The TestAccountTracker is available for use via a fixture of the same name in all tests. The TestAccountTracker has the responsibility of creating and deleting accounts in all tests.

```ts
// create an email
const email = testAccountTracker.generateEmail();

// create a password
const password = testAccountTracker.generatePassword();

// create an email & password
const { email, password } = testAccountTracker.generateAccountDetails();

// create an email & password and signup the user
const credentials = testAccountTracker.signUp();
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

Use built in locators whenever possible to avoid this problem.

### Avoiding Race condition while writing tests

Use the `waitForUrl` or `waitForNavigation` function to wait for page navigation to complete before continuing with the test.

Example:

```ts
async clickForgotPassword() {
  await this.page.getByRole("link", {name: "reset_password"}).click();
  await this.page.waitForURL(/reset_password/);
}
```

```ts
async performNavigation() {
  const waitForNavigation = this.page.waitForNavigation();
  await this.page.getByRole("button", {name: "navigate"}).click();
  return waitForNavigation;
}
```

Use unique locators to identify elements on the page to avoid confusion or ambiguity in selecting the correct element.

Example:

```ts
this.page.getByRole("link", { name: "name1" });
```

```ts
this.page.page.getByTestId("change");
```

```ts
this.page.locator("#id");
```

```ts
this.page.locator(".class");
```

Use locator actions to wait for an element to appear before interacting with it.

Example:

```ts
this.page.getByRole("button", { name: "Save" }).click();
```

Use Promise.all to execute multiple asynchronous tasks simultaneously and wait for them to complete before continuing with the test.

Example:

```ts
async signOut() {
  await Promise.all([
    this.page.locator('#logout').click(),
    this.page.waitForResponse(/\/api\/logout/),
  ]);
}
```

When writing any test that uses Firefox Sync, use the `syncBrowserPages` fixture. This fixture creates a new browser and a new browser context to avoid any Sync data being shared between tests. The fixture ensures that after your test is complete, that the browser is closed to free up memory.

Example:

```ts
test('open directly to /signup page, refresh on the /signup page', async ({
  // Open new pages in browser specifically for Sync
  syncBrowserPages: { page, login }, 
}) => {
  // ... The rest of your test
});
```

By following these best practices, you can minimize the likelihood of race conditions in your Playwright tests and ensure more reliable and consistent test results.

### Debugging Failed Tests in CircleCI: Best Practices

When encountering a failed test in CircleCI, follow these systematic steps for effective debugging:

1. Examine the Tests Section:
**Initial Insight:** Start by investigating the **Tests** section to understand the nature of the error and if it's a result of a change through your or someone else's PR.
*Tip:* Directly navigate to the failed test by clicking on it.

2. Utilize the Artifacts Section:
**Deeper Analysis:** If the error remains unclear, proceed to the **Artifacts** section and run the trace.
*Tip:* Download the `trace.zip` file and visit `trace.playwright.dev` to upload the file, visualizing the test execution.

3. Troubleshooting Beyond Tracing:
**Team Collaboration:** If the trace doesn't provide sufficient insights, take these collaborative steps:
- Post the issue in the `FXA-team` channel for collective input.
- Engage the Test Engineering team to leverage their expertise.
- Create a Jira ticket encapsulating all details and findings.
- Temporarily disable the test using `test.fixme()` and annotate it with the Jira ticket link.
   ```ts
   // For all projects
   test.fixme(true, "FXA-8717");

   // For stage & production projects
   test.fixme(
      project.name !== "local",
      "Test is broken in stage & production (see FXA-8717)"
   );
   ```

**Key Considerations:**

> *Flaky Test Alert:* Be cautious, as CircleCI considers all workflows, including the `test_pull_request` workflow, when labeling tests as `Flaky`.
> *Test Consistency Check:* After the initial investigation, rerun the test once to ensure consistency. A consistent failure indicates a genuine test issue, not a flaky one.

## Guidelines and Best Practices for Functional Test Automation

In our continuous pursuit of maintaining a robust and efficient testing ecosystem, the following key takeaways are crucial for fostering a standardized and high-quality approach to test automation:

1. Do not comment-out test cases:
   Instead, use `test.fixme()` and `test.skip()` [annotations](https://playwright.dev/docs/test-annotations). This allows for better metric calculation and Static Analysis/IDE feedback.
   - Reference a JIRA ticket in the annotations whenever possible
   - `test.fixme()` is preferred for tests in progress or tests requiring maintenance
   - `test.skip()` is preferred for project or feature flag constraints
    ```ts
    // Project
    test.skip(
      project.name === "production",
      "The test case is unsupported in production."
    );

    // Feature Flag
    test.skip(config.showReactApp.signInRoutes === true, "FXA-9410");
    ```

2. Exclude partially implemented tests from CI execution:
   Partial implementation can lead to miscommunication in the form of false positives

3. Exercise judgment with 3rd party UIs & flows:
   Generally speaking automating 3rd party interfaces is discouraged, since it can introduce brittleness and be the cause of false negatives

4. Prefer [fixtures](https://playwright.dev/docs/test-fixtures) over setup & teardown lifecycle methods:
   As recommended by Playwright, fixtures best promote reusability and facilitate test concurrency

5. Assure tests are distributed evenly accross workers:
   The Playwright test runner will split tests at file level on CI. In order to facilitate even distribution it is best to split large files into smaller files. Playwright will emit a warning message if a test file is too large. By default a file is considered too large if execution surpases a [15 second threshold](https://playwright.dev/docs/api/class-testconfig#test-config-report-slow-tests). Example:
   ```
   Slow test file: [stage] › test.spec.ts (3.7m)
   Consider splitting slow test files to speed up parallel execution
   ```

6. Employ targetted timeouts or modify default timeouts instead of using `test.slow()` [annotations](https://playwright.dev/docs/test-annotations):
   Overuse of `test.slow()` can have a componding effect and prevent the test suite from failing fast
