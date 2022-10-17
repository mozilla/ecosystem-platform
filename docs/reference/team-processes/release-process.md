---
title: Release Owner Duties
---

import regularReleaseDiagram from '../../assets/fxa-release1.png';
import patchUpliftReleaseDiagram from '../../assets/fxa-release5.png';
import patchReleaseDiagram from '../../assets/fxa-release4.png';
import securityReleaseDiagram from '../../assets/fxa-release3.png';

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
If you're new to release ownership, check that you have access to the [`fxa-private`][fxa-private], [`cloudops-deployment`][cloudops-deployment], and [`cloudops-infra`][cloudops-infra] repos. While not crucial, access to fxa-private enables you to see a Bugzilla URL outputted by the release script, and access to `cloudops-deployment` and `cloudops-infra` allows you to see PRs that may be listed in the deploy doc as well as make PRs in that repo when you make code changes that necessitate them.
:::

## Releasing Code

:::caution
**The release script expects the git origin to be unchanged from the default.**  If you've modified your git remotes you will get confusing output here and might mess things up.  If in doubt, check out a new copy of FxA (eg. `git clone git@github.com:mozilla/fxa.git fxa.tagging` and do all your tagging there.

**If you're tagging in a newly cloned repo, ensure your commits will be GPG signed.** Run `git config --list` and verify you see `commit.gpgsign=true`. If this is not already set globally, run `git config --global commit.gpgsign true`. [See docs][gh-gpg-docs] on how to add a GPG key.
:::

### A regular release

1. The pre-flight checklist:
    1. Ensure there are no critical patches for this tag that haven't landed yet
    1. Ensure any previous point releases have been merged back into `main`
    1. Ensure you don't have any modified files or code laying around before you start the tag
    1. Ensure you have the latest from `main`, including tags. If `git fetch [remote]` doesn't reflect the latest tag, run `git fetch [remote] --tags`.

1. Run [release.sh][release.sh] from the root of the repository on `main` with `./release.sh`. This will create an appropriately named train branch based on existing tags and branches, update a few files like the changelogs and `package.json` versions, and create a tag locally. Make sure there are no errors in the output.

    <details>
        <summary>See a diagram of the happy path for a regular release, including what <code>release.sh</code> does</summary>
        <img src={regularReleaseDiagram} />

    An example of what your commands may look like:

        $ git checkout main
        $ git pull
        $ ./release.sh
        # check `git log`, `git diff`, then follow instructions
    </details>

1. Do some manual checks in the new train branch to make sure the generated tags are sane:

    1. Does `git log` look as expected, showing all commits between the previous tag, and the new tag?
    1. When running a `git diff` from `origin/main`, does the diff look correct, including:
        - Do the changelogs look as expected with a version bump and commit message summaries?
        - Have all the version strings in `package.json` been updated?
        - Do the files changed look as expected for the major release?

1. The release script will print some commands to run to push the train branch and the tag to the repo. You might consider doing all other commands in a new terminal tab to not lose the print out. **It's best to copy and paste the push commands so you don't mix them up.** The deploy to staging will begin once `deploy_and_tag` finishes in CI which runs after all tests have passed.

1. The release script will also print a URL which you can use to open a PR to merge the train branch back into the main branch.

1. The release script will print out a bug template.  Copy that template and open a deployment bug in bugzilla under `Cloud Services :: Operations: Deployment Requests` ([example][example-deployment-bug]) even if the component says it's deprecated. Remember to include:

    1. Any notes that were added during the sprint from the [deploy doc][deployment-doc] for the train, particularly any server side changes that need to happen as part of this deployment.
    1. Links to the `qa+` label on GitHub.
    1. Links to the release tag on GitHub.
    1. Links to pertinent changelogs.

1. Finally, when your train PR into `main` is approved and the deploy to stage has finished, merge the PR. If CI fails and it appears to be a flaky test, rerun the test from failed. If it continues failing, let the team know. There may be a problem that warrants a dot release, or if the fix is non-trivial, we may need to roll back the release with SRE coordination.
    1. If CI passes but the deploy fails, ask SRE to look at the deploy logs and paste any errors they find. There could be more than one error, so be sure to check and include all fixes into any planned, subsequent dot release.
    1. If a dot release is needed, it is possible to tag the dot release shortly (i.e. >= 20 minutes) after the major release. Check with SRE before any further tagging to ensure they are available to provide support as needed.

### SRE staff will take it from there...

1. Ensure that any configuration changes noted in the deployment bug land in [cloudops-deployment][cloudops-deployment].

1. Run any outstanding database migrations. These are applied automatically for `dev` and `stage` but are reviewed manually for production since we may need to take care with the changes to avoid slow queries.  The migrations should be included in the [deployment doc][deployment-doc].

1. Build `fxa-auth`, `fxa-content`, `fxa-oauth`, `fxa-profile`, `fxa-verifier` in stage on Jenkins using git commit from cloudops-deployment PR and docker images referenced in deploy bug

1. If this is a push to production:
    1. Ensure we have the appropriate QA signoffs. If major issues are found, a new patch is made and engineering will need to create a patch release
    1. Deploy fxa-* to production
    1. Close the initial deployment bug. It may be commented on later if there are patch releases in production.

1. Otherwise, if this is a staging tag, request QA on stage by posting in the bug.

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

1. Ensure you have the latest from the train branch. Create an uplift branch from the train branch with the version number, like `train-100-uplift-1`, branched off of `train-100`
1. On the uplift branch, run `git cherry-pick` for the needed commits that have landed in `main`
1. Get a PR up to merge `train-100-uplift-1` into `train-100`. This allows:
    - A teammate to review exactly what's going into the release
    - Confirmation that CI will pass before tagging
1. After approval and CI pass, merge the PR
1. Check back into the train branch and ensure you have the latest, including tags, especially if you did not perform the original release or previous dot release for this train. If `git fetch [remote]` doesn't reflect the latest tag, run `git fetch [remote] --tags`.
1. Run `git log` to ensure you see the expected cherry-picked commit(s). The patch command assumes that the relevant commit has been merged into the train branch locally and bumps the the minor version on the last tag it finds in the tree from HEAD.
1. Tag with the patch release command **on the train branch**, `./release.sh patch`
1. Reference everything at and under the instructions beginning with "Do some manual checks" for [a regular release](#a-regular-release). Keep in mind the diff will be against `origin/train-###`, and instead of creating a new Bugzilla deploy bug, you'll copy the output and paste it in the existing bug.
  - Be sure to open a PR from the train branch back into `main` and merge it once approved
  - While we prefer one train branch PR into `main` per patch release for reviewing purposes, it's okay for there to be multiple releases in this PR if a previous patch release wasn't reviewed and merged back into `main` before tagging the new patch release

<details>
    <summary>See a diagram of a patch release with the <code>uplift</code> approach, including what <code>./release.sh patch</code> does</summary>
    <img src={patchUpliftReleaseDiagram} />

In the scenario above, a regular release happened and `v1.100.0` was tagged and pushed to production.  Later, to fix a regression, a patch was landed *directly on the branch* rather than on `main`.  `release.sh patch` was run and `v1.100.1` was tagged.  Four more commits landed on the branch and `release.sh patch` tagged a `v1.100.2`.  In this scenario there were two patch releases in addition to the regular release at the end of the sprint.
</details>

An example of commands to run for this kind of patch release are:

```bash
git checkout main
git pull
git checkout train-100
git pull
git branch -b train-100-uplift-1
git cherry-pick <commit1> # do these one at a time to ensure there's no merge conflicts
git cherry-pick <commit2>
(repeat as needed)
git log  # Verify you picked what you wanted to
git push origin train-100-uplift-1
# On GitHub:
# 1) make a Pull Request for train-100-uplift-1 to merge into train-100
# 2) Ask for review
# 3) Wait for CI to pass ✅
# 4) Merge the Pull Request
git checkout train-100
git pull
./release.sh patch
# Follow the instructions printed
```

#### Alternate way 1, the YOLO way, without an `-uplift` branch

Alternatively, you don't _have_ to create an `-uplift` branch to do a patch release. If you feel exceptionally confident in the release, you can choose to directly `cherry-pick` commits onto the `train-###` branch and then tag.

The downside to this approach is that a teammate can't review what you've cherry-picked, and if CI fails after you've tagged, you might have to `cherry-pick` in an additional missed fix and then tag the next minor release. You may also push the train branch with the cherry-pick but _prior to tagging_ if you want to see CI run first.

#### Alternate way 2, the direct PR way

To remove the `cherry-pick` step, it can potentially be easier on the release owner to PR patches directly into the `train-###-uplift-#` branch or directly into the `train-###` branch. This can be done because the train branch is always merged back into `main`. 

If this is preferred, the release owner should communicate with the team about it, and create the `-uplift` branch and push it ahead of time if they prefer the `-uplift` branch strategy.

<details>
    <summary>See a diagram of a patch release approach with a direct PR into <code>train-###</code>, including what <code>release.sh patch</code> does</summary>
    <img src={patchReleaseDiagram} />

In the scenario above, a regular release happened and `v1.100.0` was tagged and pushed to production.  Later, to fix a regression, a patch was landed *directly on the branch* rather than on `main`.  `release.sh patch` was run and `v1.100.1` was tagged.  Four more commits landed on the branch and `release.sh patch` tagged a `v1.100.2`.  In this scenario there were two patch releases in addition to the regular release at the end of the sprint.
</details>

An example of commands to run for this kind of patch release are:
```bash
git checkout main
git pull
git checkout train-100
# Ensure the pull requests on GitHub have landed before you continue
git pull
git log  # Verify it looks like you expect
./release.sh patch
# Follow the instructions printed
```

## Special Cases

### Production hotfixes

Occasionally, an issue that warrants a dot release may be found in production. Handling this on the correct train(s) depends on when the bug is discovered and fixed.

Let's say a major issue is caught in production, and train 100 was tagged the 1st of the month. Train 100 will hang out in staging for one week, and then be pushed to production on the 8th after appropriate signoffs. Release 101 is planning on being tagged on the 15th and pushed to production on the 22nd.

If the issue is caught and fixed between the 8th and the 15th, the hotfix can be landed on a patch release:
1. Follow the patch release instructions using the `train-100` branch
1. Verify the fix on staging or ask QA to verify it for us, if possible
1. Communicate with SRE to ensure the patch release is pushed from staging to production

If the issue is caught and fixed after train 101 is tagged, between the 15th and the 21st, the release owner must tag the fix on both train 100 and train 101. The release owner should:
1. Follow the instructions above to tag on `train-100` and get the fix to production
1. Follow the patch release instructions using the `train-101` branch to ensure the patch is on staging with the new train

It's good to communicate frequently in #fxa-team when this occurs.

### Releasing Icons

All product icons live in a dedicated [assets directory](https://github.com/mozilla/fxa/tree/main/assets) in the fxa repo. This directory is independent of individual packages in the monorepo because it doesn't need to be wrapped up in any particular container, and these icons may be used across different servers.

The `assets` directory is uploaded manually to the FxA CDN at https://accounts-static.cdn.mozilla.net as part of the release process. Subdirectories map directly to paths under the CDN domain: content in `assets/foo` maps to https://accounts-static.cdn.mozilla.net/foo.

The Stripe product icons live in `assets/product-icons`.

It's fine to create other subdirectories for new collections of assets as needed but you'll need to modify the push script to include them.

The release script for static assets is `.github/workflows/upload-assets-to-cdn.yml`. 

Icons and other assets are normally deployed with every release. If icons need to be deployed outside the regular release process, ask operations for help.

### Security Releases

We maintain [`fxa-private`][fxa-private] for making security-related point releases, also known as a private patch release. This is something we rarely have to do.

<details>
    <summary>See a diagram of a security release</summary>
    <img src={securityReleaseDiagram} />

This diagram illustates an important security patch being pushed live midway through sprint 100.
</details>

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
  grunt version:patch
  git push
  ```

1. Push the tag in order to trigger a CircleCI build:
  
  ```shell
  git push origin v1.XYZ.N
  ```

  :::caution
  Do not use `git push --tags` as this will not correctly trigger the CircleCI build.
  :::

1. File an issue on the public repo as a reminder to uplift the fix
  once it has been deployed to production.

Once the fix has been deployed and is safe to reveal publicly, it can be merged back into the public repo by doing the following:

1. Push the private train branch to the public repo,
  as a new branch:
  
  ```shell
  git push public train-XYZ:train-XYZ-uplift
  ```
1. Open a PR in the public repo, targeting the public `train-XYZ` branch, for review and merge.

1. Push the tag to the public repo:
  
  ```shell
  git push public v1.XYZ.N # Replace this with whatever tag is currently live
  ```

1. Merge the `train-XYZ` branch to main following the usual steps to release

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

1. A tag named `v1.xxx.y` is made with the release script
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

Work with SRE if you need a canary deployment.

### Does a deploy failure on one server prevent others from deploying?

In staging, a single service will not stop the rest from deploying. In production, they are deployed by hand, so if one breaks SRE will stop the rest from deploying.

### What if I run the release script and something went wrong?

If you run the release script and something goes awry or the diff looks off, don't worry - everything the release script does is done locally until you manually push the train branch and tag.

If you haven't pushed the tag yet, you will need to delete the tag locally and discard the tag commit before rerunning the script. You can do this with `git tag -d <tag name>` and `git reset HEAD~1` while on the train branch to remove the tag commit. When you've verified the commit is no longer present with `git log` and that the tag has also been deleted locally, you can rerun the script.

If you've already pushed the tag and noticed a problem, you will need to rerun the script. Once the tag is pushed, the Docker image is pushed to Docker Hub with a reference to that tag. If you _need_ to retag with an existing tag, you will need to coordinate with SRE.

### What if the merge messes up the changelog?

After merging but before pushing, you should check the changelog to make sure that the expected versions are listed and they're in the right order. If any are missing or the order is wrong, manually edit the changelog so that it makes sense, using the commit summaries from `git log --graph --oneline` to fill in any blanks as necessary.

Then `git add` those changes and squash them into the preceding merge commit using `git commit --amend`. Now you can push and the merged changelog will make sense.

### What happens if there are merge conflicts (train-xxx => main)?

Conflicts are most likely from a recently landed issue in `main`. Typically we create a new branch, resolve conflicts there, and then merge that branch into `main`.

Merge conflicts in a `train-xxx -> main` pull request are most likely the result of a recent patch into `main` branch. The easiest way to resolve this is to:

1. Create a new merge branch branch from `train-xxx`, such as `train-xxx-merge-main`
1. Merge the current `origin/main` into `train-xxx-merge-main`
1. Resolve the conflicts that occur in the merge
1. Commit changes and push to origin
1. Create a new PR, `train-xxx-merge-main -> main`
1. Wait for Circle tests to pass and then merge when ready

You can then close the `train-xxx -> main` PR.

[cloudops-deployment]: https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa
[cloudops-infra]: https://github.com/mozilla-services/cloudops-infra/tree/master/projects/fxa
[deployment-doc]: https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit
[example-deployment-bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1575233
[release.sh]: https://github.com/mozilla/fxa/blob/main/release.sh
[bug-severity]: https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity
[fxa-private]: https://github.com/mozilla/fxa-private
[gh-gpg-docs]: https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account