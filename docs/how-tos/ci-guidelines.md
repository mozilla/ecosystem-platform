---
title:  CI Guidelines
---

Our CI process is largely automatic. By simply pushing up a branch and opening a PR the CI system will kick in and start validating your changes. By landing a PR on the main branch, the system will also build and deploy docker images that keep the current state of the FxA fresh.

Even though this is all seamless, there are a few best practices to keep in mind. Following these will help pipelines run faster in the future and with fewer errors. Also, if unfamiliar with CI concepts, we have some more info [here](/ecosystem-platform/reference/tests-in-circleci#workflows).

## Tag tests as unit or integration tests
In order to provide better performance, and to fail bad PRs more quickly, break our tests up into unit tests and integration tests and run these tests in separate CI jobs.

In our system unit tests are tests that can:
- Run quickly, typically under 100ms, and definitely under 500ms.
- Run without any infrastructure, i.e. tests can run without any pm2 services running.

Integration tests are tests that:
- Take longer to run, typically over 500ms.
- Run with just infrastructure, i.e. we must execute a `yarn start infrastructure` prior to running tests)

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
If a scenario is encountered where a functional test fails, but there were not any unit or integration tests that also failed, this might be a good opportunity to go back and improve unit or integration test coverage. 
:::




## Keep NPM Scripts Consistent
If an operation is general enough to be targeted in the CI, then put it in an npm script and make sure the npm script name is consistent across packages. The reason this is useful is that we can then target these scripts with `yarn workspaces foreach run $script_name` commands. 

This is a very convenient way to execute various operations across packages in the mono repo. If scripts aren’t consistently named, then things get quite messy. Currently there are a few scripts we rely on heavily in the CI

- `yarn workspaces foreach run compile`- Should compile typescript
- `yarn workspaces foreach run test-unit` - Runs unit tests
- `yarn workspaces foreach run test-integration` - Runs integration tests
- `yarn workspaces foreach run postinstall` - Should prime the repo after running yarn install. We generally use this for pulling down and priming l10n content.

## Export Tests Reports
We have a lot of tests. No one really wants to dig through command line output to figure out what failed. So whenever possible, we will generate and export test reports. This  is especially important for unit and integration tests where many workspace packages are being tested in a single job. By exporting test reports, the errors will show up nicely formatted in the UI. For example:

![test report](../assets/ci/test-report.png "image_tooltip")

Test reports are fairly easy to export. Most testing frameworks will export a json format, typically in the junit reporter format, which can be interpreted by CircleCI. Any test report that ultimately ends up in the artifacts/tests will be accessible in the tests tab in circle ci as depicted above.

## Updating CI Runner Images
The day will come when it might be necessary to update the base images we use in our CI runners. A good example is upgrading a major version of node. When this happens we must update images to reference `cimg/node:$VER` and `node:$VER`. 

Because CI images are built as changes land on main, it may seem as though there is a chicken egg problem. In order to produce new CI images we must land the changes we need on main, but in order to land changes on main we must test them in branch using our CI runner images. This can definitely be a quandary, but here’s how to deal with it:

- In `.circleci/config.yml`, look for `commands > build-ci-image > steps > run > command` and version the docker tag. For example, you would change `-t mozilla/fxa-circleci:ci-<< parameters.target >>-v1` to `-t mozilla/fxa-circleci:ci-<< parameters.target >>-v2`.
- In `.circleci/config.yml`, update all references to use the new image tags. For example change all occurences of
  - `fxa-circleci:ci-builder-v1` to `fxa-circleci:ci-builder-v2`
  - `fxa-circleci:ci-test-runner-v1` to `fxa-circleci:ci-test-runner-v2`
  - `fxa-circleci:ci-functional-test-runner-v1` to `fxa-circleci:ci-functional-test-runner-v2`. 
- In `.circleci/config.yml`, go to `workflows > deploy_ci_images > jobs > filters > branches` and add the name of the branch being worked on to the list.
- Open the `_dev/docker/ci/Dockerfile` and change `cimg/node:16.3` to whatever `cimg/node:$version` needs to be targeted.
- Push changes.

This will end up triggering a new build. The tests will fail the first time. In fact you may as well cancel the `test_pull_request` workflow. The `deploy_ci_images` workflow will run (due to change in step 4) and push up the new image tags to docker hub that our CI runners use. On a rerun, or subsequent push, the image with node 18 should now be in place, and they will pass. And of course, it won’t break everyone else’s pipelines cause it’ll be using a different tag, and their configs still reference the original images.

:::tip
If the deploy_ci_images job runs very quickly, something is off. It's possible the build was skipped, so check the output for the job. If the build was skipped, (perahaps the script didn't find any changes the require a new build), then you can 'force' the docker CI images to rebuild by going to 'trigger pipeline' select 'Add parameters' and then add `boolean` | `force-deploy-fxa-ci-images` | `true`.
:::
