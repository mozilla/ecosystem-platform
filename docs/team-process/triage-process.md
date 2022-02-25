---
title: Triage Owner Duties
---

## What is a Triage Owner?

Triage owners are the designated engineers, one from FxA and one from SubPlat, that have a primary responsibility of hosting scheduled weekly meetings to review, assess, and prioritize new issues as a team, alongside other secondary responsibilities. Jira is the canonical source of truth for how we track our own work, but bugs may come in through several other systems that have their own requirements.

Triage owners rotate throughout the team, and at the time of writing the triage ownership is assigned in our sprint planning meetings. The goals of our triage process and triage rotation are:

* That triaging issues, watching Sentry, managing dependencies, and understanding general user sentiment/feedback is a shared team responsibility instead of a burden on 1 or 2 engineers
* Knowledge sharing of different areas - a triage owner may not be the expert on a topic or issue that comes up, and would rely on team input or reach out for help and learn from the process
* Users stay top-of-mind with us frequently triaging filed issues across Jira (Github), Bugzilla, and Stripe, as well as looking out for contributor PRs and assisting in Matrix
* Ensure new issues are looked at on at least a weekly basis and don't pile up for the next triage owner

## I am the Triage Owner: How should I plan my Sprint?

When taking on work for the sprint, consider taking on around 50% less than usual in order to allocate a portion of each day to triage ownership duties. If you're in the middle of high priority feature work, fill your availability with that work. Otherwise, favor taking on a high priority maintenance item(s).

:::tip
If you're new to owning triage, make sure you have access to Bugzilla (FxA) or Stripe (SubPlat). Also, set up your VPN ([instructions are on Mana][mana-vpn]) so you can access the FxA Admin Panel, and request a license from the service desk. [See what LDAP groups you must be in][bugzilla-common-scenarios-ldap] to access the Admin Panel.
:::

## What are the Triage Owner Responsibilities?

At a high level, the triage owner is responsible for:

* Hosting the weekly triage meeting
  * Triaging any new issues in Jira as a team
  * Triaging any new issues in Sentry as a team
  * If SubPlat triage owner, triage new issues in Stripe as a team
* If FxA triage owner, triage new issues in FxA Bugzilla near-daily (as a team if there is time in the triage meeting)
* Checking if there's any PRs, from team members or contributors, that don't have a reviewer, that you can help move along
* Helping with Dependabot PRs
* Assisting with any high priority bugs that come up during the sprint
* Hanging out in the #fxa Matrix room

In all cases, a call needs to be made about the urgency of new issues. It’s fine to not be sure and to rely on the team's general consensus, either in the triage meeting or async in Slack.

:::note
If someone reports an error, issue, work request etc. to our team in Slack, the first person to see and respond should file a bug in Jira and add the link to the Slack conversation. It will then be triaged normally in the triage meeting.
:::

## Host the Triage Meeting

FxA and SubPlat have separate triage meetings which are optional for team members but required for triage owners which rotate on a weekly basis. If you’re the owner, you’ll typically share your window in Zoom with the team while going through Jira, Sentry, and Bugzilla (FxA only) or Stripe (SubPlat only) if there’s time, and talk through issues and decisions as a group.

The most up-to-date links can be found in the triage meeting calendar invite. You may want to take a few minutes prior to the meeting to pull the links up to get an idea of what you’ll be discussing and to make sure you don’t need to re-authenticate.

### Jira

Go to the Backlog view, collapse the “To Do” section, and scroll all the way down to the “Backlog” section to see untriaged issues.  Note there are two filters, _Not Subscription Platform_ and _Subscription Platform_, that can be helpful for targeting issues for these teams.

You’ll then look at each issue — though if you’re on the FxA team and the issue is one affecting SubPlat (or vice-versa), leave it as-is since it’ll be triaged in the associated triage meeting  — and do the following:

* **Check that the issue is clear and ready to be worked on.** If more info or context is needed that an engineer in the triage meeting can provide, either leave a summary comment of what’s stated (if it’s quick) or ask them to comment on it, and otherwise, add the appropriate “needs” label (e.g. `needsdiscussion`, `needslegal`, `needsproduct`, `needsux`) and/or @ mention someone who may be able to answer pending questions. If more info is needed and the issue seems high priority, consider pinging someone directly about the issue after triage completes.
* **Make sure the issue type is correct.** The default when filing in Jira or from GitHub is type “task” but it might need to be changed to “spike” if it’s a research task or work breakdown task, or “bug” in which case you will want to fill out the “Found in” (environment) and “[Severity][bug-severity]” (S1 is highest, S4 is lowest) fields.
* **Add an initial estimated number of story points** if someone on the call can [estimate][point-estimation].
* **If applicable, add the appropriate epic, labels, and/or issue links.** It’s uncommon for a new issue in triage to lack an epic if it should be associated with one, but it’s good to be aware of what epics exist and what the roadmap looks like. Some common labels to consider using are `maintenance` and  `good-first-issue`, but be sure to check out [labels we use][labels-we-use] to be aware of others. Issue links create a link between issues and can be “blocked by X issue,” “relates to X issue,” and more.
* **Move the issue out of the backlog section.** If the issue seems high priority or someone on the call asks to be assigned, it might belong in the current or following sprint (update the “sprint” field if so), or at the top of the “to do” list. Either way, drag and drop the task up and out of the backlog section (or manually change the status and refresh) and the issue status will change from “new” to “to do”.

### Sentry

We use Sentry to capture errors that occur across the entire stack. We should monitor our production instances most closely, but also keep an eye out on staging instances for new issues exposed by QA. There are many projects in the FxA group on Sentry and while it’s always helpful to poke through more than what’s listed here, we generally check the following deployments (check the triage calendar invite for links):

* `fxa-auth-prod` (FxA and SubPlat)
* `fxa-content-server-prod` (FxA - this covers `fxa-content-server` and `fxa-settings`)
* `fxa-graphql-prod` (FxA)
* `fxa-content-client-prod` (FxA)
* `fxa-payments-prod` (SubPlat)

When you’re looking at new issues, check that there’s not already a comment or linked issue that might give you more context for it and if there’s discussion in the triage meeting, consider leaving a comment on the issue in Sentry.

Sometimes, errors come up that seem unlikely to come up again or that we’d want to look at later if it persists. You can check “ignore until...” and choose an appropriate option. If you notice a new problem since a previous deployment or an issue that affects a lot of users through a lot of events, it’s very likely worth filing an issue for. File an issue with a link to the Sentry error and (likely) add the `maintenance` label in Jira, and then link it in Sentry via the “Link Github Issues” on the right-hand side.

If you’re finishing Sentry triage by yourself and aren’t sure about an issue, feel free to ask the team, and/or go ahead and file an issue for it. It’s fine to timebox yourself, though, there’s a lot of issues that come in and we only have so much time to evaluate and fix issues.

### Stripe Triage (Skip for FxA)

Stripe issues are currently triaged twice a week - once in the team triage meeting, and another time async. 

[TODO: better document this section, FXA-4271]

## Bugzilla (Skip for SubPlat)

If there's time left in the FxA triage meeting, Bugzilla can be looked at as a team that day. Ideally, the triage owner will check Bugzilla every day on their own.

Users file issues in Bugzilla for various reasons, the most common that we handle in triage being helping users access their account. Check [Bugzilla FxA][bugzilla-fxa] and [Bugzilla Cloud Services FxA][bugzilla-fxa-cloud] and check out the newest issues, as well as the newest with activity by clicking on “Updated on.” Look at new issues filed, but also check if you can mark previous issues as “resolved”. When you respond to an issue, consider assigning yourself to the bug.

If a Bugzilla bug includes a user's email address or any PII (personal identifiable information) in the bug description, then do the following:

* Click the “edit bug” button
* Scroll down to “Security (public)” 
* Check the box "Confidential Mozilla Employee Bug (non-security)" and save

This is to protect their email address from being on a publicly accessible link and users will be able to see their own issues even if they’re marked confidential.

⭐️ Many Bugzilla tickets we triage from our users create tickets for similar reasons. Check out the [FxA Bugzilla Common Scenarios & Responses doc][bugzilla-common-scenarios] for examples of typical user requests and our response. If you come across a scenario we may see again in the future, please document it there for future reference.

:::tip
Sometimes all a user needs to resolve their issue, for example, and depending on what they report, is the date they enabled 2FA on their account so they can search their files to find saved recovery codes. You might consider providing users relevant info from the Admin Panel if there's nothing we can do on our end in case it rings any bells for them.
:::

If the reported bug is around an email bounce account block and you successfully clear it in the Admin Panel, go ahead and close the bug after you comment back. Many users don't report back after they've successfully logged in after being unblocked.

You may need to file an issue in Jira for bugs in Bugzilla to surface issues to the team that would require changes in our codebase.

If you see a bug filed requesting [OAuth client details][oauth-integration], post in the FxA team Slack channel. Reference the bug, and bring it to the attention of devops.

## Pull Requests

The FxA and SubPlat team typically reviews [pull requests][fxa-prs] and merges dependabot PRs without having a specified owner for those tasks, but as triage owner you should do what you can to move both of these along.

If there's an open, unreviewed or unassigned pull request, consider reviewing it if you can. If a PR has been opened by a contributor, either review it or request someone else to review it. If a PR has been hanging around for a while and it's not clear why, consider investigating in case there's a blocker you can help with or a hold for a specific reason that could be noted in a comment in the PR.

**If you're the FxA triage owner,** check for PRs in the [ecosystem-docs repo][ecosystem-prs].

### Dependency Management

FxA uses Dependabot to automate dependency updates for us. Every day, it checks our dependency files for outdated requirements and opens individual PRs for any it finds with a daily limit we set. Our Dependabot config lives in [`dependabot.yml`][dependabot-yml].

You'll see an additional commit from "Bananafox" on Dependabot PRs. Bananafox is a bot we made that commits a `yarn.lock` update automatically for us on any PR if a package dependency changed without the corresponding `yarn.lock` update because [Dependabot doesn't support Yarn 2][dependabot-yarn2] yet.

:::tip
Keep in mind that Dependabot duty is shared between the FxA triage owner and the SubPlat triage owner. Try to move these PRs along at least once or twice a week, but also be sure to timebox yourself.
:::

If CI is green and the files changed look correct, approve the Dependabot PR and use the “squash and merge” option to combine bot commits so the package upgrades are easier to revert if problems arise. If you need Dependabot to rebase the change, comment on the PR with `@dependabot recreate`. We can't use `@dependabot rebase` because the PR is modified by Bananafox.

#### Failed Dependabot PRs

If a Dependabot PR fails CI, investigate the failure. If it was a flaky test failure, rerun CI from failed. If the failure is legit and it looks like it can be resolved quickly or easily, consider checking into the Dependabot branch, fixing what caused the failure, and pushing the fix to the PR. If the needed change was anything other than a small tweak, request a review from a teammate to double check your work before merging.

If there are many failures and/or it's not feasible to fix the failures at the moment, either file a Jira maintenance ticket for it if the update seems important and/or close the PR. Dependabot will attempt to update the dependency at its next release.

#### Security Warnings

Dependabot will produce [Security Alerts][dependabot-security-alerts] for packages that have registered [CVE][wiki-CVE] numbers that cannot be resolved automatically. At least once during your triage ownership rotation, check these alerts to see if there are any vulnerabilities identified, especially those marked as as critical or high severity. You may also choose review these as a team in the triage meeting if you wish.

Be sure to timebox yourself on these fixes, but try to manually upgrade the dependency to the patched version shown in the alert. It may be good to collaborate with the other triage owner to either make sure you're not working on fixing the same vulnerability, or to pair on a fix. Your commit message may begin with something similar to `chore(deps): Security <list affected packages>`.

## Assist with New High Priority Bugs

Sometimes a blocking or major bug is identified by QA that needs to be patched ASAP. When possible, be available to pick up the bug to enable other team members to maintain focus on project work.

## Hang Out in the #fxa Matrix Room

Many teams at Mozilla use Matrix, also known as IRC or Element, for communication. While the FxA and SubPlat team primarily communicates via Slack, we link to [our Matrix chat room][matrix-fxa] in our documentation as a way to contact us, and sometimes contributors and other folks reach out to us with questions through it.

Triage owners should occasionally check to see if they can answer any questions asked in the #fxa Matrix room.

[mana-vpn]: https://mana.mozilla.org/wiki/pages/viewpage.action?spaceKey=SD&title=VPN
[bugzilla-common-scenarios]: https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#
[bugzilla-common-scenarios-ldap]: https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#bookmark=id.uoiqp21qfgqx
[bugzilla-fxa]: https://bugzilla.mozilla.org/buglist.cgi?cmdtype=dorem&remaction=run&namedcmd=Firefox%3A%3AFirefoxAccounts&sharer_id=177149&list_id=15894251
[bugzilla-fxa-cloud]: https://bugzilla.mozilla.org/buglist.cgi?cmdtype=dorem&remaction=run&namedcmd=CloudServices%3A%3AServer%3AFirefoxAccounts&sharer_id=177149&list_id=15894255
[bug-severity]: https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity
[labels-we-use]: ./development-process.md#labels-we-use
[point-estimation]: ./development-process.md#estimation-and-point-values
[oauth-integration]: ../platform/firefox-accounts/integrating-with-fxa.md#oauth-integration
[fxa-prs]: https://github.com/mozilla/fxa/pulls
[ecosystem-prs]: https://github.com/mozilla/ecosystem-platform/pulls
[dependabot-yml]: https://github.com/mozilla/fxa/blob/main/.github/dependabot.yml
[dependabot-yarn2]: https://github.com/dependabot/dependabot-core/issues/1297
[dependabot-security-alerts]: https://github.com/mozilla/fxa/security/dependabot
[wiki-cve]: https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures
[matrix-fxa]: https://chat.mozilla.org/#/room/#fxa:mozilla.org
