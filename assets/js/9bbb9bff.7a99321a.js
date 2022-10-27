"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8708],{6078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));a(1839);const s={title:"Automation Test Plan"},r=void 0,o={unversionedId:"reference/automation-testplan",id:"reference/automation-testplan",title:"Automation Test Plan",description:"Current as of April 28th, 2021",source:"@site/docs/reference/automation-testplan.md",sourceDirName:"reference",slug:"/reference/automation-testplan",permalink:"/ecosystem-platform/reference/automation-testplan",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/automation-testplan.md",tags:[],version:"current",frontMatter:{title:"Automation Test Plan"},sidebar:"docs",previous:{title:"Functional Tests",permalink:"/ecosystem-platform/reference/functional-testing"},next:{title:"Internal API Documentation",permalink:"/ecosystem-platform/reference/internal-api-documentation"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Brief Description",id:"brief-description",level:2},{value:"Goals",id:"goals",level:2},{value:"Scope",id:"scope",level:2},{value:"Technical Requirements",id:"technical-requirements",level:2},{value:"Owners",id:"owners",level:2},{value:"Failure Procedure",id:"failure-procedure",level:2},{value:"Adding tests",id:"adding-tests",level:2},{value:"Updating existing tests",id:"updating-existing-tests",level:2},{value:"Flaky Tests",id:"flaky-tests",level:2},{value:"Sign Off",id:"sign-off",level:2}],d={toc:u};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current as of ",(0,i.kt)("inlineCode",{parentName:"p"},"April 28th, 2021")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document provides general guidelines around writing, running, and maintaining Firefox Accounts (FxA) automated tests. The FxA test strategy document can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1gYvGpXtLkSA84ELKJA-3tOPtlRlgcIQwmVOKbirtII0/edit#"},"FxA test strategy"),"\nThis document will ensure that everyone on the project is aware of the expectations and the process of maintenance around the automated tests.\nApart from maintaining the existing functional tests, the plan is to eventually move the FxA project to Continuous Deployment (CD). This document will lay out the guidelines for  specified situations and around ownership of the automated tests. The goal is to enforce and start implementing these guidelines so that maintaining and reviewing these automation suites is easier on everyone.\nThis is the epic created for the FxA CD tasks: ",(0,i.kt)("a",{parentName:"p",href:"https://jira.mozilla.com/browse/FXA-1324"},"FxA CD Jira task"),"\nAnd this document mentions the plan: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1faQtkdH57PctE4FO0m-1ZXgs8QHi-igsoPD6_vKjS2A/edit#"},"FxA CD plan")),(0,i.kt)("h2",{id:"brief-description"},"Brief Description"),(0,i.kt)("p",null,"There are multiple projects under the FxA umbrella. For FxA there are bi-weekly releases, in addition to feature testing. There are many relying parties that use FxA, such as Lockwise and FPN.\nFirefox Accounts lets you access Mozilla Services on any device with the Firefox browser by simply signing in. All you need to create a Firefox Account is an email address and a password.\nFxA: ",(0,i.kt)("a",{parentName:"p",href:"https://mozilla.github.io/ecosystem-platform/docs/welcome"},"https://mozilla.github.io/ecosystem-platform/docs/welcome"),"\nThese automation tests provide end to end testing of the features for FxA.The focus of FxA testing is on making sure no regressions occur and that new features work as expected. These automated tests ensure that the service maintains a high level of quality and to achieve that multiple automated FxA tests are run with Firefox trains and releases, for both desktop and mobile."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set up periodic review of the health of automated tests"),(0,i.kt)("li",{parentName:"ul"},"Figure out the test failures, if any, and work towards fixing the issues with the help of Dev team"),(0,i.kt)("li",{parentName:"ul"},"Create Jira tickets for all the failures or flaky tests"),(0,i.kt)("li",{parentName:"ul"},"If these failures are caused by a recent check in then the dev responsible for the check in needs to take ownership of creating the bug and fixing it. But anyone who catches the failures can report it since the aim here is to get the bugs logged and fixed."),(0,i.kt)("li",{parentName:"ul"},"Disable or delete (if warranted) the consistent failures/flaky tests until fixed, then re-enable"),(0,i.kt)("li",{parentName:"ul"},"When it comes to adding new tests, preference is that we have a 70/30 break between Ecosystem QA and devs")),(0,i.kt)("h2",{id:"scope"},"Scope"),(0,i.kt)("p",null,"The scope of this document is to focus on the existing functional (regression) automation suite in FxA and any upcoming new tests that's written. This also includes the new Settings tests."),(0,i.kt)("h2",{id:"technical-requirements"},"Technical Requirements"),(0,i.kt)("p",null,"The end to end testing of the entire FxA ecosystem is provided by a comprehensive suite of Selenium tests in the fxa-content-server package.\nThe full set of functional tests is run on CircleCI on every check in and every time a pull request is merged to main. This full set consist of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_smoke"},"Smoke test suite")," which runs the high priority test cases first and upon success the full suite of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/tests/functional_regression"},"Regression tests")," are run.\nIf there is a failure in the smoke test suite, the regression suite won't be run until the failures have been fixed.\nThere is also a notification system in place for when these failures occur to alert the FxA team via Slack messaging."),(0,i.kt)("h2",{id:"owners"},"Owners"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Test Engineers:\nAnkita Shrivastava - email: ","[ashrivastava@mozilla.com]",", slack: @ankita\nRebecca Billings - email: ","[rbillings@mozilla.com]",", slack: @rbillings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Devs:\nFxA-Devs - slack: @fxa"))),(0,i.kt)("h2",{id:"failure-procedure"},"Failure Procedure"),(0,i.kt)("p",null,"Whenever the Stage gets updated, the smoke test suite is triggered and once the smoke test passes, all the regression tests are run . In the event of failure, the FxA team gets notified and the release owner needs to take a look at the failures and log issues."),(0,i.kt)("p",null,"If the tests keep failing for more than a week and nobody has been able to get to it, the testing team (or the Dev team) will disable the tests from the suite assuming there is no significant impact of these failing tests and upon discussing with the Dev team, these tests will be removed permanently."),(0,i.kt)("h2",{id:"adding-tests"},"Adding tests"),(0,i.kt)("p",null,"Preference is that we have a 70/30 break between Test Engineering and devs when it comes to adding new tests.\nWhenever new tests get added, it is reviewed by someone from the Ecosystem Test Eng. Team."),(0,i.kt)("h2",{id:"updating-existing-tests"},"Updating existing tests"),(0,i.kt)("p",null,"The Test Engineering team will be responsible for maintaining the existing tests. The tests will be reviewed quarterly and any failures will be reported to the Dev team for them to take a look at. All the failures will be reported in Jira."),(0,i.kt)("h2",{id:"flaky-tests"},"Flaky Tests"),(0,i.kt)("p",null,"Along with the failures, all the flaky tests(i.e tests that are not consistently failing but are still failing 50% of the time) will be reported as well in Jira. Any consistent failures or flaky tests will be disabled(but not removed) until fixed and then re-enabled afterwards."),(0,i.kt)("h2",{id:"sign-off"},"Sign Off"),(0,i.kt)("p",null,"List of people who have reviewed and agreed to the above listed guidelines. Note that this list should be the same as the the major stakeholders in building and maintaining the automated tests for the project"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"TEAM/ROLE"),(0,i.kt)("th",{parentName:"tr",align:null},"DATE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ankita Shrivastava"),(0,i.kt)("td",{parentName:"tr",align:null},"Ecosystem Test Engineer"),(0,i.kt)("td",{parentName:"tr",align:null},"04/16/2021")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wil Clouser"),(0,i.kt)("td",{parentName:"tr",align:null},"Sr. Engineering Manager"),(0,i.kt)("td",{parentName:"tr",align:null},"04/16/2021")))))}h.isMDXComponent=!0}}]);