---
id: release-process
title: Release Process
sidebar_label: Release Process
---

## Releasing Code

1. A release owner is delegated to follow the process below and work with the team to tie up any loose ends.  As of this writing, it's a volunteer chosen in our weekly team meeting.

1. The pre-flight checklist:

    1. Ensure there are no critical patches for this tag that haven't landed yet
    1. Update the section in the [deployment doc][deployment-doc] for the Train you are tagging
    1. Ensure you have appropriate QA signoffs
    1. Ensure you don't have any modified files or code laying around before you start the tag

The release script expects the git origin to be unchanged from the default.  If you've modified your git remotes you will get confusing output here and might mess things up.  If in doubt, check out a new copy of FxA (eg. `git clone git@github.com:mozilla/fxa.git fxa.tagging` and do all your tagging there.

1. Run [release.sh][release.sh] from the root of the repository.  Make sure there are no errors in the output.

1. Do some manual checks to make sure the generated tags are sane:

    1. Do the changelogs match expectations from `git log`?
    1. Have all the version strings been updated?
    1. Does the diff from `origin/master` (or `origin/train-xxx` if it’s a point release) look correct?
    1. Does the diff between the public and private tags look correct?

1. The release script will print some commands to run to push the public and private train branches to the remotes.  **It's best to copy and paste these so you don't mix them up.**

1. The release script will also print some URLs which you can use to open PRs to merge the train branches back to their respective master branches

1. Finally, the release script will also print out a bug template.  Copy that template and open a deployment bug in bugzilla under `Cloud Services :: Operations: Deployment Requests` ([example][example-deployment-bug]). Remember to include:

    1. Notes from the deploy doc, particularly any server side changes that
       need to happen as part of this deployment.
    1. Links to the needs:qa labels on GitHub.
    1. Links to the release tags on GitHub.
    1. Links to pertinent changelogs.
    1. Links to Circle builds that push to DockerHub.

#### Operations staff will take it from there…
1. Ensure that any configuration changes noted in the deployment bug land in [cloudops-deployment][cloudops-deployment].

1. Run any outstanding database migrations.  These are applied automatically for `dev` and `stage` but are reviewed manually for production since we may need to take care with the changes to avoid slow queries.  The migrations should be included in the [deployment doc][deployment-doc].

1. Build fxa-auth, fxa-content, fxa-oauth, fxa-profile, fxa-verifier in stage on Jenkins using git commit from cloudops-deployment PR and docker images referenced in deploy bug

1. Ensure that TeamCity tests are passing

1. Request QA on stage

    1. If major issues are found, a new patch is made and we’re back to step 3, running `release.sh patch`

        1. This command assumes that the relevant commit has been merged into the appropriate train branch. It bumps the minor rev on the last tag it finds in the tree from HEAD, so also requires that you checkout the appropriate train branch locally.

1. Deploy fxa-* to production

1. Initial deployment bug is closed

## FAQ

#### How are point releases (mid-sprint releases) handled?
Sometimes we need to push code out of our normal cycle.  These are point releases (eg. If Train 175 was our last release, this would be Train 175.1).  These follow the same process as above except instead of running `release.sh` you'll run `release.sh patch`.  Often the regular train's release bug can be re-used as well.  If you're doing an off-cycle release you should be communicating with the Engineering and Operations teams since it's, by definition, out of the normal flow.

### What if the merge messes up the changelog?

After merging but before pushing, you should check the changelog to make sure
that the expected versions are listed and they're in the right order.
If any are missing or the order is wrong, manually edit the changelog
so that it makes sense, using the commit summaries from `git log --graph --oneline`
to fill in any blanks as necessary.

Then `git add` those changes and squash them into the preceding merge commit
using `git commit --amend`. Now you can push and the merged changelog will make sense.

### What if I already pushed a fix to `master` and it needs to be uplifted to an earlier train?

In this case, it's okay to use `git cherry-pick` because that's the only way to get the fix
into the earlier train. However, after tagging and pushing the earlier release,
you should still merge the train branch back to `master` so that future changelogs include the new release.

### What if there are two separate train branches containing parallel updates?

In this case, the easiest way to keep the changelogs complete
and in the appropriate version order, is to:

0. Merge from the earlier train branch into the later one.
   Fix up the changelog if it needs it and then push the train branch.

0. Now merge from the later train branch into `master`.
   Again, remember to fix up the changelog before pushing
   if required.



[cloudops-deployment]: https://github.com/mozilla-services/cloudops-deployment/tree/master/projects/fxa
[deployment-doc]: https://docs.google.com/document/d/1lc5T1ZvQZlhXY6j1l_VMeQT9rs1mN7yYIcHbRPR2IbQ/edit
[example-deployment-bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1575233
[release.sh]: https://github.com/mozilla/fxa/blob/master/release.sh
