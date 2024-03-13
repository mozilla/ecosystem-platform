"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6842],{28772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(85893),i=n(11151);const a={title:"Functional Playwright Tests"},r=void 0,o={id:"reference/functional-testing",title:"Functional Playwright Tests",description:"Current as of October, 2023",source:"@site/docs/reference/functional-testing.md",sourceDirName:"reference",slug:"/reference/functional-testing",permalink:"/ecosystem-platform/reference/functional-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/functional-testing.md",tags:[],version:"current",frontMatter:{title:"Functional Playwright Tests"},sidebar:"docs",previous:{title:"Tests in CircleCI",permalink:"/ecosystem-platform/reference/tests-in-circleci"},next:{title:"Automation Test Plan",permalink:"/ecosystem-platform/reference/automation-testplan"}},l={},c=[{value:"How to decide priority (high, medium, low) for a test?",id:"how-to-decide-priority-high-medium-low-for-a-test",level:2},{value:"Why are there so many test suites that seem to do the same thing?",id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing",level:2},{value:"How do I?",id:"how-do-i",level:2},{value:"Run a single test",id:"run-a-single-test",level:3},{value:"Add a new test file",id:"add-a-new-test-file",level:3},{value:"Create the test file",id:"create-the-test-file",level:4},{value:"Add the severity tag to the file",id:"add-the-severity-tag-to-the-file",level:4},{value:"Make use of common selectors",id:"make-use-of-common-selectors",level:3},{value:"Example test suite",id:"example-test-suite",level:3},{value:"Find an element",id:"find-an-element",level:3},{value:"Check if an element is visible",id:"check-if-an-element-is-visible",level:3},{value:"Type into an element",id:"type-into-an-element",level:3},{value:"Check an element&#39;s value",id:"check-an-elements-value",level:3},{value:"Click on an element",id:"click-on-an-element",level:3},{value:"Create a unique email",id:"create-a-unique-email",level:3},{value:"Simulate interaction with the browser, e.g., WebChannels",id:"simulate-interaction-with-the-browser-eg-webchannels",level:3},{value:"Emulate a specific user-agent",id:"emulate-a-specific-user-agent",level:3},{value:"Add a new helper in the page class",id:"add-a-new-helper-in-the-page-class",level:3},{value:"Why do my tests fail?",id:"why-do-my-tests-fail",level:2},{value:"Assuming an action has completed, a.k.a., timing issues",id:"assuming-an-action-has-completed-aka-timing-issues",level:3},{value:"Cross test contamination",id:"cross-test-contamination",level:3},{value:"An element is not visible or is fading in",id:"an-element-is-not-visible-or-is-fading-in",level:3},{value:"Avoiding Race condition while writing tests",id:"avoiding-race-condition-while-writing-tests",level:3},{value:"Debugging Failed Tests in CircleCI: Best Practices",id:"debugging-failed-tests-in-circleci-best-practices",level:3},{value:"Guidelines and Best Practices for Functional Test Automation",id:"guidelines-and-best-practices-for-functional-test-automation",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Current as of ",(0,s.jsx)(t.code,{children:"October, 2023"})]}),"\n",(0,s.jsxs)(t.p,{children:["End to end functional testing of the entire FxA ecosystem is achieved by a ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/main/packages/functional-tests/tests",children:"comprehensive suite of Playwright tests"}),". These tests are situated within the ",(0,s.jsx)(t.code,{children:"packages"})," directory and are organized into distinct folders corresponding to their respective functionality, such as sign-in, sync, OAuth, and others. These tests can be run through the packages directory using the below command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ yarn workspace functional-tests test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The full set of functional tests (high, medium and low) is run on ",(0,s.jsx)(t.a,{href:"./tests-in-circleci",children:"CircleCI"})," on every check in and every time a pull request is merged to main.\nThe High priority tests are tagged as Severity 1 tests, medium priority as Severity 2 and low priority tests are non-tagged. The Production smoke test suite comprises all the Severity 1 (High Priority) tests which are run during the production deployments. Similarly, all the Severity 1 (High Priority) and Severity 2 (Medium Priority) tests make up the Stage smoke test suite, run during the Stage deployments. ",(0,s.jsx)(t.strong,{children:"The full suite of tests that includes high, medium and low priority tests are run for every PR check in on CircleCI for local environment."}),"\nThere is also a notification system in place for when there is a stage or prod smoke test suite failure to alert the FxA team via Slack messaging."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-decide-priority-high-medium-low-for-a-test",children:"How to decide priority (high, medium, low) for a test?"}),"\n",(0,s.jsx)(t.p,{children:"Deciding the priority of tests is a crucial part of test management. The priority of a test case can vary depending on factors such as its impact on the application, its criticality, and the frequency of execution. Here's how you can decide the priority of your tests:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"High Priority test"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Tests that directly impact business-critical functionalities and could lead to significant financial losses, legal issues, or data breaches if they fail."}),"\n",(0,s.jsx)(t.li,{children:"Tests for features that, if they fail, would result in a poor user experience or significantly impede users from achieving their goals"}),"\n",(0,s.jsx)(t.li,{children:"Tests that need to pass before other tests can be executed, preventing the testing of other critical areas.\nFor eg: Subscription tests, FxA sign-in/sign-up tests, sync/OAuth sign-in tests etc"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Medium Priority test"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Tests that are essential for the application but not as critical as high-priority tests. Their failure may cause significant disruptions but not catastrophic consequences."}),"\n",(0,s.jsx)(t.li,{children:"Tests for features where issues are noticeable but do not severely hinder the user experience"}),"\n",(0,s.jsx)(t.li,{children:"Tests that are less dependent but need to run before low-priority tests.\nFor eg: Reset password, Post-verify and cached/blocked sign-in tests"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Low Priority test"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Tests for non-essential or rarely used features. Failure of these tests may not significantly impact the core functionality of the application."}),"\n",(0,s.jsx)(t.li,{children:"Tests for features that rarely affect the user experience or have workarounds available."}),"\n",(0,s.jsx)(t.li,{children:"Tests with no dependencies on other tests.\nFor eg: Password validation tests"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The suite uses ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/intro",children:"Playwright"})," framework for automation testing. Also check out the ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/api/class-test",children:"API reference"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The functional tests can seem impenetrable, don't worry, they'll become second nature after a while. They continually save our bacon, and every new feature should have corresponding functional tests."}),"\n",(0,s.jsx)(t.h2,{id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing",children:"Why are there so many test suites that seem to do the same thing?"}),"\n",(0,s.jsx)(t.p,{children:"A close look at the tests makes it look like there are a lot of tests that do\nthe same thing, and you are right. Sometimes this is intentional, sometimes it's not."}),"\n",(0,s.jsx)(t.p,{children:'Many tests are intentionally duplicated across each of the different integration types\nto ensure the end to end flow for that integration works as expected. For example,\nthere are "sign in" tests for each of:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"fx_desktop_v3 (Firefox Desktop Sync)"}),"\n",(0,s.jsx)(t.li,{children:"oauth (OAuth RPs)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'In each of these, the behaviors and screen to screen transitions can be subtly different. For example, Sync based integrations should show a "connect another device" screen when\nthe user finishes signing in, but most OAuth integrations redirect back to the RP.'}),"\n",(0,s.jsx)(t.p,{children:"If two tests are obviously testing the same thing or one is a subset of another,\nit's OK (and encouraged) to remove duplicates."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-i",children:"How do I?"}),"\n",(0,s.jsx)(t.h3,{id:"run-a-single-test",children:"Run a single test"}),"\n",(0,s.jsxs)(t.p,{children:["A single test can be run using the ",(0,s.jsx)(t.code,{children:"grep"})," flag. You'll need to find the name of the test you want to run."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ yarn workspace functional-tests test --grep="<name of test here>"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"add-a-new-test-file",children:"Add a new test file"}),"\n",(0,s.jsx)(t.h4,{id:"create-the-test-file",children:"Create the test file"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ touch functional-tests/tests/<name_of_file>.spec.ts\n"})}),"\n",(0,s.jsx)(t.h4,{id:"add-the-severity-tag-to-the-file",children:"Add the severity tag to the file"}),"\n",(0,s.jsx)(t.p,{children:"Test cases are grouped by severity (1-4) so that it's easy to identify the impact of a failure."}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"test.describe('severity-#', ...)"})," to designate the severity for a group of tests. For example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"test.describe('severity-1', () => {\n  test('create an account', async ({ pages: { login } }) => {\n    //...\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"make-use-of-common-selectors",children:"Make use of common selectors"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright tests interact with the DOM and require element selectors to be able to perform actions like clicking or testing\nwhether an element exists or is visible. Instead of embedding selectors within the tests, use selectors\nfrom the ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/main/packages/functional-tests/pages",children:"pages dir"}),". To keep the tests readable and high-level we use the ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/test-pom",children:"page object model"}),' pattern. Pages are organized by url "route" when possible in the pages directory, and made available to tests in the fixture as pages. For guidance on writing POMs there\'s ',(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/blob/main/packages/functional-tests/pages/README.md",children:"pages/README.md"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"test('create an account', async ({ pages: { login } }) => {\n  // login is a POM at pages/login.ts\n  await login.goto();\n  //...\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Adding selectors to page class makes it much easier to update tests if an element's selector changes. Instead of search/replace on the selector everywhere, update it in page class and leave the tests be."}),"\n",(0,s.jsx)(t.h3,{id:"example-test-suite",children:"Example test suite"}),"\n",(0,s.jsx)(t.p,{children:"Below is a simplified annotated example of a test suite that deletes an FxA account."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { test, expect } from '../../lib/fixtures/standard';\n\ntest.describe('severity-1 #smoke', () => {\n  test('delete account', async ({\n    credentials,\n    pages: { settings, deleteAccount, page },\n  }) => {\n    test.slow();\n    await settings.goto();\n    await settings.clickDeleteAccount();\n    await deleteAccount.checkAllBoxes();\n    await deleteAccount.clickContinue();\n\n    // Enter incorrect password\n    await deleteAccount.setPassword('incorrect password');\n    await deleteAccount.submit();\n\n    // Verifying that the tooltip throws error\n    expect(await deleteAccount.toolTipText()).toContain('Incorrect password');\n\n    // Enter correct password\n    await deleteAccount.setPassword(credentials.password);\n    await deleteAccount.submit();\n    const success = await page.waitForSelector('.success');\n    expect(await success.isVisible()).toBeTruthy();\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Above example makes use of the POM model which has a ",(0,s.jsx)(t.code,{children:"settings"})," and ",(0,s.jsx)(t.code,{children:"deleteAccount"})," page class. This page class holds all the selectors and functions, such as ",(0,s.jsx)(t.code,{children:"clickDeleteAccount"}),", ",(0,s.jsx)(t.code,{children:"checkAllBoxes"})," etc. This example also makes use of the assertions provided in Playwright using the ",(0,s.jsx)(t.code,{children:"expect()"})," and ",(0,s.jsx)(t.code,{children:"toContain()"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"find-an-element",children:"Find an element"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"page.locator()"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async cannotCreateAccountHeader() {\n    return this.page.locator(selectors.COPPA_HEADER);\n  }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"check-if-an-element-is-visible",children:"Check if an element is visible"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"page.locator().isVisible()"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async cannotCreateAccountHeader() {\n    return this.page.locator(selectors.COPPA_HEADER).isVisible();\n  }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"type-into-an-element",children:"Type into an element"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"page.locator().fill()"})," or ",(0,s.jsx)(t.code,{children:"page.locator().type()"}),"  function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"setRecoveryKey() {\n    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).fill('1234');\n  }\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"setRecoveryKey() {\n    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).type('1234');\n  }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"check-an-elements-value",children:"Check an element's value"}),"\n",(0,s.jsxs)(t.p,{children:["Use the LocatorAssertions with ",(0,s.jsx)(t.code,{children:"expect"}),". Such as ",(0,s.jsx)(t.code,{children:"toContain()"}),", ",(0,s.jsx)(t.code,{children:"toContainText()"}),", ",(0,s.jsx)(t.code,{children:"toMatch()"})," etc"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:" expect(await deleteAccount.toolTipText()).toContain('Incorrect password');\n"})}),"\n",(0,s.jsx)(t.h3,{id:"click-on-an-element",children:"Click on an element"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"page.locator().click()"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async clickSignIn() {\n    return this.page.locator(selectors.SUBMIT_USER_SIGNED_IN).click();\n  }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"create-a-unique-email",children:"Create a unique email"}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"createEmail"})," function or make use of the ",(0,s.jsx)(t.code,{children:"credentials.email"})," in place of emails."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const email = createEmail();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"simulate-interaction-with-the-browser-eg-webchannels",children:"Simulate interaction with the browser, e.g., WebChannels"}),"\n",(0,s.jsx)(t.p,{children:"Browser based integrations all require FxA to communicate with the browser."}),"\n",(0,s.jsxs)(t.p,{children:['For example, every time Firefox Desktop loads, FxA asks Firefox for info\non the user currently signed into Firefox as well as a list of "capabilities"\nthe browser supports. This is done via the ',(0,s.jsx)(t.code,{children:"fxaccounts:fxa_status"})," WebChannel message."]}),"\n",(0,s.jsxs)(t.p,{children:["Within functional tests, we do not want to actually drive the browser, nor depend on potentially unknown states. Instead we intercept messages sent to the browser and\nstub out responses. To ease development, default responses are hooked up for\n",(0,s.jsx)(t.code,{children:"fxaccounts:fxa_status"})," and ",(0,s.jsx)(t.code,{children:"fxaccounts:can_link_account"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Responses to these can both be overridden by providing a ",(0,s.jsx)(t.code,{children:"command"})," and ",(0,s.jsx)(t.code,{children:"data"})," parameter in the ",(0,s.jsx)(t.code,{children:"createCustomEventDetail()"}),". An example from ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/tests/syncV3/signUpWithCWTS.spec.ts#L35",children:"sync sign up test"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"...\nconst eventDetailStatus = createCustomEventDetail(\n        FirefoxCommand.FxAStatus,\n        {\n          signedInUser: null,\n          capabilities: {\n            choose_what_to_sync: true,\n            multiService: true,\n            engines: ['history'],\n          },\n        }\n      );\n...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"emulate-a-specific-user-agent",children:"Emulate a specific user-agent"}),"\n",(0,s.jsxs)(t.p,{children:["By default, all functional tests run with the ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts",children:"user-agent string"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0,"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If your code relies on parsing the user agent string for a particular version number, use the ",(0,s.jsx)(t.code,{children:"forceUA"})," query parameter\nof ",(0,s.jsx)(t.code,{children:"goto()"})," to specify a UA string override."]}),"\n",(0,s.jsxs)(t.p,{children:["A list of pre-defined user-agent strings is found in ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts",children:"ua-strings.ts"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const query = new URLSearchParams({\n        forceUA: uaStrings['desktop_firefox_71'],\n      });\n      await page.goto(\n        `${\n          target.contentServerUrl\n        }?context=fx_desktop_v3&service=sync&automatedBrowser=true&${query.toString()}`\n      );\n...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"add-a-new-helper-in-the-page-class",children:"Add a new helper in the page class"}),"\n",(0,s.jsxs)(t.p,{children:["It's easy! When adding new forms that must be completed in multiple tests,\nusing a helper function makes life so much easier and code much more maintainable.\nAdd your helper method inside the page class under the ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages",children:"pages dir"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"why-do-my-tests-fail",children:"Why do my tests fail?"}),"\n",(0,s.jsx)(t.h3,{id:"assuming-an-action-has-completed-aka-timing-issues",children:"Assuming an action has completed, a.k.a., timing issues"}),"\n",(0,s.jsx)(t.p,{children:"This is far and away the number one reason why functional tests fail. Always remember\nthat Playwright will run tests as fast as it possibly can, it's not like a real user\nsitting in front of a computer where it takes time to type or move the mouse. Also keep\nin mind that testing locally does not incur network latency. Finally, tests run on\nCircleCI are run in virtual machines, backend requests and even the\ntest runners are often an order of magnitude slower than local machines."}),"\n",(0,s.jsxs)(t.p,{children:["One of the most common problems is clicking on a submit button and then immediately\nchecking text, an input element value, or an attribute value, of an element on a\nsubsequent screen without actually ensuring the screen is visible. The high level\nhelper functions ",(0,s.jsx)(t.em,{children:"try"})," to take this into account, but sometimes fail. The simplest\napproach to this is to ",(0,s.jsx)(t.strong,{children:"wait for some expected DOM mutation to occur"}),"\nbefore any further assertions."]}),"\n",(0,s.jsx)(t.h3,{id:"cross-test-contamination",children:"Cross test contamination"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes tests pass when run in isolation, but fail as soon\nas the whole suite is run. This is usually caused by cross\ntest state contamination. Often times in the test preceding\nthe failing test, a user is signed in and the failing test\nassumes no user is signed in."}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"beforeEach"})," method of your suite, always be sure to call ",(0,s.jsx)(t.a,{href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages/login.ts#L539",children:"clearCache()"}),". By default, ",(0,s.jsx)(t.code,{children:"clearCache()"})," tries clearing localStorage and cookies."]}),"\n",(0,s.jsx)(t.h3,{id:"an-element-is-not-visible-or-is-fading-in",children:"An element is not visible or is fading in"}),"\n",(0,s.jsxs)(t.p,{children:["One common problem is that playwright ",(0,s.jsx)(t.em,{children:"sometimes"})," refuses to read attribute values\non DOM elements unless they are 100% visible, meaning elements that are in the process\nof being faded in or out sometimes causes errors. This is particularly problematic\non tooltips and status messages that use animations."]}),"\n",(0,s.jsxs)(t.p,{children:["If this occurs, use the ",(0,s.jsx)(t.code,{children:"locator().isVisible()"})," or ",(0,s.jsx)(t.code,{children:"waitForSelector()"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const error = await page.locator('.error').isVisible();\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const error = await page.waitForSelector('.error');\n"})}),"\n",(0,s.jsx)(t.h3,{id:"avoiding-race-condition-while-writing-tests",children:"Avoiding Race condition while writing tests"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"waitFor"})," function to wait for specific conditions to be met, such as an element to appear or be visible, or an attribute to change. Use these functions instead of hard-coding time delays in your tests."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async showError() {\n  const error = this.page.locator('#error');\n  await error.waitFor({ state: 'visible' });\n  return error.isVisible();\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"waitForUrl"})," or ",(0,s.jsx)(t.code,{children:"waitForNavigation"})," function to wait for page navigation to complete before continuing with the test."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async clickForgotPassword() {\n  await this.page.locator(selectors.LINK_RESET_PASSWORD).click();\n  await this.page.waitForURL(/reset_password/);\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async performNavigation() {\n  const waitForNavigation = this.page.waitForNavigation();\n  await this.page.locator('button[id=navigate]').click();\n  return waitForNavigation;\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Use unique selectors to identify elements on the page to avoid confusion or ambiguity in selecting the correct element."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"this.page.getByRole('link', { name: 'name1' });\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"this.page.locator('[data-testid=\"change\"]');\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"this.page.locator('#id');\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"this.page.locator('.class');\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Use locator actions to wait for an element to appear before interacting with it."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"performClick() {\n  return this.page.locator('button[id=Save]').click();\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Use Promise.all to execute multiple asynchronous tasks simultaneously and wait for them to complete before continuing with the test."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"async signOut() {\n  await Promise.all([\n    this.page.locator('#logout').click(),\n    this.page.waitForResponse(/\\/api\\/logout/),\n  ]);\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"beforeEach"})," and ",(0,s.jsx)(t.code,{children:"afterEach"})," to set up and tear down the test environment, or using ",(0,s.jsx)(t.code,{children:"test.slow()"})," to mark the test as slow and tripling the test timeout, or running a test in a particular environment etc."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["When writing any test that uses Firefox Sync, use the ",(0,s.jsx)(t.code,{children:"newPagesForSync"})," helper function. This function creates a new browser and a new browser context to avoid any Sync data being shared between tests. After your test is complete, ensure that the browser is closed to free up memory."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"let syncBrowserPages;\ntest.beforeEach(async ({ target, pages: { login } }) => {\n  test.slow();\n  syncBrowserPages = await newPagesForSync(target);\n});\n\ntest.afterEach(async () => {\n  await syncBrowserPages.browser?.close();\n});\n\ntest('open directly to /signup page, refresh on the /signup page', async ({\n  target,\n}) => {\n  // Open new pages in browser specifically for Sync\n  const { page, login } = syncBrowserPages;\n  // ... The rest of your test\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"By following these best practices, you can minimize the likelihood of race conditions in your Playwright tests and ensure more reliable and consistent test results."}),"\n",(0,s.jsx)(t.h3,{id:"debugging-failed-tests-in-circleci-best-practices",children:"Debugging Failed Tests in CircleCI: Best Practices"}),"\n",(0,s.jsx)(t.p,{children:"When encountering a failed test in CircleCI, follow these systematic steps for effective debugging:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Examine the Tests Section:\n",(0,s.jsx)(t.strong,{children:"Initial Insight:"})," Start by investigating the ",(0,s.jsx)(t.strong,{children:"Tests"})," section to understand the nature of the error and if it's a result of a change through your or someone else's PR.\n",(0,s.jsx)(t.em,{children:"Tip:"})," Directly navigate to the failed test by clicking on it."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Utilize the Artifacts Section:\n",(0,s.jsx)(t.strong,{children:"Deeper Analysis:"})," If the error remains unclear, proceed to the ",(0,s.jsx)(t.strong,{children:"Artifacts"})," section and run the trace.\n",(0,s.jsx)(t.em,{children:"Tip:"})," Download the ",(0,s.jsx)(t.code,{children:"trace.zip"})," file and visit ",(0,s.jsx)(t.code,{children:"trace.playwright.dev"})," to upload the file, visualizing the test execution."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Troubleshooting Beyond Tracing:\n",(0,s.jsx)(t.strong,{children:"Team Collaboration:"})," If the trace doesn't provide sufficient insights, take these collaborative steps:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Post the issue in the ",(0,s.jsx)(t.code,{children:"FXA-team"})," channel for collective input."]}),"\n",(0,s.jsx)(t.li,{children:"Engage the Test Engineering team to leverage their expertise."}),"\n",(0,s.jsx)(t.li,{children:"Create a Jira ticket encapsulating all details and findings."}),"\n",(0,s.jsxs)(t.li,{children:["Temporarily disable the test using ",(0,s.jsx)(t.code,{children:"test.skip()"})," and annotate it with the Jira ticket link.","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"test.skip(); //FXA-8717\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Key Considerations:"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Flaky Test Alert:"})," Be cautious, as CircleCI may tag failures as ",(0,s.jsx)(t.code,{children:"Flaky"})," indiscriminately. Rely on personal debugging over this tag.\n",(0,s.jsx)(t.em,{children:"Test Consistency Check:"})," After the initial investigation, rerun the test once to ensure consistency. A consistent failure indicates a genuine test issue, not a flaky one."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"guidelines-and-best-practices-for-functional-test-automation",children:"Guidelines and Best Practices for Functional Test Automation"}),"\n",(0,s.jsx)(t.p,{children:"In our continuous pursuit of maintaining a robust and efficient testing ecosystem, the following key takeaways have been identified during the ongoing audit. These insights, which may be supplemented as the audit progresses, are crucial for fostering a standardized and high-quality approach to test automation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Avoid Commenting Out Test Cases:\nIt is recommended to refrain from commenting out test cases. Instead, consider utilizing ",(0,s.jsx)(t.em,{children:"fixme()"})," annotations for broken tests or ",(0,s.jsx)(t.em,{children:"skip()"})," annotations for environmental/conditional skips . This ensures transparency and accountability in the development process."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Exclude Partially Implemented Tests from CI Execution:\nPartially implemented tests should not be executed in the Continuous Integration (CI) pipeline. Only fully functional and thoroughly validated tests should be included in CI runs to maintain the reliability of our testing infrastructure."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Exercise Prudent Judgment with 3rd Party UIs & Flows:\nWhen interacting with third-party User Interfaces (UIs) and workflows, exercise caution and discretion. Ensure that test scenarios align with expected behaviors and handle potential variations in third-party components."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Prefer Fixtures Over Setup & Teardown Lifecycle Methods:\nFavor the use of fixtures over traditional setup and teardown lifecycle methods. Fixtures provide a more modular and reusable approach, enhancing the maintainability and scalability of our test suites."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Avoid Deprecated Playwright Functions:\nStay vigilant and avoid the use of deprecated functions in Playwright. Regularly consult the Playwright documentation for updates and transition to recommended alternatives to ensure compatibility and future-proofing of our test scripts."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"These guidelines are pivotal for promoting consistency, reliability, and efficiency within our testing practices. Adherence to these best practices will contribute to the overall success and resilience of our test automation ecosystem."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);