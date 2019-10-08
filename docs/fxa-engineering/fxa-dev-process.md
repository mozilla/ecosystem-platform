---
id: fxa-dev-process
title: Development Process
sidebar_label: Development Process
---

We develop and deploy on a two-week cycle. Every two weeks we cut a release "train" that goes through [deployment to stage and into production](release-process.md).

## Product Planning

Product-level feature planning is currently managed via `Epics` in Zenhub.

## Issue management

Most of our work takes place on [GitHub][fxa-repository].
We use labels and milestones to keep things organised.

Issue status is reflected by the following:

* The milestone indicates *when* we are working on the issue.
* The issue itself will have updates indicating *what* the next action is.
* The assignee, if any, indicates *who* is responsible for that action.

### Milestones

When we start working on a new sprint, we create a corresponding
[milestone in github][fxa-milestones] and fill it with issues that 
should be closed in that sprint.

### Labels

We use labels to help categorize and identify issues. The label taxonomy is:

##### Bug Type/Status:
* **status:unconfirmed**
* **status:bug**
* **status:enhancement**
* **status:wontfix**
* **status:invalid**
* **status:duplicate**
* **Status:worksforme**
* **status:blocker**

##### Categories:
* **code quality**
* **perf**
* **security**
* **documentation**

##### Contributors:
* **good first issue**
* **help wanted**
* **help wanted (taken)** Since you can't assign an issue to someone who isn't in the organization

##### Skill labels should accompany any good first issue label:
* **skill:css**
* **skill:html**
* **skill:js**
* **skill:rust**
* **skill:database**

##### Blocked on another person/team/decision:
* **needs:discussion** There is an open question blocking this issue from moving forward
* **needs:legal**
* **needs:ops**
* **needs:product** Any product questions including missing content or copy
* **needs:qa**
* **needs:security**
* **needs:visuals**  UI is in place but doesn’t look right
* **needs:ux** Questions about flow, or user experience

##### Priority labels are based on [Bugzilla's triage process][bugzilla-triage-process]:
* **p1**
* **p2**
* **p3**
* **p5**

##### Project Tracking:
* **Epic** ZenHub uses this to track epics

### Bug Triage

We triage issues at least every week in our meetings.  Depending on the 
size of our backlog, we may schedule other meetings focused solely on triaging.

## Checkin Meetings

The team meets regularly to stay in sync about development status and ensure
nothing is falling through the cracks.  During meetings we take notes and
afterward we send a summary of each meeting to an appropriate mailing list.

Please see our [project calendar][fxa-calendar] for details.

## Code Review

This project is production Mozilla code and subject to our [engineering practices and quality standards][moz-standards].  Every patch must be [reviewed][moz-code-review] by an owner or peer of the [Firefox Accounts module][fxa-module].

### Review Checklist

Here are some handy questions and things to consider when reviewing code for Firefox Accounts:

* How will we tell if this change is successful?
    * If it's fixing a bug, have we introduced tests to ensure the bug stays fixed?
    * If it's a feature, do we have metrics to tell whether it's providing value?
    * Should it be A/B tested to check whether it's a good idea at all?
* Did test coverage increase, or at least stay the same?
    * We need a pretty good reason to merge code that decreases test coverage...
    * If it's hard to answer this question, consider adding a test that tests the test coverage.
* Does it introduce new user-facing strings?
    * These strings will need to go through our localization process.  Check that the
      templates in which they're defined are covered by our string extraction scripts.
    * The code must be merged before the string-extraction date for that development cycle.
* Does it store user-provided data?
    * The validation rules should be explicit, documented, and clearly enforced before storage.
* Does it display user-controlled data?
    * It must be appropriately escaped, e.g. htmlescaped before being inserted into web content.
* Does it involve a database schema migration?
    * The changes must be backwards-compatible with the previous deployed version.  This means
      that you can't do something like `ALTER TABLE CHANGE COLUMN` in a single deployment, but
      must split it into two: one to add the new column and start using it, and second to
      drop the now-unused old column.
    * Does it contain any long-running statements that might lock tables during deployment?
    * Can the changes be rolled back without data loss or a service outage?
    * Has the canonical db schema been kept in sync with the patch files?
    * Once merged, please file an Ops bug to track deployment in stage and production.
* Does it alter the public API of a service?
    * Ensure that the chage is backwards compatible.
    * Ensure that it's documented appropriately in the API description.
    * Note whether we should announce it on one or more developer mailing lists.
* Does it add new metrics or logging?
    * Make sure they're documented for future reference.
* Does it conform to the prevailing style of the codebase?
    * If it introduces new files, ensure they're covered by the linter.
    * If you notice a stylistic issue that was *not* detected by the linter,
      consider updating the linter.
* For fixes that are patching a train,
  has the PR been opened against the correct train branch?
    * If the PR is against `master`,
      it is likely that it will mess up
      our change logs and the git history
      when merged.
    * If no appropriate train branch exists,
      one can be created at the appropriate point in history
      and pushed.
      After the patch has been tagged (see below),
      the train branch can then be merged to `master`.
      Commits should not be cherry-picked
      between train branches and `master`.

## Security issues

Since most of our work happens in the open, we need special procedures
for dealing with security-sensitive issues that must be fixed in production
before being made visible to the public.

We use private bugzilla bugs for tracking security-related issues,
because this allows us to manage visibility for other stakeholders at Mozilla
while maintaining confidentiality.

We use private github repos for developing security fixes
and tagging security-related releases.

### Filing security issues

If you believe you have found a security-sensitive issue
with any part of the Firefox Accounts service,
please file it as confidential security bug
in Bugzilla via this link:

* [File a security-sensitive FxA bug][fxa-security-bug]

The Firefox Accounts service is part of Mozilla's [bug bounty program][moz-bug-bounty],
which provides additional guidelines on [reporting security bugs][moz-sec-bugs].

### Making a private point-release

We maintain the following private github repos
that can be used for making security-related point-releases

* https://github.com/mozilla/fxa-content-server-private
* https://github.com/mozilla/fxa-auth-server-private
* https://github.com/mozilla/fxa-auth-db-mysql-private
* https://github.com/mozilla/fxa-customs-server-private
* https://github.com/mozilla/fxa-js-client-private

The recommended procedure for doing so is:

* Check out the private repo, independently from your normal working repo:
  * `git clone git@github.com:mozilla/fxa-auth-server-private`
  * `cd fxa-auth-server-private`
  * N.B: Do not add it
    as a remote on your normal working repo,
    because this increases the risk
    of pushing a private fix to the public repo
    by mistake.
* Add the corresponding public repo as a remote named "public",
  and ensure it's up-to-date:
  * `git remote add public git@github.com:mozilla/fxa-auth-server`
  * `git fetch public`
* Check out the latest release branch and push it to the private repo:
  * `git checkout public/train-XYZ`
  * `git push origin train-XYZ`
* Develop your fix against this as a new branch in the private repo:
  * `git checkout -b train-XYZ-my-security-fix`
  * `git commit -a`
  * git push -u origin train-XYZ-my-security-fix`
* Submit and review the fix as a PR in the private repo,
  targetting the `train-XYZ` branch.
* Tag a point release in the private repo, following the [steps above](#tagging-releases):
  * `git checkout train-XYZ; git pull  # ensure we have the merged PR`
  * `grunt version:patch`
  * `git push`
* Push the tag in order to trigger a CircleCI build:
  * `git push origin v1.XYZ.N`
  * N.B: Do not use `git push --tags`
    as this will not correctly trigger
    the CircleCI build.
* File an issue on the public repo
  as a reminder to uplift the fix
  once it has been deployed to production.

Once the fix has been deployed
and is safe to reveal publicly,
it can be merged back into the public repo
by doing the following:

* Push the private train branch to the public repo,
  as a new branch:
  * `git push public train-XYZ:train-XYZ-uplift`
* Open a PR in the public repo,
  targeting the public `train-XYZ` branch,
  for review and merge.
* Push the tag to the public repo:
  * `git push public v1.XYZ.N`
* Merge the `train-XYZ` branch to master
  following the [usual steps](#tagging-releases).

[bugzilla-triage-process]: https://mozilla.github.io/bug-handling/triage-bugzilla
[fxa-calendar]: https://www.google.com/calendar/embed?src=mozilla.com_urbkla6jvphpk1t8adi5c12kic%40group.calendar.google.com
[fxa-milestones]: https://github.com/mozilla/fxa/milestones
[fxa-module]: https://wiki.mozilla.org/Modules/Other#Firefox_Accounts
[fxa-security-bug]: https://bugzilla.mozilla.org/enter_bug.cgi?product=Cloud%20Services&component=Server:%20Firefox%20Accounts&groups=cloud-services-security
[fxa-repository]: https://github.com/mozilla/fxa
[moz-bug-bounty]: https://www.mozilla.org/security/bug-bounty/
[moz-code-review]: https://developer.mozilla.org/docs/Code_Review_FAQ
[moz-sec-bugs]: https://www.mozilla.org/security/bug-bounty/faq-webapp/#bug-reporting
[moz-standards]: https://developer.mozilla.org/docs/Mozilla/Developer_guide/Committing_Rules_and_Responsibilities