"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[8708],{12434:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(85893),s=i(11151);const a={title:"Automation Test Plan"},r=void 0,o={id:"reference/automation-testplan",title:"Automation Test Plan",description:"Current as of November 2nd, 2023",source:"@site/docs/reference/automation-testplan.md",sourceDirName:"reference",slug:"/reference/automation-testplan",permalink:"/ecosystem-platform/reference/automation-testplan",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/automation-testplan.md",tags:[],version:"current",frontMatter:{title:"Automation Test Plan"},sidebar:"docs",previous:{title:"Functional Playwright Tests",permalink:"/ecosystem-platform/reference/functional-testing"},next:{title:"Continuous Integration for Monorepos",permalink:"/ecosystem-platform/reference/continuous-integration-for-monorepos"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Brief Description",id:"brief-description",level:2},{value:"Goals",id:"goals",level:2},{value:"Scope",id:"scope",level:2},{value:"Technical Requirements",id:"technical-requirements",level:2},{value:"Owners",id:"owners",level:2},{value:"Failure Procedure",id:"failure-procedure",level:2},{value:"Adding tests",id:"adding-tests",level:2},{value:"Updating existing tests",id:"updating-existing-tests",level:2},{value:"Flaky Tests",id:"flaky-tests",level:2},{value:"Sign Off",id:"sign-off",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Current as of ",(0,n.jsx)(t.code,{children:"November 2nd, 2023"})]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This document provides general guidelines around writing, running, and maintaining Mozilla accounts (FxA) automated tests. The FxA test strategy document can be found here: ",(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/1gYvGpXtLkSA84ELKJA-3tOPtlRlgcIQwmVOKbirtII0/edit#",children:"FxA test strategy"}),"\nThis document will ensure that everyone on the project is aware of the expectations and the process of maintenance around the automated tests.\nApart from maintaining the existing Playwright functional tests, the plan is to eventually move the FxA project to Continuous Deployment (CD). This document will lay out the guidelines for specified situations and around ownership of the automated tests. The goal is to enforce and start implementing these guidelines so that maintaining and reviewing these automation suites is easier on everyone."]}),"\n",(0,n.jsx)(t.h2,{id:"brief-description",children:"Brief Description"}),"\n",(0,n.jsxs)(t.p,{children:["There are multiple projects under the FxA umbrella. For FxA there are bi-weekly releases, in addition to feature testing. There are many relying parties that use FxA, such as Monitor and VPN.\nMozilla accounts lets you access Mozilla Services on any device with the Firefox browser by simply signing in. All you need to create a Firefox Account is an email address and a password.\nFxA: ",(0,n.jsx)(t.a,{href:"https://mozilla.github.io/ecosystem-platform/docs/welcome",children:"https://mozilla.github.io/ecosystem-platform/docs/welcome"}),"\nThese automation tests provide end to end testing of the features for FxA.The focus of FxA testing is on making sure no regressions occur and that new features work as expected. These automated tests ensure that the service maintains a high level of quality and to achieve that multiple automated FxA tests are run with Firefox trains and releases, for both desktop and mobile."]}),"\n",(0,n.jsx)(t.h2,{id:"goals",children:"Goals"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set up periodic review of the health of automated tests"}),"\n",(0,n.jsx)(t.li,{children:"Figure out the test failures, if any, and work towards fixing the issues with the help of Dev team"}),"\n",(0,n.jsx)(t.li,{children:"Create Jira tickets for all the failures or flaky tests"}),"\n",(0,n.jsx)(t.li,{children:"If these failures are caused by a recent check in then the dev responsible for the check in needs to take ownership of creating the bug and fixing it. But anyone who catches the failures can report it since the aim here is to get the bugs logged and fixed."}),"\n",(0,n.jsx)(t.li,{children:"Disable or delete (if warranted) the consistent failures/flaky tests until fixed, then re-enable"}),"\n",(0,n.jsx)(t.li,{children:"When it comes to adding new tests, preference is that we have a collaboration between Ecosystem Test Engineering and devs"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"scope",children:"Scope"}),"\n",(0,n.jsx)(t.p,{children:"The scope of this document is to focus on the existing functional (regression) automation suite in FxA and any upcoming new tests that's written."}),"\n",(0,n.jsx)(t.h2,{id:"technical-requirements",children:"Technical Requirements"}),"\n",(0,n.jsxs)(t.p,{children:["The end to end testing of the entire FxA ecosystem is provided by a comprehensive suite of Playwright tests in the ",(0,n.jsx)(t.a,{href:"https://github.com/mozilla/fxa/tree/main/packages/functional-tests",children:"packages"})," dir.\nThe full set of functional tests (high, medium and low) is run on ",(0,n.jsx)(t.a,{href:"./tests-in-circleci",children:"CircleCI"})," on every check in and every time a pull request is merged to main.\nThe High priority tests are tagged as Severity 1 tests, medium priority as Severity 2 and low priority tests are non-tagged. The Production smoke test suite comprises all the Severity 1 (High Priority) tests which are run during the production deployments. Similarly, all the Severity 1 (High Priority) and Severity 2 (Medium Priority) tests make up the Stage smoke test suite, run during the Stage deployments. ",(0,n.jsx)(t.strong,{children:"The full suite of tests that includes high, medium and low priority tests are run for every PR check in on CircleCI for local environment."}),"\nThere is also a notification system in place for when there is a stage or prod smoke test suite failure to alert the FxA team via Slack messaging."]}),"\n",(0,n.jsx)(t.h2,{id:"owners",children:"Owners"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Test Engineers:\nAnkita Shrivastava - email: [",(0,n.jsx)(t.a,{href:"mailto:ashrivastava@mozilla.com",children:"ashrivastava@mozilla.com"}),"], slack: @ankita\nRebecca Billings - email: [",(0,n.jsx)(t.a,{href:"mailto:rbillings@mozilla.com",children:"rbillings@mozilla.com"}),"], slack: @rbillings"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Devs:\nFxA-Devs - slack: @fxa-team"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"failure-procedure",children:"Failure Procedure"}),"\n",(0,n.jsx)(t.p,{children:"Whenever the Stage gets updated, the smoke test suite is triggered and once the smoke test passes, the deployment then proceeds . In the event of failure, the FxA team gets notified and the release owner needs to take a look at the failures and log issues."}),"\n",(0,n.jsx)(t.p,{children:"If the tests keep failing for more than a week and nobody has been able to get to it, the testing team (or the Dev team) will disable the tests from the suite assuming there is no significant impact of these failing tests and upon discussing with the Dev team, these tests will be removed permanently."}),"\n",(0,n.jsx)(t.h2,{id:"adding-tests",children:"Adding tests"}),"\n",(0,n.jsx)(t.p,{children:"Preference is that we have an equal collaboration between Test Engineering and devs when it comes to adding new tests.\nWhenever new tests get added, it is reviewed by someone from the Ecosystem Test Eng. Team."}),"\n",(0,n.jsx)(t.h2,{id:"updating-existing-tests",children:"Updating existing tests"}),"\n",(0,n.jsx)(t.p,{children:"The Test Engineering team will be responsible for maintaining the existing tests. The tests will be reviewed quarterly and any failures will be reported to the Dev team for them to take a look at. All the failures will be reported in Jira."}),"\n",(0,n.jsx)(t.h2,{id:"flaky-tests",children:"Flaky Tests"}),"\n",(0,n.jsx)(t.p,{children:"Along with the failures, all the flaky tests(i.e tests that are not consistently failing but are still failing 50% of the time) will be reported as well in Jira. Any consistent failures or flaky tests will be disabled(but not removed) until fixed and then re-enabled afterwards."}),"\n",(0,n.jsx)(t.p,{children:"If you encounter flakiness, please report it in the channel and/or create a Jira ticket for the same. The first step should be debugging the failed test using the trace artifacts in CircleCI."}),"\n",(0,n.jsx)(t.h2,{id:"sign-off",children:"Sign Off"}),"\n",(0,n.jsx)(t.p,{children:"List of people who have reviewed and agreed to the above listed guidelines. Note that this list should be the same as the the major stakeholders in building and maintaining the automated tests for the project"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"NAME"}),(0,n.jsx)(t.th,{children:"TEAM/ROLE"}),(0,n.jsx)(t.th,{children:"DATE"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Ankita Shrivastava"}),(0,n.jsx)(t.td,{children:"Ecosystem Test Engineer"}),(0,n.jsx)(t.td,{children:"04/16/2021"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Wil Clouser"}),(0,n.jsx)(t.td,{children:"Sr. Engineering Manager"}),(0,n.jsx)(t.td,{children:"04/16/2021"})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(67294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);