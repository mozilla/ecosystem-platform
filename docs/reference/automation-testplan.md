---
title: Automation Test Plan
---

Current as of `November 2nd, 2023`

## Overview
This document provides general guidelines around writing, running, and maintaining Mozilla accounts (FxA) automated tests. The FxA test strategy document can be found here: [FxA test strategy](https://docs.google.com/document/d/1gYvGpXtLkSA84ELKJA-3tOPtlRlgcIQwmVOKbirtII0/edit#)
This document will ensure that everyone on the project is aware of the expectations and the process of maintenance around the automated tests.
Apart from maintaining the existing Playwright functional tests, the plan is to eventually move the FxA project to Continuous Deployment (CD). This document will lay out the guidelines for specified situations and around ownership of the automated tests. The goal is to enforce and start implementing these guidelines so that maintaining and reviewing these automation suites is easier on everyone.

## Brief Description
There are multiple projects under the FxA umbrella. For FxA there are bi-weekly releases, in addition to feature testing. There are many relying parties that use FxA, such as Monitor and VPN.
Mozilla accounts lets you access Mozilla Services on any device with the Firefox browser by simply signing in. All you need to create a Firefox Account is an email address and a password.
FxA: https://mozilla.github.io/ecosystem-platform/docs/welcome
These automation tests provide end to end testing of the features for FxA.The focus of FxA testing is on making sure no regressions occur and that new features work as expected. These automated tests ensure that the service maintains a high level of quality and to achieve that multiple automated FxA tests are run with Firefox trains and releases, for both desktop and mobile.

## Goals
- Set up periodic review of the health of automated tests
- Figure out the test failures, if any, and work towards fixing the issues with the help of Dev team
- Create Jira tickets for all the failures or flaky tests
- If these failures are caused by a recent check in then the dev responsible for the check in needs to take ownership of creating the bug and fixing it. But anyone who catches the failures can report it since the aim here is to get the bugs logged and fixed.
- Disable or delete (if warranted) the consistent failures/flaky tests until fixed, then re-enable
- When it comes to adding new tests, preference is that we have a collaboration between Ecosystem Test Engineering and devs

## Scope
The scope of this document is to focus on the existing functional (regression) automation suite in FxA and any upcoming new tests that's written.

## Technical Requirements
The end to end testing of the entire FxA ecosystem is provided by a comprehensive suite of Playwright tests in the [packages](https://github.com/mozilla/fxa/tree/main/packages/functional-tests) dir.
The full set of functional tests (high, medium and low) is run on [CircleCI](./tests-in-circleci) on every check in and every time a pull request is merged to main.
The High priority tests are tagged as Severity 1 tests, medium priority as Severity 2 and low priority tests are non-tagged. The Production smoke test suite comprises all the Severity 1 (High Priority) tests which are run during the production deployments. Similarly, all the Severity 1 (High Priority) and Severity 2 (Medium Priority) tests make up the Stage smoke test suite, run during the Stage deployments. **The full suite of tests that includes high, medium and low priority tests are run for every PR check in on CircleCI for local environment.**
There is also a notification system in place for when there is a stage or prod smoke test suite failure to alert the FxA team via Slack messaging.

## Owners
- Test Engineers:
Ankita Shrivastava - email: [ashrivastava@mozilla.com], slack: @ankita
Rebecca Billings - email: [rbillings@mozilla.com], slack: @rbillings

- Devs:
FxA-Devs - slack: @fxa-team

## Failure Procedure
Whenever the Stage gets updated, the smoke test suite is triggered and once the smoke test passes, the deployment then proceeds . In the event of failure, the FxA team gets notified and the release owner needs to take a look at the failures and log issues.

If the tests keep failing for more than a week and nobody has been able to get to it, the testing team (or the Dev team) will disable the tests from the suite assuming there is no significant impact of these failing tests and upon discussing with the Dev team, these tests will be removed permanently.

## Adding tests
Preference is that we have an equal collaboration between Test Engineering and devs when it comes to adding new tests.
Whenever new tests get added, it is reviewed by someone from the Ecosystem Test Eng. Team.

## Updating existing tests
The Test Engineering team will be responsible for maintaining the existing tests. The tests will be reviewed quarterly and any failures will be reported to the Dev team for them to take a look at. All the failures will be reported in Jira.

## Flaky Tests
Along with the failures, all the flaky tests(i.e tests that are not consistently failing but are still failing 50% of the time) will be reported as well in Jira. Any consistent failures or flaky tests will be disabled(but not removed) until fixed and then re-enabled afterwards.

If you encounter flakiness, please report it in the channel and/or create a Jira ticket for the same. The first step should be debugging the failed test using the trace artifacts in CircleCI.

## Sign Off
List of people who have reviewed and agreed to the above listed guidelines. Note that this list should be the same as the the major stakeholders in building and maintaining the automated tests for the project


| NAME   | TEAM/ROLE | DATE    |
| ------ | --------- | ------- |
| Ankita Shrivastava | Ecosystem Test Engineer | 04/16/2021 |
| Wil Clouser | Sr. Engineering Manager | 04/16/2021 |


