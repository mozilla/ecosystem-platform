---
title: Release Owner Duties
---

## What is a Release Owner?
The main duty of the release owner is to be the designated engineer to follow the "Releasing Code" process described below. The release owner should communicate and work with the rest of the team to ensure a smooth close-out of the current sprint, as well as create patch (AKA dot) releases as necessary throughout the sprint.

At the time of writing, the release responsibility is rotated every sprint/train to the next team member on the list at the top of our [deployment doc][deployment-doc].

## I am the Release Owner: How should I plan my Sprint?
Release ownership is confirmed during the sprint kick-off team meeting. Release owners should update the top of the [deploy doc][deployment-doc] with the train number they will be tagging and their name (don't forget to choose an emoji 🤘).

If you are the designated release owner, consider the following suggestions to managing your work and the release:

* When taking on work for the sprint, consider taking on around 5-15% less in order to allocate a portion of each day to release management duties and in particular towards the end of the sprint - this helps give you padding in case an unexpected (or two, or three) dot release comes up.
* Take some time a day or two before tagging is scheduled to reach out in the #fxa-team Slack channel or to individual team members to check-in on in-progress or to-do work items. This might result in you taking on additional work performing reviews or reaching out to the appropriate people.
    * Things to consider asking:
        * Are there any tasks that need to be in the train? Are any of them in jeopardy of holding up the release from being tagged?
        * Is there anything I can do to help keep things moving?
* 1-3 hours before tagging, check open PRs and let the team know you will be tagging at X time and ask that any missing notes in the deploy doc be added. Atypically, a critical patch may be very close to landing which may delay the tag by a few hours.

:::tip
If you're new to release ownership, check that you have access to the [`cloudops-deployment`][cloudops-deployment] and [`cloudops-infra`][cloudops-infra] repos. While not crucial, access to `cloudops-deployment` and `cloudops-infra` allows you to see PRs that may be listed in the deploy doc as well as make PRs in that repo when you make code changes that necessitate them.
:::

## Releasing Code

### A regular release

1. Ensure there are no critical patches for this tag that haven't landed yet
1. If there are special steps in the deployment doc give the appropriate teams a heads up (e.g. probably SRE)
1. Load the [Release Tag Action URL](https://github.com/mozilla/fxa/actions/workflows/tag-release.yml)
1. Click "Run workflow" in the top right.
1. Watch the output of the action to make sure everything goes correctly.
1. Check that all tests pass in [CircleCI](https://app.circleci.com/pipelines/github/mozilla/fxa).
1. Once the code is tagged, all CI tests have passed, and the docker containers are built, you'll see messages in slack as it auto-deploys to our staging server.


### Patch releases

Patch (dot) releases are used between official releases to release code into staging or production that can't wait for the normal release cycle. What warrants a patch release may be evaluated on a case-by-case basis, but we may need one if:

- An [S1 bug][bug-severity] is found
- We have legitimate (non-flaky, non-SRE related) test failures in staging or production
- We need to land tasks to make a time-sensitive deliverable that didn't quite make the release, like a new RP launch

If QA's signoff after testing a release on staging comes back yellow or red, we should check with engineering management for their recommended course of action, as we may need a dot release before pushing a release to production.

Whenever a dot release is planned, ping the team to let them know you'll be tagging `train xxx.y`, with a list of issues to be included in the release. Other engineers may have fixes that wouldn't warrant a dot release on their own, but would be nice to ride along if a patch release is being tagged anyway.

:::caution
While it's oftentimes up to our own discretion, engineers should be **selective of fixes and mindful of asking** release owners to include their patches if the patch wouldn't justify a point release on its own, as it introduces more overhead and risk of failures or additional issues with the release.

If you’re requesting the release owner include a patch, make sure you know where that train is in regards to production. If the train is already in production, the dot release will be pushed to production relatively soon after the tag is made, which you may or may not intend. See the [production hotfixes](#production-hotfixes) section for more info.
:::

There are a few different ways to handle a dot release. Git is a flexible tool however, don't hesitate to get in touch with your team to talk through the best courses of action.

#### The **recommended way**

1. Ensure the commits you want to pick have already landed in `main`
1. Ensure you have the latest from the existing train branch (`git pull`)
1. On the train branch, run `git cherry-pick` for the needed commits that have landed in `main`
1. Run `git log` to ensure you see the expected cherry-picked commit(s).  Also run any local tests you need to run to ensure things are functioning correctly.
1. Push your changes back to Github

An example of commands to run for this kind of patch release are:

```bash
git fetch [remote] --tags
git checkout main
git pull
git checkout train-100
git pull
git cherry-pick <commit1> # do these one at a time to ensure there's no merge conflicts
git cherry-pick <commit2>
(repeat as needed)
git log  # Verify you picked what you wanted to
# Run the server locally, run tests, etc. to verify your patch is operating correctly
git push origin train-100
git tag -a "v1.100.x" -m "Train release v1.100.x" # X is your patch release number.  It just increments from the previous one.
git push origin v1.100.x
```


## Special Cases

### Production hotfixes

If you need to hotfix a branch that is not the latest (for example, you need to hotfix Train 100 but there is also a Train 101 branch) then you need to ensure any code cherry picked to Train 100 is also cherry-picked to the Train 101 branch to avoid a regression when Train 101 goes to production.

This can happen if there is a hotfix needed in production (Train 100) but stage has already been tagged (Train 101).  In this case do the lowest branch first and get it to production and then do the next branch.

It's good to communicate frequently in #fxa-team when this occurs.

### Releasing Icons

Icons and other assets are automatically deployed with every release. If icons need to be deployed outside the regular release process, ask SRE for help.

All product icons live in a dedicated [assets directory](https://github.com/mozilla/fxa/tree/main/assets) in the fxa repo. This directory is independent of individual packages in the monorepo because it doesn't need to be wrapped up in any particular container, and these icons may be used across different servers.

The `assets` directory is uploaded manually to the FxA CDN at https://accounts-static.cdn.mozilla.net as part of the release process. Subdirectories map directly to paths under the CDN domain: content in `assets/foo` maps to https://accounts-static.cdn.mozilla.net/foo.

The Stripe product icons live in `assets/product-icons`.

It's fine to create other subdirectories for new collections of assets as needed but you'll need to modify [the push script](https://github.com/mozilla/fxa/blob/main/.github/workflows/upload-assets-to-cdn.yml) to include them.


### Security Releases

We maintain [`fxa-private`][fxa-private] for making security-related point releases, also known as a private patch release. This is something we rarely have to do.

The recommended procedure for doing so is:

1. Check out the private repo, independently from your normal working repo:

  ```shell
  git clone git@github.com:mozilla/fxa-private
  cd fxa-private
  ```

  :::tip
  Do not add fxa-private as a remote on your normal working repo. This increases the risk of pushing a private fix to the public repo by mistake.
  :::

1. Add the corresponding public repo as a remote named `public`, and ensure it's up-to-date:
  
  ```shell
  git remote add public git@github.com:mozilla/fxa
  git fetch public # Ensure this pulls latest tags. Run `git fetch public --tags` if not
  ```

1. Check out the latest release branch and push it to the private repo:

  ```shell
  git checkout public/train-XYZ
  git push origin train-XYZ
  ```

1. Develop your fix against this as a new branch in the private repo:

  ```shell
  git checkout -b train-XYZ-my-security-fix
  git commit -a
  git push -u origin train-XYZ-my-security-fix
  ```

1. Submit and review the fix as a PR in the private repo,
  targetting the `train-XYZ` branch.

1. Tag a point release in the private repo, following the release steps

  ```shell
  git checkout train-XYZ; git pull  # ensure we have the merged PR
  git tag -a "v1.100.x" -m "Train release v1.100.x"
  git push
  ```

1. Push the tag in order to trigger a CircleCI build:
  
  ```shell
  git push origin v1.XYZ.N
  ```

  :::caution
  Do not use `git push --tags` as this will not correctly trigger the CircleCI build.
  :::

1. File an issue in the next sprint as a reminder to uplift the fix once it has been deployed to production.

Operations is involved at this point to deploy to production directly from `fxa-private` so the patch is never seen before it's live.

Once the fix is verified in production, the patch is cherry-picked or merged back to `fxa`.

### Temporary stage deploys

If you are working on something that you wish to test out in a release environment before it is officially merged into `main` you might consider a temporary deploy to stage.

To do so, start by branching off the most recent train branch. Don't branch off `main` so you're not introducing changes merged after the official train was deployed. Cherry-pick your change(s) into the new branch.

Tag the branch with a name of your choosing, and push your branch to `mozilla/fxa`. Because you're pushing a tag, it will trigger a build workflow in CircleCI. Keep an eye on the `deploy-packages` job.

Once the images have been built, you can ping someone from SRE in Slack to selectively deploy servers your changes occurred in (e.g. if you only change code in `fxa-auth-server`, only the auth server needs to be deployed).

Some things to keep in mind:

- This is a temporary deploy. Your changes will be reverted when the next official stage train tag occurs for a regular release or a patch release, or if someone else needs to perform this process.
- We have relying parties that depend on stage for their own testing, so try not to break things with your temporary code. If you think this is a possibility please consider pinging QA in Slack so they can perform tests as needed.

## FAQ

### What actually happens with the deploy process?

1. A tag named `v1.xxx.y` is made 
1. When the tag is pushed to `mozilla/fxa`, CircleCI runs the normal unit/integration tests on that tag
1. After tests pass, `deploy_and_tag` is ran, where CircleCI builds Docker images and uploads them to Docker Hub
1. Docker Hub sends a webhook to Jenkins and runs the our deploy pipelines with the new Docker image
1. Our servers are deployed and our Slackbot pings the #fxa-team channel. These go out one-after-another but they have a little overlap.
    - Stage is deployed in alphabetical order
    - Production is deployed with:
        - auth-server first because it breaks the most
        - Anything that touches the database
        - Then content-server and others last
1. The test-content-server-remote smoke tests are ran, triggered by the content-server deployment finishing

#### Canary

In staging, we have a canary available but there is only one server, meaning the canary will take 100% of traffic.  

In production, the canary also takes the full amount of traffic, however, the percentage of traffic it gets is based on how many servers are running. For example, if the auth-server is deployed with 30 servers, the canary would take 1/30th of the traffic.

### Does a deploy failure on one server prevent others from deploying?

In staging, a single service will not stop the rest from deploying. In production, they are deployed by hand, so if one breaks SRE will stop the rest from deploying.

[cloudops-deployment]: https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa
[cloudops-infra]: https://github.com/mozilla-services/cloudops-infra/tree/master/projects/fxa
[deployment-doc]: https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit
[example-deployment-bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1575233
[release.sh]: https://github.com/mozilla/fxa/blob/main/release.sh
[bug-severity]: https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity
[fxa-private]: https://github.com/mozilla/fxa-private
[gh-gpg-docs]: https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
