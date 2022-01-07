---
title: GitHub Strategies
---

# Groups & Permissions
Firefox Accounts has a history of using [too?] many repositories on GitHub.
Over many years this means important repositories can be neglected.
Additionally, we need to maintain proper access controls to all of the
repositories in a world where priorities shift quickly and often.

To address this, our GitHub strategy takes advantage of Github’s nested teams.
By having groups with progressively tighter access controls we can be sure we
are addressing all of the appropriate repositories because permissions are
inherited.  We have a simple hierarchy:

* Firstly, no team.  You don’t need to be in an FxA team to open or comment on
issues and pull requests.

* **fxa-community**
  * Read access
  * This essentially collects all of our repositories in one place
  * Being in this group means a person can be assigned issues
  * All repositories that this group has access to are *read only*
  * **fxa-write**
    * A sub-team of fxa-community
    * All repositories that this group has access to are *read/write*
    * If you're on this team you are likely employed at Mozilla
    * **fxa-devs**
      * Sub-team of **fxa-write**
      * Used for requesting reviews.  If you work in specific areas of FxA and
        don’t want to be pinged about general reviews you probably want write
        access but not on this team.
      * Required to be in this team to push to production (enforced on github)
    * Occasionally other teams will be added here as well, for example, if
      we're doing an internship program or working with external teams.
    * **fxa-admins**
      * Sub-team of **fxa-write**
      * This group has *admin access* to all repositories.
      * If you're in this group you are employed at Mozilla and you probably
        work with FxA day-to-day.

## fxa-archives

There is another team called **fxa-archives**.  It holds many old archived
repositories that FxA created and no longer uses.  It’s around to collect that
historical context and keep the archived repositories out of the way while we
do day-to-day work.

