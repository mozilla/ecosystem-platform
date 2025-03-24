---
title: Work Breakdown
---

## Prerequisites
0. Prior to beginning breaking down an Epic, the Feature Request has been fully
   defined and has been flagged as Ready for Engineering, where "fully defined"
   implies that all User Stories have been identified and documented. This
   allows for a clear understanding of what needs to be delivered to reach
   Feature Complete.
0. You have determined if you need a Technical Specification Document.  Not all
   epics are large enough to justify the effort/time of creating a Technical
   Specification. If the Epic being worked on results in a ‘Yes’ answer to any
   of the following questions, a technical specification is likely warranted.

    *  Does this epic likely include at least 50 Story points worth of effort?
    *  Does the epic result in substantial changes/additions to API’s, server
        architecture, metrics, or security aspects that have not previously
        been discussed and accepted by the team?

## Using a Technical Specification Document
When creating medium to large features (Epics), it is important to clearly
define what changes to the code-base, architecture, API’s, databases,
documentation, metrics, and security may result from these changes. The
importance of this is greatest for medium/large features as they can affect
many aspects of our system. Creating a technical specification to describe
those changes is a medium-effort task that should also be peer-reviewed to
ensure it's the best approach. The technical specification should be completed
before work breakdowns.

### Goals
The goal of a Technical Specification is to:
* Clearly communicate the technical design of an Epic and the changes required
  to implement it to the team.
* Get feedback from the team that the chosen implementation approach is the
  best way to proceed.
* Improve the accuracy of estimates and timelines by ensuring all tasks for
  completion are captured in a single document.
* Provide documentation for future team members about how the Epic was
  designed.
* Consider operational and long-term support costs.
* Consider logging, metric, and dashboard needs.
* Prevent security and privacy problems.

For a more complete overview see [this article][on-writing-tech-specs] on
writing tech specs which provides a good overview with examples that the
technical specification template is loosely based on. Note that our ADR process
implies that some aspects of the technical specification will reside as
supporting/related ADRs.

### Process for creating a Technical Specification Document
When responsible for an Epic, the epic owner should:

* Determine if a Technical Specification is needed, if so, proceed.
* Ensure that the Epic has a well defined Product Requirements Document (PRD).
* Create the Technical Specification.
* Gather peer review from the team and adjust the specification as needed.
* Create work breakdown based on Technical Specification that can include
  timelines and estimates.

### Template
To aid in creating a Technical Specification, use the [FxA Epic Technical Specification](https://docs.google.com/document/d/1Y2s0BUxibALQPnzBa7jqm4VpwklsKtRgE5nccHvWB7w/copy).  Sections that don’t apply should be left as `Not Applicable`.


## Breaking down work
Depending on the size of the project this can be accomplished either by a team
or an individual.  If this is a large feature, you should have a Technical
Specification Document to kick this work off (see previous section).  The steps
to proceed are roughly:

0. Identify chunks of work that can be accomplished in around a sprint or less.
   These may be tracked as User Stories or Tasks in Jira.  They should have
   robust descriptions including acceptance criteria based on the requirements.
    0. When breaking down a large epic, consider using a spreadsheet where all
       parts of a Task (points, description, title) can be organized under User
       Stories before committing to issue creation in Jira. There may need to
       be some team discussion around where a task lies or if any tasks are
       missing before filing the issues. Especially when planning for parallel
       work, it’s important to note what tasks block other tasks and to
       prioritize these over other tasks. A kanban-style sprint board may work
       well for certain projects.
0. Once the larger chunks of work are recorded, review them and determine if
   they need to be broken down further.  If you tracked with User Stories you
   should file Tasks for the stories (you can mark these tasks as Blocking
   using Jira’s Issue Links).  If you filed tasks that need to be broken down
   further you can create new tasks that are “Split From” the previous one,
   also using Jira’s Issue Links.
0. Review all the open tasks ensuring they meet the requirements in the Epic.
   Add additional detail and clarification.  Fill out fields in Jira as they
   are known (eg. component, story points, etc.).  It’s a good idea to do this
   last step as a team so everyone is on the same page understanding the
   requirements.  As discussion happens, tasks may need to be broken down
   further.  See also our [Estimation Guidelines][estimation-guidelines].


## Small Epic Examples
- 2020 - [Multiple Product Support][jira-multiproduct-support]
- 2025 - [Integrate Mozilla Accounts with Nimbus](https://mozilla-hub.atlassian.net/browse/FXA-9122)
## Large Epic Examples
- 2025 - [SMS Phase 1 2FA backup in USA/Canada](https://mozilla-hub.atlassian.net/browse/FXA-10267) (so large it's a collection of epics)
- 2025 - [Delete Inactive Accounts Phase I](https://mozilla-hub.atlassian.net/browse/FXA-8735)

[estimation-guidelines]: https://mozilla.github.io/ecosystem-platform/reference/team-processes/development-process#estimation-and-point-values
[jira-multiproduct-support]: https://jira.mozilla.com/browse/FXA-457
[on-writing-tech-specs]: https://codeburst.io/on-writing-tech-specs-6404c9791159
