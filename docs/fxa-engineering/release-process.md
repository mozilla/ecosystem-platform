---
id: release-process
title: Release Process
sidebar_label: Release Process
---

## Release Owner
### What is a Release Owner?
The main purpose of the release owner is to follow the "Releasing Code" process below.  The release owner should work with the rest of the team to ensure a smooth close-out of the current sprint.

### How is a Release Owner selected?
 At the time of writing, the release responsibility is rotated every train to the next team member on the list at the top of our [deployment doc][deployment-doc].

### I am the Release Owner: How should I plan my Sprint?
If you are the designated Release owner, consider the following suggestions to managing your work and the release:

* When taking on work for the sprint, allocate a portion of each day to release management duties - particular as the end of the sprint nears.
* Take some time a day or two before tagging is scheduled to reach out to individual team members to check-in on in-progress or to-do work items. This might result in you taking on additional work performing reviews or reaching out to the appropriate people.
    * Things to consider asking:
        * Are there any tasks that need to be in the train? Are any of them in jeopardy?
        * Is there anything I can do to help keep things moving?



## Releasing Code

1. Release ownership is confirmed during the sprint kick-off team meeting.

1. The pre-flight checklist:

    1. Ensure there are no critical patches for this tag that haven't landed yet
    1. Ensure any previous point releases have been merged back into `main`
    1. Update the section in the [deployment doc][deployment-doc] for the Train you are tagging
    1. Ensure you have appropriate QA signoffs
       * Not applicable for `main` -> `stage`
    1. Ensure you don't have any modified files or code laying around before you start the tag
    1. Ensure you have the latest from `main`, including tags. If `git fetch [remote]` doesn't reflect the latest tag, run `git fetch [remote] --tags`.

**The release script expects the git origin to be unchanged from the default.**  If you've modified your git remotes you will get confusing output here and might mess things up.  If in doubt, check out a new copy of FxA (eg. `git clone git@github.com:mozilla/fxa.git fxa.tagging` and do all your tagging there.

**If you're tagging in a newly cloned repo, ensure your commits will be GPG signed.** Run `git config --list` and verify you see `commit.gpgsign=true`. If this is not already set globally, run `git config --global commit.gpgsign true`.

1. Run [release.sh][release.sh] from the root of the repository.  Make sure there are no errors in the output.

1. Do some manual checks in the new train branch to make sure the generated tags are sane:

    1. Do the changelogs match expectations from `git log`?
    1. Have all the version strings been updated?
    1. Does the diff from `origin/main` (or `origin/train-xxx` if it’s a point release) look correct?

1. The release script will print some commands to run to push the train branch to the server.  **It's best to copy and paste these so you don't mix them up.**

1. The release script will also print a URL which you can use to open a PR to merge the train branch back into the main branch

1. Finally, the release script will print out a bug template.  Copy that template and open a deployment bug in bugzilla under `Cloud Services :: Operations: Deployment Requests` ([example][example-deployment-bug]). Remember to include:

    1. Notes from the deploy doc, particularly any server side changes that need to happen as part of this deployment.
    1. Links to the needs:qa label on GitHub.
    1. Links to the release tag on GitHub.
    1. Links to pertinent changelogs.

#### Operations staff will take it from there…
1. Ensure that any configuration changes noted in the deployment bug land in [cloudops-deployment][cloudops-deployment].

1. Run any outstanding database migrations.  These are applied automatically for `dev` and `stage` but are reviewed manually for production since we may need to take care with the changes to avoid slow queries.  The migrations should be included in the [deployment doc][deployment-doc].

1. Build fxa-auth, fxa-content, fxa-oauth, fxa-profile, fxa-verifier in stage on Jenkins using git commit from cloudops-deployment PR and docker images referenced in deploy bug

1. Request QA on stage (by posting in the bug)

    1. If major issues are found, a new patch is made and we’re back to step 3, running `release.sh patch`

        1. This command assumes that the relevant commit has been merged into the appropriate train branch. It bumps the minor rev on the last tag it finds in the tree from HEAD, so also requires that you checkout the appropriate train branch locally.

1. Deploy fxa-* to production

1. Initial deployment bug is closed

### Special Cases

#### Releasing Icons

All product icons live in a dedicated `assets` directory in the fxa repo. This directory is independent of individual packages in the monorepo because it doesn't need to be wrapped up in any particular container, and these icons may be used across different servers.

The `assets` directory is uploaded manually to the FxA CDN at https://accounts-static.cdn.mozilla.net as part of the release process. Subdirectories map directly to paths under the CDN domain: content in `assets/foo` maps to https://accounts-static.cdn.mozilla.net/foo.

The Stripe product icons live in `assets/product-icons`.

It's fine to create other subdirectories for new collections of assets as needed.

The release script for static assets is `_scripts/upload_assets_to_cdn.sh`. It semi-automates pushing the icons to the CDN, assuming the user has the correct credentials / env vars set in their terminal session.

Icons and other assets are normally deployed with every release. If icons need to be deployed outside the regular release process, just ask ops to run the upload script.

## FAQ

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

## Merging and Branching Strategies

### The Happy Path: A regular release

![A simplified merging diagram](../assets/fxa-release1.png)

During a regular release, running `release.sh` will create an appropriately named branch, update a few files like the Changelogs, and create a tag.  The Release Owner will push the branch to github and open a pull request back to `main`.

An example of commands to run for a release are:
```bash
git checkout main
git pull
./release.sh
# Follow the instructions printed
```

### A Patch Release

![A patch release diagram](../assets/fxa-release4.png)

A patch release is used between official releases.  For example, a regression discovered midway through a sprint that can't wait for a normal release cycle would be pushed to production earlier through this process.

In the scenario above, a regular release happened and `v1.100.0` was tagged and pushed to production.  Later, to fix a regression, a patch was landed *directly on the branch* rather than on `main`.  `release.sh patch` was run and `v1.100.1` was tagged.  Four more commits landed on the branch and `release.sh patch` tagged a `v1.100.2`.  In this scenario there were two patch releases in addition to the regular release at the end of the sprint.

An example of commands to run for a patch release are:
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

### Another Option for a Patch Release

![A alternative patch release diagram](../assets/fxa-release5.png)

An alternative to the Patch Release described above would be to use an additional branch.  This would allow you to test complex changes without affecting the current release branch.

In the scenario above, a regular release occurs.  Then it's determined that two patches which landed on main earlier in the cycle are critical to be live now.  They are cherry-picked to an uplift branch, tested, and then merged back to the regular release branch.  At that point `release.sh patch` will do the regular updates.

An example of commands to run for this option are:
```bash
git checkout main
git pull
git checkout train-100
git pull
git branch train-100-uplift
git checkout train-100-uplift
git cherry-pick <commit1>
git cherry-pick <commit2>
(repeat as needed)
git log  # Verify you picked what you wanted to
git push origin train-100-uplift
# On GitHub:
# 1) make a Pull Request for train-100-uplift to merge into train-100
# 2) Ask for review
# 3) Wait for CI to pass ✅
# 4) Merge the Pull Request
git checkout train-100
git pull
./release.sh patch
# Follow the instructions printed
```

Git is a flexible tool and there are other options if other scenarios arise.  Don't hesitate to get in touch with your team to talk through the best courses of action.

### A Security Release

![Diagram showing a security release](../assets/fxa-release3.png)

A security release will make use of the `fxa-private` repository.  This diagram illustates an important security patch being pushed live midway through sprint 100.  Firstly, we need to bring `fxa-private` up to speed since it probably hasn't been used in a while.

```bash
git clone git@github.com:mozilla/fxa-private.git
cd fxa-private
git remote add fxa https://github.com/mozilla/fxa.git
git fetch fxa --tags
git merge v0.100.0   # Replace this with whatever tag is currently live
```

Next, make a patch for whatever needs fixing and pull request against `fxa-private`.  The patch is reviewed as normal and lands on `fxa-private`.

Operations is involved at this point to deploy to production directly from `fxa-private` so the patch is never seen before it's live.

Once the fix is verified in production, the patch is cherry-picked or merged back to `fxa`.

## Temporary stage deploys

If you are working on something that you wish to test out in a release environment before it is officially merged into `main` you might consider a temporary deploy to stage.

To do so, start by branching off the most recent train branch. Don't branch off `main` so you're not introducing changes merged after the official train was deployed.

Commit your changes, tag them, and push. Because you're pushing a tag it will trigger a build workflow in CircleCI. Keep an eye on the `deploy-packages` job.

Once the images have been built you can ping someone from Ops in Slack to selectively deploy servers your changes occurred in (e.g. if you only change code in `fxa-auth-server`, only the auth server needs to be deployed).

Some things to keep in mind:

- This is a temporary deploy. Your changes will be reverted when the next official stage train tag occurs, or if someone else needs to perform this process.
- We have relying parties that depend on stage for their own testing, so try not to break things with your temporary code. If you think this is a possibility please consider pinging QA in Slack so they can perform tests as needed.


[cloudops-deployment]: https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa
[deployment-doc]: https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit
[example-deployment-bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1575233
[release.sh]: https://github.com/mozilla/fxa/blob/main/release.sh
