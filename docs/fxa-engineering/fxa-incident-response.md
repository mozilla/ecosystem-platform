---
id: fxa-incident-response
title: Incident Response
sidebar_label: Incident Response
---

_Updated April 16, 2021_

_Incident response at Mozilla is a bit of a moving target at the time of this writing.  We expect to use whatever system becomes a broad standard, but in the mean time we'll follow the process below._

0. Read about [Firefox Incident Response][fx-incident-response] for some background.  We follow that model of incident command and classification of incidents
0. Use [this template][sec-response-template] for the response.  Fill in what you can, delete sections that are not relevant.
0. The normal work of responding to the incident follow the documentation in the first bullet point.
0. Once the incident is resolved, have a _post-mortem_ or _root cause analysis_(RCA) meeting to discuss what happened and how to avoid it in the future.  Take notes in the incident document on the meeting and future action items.
0. Add your incident to [this list][fx-incident-reports].

Generally that's where the documented process ends.  This can lead to a failure to follow up on action items that come out of the incident.  To avoid that, Firefox Accounts extends the process:

0. File an epic in Jira with either a descriptive title or "Incident _%DATE%_".  
    0. Add a description linking to the incident document
    0. Add the `incident` label
0. File tasks under the epic and assign to the appropriate people.  Understand these tasks will sync to Github and be publicly viewable.  If there are security concerns, file confidential bugs in bugzilla.
    * It's worth recognizing the natural tension between [good and perfect][wikipedia-good-vs-perfect] and understanding there will be diminishing returns here.  If it would take six months of work to avoid a low severity incident it's not worth filing that action item.  Document the option, but stay realistic when filing action items.
0. Triage the items as part of the regular triage.


[fx-incident-response]: https://mana.mozilla.org/wiki/display/PM/Firefox+Incident+Response
[fx-incident-reports]: https://mana.mozilla.org/wiki/display/PM/Firefox+Rapid+Response+Incident+Reports
[sec-response-template]: https://docs.google.com/document/d/1RXAU6omTxCpO3iTFxssFMtavEcbyu6pwAkEyIxeMMmg/edit
[wikipedia-good-vs-perfect]: https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good