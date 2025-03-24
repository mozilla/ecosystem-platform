---
title: Triage Owner Duties
---
_Last update Mar 15, 2025_

## What is a Triage Owner?

A triage owner is the designated engineer that has the primary responsibility of hosting the scheduled weekly meetings, in which we review, assess, and prioritize new issues as a team, as well as other responsibilities. While Jira is the canonical source of truth for how we track our own work, bugs may come in through several other systems that have their own requirements.

Triage owners rotate throughout the team. At the time of writing, triage ownership is assigned during sprint planning meetings. The goals of our triage process and triage rotation are:

- Share team responsibility of triaging issues, watching Sentry, managing dependencies, and understanding general user sentiment/feedback
- Knowledge share - a triage owner may not be the expert on a topic or issue that comes up, and would rely on team input or reach out for help and learn from the process
- Ensure new issues are assessed on a weekly basis and don't pile up for the next triage owner
- Keep ongoing bugs and issues as well as contributor PRs and assistance in Matrix top-of-mind

## I am the Triage Owner: How should I prioritize my Sprint?

:::tip
If you're new to owning triage, make sure you have access to Bugzilla (FxA) or Stripe (SubPlat).

To access the FxA Admin Panel, set up your VPN ([see instructions on Confluence][mana-vpn]) and request to be added to the appropriate [LDAP groups][bugzilla-common-scenarios-ldap].
:::

In general, the triage owner should be consistently checking whether there are new urgent or severe issues throughout the day, and be prepared to switch focus and/or redirect issues.

### FxA

When planning your workload for the sprint, consider taking on around 50% less than usual in order to allocate a portion of each day to triage ownership duties. If you’re in the middle of high priority feature work, fill your availability with that work. Otherwise, favor taking on a high priority maintenance item(s).

### SubPlat

The triage owner should begin each day by checking whether there are any new urgent issues in Jira, Sentry, Stripe, and Grafana, as well as questions in the subscription-platform Slack channel.

If you are currently working on an issue and there are new S1 or S2 issues, re-evaluate whether the new issue(s) should take higher priority.

If there are multiple S1s and S2s of seemingly equal importance and help is needed, inform your manager and the team in the subplat-team channel.

## What are the Triage Owner Responsibilities?

Each team's triage owner is responsible for hosting the weekly triage meeting, in which new issues are triaged as a team.

If necessary, rely on the team's general consensus of the urgency of new issues, either in the triage meeting or async in Slack.

Any issues picked up as Triage Owner which land within a Sprint boundary should be added to that Sprint in Jira. This sets clear expectations on when a ticket is available for testing in Staging and Production across Engineering and QA.

:::note
If an error, issue, work request, etc., is reported to our team in Slack, the first person to see and respond should file a bug in Jira and add the link to the Slack conversation. It will then be triaged normally in the triage meeting.
:::

### FxA

In addition, the FxA triage owner is also responsible for:

- Triaging new issues in [FxA Bugzilla](#bugzilla-fxa-only) (as a team if there is time in the triage meeting)
- Checking if there are any PRs (from team members or contributors) without a reviewer that you can help move along
- Helping fixing and merging Dependabot PRs
- Assisting with any high priority bugs that come up during the sprint
- Hanging out in the #fxa Matrix room

See more details for each of these below. The triage owner should post a daily update in the #fxa-team Slack channel which can be copied and pasted and should only take 5-10 minutes:

:::note[Triage owner daily update]
```
:jira: New tickets in Jira that we should consider moving up in the backlog, or other updates?  
:sentry2: Major spikes or issues in Sentry?  
:grafana-intensifies: Any abnormalities in Grafana? [Handy link 1](https://earthangel-b40313e5.influxcloud.net/d/BeBr8TiIz/fxa-gcp-load-balancers?orgId=1&from=now-3h&to=now&refresh=1m), [handy link 2](https://earthangel-b40313e5.influxcloud.net/d/J81nRFfWz/auth-server?orgId=1&refresh=1m)  
:slack: Anything in #fxa or #fxa-bots that needs #fxa-team attention?
```
:::

:::note[Optionally include these for bonus points]
```
:bugzilla-2023: New major bugs or other updates in Bugzilla?  
:matrix-org: Has anything come up in Matrix?  
:dependabot: Any dependabot updates?
:looker: Any interesting changes on our dashboards?
```
:::

### SubPlat

In addition, the SubPlat triage owner is also responsible for:

- Grooming the Maintenance backlog
- Asynchronous triage activities
- File bugs for concerning Subscriptions-related issues identified in review from Stripe webhook events, Sentry, and Payments success/failure metrics
- Triage new tickets for high priority requests or bugs, picking up the highest priority items as deemed appropriate
- Picking up tickets from the top of the Maintenance and/or Bug backlogs

## Host the Triage Meeting

FxA and SubPlat have separate triage meetings which are hosted by their respective triage owners. To discuss each issue and make decisions as a group, the triage owner will share their screen in Zoom with the team while going through Jira, Sentry, Grafana, Bugzilla (FxA only), and Stripe (SubPlat only).

The most up-to-date links can be found in:

- the triage meeting calendar invite (for FxA), or
- the weekly check-in doc attached to the calendar event 'SubPlat Team & Triage Weekly'

Prior to the meeting, it is recommended to pull up the links to get an idea of what you’ll be discussing and to make sure you don’t need to re-authenticate.

### Jira

In the "FxA & Subscription Platform Triage" Board, select Backlog in the sidebar navigation, and collapse the “To Do” section to see the “Backlog” section for untriaged issues. Note, there is a _Not Subscription Platform_ filter to help target issues.

When reviewing issues, leave tickets as-is if they are not applicable to your team. The following should be reviewed for each ticket:

- **Make sure the issue is clear and ready to be worked on.** If more info or context is needed that an engineer in the triage meeting can provide, either leave a summary comment of what’s stated (if it’s quick) or ask them to comment on it. You can also @-mention those who may be able to answer pending questions. If more info is needed and the issue seems high priority, consider pinging the reporter directly about the issue after the triage meeting.
- **Check that the issue type is correct.** The default type when filing in Jira is “task”. Other types include “spike” (for research task or work breakdown task) and “bug” (in which you will need to fill out the “Found in” (environment) and “[Severity][bug-severity]” (S1 is highest, S4 is lowest) fields).
- **Add an initial estimated number of story points**, see [Estimation and Point Values][point-estimation].
- **Add the appropriate epic, labels, and/or issue links, if applicable.**
  - It’s uncommon for a new issue in triage to lack an epic if it should be associated with one, though it’s good to be aware of existing epics and the roadmap.
  - Add the appropriate labels (e.g. `needs:discussion`, `needs:legal`, `needs:product`, `needs:ux`, or `qa-`). See [labels][labels-we-use] for more.
  - Issue links create a link between issues (e.g., issues can be “blocked by X issue”, “relates to X issue”, and more).
- **Set the Work Category**, see [Feature Engineering, Engineering Excellence, and Operational Excellence][FE_EE_OE].
- **Move the issue out of the NEW status.** If the issue seems high priority, it can either be added to the current or following sprint by updating the “Sprint” field, or moved to the top of the “To Do” list by right-clicking and following the context menu. If someone on the call asks to be assigned, fill out the Assignee field. Finally, update the status from "New" to "To Do".

### Sentry

We use Sentry to capture errors that occur across the entire stack. While we should monitor our production instances most closely, we should also keep an eye out on staging instances for new issues exposed by QA. While there are many projects in the FxA group on Sentry and it’s always helpful to poke through more than what’s listed here, we generally check the following deployments:

- `fxa-auth-prod` (FxA and SubPlat)
- `fxa-content-server-prod` (FxA - this covers `fxa-content-server` and `fxa-settings`)
- `fxa-graphql-prod` (FxA)
- `fxa-content-client-prod` (FxA)
- `fxa-payments-prod` (SubPlat)

When you’re looking at new issues, check that there’s not already a comment or linked issue that might give you more context for it. If there’s discussion in the triage meeting, consider leaving a comment on the issue in Sentry.

Sometimes, errors come up that seem unlikely to come up again or that we’d want to look at later if it persists. You can check “ignore until...” and choose an appropriate option. If you notice a new problem since a previous deployment or an issue that affects a lot of users through a lot of events, it’s very likely worth filing an issue for. You can file an issue directly from Sentry via the menu on the right-hand side.

If you’re triaging Sentry by yourself and aren’t sure about an issue, feel free to ask the team, and/or go ahead and file an issue for it. It’s fine to timebox yourself, though, there’s a lot of issues that come in and we only have so much time to evaluate and fix issues.

### Grafana

SubPlat observes the following Grafana dashboards (see links under Resources/Triage within the SubPlat Weekly Check-in doc attached to the calendar event 'SubPlat Team & Triage Weekly'):

- Auth Server (Subscription Platform section)
- Event Broker
  - If there is any unusual activity, identify the relying parties by looking up the IDs in FxA Admin Panel and inform both teams in the fxa-team channel
- Payments Server
  - Keep an eye on check-ins in `PayPal Processor Cron Job`

### Bugzilla (FxA only)

:::warning
Some longstanding bugzilla bugs have other dependencies.  Exercise some restraint commenting on particularly old bugs as there are likely other considerations at play.  Ask your manager if unsure.
:::

There is no longer much activity in our Bugzilla component so this won't take long. Check [Bugzilla Cloud Services FxA][bugzilla-fxa-cloud] and check out the newest issues, as well as the newest with activity by clicking on “Updated on.” Look at new issues filed, but also check if you can mark previous issues as “resolved”.

If a Bugzilla bug includes a user's email address or any PII (personal identifiable information) in the bug description, then do the following:

- Click the “edit bug” button
- Scroll down to “Security (public)”
- Check the box "Confidential Mozilla Employee Bug (non-security)" and save

This is to protect their email address from being on a publicly accessible link and users will be able to see their own issues even if they’re marked confidential.

:::tip
Bugzilla used to be the suggested route for people needing support (e.g. they were locked out of their account).  We still occasionally get these issues filed in bugzilla.  Please add a comment asking them to contact `support@mozilla.com` and resolving the bug.
:::

You may need to file an issue in Jira for bugs in Bugzilla to surface issues to the team that would require changes in our codebase.

### Stripe Triage (SubPlat only)

Triaging Stripe consists of ensuring that failed webhook event deliveries are successful upon retries in production.

To review the failed webhooks, log into Stripe Dashboard, check that you are in the correct environment (Subscription Platform) and not in Test Mode. Expand the Workbench on the bottom of the screen, select the Webhooks tab and hosted endpoint `https://api.accounts.firefox.com/v1/oauth/subscriptions/stripe/event`. Select Event deliveries and update the Status field to "Failed" to view all of the failed events. In each Delivery attempts section, you should see it returned 200.

If a webhook has not returned 200 upon retry, investigate what may have happened and/or ask for help in the subplat-team channel.

## Pull Requests

The FxA and SubPlat team typically reviews [pull requests][fxa-prs] and merges dependabot PRs without having a specified owner for those tasks. However, as triage owner, you should do what you can to move both of these along.

If there's an open, unreviewed, or unassigned pull request, consider reviewing it if you can. If a PR has been opened by a contributor, either review or request someone else to review it. If a PR has been hanging around for a while and it's not clear why, consider investigating in case there's a blocker you can help with, or a hold for a specific reason that could be noted in a comment in the PR.

**If you're the FxA triage owner,** check for issues, security issues, and PRs in the following repositories:
- https://github.com/mozilla/fxa/
- https://github.com/mozilla/ecosystem-platform/
- https://github.com/mozilla-services/channelserver


### Dependency Management

FxA uses Dependabot to automate dependency updates for us. Every day, it checks our dependency files for outdated requirements and opens individual PRs for any it finds with a daily limit we set. Our Dependabot config lives in [`dependabot.yml`][dependabot-yml].

:::tip
Keep in mind that Dependabot duty is shared between the FxA triage owner and the SubPlat triage owner. Try to move these PRs along at least once or twice a week, but also be sure to timebox yourself.
:::

#### Dependabot PRs that Pass CI

Generally speaking, if CI is green, the dependency is likely fine to merge. However, also take a look at the number shown on the "checks" tab of the PR. If there's less than 4 checks, our CI suite may not have ran on the PR. Comment on it with `@dependabot recreate` to rerun the test suite and make sure `test_pull_request` runs and completes without error.

If CI is green, `test_pull_request` was ran, and none of the files changed looks out of the ordinary, approve the Dependabot PR and merge the pull request. If you need Dependabot to rebase the change, comment on the PR with `@dependabot rebase`.

:::warning
Try not to merge dependency updates if we're planning on tagging a release the same day. If we merge something in and discover a dependency problem with or after the tag, we will need a dot release just to patch the bad dependency upgrade.
:::

#### Failed Dependabot PRs

If a Dependabot PR fails CI, investigate the failure. If it was a flaky test failure, rerun CI from failed. If the failure is legit and it looks like it can be resolved quickly or easily, consider checking into the Dependabot branch, fixing what caused the failure, and pushing the fix to the PR. If the needed change was anything other than a small tweak, request a review from a teammate to double check your work before merging.

If there are many failures and/or it's not feasible to fix the failures at the moment, create a Jira ticket for the package upgrade failure if one doesn’t already exist, set the Work Category to `Engineering Excellence`, give it the label `dependencies`, link to it from the Dependabot PR, comment `@dependabot ignore this major version`, and close the PR. We ignore until the next major version instead of a minor version because the chance that it will fail again is very high, but we want it to remind us again when a dependency has a major upgrade so that the dependency doesn't just get lost in the backlog (plus, wishful thinking that maybe it will magically pass 🤞).

If a ticket has already been filed for a previous failure of the same package and the new failure is because of a Dependabot attempt to upgrade to the new major version, comment on the ticket to note how far behind the dependency is. Consider bringing it up in the next triage meeting - if our backlog is full of needed dependency upgrades, we'll likely find the time to work through at least some of them.

#### Security Warnings

Dependabot will produce [Security Alerts][dependabot-security-alerts] for packages that have registered [CVE][wiki-CVE] numbers that cannot be resolved automatically. At least once during your triage ownership rotation, check these alerts to see if there are any vulnerabilities identified, especially those marked as as critical (or even high) severity. You may also choose to review these as a team in the triage meeting if you wish, and it may be good to collaborate with the other triage owner to either make sure you're not working on fixing the same vulnerability, or to pair on a fix.

If Dependabot thinks it can automatically fix the alert for us, a "Create dependabot security update" button will be present. This is a good clue, as well as a "Dependabot can't update vulnerable dependencies without a lockfile" note, that the upgrade should be simple. You can check what packages are affected by running `yarn why <package name>`. If there's only one or two affected packages, consider trying to manually upgrade the dependency to the patched version shown in the alert.

However, sometimes, security alerts are for deeply nested dependencies. In this case, we use [Yarn resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/). To resolve the security warning:

1. Copy the _patched version_ from the security warning into the "resolutions" section of our root-level `package.json`, example:

```
"resolutions": {
  "postcss": "^7.0.36",
```

1. Update the `yarn.lock` file by running `yarn install`
1. Commit your changes in a PR titled `chore(deps): Upgrade <list affected packages>`
1. Create a PR and request review
1. If our CI suite passes, it probably means the dependency resolution is good to merge. However, keep in mind that like other dependency upgrades, something may break, and the dependency upgrade may need to be reverted.

If the dependency needs to be reverted or if CI fails after the PR is created and it's not feasible to fix the failures at the moment, you may be able to determine that certain vulnerabilities don't affect FxA in production anyway, like if a dependency is a dev dependency or something ran at build-time. These kinds of alerts can usually be dismissed. This is also a good time to evaluate if we _need_ a dependency - maybe the fix is to uninstall the dependency if we use it sparingly, especially if it's an old and outdated package, rather than spend time upgrading it.

Otherwise, [file a security issue](development-process#filing-security-issues) for each critical issue.

## Assist with New High Priority Bugs

Sometimes a blocking or major bug is identified by QA that needs to be patched ASAP. When possible, be available to pick up the bug to enable other team members to maintain focus on project work.

## Hang Out in the #fxa Matrix Room

While the FxA and SubPlat teams primarily communicate via Slack, we link to [our Matrix chat room][matrix-fxa] in our documentation as a way to contact us, and sometimes contributors and other folks reach out to us with questions through it.

Triage owners should occasionally check to see if they can answer any questions asked in the #fxa Matrix room.

[mana-vpn]: https://mana.mozilla.org/wiki/pages/viewpage.action?spaceKey=SD&title=VPN
[bugzilla-common-scenarios]: https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#
[bugzilla-common-scenarios-ldap]: https://docs.google.com/document/d/1z_Ob6z517iVzBEk-RUqJitszP8M982uIUvKJIN0P_UM/edit#bookmark=id.uoiqp21qfgqx
[bugzilla-fxa-cloud]: https://bugzilla.mozilla.org/buglist.cgi?cmdtype=dorem&remaction=run&namedcmd=CloudServices%3A%3AServer%3AFirefoxAccounts&sharer_id=177149&list_id=15894255
[bug-severity]: https://wiki.mozilla.org/BMO/UserGuide/BugFields#bug_severity
[labels-we-use]: ./development-process.md#labels-we-use
[point-estimation]: ./development-process.md#estimation-and-point-values
[oauth-integration]: ../../relying-parties/tutorials/integrating-with-fxa.md#oauth-integration
[fxa-prs]: https://github.com/mozilla/fxa/pulls
[ecosystem-prs]: https://github.com/mozilla/ecosystem-platform/pulls
[dependabot-yml]: https://github.com/mozilla/fxa/blob/main/.github/dependabot.yml
[dependabot-yarn2]: https://github.com/dependabot/dependabot-core/issues/1297
[dependabot-security-alerts]: https://github.com/mozilla/fxa/security/dependabot
[wiki-cve]: https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures
[matrix-fxa]: https://chat.mozilla.org/#/room/#fxa:mozilla.org
[email-bounce-types]: ../emails.md#bounce-types
[FE_EE_OE]: https://mozilla-hub.atlassian.net/wiki/spaces/IP/pages/1397817345/Feature+Engineering+Engineering+Excellence+and+Operational+Excellence