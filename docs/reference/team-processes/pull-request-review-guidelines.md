---
title: Pull Request Reviews
---

## Why we do reviews

- Reduce [code churn](https://www.pluralsight.com/blog/tutorials/code-churn "Code that is rewritten or deleted shortly after being written") and ship completed features faster
- Reduce regressions
  - The better the pull request review, the less likely it is a regression
    will be introduced
- Keep up code quality
- Learn something new
  - Pull request reviews can be a great source of knowledge transfer
- Provides useful documentation and history
  - Q&A or discussions that happen on pull requests serve as a good record
    for why certain decisions were made

## Guidelines

### Pull Request - Creator

#### Before creating the pull request

- Communicate often
  - When necessary, communicate often to clarify requirements,
    ensure there's agreement on implementation approach, etc
  - If requirements change during implementation, in Jira add a
    comment and update the title/description of the ticket
- Write descriptive and consistent variable and function names
- Tests - Update and create as necessary
- Test your changes locally
- Get pull requests up early in the sprint
  - Don't expect pull requests put up later than Tuesday morning before
    sprint end, to get reviewed in time to get merged before sprint end.
- A PR opened late in the sprint, to improve your chances of merging, consider the following
  - Let the reviewer know as soon as possible that it won't be ready until the last minute.
  - Share a WIP as soon as possible.
  - Consider a live review.
  - Mentally prepare that it still may not happen.

#### When creating the pull request

- Clear title and description, following [Git Commit Guidelines](https://github.com/mozilla/fxa/blob/main/CONTRIBUTING.md#git-commit-guidelines)
- Keep pull requests short
- Add the reviewer and notify them on Slack
- Ensure that the `qa+` label is added to the Jira ticket if QA review is needed
- Add Steps To Reproduce (STRs) for tickets requiring QA review and when it helps the reviewer test locally
- Add screenshots for Frontend work
- If necessary, inform impacted parties of the change. QA, FxA, RPs
- Provide helpful notes, or provide non-obvious context
- Add inline comments for areas you would like the reviewer to focus on

### Pull Request - Reviewer

- Start the review within 8 hours of request
  - If you can't start the review within 8 hours, let the assignee know, and if needed
    help find another reviewer
- Consider code complexity
  - Consider the following questions during review. Is the code overly complex? Can
    it be broken up into smaller, more reusable modules?
- Test the changes locally
- Be precise about your comments
- Keep your Ego Out of Code Reviews
- Direct communication
  - Consider scheduling a code review call, or discussing the pull request via Slack DM
  - Ensure to add important notes discussed on calls, back into the pull request
- Do not provide style notes
  - Style notes should be enforced by the linter or style guide. If you would like to
    change a style, create a new pull request to update the linter or style guide
  - [React style guide](/ecosystem-platform/reference/style-guides/react-style-guide)
  - [Node style guide](/ecosystem-platform/reference/style-guides/node-style-guide)
- Look for alternatives before adding new dependencies.  Ideally we gravitate towards a fixed set of high level frameworks.
  - At the very least if a package is updated or added the version should be consistent across all workspaces.
