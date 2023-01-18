---
title:  CI Guidelines
---

Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and starting validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh.

Even though this is all seamless, there are a few best practices to keep in mind. Following these will help pipelines run faster in the future and with fewer errors. Also, if unfamiliar with CI concepts, we have some more info [here](/ecosystem-platform/reference/tests-in-circleci#workflows).

## Rebase Off Main Before Pushing Code

This might just be the most important tip! Always try to rebase your code on main before pushing up a PR. This ensures a couple things. First it decreases the possibility of merge conflict or a ‘bad’ merge state occurring when the PR finally lands. Second, it ensures that your branch and the docker images we use to run our CI pipelines will be similar, and therefore have low start up time.

If there are no changes to npm packages in your PR and it has been rebased off main, we can skip the yarn install step in the CI, which leads to much faster execution times. If your branch meets these criteria, you’ll see a message saying something like ‘Congrats! No changes detected on yarn.lock’ in the base install step.

It’s possible that at some point in the future we will enforce that PRs have been rebased off of main. But for the time being this is the honors system.

## Be mindful when adding or updating packages
As discussed in the Continuous Integration Reference. One of the challenges faced in mono repos is large sets dependencies. There are a few things we can do going forward to help ensure this doesn’t get worse:

- Before adding a new package, make sure it’s really needed. Ideally we consolidate / gravitate towards a fixed set of high level frameworks.
- Try to have a one in one out policy. If a new package is added, look to phase out an old package.
- If updating a package, try to update across all workspaces, so we don’t have different versions. This is much easier said than done; however, and oftentimes it’s not possible. Running `yarn dedupe -c $package_name` can give an idea of the extent of the problem.
- Be mindful of upstream dependencies. Run `yarn why` to see the dependency tree for any package. 

Also be aware that when making changes to packages, means that a yarn install will be needed in each CI job to ensure the packages are up to date. It will also likely trigger a full rerun of all test suites. This adds unavoidable overhead to your CI pipeline. It isn’t all that big a deal, but it is something to be avoided when possible.


## Helpful yarnrc.yml configurations
There are two settings that result in a pretty drastic reduction in the size of the yarn cache needed to run FxA.

First, `nmMode: hardlinks-global` reduces the size of the internal yarn cache for FxA by about a third. This essentially uses hard links to reduce the amount of redundant packages held in the node_modules folder.  When enabled, if two modules both reference the same package, yarn will hardlink the package instead of copying it into both modules folders which can end up saving a lot of space on disk.

Second, `enableGlobalCache: true`, reduces the size of the internal yarn cache by 1/2 in the CI. When this is not enabled, all the packages will get stored as zips in the global cache located in the ~/.yarn/berry, as well as the project local cache located in fxa/.yarn/berry. This redundancy really isn’t helpful in most scenarios, and particularly unhelpful in the CI as it results in bloat.


## Tag tests as unit or integration tests
In order to provide better performance, and to fail bad PRs more quickly, break our tests up into unit tests and integration tests and run these tests in separate CI jobs.

In our system unit tests are tests that can:
- Run quickly, typically under 100ms, and definitely under 500ms.
- Run without any infrastructure, i.e. tests can run without any pm2 services running.

Integration tests are tests that:
- Take longer to run, typically over 500ms.
- Run with just infrastructure, i.e. we must execute a `yarn start infrastructure` is required prior to running tests)

In order to distinguish between these kinds of tests, we have created a tagging convention. Our tests names need to be tagged with either #unit or #integration. These tags can exist at the test level (i.e. the ‘it’ block) or at the suite level (i.e. the ‘describe’ block). 

In the future we may have better conventions for this such as file names or even folders, but for now, this was the least disruptive way to separate the two types of tests without disrupting the git history too much.

Important: For jest tests we need to be explicit and add the #unit and #integration tag to each top level 'describe’ block. This is due to the fact that jest does not support an [‘invert’ option[](https://mochajs.org/api/mocha#invert) like mocha does, so we have not way run all tests except those with #integration. Therefore we must explicitly tag all tests.

## Prioritize lightweight tests
Ideally we have a [pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) distribution of test types. 

- Unit tests, which are the fastest and quickest to run, should be the bulk of the tests. And run first.
- Integration tests, which only require some infrastructure like databases or caches to be present or are inherently long running tests, should be run next.
- Backend services should be run last. They require a full stack as well as a headless browser to be running which adds significant overhead to the test suite.
- Finally manual black box testing that involves a human being should be conducted prior to release.. 

These tests increase almost exponentially in cost, and therefore we should be mindful of their distribution in our system. 

Unit and integration tests also have the ability to report coverage metrics, so we can actually see how many lines and logical branches we have covered in these test suites. Ideally we have about 80% or better code coverage for unit / integration tests.

There are always things that will be difficult to test purely with a unit or integration test, so keep that in mind as well. Functional tests, and manual testing will always be useful and are still necessary.

:::tip
If a scenario is encountered where a functional test passes, but there were not any unit or integration tests that failed, this might be a good opportunity to go back and improve unit or integration test coverage. 
:::

## Report Flaky Tests
A flaky test is any test that intermittently fails. It’s essentially a volatile test. If a test fails but then passes on a subsequent rerun on the same code, we have a flaky test.

Flaky tests do happen from time to time. Especially in our functional tests suites when they become resource constrained. If you encounter flakiness, please report it in this [document](https://docs.google.com/document/d/1f3ryLaluribglKdhCKNfCnCrzL__LnwRzDsq2ZtPb9E/edit?usp=sharing) or file a ticket for it. We keep tabs on error rates and flakiness, but actual user reports are very helpful for seeing and prioritizing flakiness. 

There can be many reasons for flakiness, and these reports can help us stay on top of it and ensure it doesn’t get worse.


## Keep NPM Scripts Consistent
If an operation is general enough to be targeted in the CI, then put it in an npm script and make sure the npm script name is consistent across packages. The reason this is useful is that we can then target these scripts with `yarn workspaces foreach run $script_name` commands. 

This is a very convenient way to execute various operations across packages in the mono repo. If scripts aren’t consistently named, then things get quite messy. Currently there are a few scripts we rely on heavily in the CI

- `yarn workspaces foreach run compile`- Should compile typescript
- `yarn workspace foreach run test:unit` - Runs unit tests
- `yarn workspace foreach run test:integration` - Runs integration tests
- `yarn workspace foreach run postinstall` - Should prime the repo after running yarn install. We generally use this for pulling down and priming l10n content.

## Export Tests Reports
We have a lot of tests. No one really wants to dig through command line output to figure out what failed. So whenever possible, we will generate and export test reports. This  is especially important for unit and integration tests where many workspaces packages are being tested in a single job. By exporting test reports, the errors will show up nicely formatted in the UI. For example:

![test report](../assets/ci/test-report.png "image_tooltip")

Test reports are fairly easy to export. Most testing frameworks will export a json format, typically in the junit reporter format, which can be interpreted by CircleCI. Any test report that ultimately ends up in the artifacts/tests will be accessible in the tests tab in circle ci as depicted above.

## Review the CI Workflows
The CI workflows in FxA have been crafted to address some of the side effects that mono repos can have on CI. Checkout the [Continuous Integration](/ecosystem-platform/reference/continuous-integration) reference to learn more about how our CI design attempts to address some of these issues.
