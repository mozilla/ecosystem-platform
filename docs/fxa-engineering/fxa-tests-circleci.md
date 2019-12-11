---
id: fxa-tests-circleci
title: Testing in CircleCI
sidebar_label: Tests in CircleCI
---

Last Updated: 2019-11-26

## Overview

The FxA team works mostly within a monolithic git repository. This is broken up into many packages, where each package tends to be a microservice or library shared between other packages.

CircleCI is a service used by FxA to automatically run tests across all packages for every pull request, branch push, and commit tag on GitHub. Scripts and configuration for CircleCI mostly live in the `.circleci` directory.

Though there are exceptions on a per-package basis, the following things tend to be true:

* We use Docker to build containers within which tests are run, as well as build artifacts for each package.

* The `test` workflow runs for every commit to a pull request, branch, or tag. This workflow performs build, test, and deploy steps across all packages.

* The `deploy-tag` workflow runs for every **tagged** commit. This workflow skips tests, performing build & deploy steps across all packages.

* Each package can provide a `Dockerfile-test` file. From this, a container will be built in which `npm run test` will be executed. A successful exit status is considered a passing test run.

* Each package can provide a `Dockerfile` or `Dockerfile-build` file. This will be used to build a Docker image for deployment to Docker Hub. It should be very similar to `Dockerfile-test` - but it can omit steps & dependencies used only for testing.

* Commits to `master` branch result in image deployments to Docker Hub for each package, using the `latest` tag.

* Commits to branches prefixed with `feature` or `dockerpush` also result in images pushed to Docker Hub - in this case, the branch name is used as the Docker tag.

* Commits tagged with `git tag` or via GitHub trigger deployments of images to Docker Hub. Here, the git tag is used as the Docker tag.

Again, there are exceptions to all the above. The rest of this document will go into detail on the workflows, jobs, scripts, and important files that make up CircleCI testing - and more importantly attempt to highlight the exceptions and per-package customizations.

## Workflows

A [workflow in CircleCI](https://circleci.com/docs/2.0/workflows/) is described like so:

> a set of rules for defining a collection of jobs and their run order. Workflows support complex job orchestration using a simple set of configuration keys

### test

This workflow gets run on all commits for all pull requests, branches, and tags.

All steps in the workflow depends on [the `install` job](#install), so that gets run first.

After `install`, [the `build-module` job](#build-module) is run in parallel for most packages - [check `.circleci/config.yml` for an up-to-date list](https://github.com/mozilla/fxa/blob/master/.circleci/config.yml#L257). This shared job handles the work of building Docker containers with `Dockerfile-test` & `Dockerfile-build`, running tests, and deploying images.

Some packages do not use `build-module` - these each use customized jobs:

- [`fxa-content-server`](#fxa-content-server)
  - [`build-and-deploy-content-server`](#build-and-deploy-content-server)
- [`fxa-shared`](#fxa-shared)
- [`js-client`](#js-client)
- [`fxa-oauth-server`](#fxa-oauth-server)
- [`fxa-email-event-proxy`](#fxa-email-event-proxy)
- [`fxa-email-service`](#fxa-email-service)

Finally, [the `docs` job](#docs) is run after the completion of `js-client` and `fxa-email-service` jobs.

### deploy-tag

The jobs specified in this workflow only run for tags.

All steps in the workflow depends on [the `install` job](#install), so that gets run first.

Then, [the shared `deploy-module` job](#deploy-module) is run in parallel for most packages - [check `.circleci/config.yml` for an up-to-date list](https://github.com/mozilla/fxa/blob/master/.circleci/config.yml#L355).

There are also some package-specific jobs here:

- [fxa-email-event-proxy-tag](#fxa-email-event-proxy-tag)
- [fxa-email-service-tag](#fxa-email-service-tag)

## Jobs

Jobs are the individual build tasks performed by CircleCI. They're orchestrated in [workflows](#workflows), where they can be run in parallel and/or made dependent on each other. The results of one job can also feed into another.

### install

Common installation and setup for all other jobs.

Checks out the project code into the default working directory `~/project`. Runs `npm ci` in the root of the project.

Creates `packages/version.json` based on CircleCI env vars to describe the hash, version, source, and build URL of the current run. This `version.json` will also be stored as a [build artifact](https://circleci.com/docs/2.0/artifacts/) with the test run.

Also runs [`.circleci/modules-to-test.js`](#circleci-modules-to-testjs) and outputs to `packages/test.list` as a selection of which packages' tests should be run.

Finally, the `install` job uses [`persist_to_workspace`](https://circleci.com/docs/2.0/configuration-reference/#persist_to_workspace) to copy the `~/project` directory to a shared workspace that will be copied into the filesystem for each following job via [`attach_workspace`](https://circleci.com/docs/2.0/configuration-reference/#attach_workspace).

### build-module

Common task used by many modules in the `test` workflow to build, test, and deploy. It takes three parameters:

- `module` - string, name of the package to build
- `test` - string, default: `test`, can be used to run a different NPM script rather than `npm run test`
- `db` - boolean, default: false

Working directory is set to `~/project/packages/{module}`. Attaches to the shared workspace. Sets up remote Docker environment for building containers.

If the `db` parameter is true, it starts up containers for mysql, memcached, redis, and firestore.

Finally, it runs [`.circleci/build-test-deploy.sh {test}`](#circleci-build-test-deploysh). This runs the build, test, and deploy scripts for the module in the current working directory.

### deploy-module

Common task used by many modules in [the `deploy-tag` workflow](#deploy-tag) to build & deploy images without running tests. Takes one parameter:

- `module` - string

Working directory is set to `~/project/packages/{module}`. Attaches to the shared workspace. Sets up remote Docker environment for building containers.

Runs [`.circleci/build.sh {module}`](#circleci-buildsh) to build a Docker container. Then, runs [`.circleci/deploy.sh {module}`](#circleci-deploysh) to deploy the container to Docker Hub.

### fxa-content-server

Testing fxa-content-server is very complex and heavy in resource usage. Though this is a single job, it is spread across several parallel container nodes in CircleCI (currently `parallelism: 6`).

Each container is prepared with [`.circleci/install-content-server.sh`](#circleci-install-content-serversh) and then the tests are run with [`.circleci/test-content-server.sh`](#circleci-test-content-serversh). These scripts split up which tests are run depending on the `$CIRCLE_NODE_INDEX` env variable, which varies depending the parallel container node running the script.

### build-and-deploy-content-server

Since [the `fxa-content-server` job](#fxa-content-server) uses a custom parallel scheme to run tests, building a Docker container image is not useful for many runs like pull requests.

So, we split those tasks into the `build-and-deploy-content-server` job, which is only executed for `master` branch and branch names prefixed by `feature.` and `dockerpush.`

This is done by running [`.circleci/install-content-server.sh`](#circleci-install-content-serversh), followed by [`.circleci/build.sh fxa-content-server`](#circleci-buildsh) and [`.circleci/deploy.sh fxa-content-server`](#circleci-deploysh).

(Unlike other modules, the `test.sh` script is not run here, since the `fxa-content-server` job already took care of it.)

### fxa-shared

Custom task for fxa-shared package. It runs lint and test directly on the CircleCI host node - rather than building a Docker container for running tests.

### js-client

Custom task for js-client package. It runs `.circleci/test-js-client.sh` to install, build, lint, and test directly on the CircleCI host node - rather than building a Docker container for running tests. It also installs a `default-jre` dependency required to build [`sjcl`](http://bitwiseshiftleft.github.io/sjcl/).

### fxa-email-event-proxy

Custom task for fxa-email-event-proxy package. It runs lint and test directly on the CircleCI host node - rather than building a Docker container for running tests.

### fxa-email-event-proxy-tag

Custom task for fxa-email-event-proxy package run when a commit is tagged. It directly runs on the CircleCI host node to build, leaving a copy of the build in CircleCI build artifacts as `fxa-email-event-proxy.$CIRCLE_TAG.zip` - where `$CIRCLE_TAG` is the name of the tag used.

### fxa-email-service

Custom task for fxa-email-service package. Since this package is Rust based, it performs a build via `cargo` directly on the CircleCI host. A Docker container is built around the product of the `cargo` build using `.circleci/tag.sh fxa-email-service` - the binary built on the host is copied into the container by `packages/fxa-email-service/Dockerfile-tag`.

### fxa-email-service-tag

Custom task for fxa-email-service package. Since this package is Rust based, it performs a release build via `cargo` directly on the CircleCI host. A Docker container is built around the product of the `cargo` build using `.circleci/tag.sh fxa-email-service` - the binary built on the host is copied into the container by `packages/fxa-email-service/Dockerfile-tag`.

### docs

Custom task for building and publishing documentation. Runs `_scripts/gh-pages.sh` - but only on master branch in the main project repo.

This requires SSH keys that enable CircleCI to commit to the `gh-page` on the main repo, so the script will be skipped if those keys are unavailable.

## Important scripts & files

### packages/fxa-circleci/Dockerfile

This is the base Dockerfile for the container used by most jobs. It includes most of the dependencies commonly used by all other packages. This includes a version of Firefox for Linux for integration tests - check the Dockerfile for the current version (68.0 as of this writing). Rust and Cargo are also included.

**Note:** If you commit an update to this Dockerfile, try not to include changes to other parts of the project in the same Pull Request. Other jobs in the same test run are likely to lag behind and use the previous version of the fxa-circleci container, because the current test run will not have had a chance to finish deploying the new image.

### \_scripts/gh-pages.sh

Builds documentation and commits the result to [the gh-pages branch of the repo](https://github.com/mozilla/fxa/tree/gh-pages).

This, in turn, publishes the result to mozilla.github.io/fxa - which currently includes:

- [Rust docs for fxa-email-service](http://mozilla.github.io/fxa/fxa-email-service/fxa_email_service/index.html).
- [Storybook for fxa-payments-server](http://mozilla.github.io/fxa/fxa-payments-server/)

### .circleci/config.yml

Contains general configuration, job definitions, and workflows orchestrating all the jobs.

### .circleci/modules-to-test.js

Running all tests across all modules / packages in FxA can be time-comsuming. Time can be saved by skipping tests that we know are unrelated to changes in some given commit. Applying that logic, this script outputs a name of individual packages that should be tested - or `all` if it decides that everything needs to be run.

For master branch and other non-PR commits, the output is always `all`.

For pull requests, the script fetches and parses the diff for the current PR. The URL for the diff is constructed from CircleCI env vars.

If there's an error while fetching or parsing the diff, `all` is output. Otherwise, the script checks the path of each file changed to build a list of modules for testing.

Some modules depend on other modules. Within `package.json` at the root of the FxA project, there is an `fxa.moduleDependencies` object. This maps named modules to their dependencies.

If the diff contains changes to any of the dependencies, the dependent module is also added to the list. So, for example, `fxa-content-server` lists `fxa-auth-server` as a dependency. Thus, a change to `fxa-auth-server` causes `fxa-content-server` to be automatically included in the list.

```json
"fxa": {
  "moduleDependencies": {
    "fxa-content-server": [
      "fxa-auth-server"
    ]
  }
}
```

Finally, the list is output to the stdout, one module per line for each in need of testing.

### .circleci/build-test-deploy.sh

Runs `build.sh`, `test.sh`, and `deploy.sh` for a given package - deriving the package name from the current working directory. Passes along the first parameter as the second parameter in `test.sh` - which specifies a different NPM script to run besides the default `npm run test`.

### .circleci/build.sh

Common build script for most modules.

Logic for running or skipping build for a given module is implemented here: `packages/test.list` is expected to contain a list output from `modules-to-test.js` - if the current module's name is missing and the list isn't `all`, this script will exit immediately.

Parameters are just `$1` for the name of the module being tested.

The file `packages/version.json` is expected to have been generated earlier - i.e. from the `install` job in CircleCI. This file is copied into the package.

For modules where `Dockerfile` is present, a container tagged `{MODULE}:build` is built from `Dockerfile`.

For modules where `Dockerfile-build` is present, the container is built from that file instead.

There are exceptions for `fxa-auth-server`, `fxa-content-server`, and `fxa-payments-server`: For each of these modules, the Docker build is performed in the `packages` parent directory. This is because each of these modules depends on files from other packages (e.g. `fxa-shared`) and Docker will not allow `../` path references outside the base directory for the container build.

Finally, `fxa-auth-server` executes `_scripts/clone-authdb.sh` in order to set up the correct database interface for the server. (TKTK?)

### .circleci/test.sh

Common script that runs tests for most modules.

Parameters are `$1` the name of the module being tested and `$2` the name of an npm script that executes tests (defaults to `test` if omitted).

Logic for running or skipping tests for a given module is implemented here: `packages/test.list` is expected to contain a list output from `modules-to-test.js` - if the current module's name is missing and the list isn't `all`, this script will exit immediately.

For most modules: if `Dockerfile-test` is present, it's used to build a Docker container.

The container is tagged `${MODULE}:test`, where `MODULE` is named in the first parameter of the script. Then, `npm run test` is run within the container - the name of the npm script can be customized with the second parameter of `test.sh`.

If `eslint` or `tslint` is present in the module's `package.json`, then `npm run lint` is also run in the container. If there's a `Gruntfile.js` that contains `eslint`, then `grunt eslint` will be run in the container.

### .circleci/deploy.sh

Common script for deploying the Docker container built from an FxA package to Docker Hub.

The basic gist of this script is that it takes a `{MODULE}:build` container - e.g. as created via `build.sh` - and re-tags it as appropriate for the current CI run before pushing it to Docker Hub.

These images are deployed to Mozilla's Docker Hub account. So, for example, many modules can be found with a search for [`mozilla/fxa-`](https://hub.docker.com/search?q=mozilla%2Ffxa-&type=image). Also look for images such as [`mozilla/123done`](https://hub.docker.com/r/mozilla/123done) and [`mozilla/browserid-verifier`](https://hub.docker.com/r/mozilla/browserid-verifier), which are listed under `packages` but do not follow the `fxa-*` naming convention.

The rest of the tag name depends on a few other conditions:

If the build is on `master` branch, then the tag will be `{MODULE}:latest`.

If a build is tagged in Git, then that Git tag is used - i.e. `{MODULE}:{GIT_TAG_NAME}`.

If a build is on a branch with a name prefixed with `feature` or `dockerpush`, that branch name will be used in the tag - i.e. `{MODULE}:{GIT_BRANCH_NAME}`.

It's also possible to supply `$MODULE_SUFFIX` env var tweak the Docker Hub repo name - i.e. `mozilla/$MODULE-$MODULE_SUFFIX`.

Untagged commits or commits on branches that do fall into one of the above cases do not result in a container deployed to Docker Hub.

Logic for running or skipping deployment for a given module is also implemented here: `packages/test.list` is expected to contain a list output from `modules-to-test.js` - if the current module's name is missing and the list isn't `all`, this script will exit immediately.

### .circleci/tag.sh

Used solely by `fxa-email-service` as a custom version of `build.sh` and `deploy.sh`:

- Builds a Docker container using `Dockerfile-tag` tagged `${MODULE}:latest`
- Re-tags the Docker container using basically the same logic as `deploy.sh` and pushes to Docker Hub

### .circleci/install-content-server.sh

Copies over `version.json` and runs `npm install` for fxa-content-server.

### .circleci/test-content-server.sh

TBD:
- describe how content-server tests are run
- how tests are split up between parallel CircleCI nodes
- how integration tests work with intern
- pairing tests are run separately
