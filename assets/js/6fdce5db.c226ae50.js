"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[6842],{36169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));a(8209);const i={title:"Functional Playwright Tests"},o=void 0,r={unversionedId:"reference/functional-testing",id:"reference/functional-testing",title:"Functional Playwright Tests",description:"Current as of October, 2023",source:"@site/docs/reference/functional-testing.md",sourceDirName:"reference",slug:"/reference/functional-testing",permalink:"/ecosystem-platform/reference/functional-testing",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/functional-testing.md",tags:[],version:"current",frontMatter:{title:"Functional Playwright Tests"},sidebar:"docs",previous:{title:"Tests in CircleCI",permalink:"/ecosystem-platform/reference/tests-in-circleci"},next:{title:"Automation Test Plan",permalink:"/ecosystem-platform/reference/automation-testplan"}},l={},c=[{value:"How to decide priority (high, medium, low) for a test?",id:"how-to-decide-priority-high-medium-low-for-a-test",level:2},{value:"Why are there so many test suites that seem to do the same thing?",id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing",level:2},{value:"How do I?",id:"how-do-i",level:2},{value:"Run a single test",id:"run-a-single-test",level:3},{value:"Add a new test file",id:"add-a-new-test-file",level:3},{value:"Create the test file",id:"create-the-test-file",level:4},{value:"Add the severity tag to the file",id:"add-the-severity-tag-to-the-file",level:4},{value:"Make use of common selectors",id:"make-use-of-common-selectors",level:3},{value:"Example test suite",id:"example-test-suite",level:3},{value:"Find an element",id:"find-an-element",level:3},{value:"Check if an element is visible",id:"check-if-an-element-is-visible",level:3},{value:"Type into an element",id:"type-into-an-element",level:3},{value:"Check an element&#39;s value",id:"check-an-elements-value",level:3},{value:"Click on an element",id:"click-on-an-element",level:3},{value:"Create a unique email",id:"create-a-unique-email",level:3},{value:"Simulate interaction with the browser, e.g., WebChannels",id:"simulate-interaction-with-the-browser-eg-webchannels",level:3},{value:"Emulate a specific user-agent",id:"emulate-a-specific-user-agent",level:3},{value:"Add a new helper in the page class",id:"add-a-new-helper-in-the-page-class",level:3},{value:"Why do my tests fail?",id:"why-do-my-tests-fail",level:2},{value:"Assuming an action has completed, a.k.a., timing issues",id:"assuming-an-action-has-completed-aka-timing-issues",level:3},{value:"Cross test contamination",id:"cross-test-contamination",level:3},{value:"An element is not visible or is fading in",id:"an-element-is-not-visible-or-is-fading-in",level:3},{value:"Avoiding Race condition while writing tests",id:"avoiding-race-condition-while-writing-tests",level:3},{value:"Debugging Failed Tests in CircleCI: Best Practices",id:"debugging-failed-tests-in-circleci-best-practices",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Current as of ",(0,s.kt)("inlineCode",{parentName:"p"},"October, 2023")),(0,s.kt)("p",null,"End to end functional testing of the entire FxA ecosystem is achieved by a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/functional-tests/tests"},"comprehensive suite of Playwright tests"),". These tests are situated within the ",(0,s.kt)("inlineCode",{parentName:"p"},"packages")," directory and are organized into distinct folders corresponding to their respective functionality, such as sign-in, sync, OAuth, and others. These tests can be run through the packages directory using the below command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace functional-tests test\n")),(0,s.kt)("p",null,"The full set of functional tests (high, medium and low) is run on ",(0,s.kt)("a",{parentName:"p",href:"./tests-in-circleci"},"CircleCI")," on every check in and every time a pull request is merged to main.\nThe High priority tests are tagged as Severity 1 tests, medium priority as Severity 2 and low priority tests are non-tagged. The Production smoke test suite comprises all the Severity 1 (High Priority) tests which are run during the production deployments. Similarly, all the Severity 1 (High Priority) and Severity 2 (Medium Priority) tests make up the Stage smoke test suite, run during the Stage deployments. ",(0,s.kt)("strong",{parentName:"p"},"The full suite of tests that includes high, medium and low priority tests are run for every PR check in on CircleCI for local environment."),"\nThere is also a notification system in place for when there is a stage or prod smoke test suite failure to alert the FxA team via Slack messaging."),(0,s.kt)("h2",{id:"how-to-decide-priority-high-medium-low-for-a-test"},"How to decide priority (high, medium, low) for a test?"),(0,s.kt)("p",null,"Deciding the priority of tests is a crucial part of test management. The priority of a test case can vary depending on factors such as its impact on the application, its criticality, and the frequency of execution. Here's how you can decide the priority of your tests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"High Priority test")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tests that directly impact business-critical functionalities and could lead to significant financial losses, legal issues, or data breaches if they fail."),(0,s.kt)("li",{parentName:"ol"},"Tests for features that, if they fail, would result in a poor user experience or significantly impede users from achieving their goals"),(0,s.kt)("li",{parentName:"ol"},"Tests that need to pass before other tests can be executed, preventing the testing of other critical areas.\nFor eg: Subscription tests, FxA sign-in/sign-up tests, sync/OAuth sign-in tests etc")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Medium Priority test")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tests that are essential for the application but not as critical as high-priority tests. Their failure may cause significant disruptions but not catastrophic consequences."),(0,s.kt)("li",{parentName:"ol"},"Tests for features where issues are noticeable but do not severely hinder the user experience"),(0,s.kt)("li",{parentName:"ol"},"Tests that are less dependent but need to run before low-priority tests.\nFor eg: Reset password, Post-verify and cached/blocked sign-in tests")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Low Priority test")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tests for non-essential or rarely used features. Failure of these tests may not significantly impact the core functionality of the application."),(0,s.kt)("li",{parentName:"ol"},"Tests for features that rarely affect the user experience or have workarounds available."),(0,s.kt)("li",{parentName:"ol"},"Tests with no dependencies on other tests.\nFor eg: Password validation tests")),(0,s.kt)("p",null,"The suite uses ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright")," framework for automation testing. Also check out the ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-test"},"API reference"),"."),(0,s.kt)("p",null,"The functional tests can seem impenetrable, don't worry, they'll become second nature after a while. They continually save our bacon, and every new feature should have corresponding functional tests."),(0,s.kt)("h2",{id:"why-are-there-so-many-test-suites-that-seem-to-do-the-same-thing"},"Why are there so many test suites that seem to do the same thing?"),(0,s.kt)("p",null,"A close look at the tests makes it look like there are a lot of tests that do\nthe same thing, and you are right. Sometimes this is intentional, sometimes it's not."),(0,s.kt)("p",null,'Many tests are intentionally duplicated across each of the different integration types\nto ensure the end to end flow for that integration works as expected. For example,\nthere are "sign in" tests for each of:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fx_desktop_v3 (Firefox Desktop Sync)"),(0,s.kt)("li",{parentName:"ul"},"oauth (OAuth RPs)")),(0,s.kt)("p",null,'In each of these, the behaviors and screen to screen transitions can be subtly different. For example, Sync based integrations should show a "connect another device" screen when\nthe user finishes signing in, but most OAuth integrations redirect back to the RP.'),(0,s.kt)("p",null,"If two tests are obviously testing the same thing or one is a subset of another,\nit's OK (and encouraged) to remove duplicates."),(0,s.kt)("h2",{id:"how-do-i"},"How do I?"),(0,s.kt)("h3",{id:"run-a-single-test"},"Run a single test"),(0,s.kt)("p",null,"A single test can be run using the ",(0,s.kt)("inlineCode",{parentName:"p"},"grep")," flag. You'll need to find the name of the test you want to run."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ yarn workspace functional-tests test --grep="<name of test here>"\n')),(0,s.kt)("h3",{id:"add-a-new-test-file"},"Add a new test file"),(0,s.kt)("h4",{id:"create-the-test-file"},"Create the test file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch functional-tests/tests/<name_of_file>.spec.ts\n")),(0,s.kt)("h4",{id:"add-the-severity-tag-to-the-file"},"Add the severity tag to the file"),(0,s.kt)("p",null,"Test cases are grouped by severity (1-4) so that it's easy to identify the impact of a failure."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.describe('severity-#', ...)")," to designate the severity for a group of tests. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"test.describe('severity-1', () => {\n  test('create an account', async ({ pages: { login } }) => {\n    //...\n  });\n});\n")),(0,s.kt)("h3",{id:"make-use-of-common-selectors"},"Make use of common selectors"),(0,s.kt)("p",null,"Playwright tests interact with the DOM and require element selectors to be able to perform actions like clicking or testing\nwhether an element exists or is visible. Instead of embedding selectors within the tests, use selectors\nfrom the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/functional-tests/pages"},"pages dir"),". To keep the tests readable and high-level we use the ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-pom"},"page object model"),' pattern. Pages are organized by url "route" when possible in the pages directory, and made available to tests in the fixture as pages. For guidance on writing POMs there\'s ',(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/main/packages/functional-tests/pages/README.md"},"pages/README.md")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"test('create an account', async ({ pages: { login } }) => {\n  // login is a POM at pages/login.ts\n  await login.goto();\n  //...\n});\n")),(0,s.kt)("p",null,"Adding selectors to page class makes it much easier to update tests if an element's selector changes. Instead of search/replace on the selector everywhere, update it in page class and leave the tests be."),(0,s.kt)("h3",{id:"example-test-suite"},"Example test suite"),(0,s.kt)("p",null,"Below is a simplified annotated example of a test suite that deletes an FxA account."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '../../lib/fixtures/standard';\n\ntest.describe('severity-1 #smoke', () => {\n  test('delete account', async ({\n    credentials,\n    pages: { settings, deleteAccount, page },\n  }) => {\n    test.slow();\n    await settings.goto();\n    await settings.clickDeleteAccount();\n    await deleteAccount.checkAllBoxes();\n    await deleteAccount.clickContinue();\n\n    // Enter incorrect password\n    await deleteAccount.setPassword('incorrect password');\n    await deleteAccount.submit();\n\n    // Verifying that the tooltip throws error\n    expect(await deleteAccount.toolTipText()).toContain('Incorrect password');\n\n    // Enter correct password\n    await deleteAccount.setPassword(credentials.password);\n    await deleteAccount.submit();\n    const success = await page.waitForSelector('.success');\n    expect(await success.isVisible()).toBeTruthy();\n  });\n});\n")),(0,s.kt)("p",null,"Above example makes use of the POM model which has a ",(0,s.kt)("inlineCode",{parentName:"p"},"settings")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deleteAccount")," page class. This page class holds all the selectors and functions, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"clickDeleteAccount"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"checkAllBoxes")," etc. This example also makes use of the assertions provided in Playwright using the ",(0,s.kt)("inlineCode",{parentName:"p"},"expect()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"toContain()"),"."),(0,s.kt)("h3",{id:"find-an-element"},"Find an element"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"page.locator()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async cannotCreateAccountHeader() {\n    return this.page.locator(selectors.COPPA_HEADER);\n  }\n")),(0,s.kt)("h3",{id:"check-if-an-element-is-visible"},"Check if an element is visible"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"page.locator().isVisible()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async cannotCreateAccountHeader() {\n    return this.page.locator(selectors.COPPA_HEADER).isVisible();\n  }\n")),(0,s.kt)("h3",{id:"type-into-an-element"},"Type into an element"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"page.locator().fill()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"page.locator().type()"),"  function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"setRecoveryKey() {\n    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).fill('1234');\n  }\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"setRecoveryKey() {\n    return this.page.locator(selectors.RECOVERY_KEY_TEXT_INPUT).type('1234');\n  }\n")),(0,s.kt)("h3",{id:"check-an-elements-value"},"Check an element's value"),(0,s.kt)("p",null,"Use the LocatorAssertions with ",(0,s.kt)("inlineCode",{parentName:"p"},"expect"),". Such as ",(0,s.kt)("inlineCode",{parentName:"p"},"toContain()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toContainText()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toMatch()")," etc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"}," expect(await deleteAccount.toolTipText()).toContain('Incorrect password');\n")),(0,s.kt)("h3",{id:"click-on-an-element"},"Click on an element"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"page.locator().click()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async clickSignIn() {\n    return this.page.locator(selectors.SUBMIT_USER_SIGNED_IN).click();\n  }\n")),(0,s.kt)("h3",{id:"create-a-unique-email"},"Create a unique email"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"createEmail")," function or make use of the ",(0,s.kt)("inlineCode",{parentName:"p"},"credentials.email")," in place of emails."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const email = createEmail();\n")),(0,s.kt)("h3",{id:"simulate-interaction-with-the-browser-eg-webchannels"},"Simulate interaction with the browser, e.g., WebChannels"),(0,s.kt)("p",null,"Browser based integrations all require FxA to communicate with the browser."),(0,s.kt)("p",null,'For example, every time Firefox Desktop loads, FxA asks Firefox for info\non the user currently signed into Firefox as well as a list of "capabilities"\nthe browser supports. This is done via the ',(0,s.kt)("inlineCode",{parentName:"p"},"fxaccounts:fxa_status")," WebChannel message."),(0,s.kt)("p",null,"Within functional tests, we do not want to actually drive the browser, nor depend on potentially unknown states. Instead we intercept messages sent to the browser and\nstub out responses. To ease development, default responses are hooked up for\n",(0,s.kt)("inlineCode",{parentName:"p"},"fxaccounts:fxa_status")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"fxaccounts:can_link_account"),"."),(0,s.kt)("p",null,"Responses to these can both be overridden by providing a ",(0,s.kt)("inlineCode",{parentName:"p"},"command")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," parameter in the ",(0,s.kt)("inlineCode",{parentName:"p"},"createCustomEventDetail()"),". An example from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/tests/syncV3/signUpWithCWTS.spec.ts#L35"},"sync sign up test"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"...\nconst eventDetailStatus = createCustomEventDetail(\n        FirefoxCommand.FxAStatus,\n        {\n          signedInUser: null,\n          capabilities: {\n            choose_what_to_sync: true,\n            multiService: true,\n            engines: ['history'],\n          },\n        }\n      );\n...\n")),(0,s.kt)("h3",{id:"emulate-a-specific-user-agent"},"Emulate a specific user-agent"),(0,s.kt)("p",null,"By default, all functional tests run with the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts"},"user-agent string")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0,")),(0,s.kt)("p",null,"If your code relies on parsing the user agent string for a particular version number, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"forceUA")," query parameter\nof ",(0,s.kt)("inlineCode",{parentName:"p"},"goto()")," to specify a UA string override."),(0,s.kt)("p",null,"A list of pre-defined user-agent strings is found in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/lib/ua-strings.ts"},"ua-strings.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const query = new URLSearchParams({\n        forceUA: uaStrings['desktop_firefox_71'],\n      });\n      await page.goto(\n        `${\n          target.contentServerUrl\n        }?context=fx_desktop_v3&service=sync&automatedBrowser=true&${query.toString()}`\n      );\n...\n")),(0,s.kt)("h3",{id:"add-a-new-helper-in-the-page-class"},"Add a new helper in the page class"),(0,s.kt)("p",null,"It's easy! When adding new forms that must be completed in multiple tests,\nusing a helper function makes life so much easier and code much more maintainable.\nAdd your helper method inside the page class under the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages"},"pages dir"),"."),(0,s.kt)("h2",{id:"why-do-my-tests-fail"},"Why do my tests fail?"),(0,s.kt)("h3",{id:"assuming-an-action-has-completed-aka-timing-issues"},"Assuming an action has completed, a.k.a., timing issues"),(0,s.kt)("p",null,"This is far and away the number one reason why functional tests fail. Always remember\nthat Playwright will run tests as fast as it possibly can, it's not like a real user\nsitting in front of a computer where it takes time to type or move the mouse. Also keep\nin mind that testing locally does not incur network latency. Finally, tests run on\nCircleCI are run in virtual machines, backend requests and even the\ntest runners are often an order of magnitude slower than local machines."),(0,s.kt)("p",null,"One of the most common problems is clicking on a submit button and then immediately\nchecking text, an input element value, or an attribute value, of an element on a\nsubsequent screen without actually ensuring the screen is visible. The high level\nhelper functions ",(0,s.kt)("em",{parentName:"p"},"try")," to take this into account, but sometimes fail. The simplest\napproach to this is to ",(0,s.kt)("strong",{parentName:"p"},"wait for some expected DOM mutation to occur"),"\nbefore any further assertions."),(0,s.kt)("h3",{id:"cross-test-contamination"},"Cross test contamination"),(0,s.kt)("p",null,"Sometimes tests pass when run in isolation, but fail as soon\nas the whole suite is run. This is usually caused by cross\ntest state contamination. Often times in the test preceding\nthe failing test, a user is signed in and the failing test\nassumes no user is signed in."),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach")," method of your suite, always be sure to call ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/blob/8da5f79c9ae486eb4a5dbd82e33751a583c9c16f/packages/functional-tests/pages/login.ts#L539"},"clearCache()"),". By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"clearCache()")," tries clearing localStorage and cookies."),(0,s.kt)("h3",{id:"an-element-is-not-visible-or-is-fading-in"},"An element is not visible or is fading in"),(0,s.kt)("p",null,"One common problem is that playwright ",(0,s.kt)("em",{parentName:"p"},"sometimes")," refuses to read attribute values\non DOM elements unless they are 100% visible, meaning elements that are in the process\nof being faded in or out sometimes causes errors. This is particularly problematic\non tooltips and status messages that use animations."),(0,s.kt)("p",null,"If this occurs, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"locator().isVisible()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"waitForSelector()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const error = await page.locator('.error').isVisible();\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const error = await page.waitForSelector('.error');\n")),(0,s.kt)("h3",{id:"avoiding-race-condition-while-writing-tests"},"Avoiding Race condition while writing tests"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"waitFor")," function to wait for specific conditions to be met, such as an element to appear or be visible, or an attribute to change. Use these functions instead of hard-coding time delays in your tests.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async showError() {\n  const error = this.page.locator('#error');\n  await error.waitFor({ state: 'visible' });\n  return error.isVisible();\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"waitForUrl")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"waitForNavigation")," function to wait for page navigation to complete before continuing with the test.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async clickForgotPassword() {\n  await this.page.locator(selectors.LINK_RESET_PASSWORD).click();\n  await this.page.waitForURL(/reset_password/);\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async performNavigation() {\n  const waitForNavigation = this.page.waitForNavigation();\n  await this.page.locator('button[id=navigate]').click();\n  return waitForNavigation;\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use unique selectors to identify elements on the page to avoid confusion or ambiguity in selecting the correct element.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"this.page.getByRole('link', { name: 'name1' });\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"this.page.locator('[data-testid=\"change\"]');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"this.page.locator('#id');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"this.page.locator('.class');\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use locator actions to wait for an element to appear before interacting with it.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"performClick() {\n  return this.page.locator('button[id=Save]').click();\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use Promise.all to execute multiple asynchronous tasks simultaneously and wait for them to complete before continuing with the test.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async signOut() {\n  await Promise.all([\n    this.page.locator('#logout').click(),\n    this.page.waitForResponse(/\\/api\\/logout/),\n  ]);\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach")," to set up and tear down the test environment, or using ",(0,s.kt)("inlineCode",{parentName:"p"},"test.slow()")," to mark the test as slow and tripling the test timeout, or running a test in a particular environment etc.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When writing any test that uses Firefox Sync, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"newPagesForSync")," helper function. This function creates a new browser and a new browser context to avoid any Sync data being shared between tests. After your test is complete, ensure that the browser is closed to free up memory.")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"let syncBrowserPages;\ntest.beforeEach(async ({ target, pages: { login } }) => {\n  test.slow();\n  syncBrowserPages = await newPagesForSync(target);\n});\n\ntest.afterEach(async () => {\n  await syncBrowserPages.browser?.close();\n});\n\ntest('open directly to /signup page, refresh on the /signup page', async ({\n  target,\n}) => {\n  // Open new pages in browser specifically for Sync\n  const { page, login } = syncBrowserPages;\n  // ... The rest of your test\n});\n")),(0,s.kt)("p",null,"By following these best practices, you can minimize the likelihood of race conditions in your Playwright tests and ensure more reliable and consistent test results."),(0,s.kt)("h3",{id:"debugging-failed-tests-in-circleci-best-practices"},"Debugging Failed Tests in CircleCI: Best Practices"),(0,s.kt)("p",null,"When encountering a failed test in CircleCI, follow these systematic steps for effective debugging:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Examine the Tests Section:\n",(0,s.kt)("strong",{parentName:"p"},"Initial Insight:")," Start by investigating the ",(0,s.kt)("strong",{parentName:"p"},"Tests")," section to understand the nature of the error and if it's a result of a change through your or someone else's PR.\n",(0,s.kt)("em",{parentName:"p"},"Tip:")," Directly navigate to the failed test by clicking on it.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Utilize the Artifacts Section:\n",(0,s.kt)("strong",{parentName:"p"},"Deeper Analysis:")," If the error remains unclear, proceed to the ",(0,s.kt)("strong",{parentName:"p"},"Artifacts")," section and run the trace.\n",(0,s.kt)("em",{parentName:"p"},"Tip:")," Download the ",(0,s.kt)("inlineCode",{parentName:"p"},"trace.zip")," file and visit ",(0,s.kt)("inlineCode",{parentName:"p"},"trace.playwright.dev")," to upload the file, visualizing the test execution.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Troubleshooting Beyond Tracing:\n",(0,s.kt)("strong",{parentName:"p"},"Team Collaboration:")," If the trace doesn't provide sufficient insights, take these collaborative steps:"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Post the issue in the ",(0,s.kt)("inlineCode",{parentName:"li"},"FXA-team")," channel for collective input."),(0,s.kt)("li",{parentName:"ul"},"Engage the Test Engineering team to leverage their expertise."),(0,s.kt)("li",{parentName:"ul"},"Create a Jira ticket encapsulating all details and findings."),(0,s.kt)("li",{parentName:"ul"},"Temporarily disable the test using ",(0,s.kt)("inlineCode",{parentName:"li"},"test.skip()")," and annotate it with the Jira ticket link.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"test.skip(); //FXA-8717\n")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Key Considerations:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Flaky Test Alert:")," Be cautious, as CircleCI may tag failures as ",(0,s.kt)("inlineCode",{parentName:"p"},"Flaky")," indiscriminately. Rely on personal debugging over this tag.\n",(0,s.kt)("em",{parentName:"p"},"Test Consistency Check:")," After the initial investigation, rerun the test once to ensure consistency. A consistent failure indicates a genuine test issue, not a flaky one.")))}m.isMDXComponent=!0}}]);