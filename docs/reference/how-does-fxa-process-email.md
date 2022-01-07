---
title: How does FxA process email?
---

Current as of `October 7th, 2019`

## fxa-auth-server

Historically, all of the code for sending email lived in the auth server. That code was tightly coupled to Amazon SES, so we decided to break the email-sending guts of it out to a dedicated project, `fxa-email-service`. The things that were left in the auth server were the templates, localization, and metrics. There is also a mechanism for selecting the underlying email service which should migrate to the email service too at some point.

Emails are sent by calling methods on the mailer object that is passed around the codebase. The methods are defined by a reducer in `lib/senders/index.js` and have names like `sendVerifyEmail`, `sendNewDeviceLoginEmail` and `sendPasswordResetEmail`, but those are really just thin wrappers that do a little bit of argument marshalling before handing off to other methods that actually do the work. Those are defined in `lib/senders/email.js` and don’t have send in the name, so `verifyEmail`, `newDeviceLoginEmail` and `passwordResetEmail` would be counterparts to the above. Ultimately each of these methods calls `send`, which in turn calls the nuts-and-bolts methods `localize`, `render`, `selectEmailServices` and `sendMail`.

## Templates

The templates are written using handlebars syntax and live under `lib/senders/templates`. Directly in that directory you’ll see templates with names corresponding to the mail-sending methods mentioned above, in HTML and plain text versions. There is also code for rendering the templates in `index.js`, template versions for metrics in `_versions.json` and any pending strings for L10n in `_pending.txt`.

There are also two subdirectories, layouts and partials:

* The templates in `layouts` contain outer scaffolding that’s common across emails. For the HTML emails that includes stuff like metadata, header logo and smallprint in the footer. For the plain text emails it’s just the standard footer text. Layout names are specified in the call to `render`.
* The templates in `partials` contain reusable components that are common to many emails. They’re included inline using the handlebars `{{> partialName}}` syntax.

## L10n

There is more detailed documentation about localization elsewhere. For the scope of this document though if will suffice to say that there is a grunt task called `l10n-extract` which is run as part of our L10n automation. It extracts strings from templates by looking for the `{{t "this string needs translating"}}` syntax and from JS code by looking for the `gettext('this string needs translating')` syntax.  Stuff like the email subject and variable data for partials will be in the JS code.

Bear in mind that occasionally we need to bump the parser version that’s used for the JS code, e.g. when we start using some super-duper newfangled JS features. That’s done in `grunttasks/l10n-extract.js`.

## Bounces and complaints

[SES delivery, bounce and complaint notifications][aws-notification-docs] are published to SQS queues. As well as emitting metrics (see below), we also store bounce records in the auth db whenever a bounce or complaint occurs. The email service then checks those records against thresholds defined in the config and if any thresholds are violated, sending will fail.

The bounce and complaint handling code is in `lib/email/bounces.js` but long-term we want to migrate to the email service’s implementation instead, which was written some time ago but has [not been deployed yet][3358]. The motivation for moving is partly semantic, because bounce records don’t really belong in the auth db, but also security, because the email service should not need access to the auth db.

## Metrics

We emit metrics when emails are sent, delivered and when they bounce or complaints are received. A regrettable decision was made to treat complaints as a type of bounce when the metrics were first implemented, which means some of the numbers are unintuitive. Specifically, you might expect that `count sent = count delivered + count bounced`. That’s not true. Instead, `count sent = count delivered + count bounced - count complained`.

The metrics code is slightly confusing because, as mentioned in the previous section, we haven’t finished migrating to the email service yet. That means there’s metrics code we’re using right now and other stuff we’re not using yet, which is waiting for the [email service deployment][3358].

The stuff we’re using right now is in `lib/email/delivery.js` and `lib/email/bounces.js`. These modules receive events directly from SES and should be pretty straightforward to understand.

The stuff we’re not using yet is in `lib/email/notifications.js`, which receives events from the email service (using the same format as SES for consistency). That queue won’t receive any events until the above-linked PR is deployed. The story behind it is we want to keep the metrics code in the auth server, even though bounce and complaint handling is moving away.

The two handlers are designed to co-exist, so it’s fine for them both to be in operation when the email service stuff gets deployed, they’ll just compete for events without duplicating any metrics or whatever. When we’re happy that the email service is behaving correctly, we should land the draft PR that I worked on to remove the old SQS handlers from the auth server: [#2192][2192].

## Tests

Historically the email tests have been a burden to maintain because there’s so many of them, and it’s easy for such a large volume of tests to obscure the presence of bugs.

The main test cases are in `test/local/senders/email.js`, declared as data in maps called `TESTS` and `COMMON_TESTS`. Taking a declarative approach like this made it easier to get a feel for the test coverage and spot gaps in it. It also ensured we had common test cases that are applied to every email, e.g. we can make sure there are no HTML character entities in the plain text emails and that required headers are always set.

## selectEmailServices

The email service supports sending via Amazon SES, Sendgrid, SocketLabs and plain SMTP. We wanted to be able to set config for that stuff dynamically, without redeploying the stack, so [some code was written][2574] to keep it in Redis. Because one of the states we were modelling was for email not to be sent through the email service at all, that code had to live in the auth server initially. But now we use the email service for everything, [it probably makes sense for it to move there now][435]. Anyway, the function that does all this stuff is called `selectEmailServices` and it lives in `lib/senders/select_email_services.js`.

There is a long comment at the top of that module, describing how it works and the data format and so on, so I won’t reproduce it all here. It should be pretty straightforward.

That code is only the read part though, the write part is in a separate script that Ops can run against prod when we want to divert email for a particular email address or domain or whatever. That script is in `scripts/email-config.js` and if you run `node scripts/email-config` without arguments it will print usage information.

## Bulk mailer

There have been unfortunate occasions in the past where it became necessary to manually send email out to large subsets of our user base. Shane wrote a script that does this, `scripts/bulk-mailer.js`. Run `node scripts/bulk-mailer --help` to see usage information.

## How do I…

### ...change an existing template?
0. Find the template you want to change in `lib/senders/templates`.
0. Make sure you update both the HTML and plain text forms of your template.
0. If you need to make changes in `layouts` or `partials`, ensure you don’t break other templates.
0. Change or add test data in `TESTS` in `test/local/senders/email.js`.
0. Bump the template version(s) in `lib/senders/templates/_versions.json`, so that metrics can attribute any changes to the template change.
0. If you’re changing strings, make sure you’ve made the cut for L10n. If you want to avoid missing the cut, land strings ahead of time in `lib/senders/templates/_pending.txt`.

### ...add a new template?
0. Add HTML and plain text copies in `lib/senders/templates`.
0. Add a version property to `lib/senders/templates/_versions.json`. Set it to 1.
0. Add a corresponding method to `lib/senders/email.js`. Make sure that method calls send with the subject and any template data you need.
0. Invoke your method from the code as `mailer.send...Email`.
0. Add new test data to `TESTS` in `test/local/senders/email.js`.

### ...change an email subject?

0. Make the change in the relevant method in `lib/senders/email.js`.
0. Make sure the string is wrapped inside a call to gettext, so that the L10n automation can translate it.
0. Update the test data in `TESTS` in `test/local/senders/email.js`.

### ...view rendered templates locally?

0. Run `node scripts/write-emails-to-disk` all then open the `.mail_output` directory in your browser. A rendered copy of every template will be there.
0. Note this is not a substitute for testing changes in a real mail client. Email rendering is famously unreliable.

## fxa-email-service

Unlike most packages in the FxA monorepo, the email service is written in Rust. The readme has useful information about how to build it, run it, run the tests etc. There are [detailed code-level docs][fxa-email-service] that get built in CI and published to GitHub Pages.

There are two parts to the email service: an HTTP API and a separate process that listens to SQS queues for delivery, bounce and complaint notifications. As mentioned previously, that second part is [still awaiting deployment][3358].

The email service uses Redis for storage. It has 3 storage types:

0. Bounce and complaint records. Writes for this are implemented, but we don’t want to read from it until it has enough history to cut across seamlessly from the auth db. And the writes won’t actually write anything until that deployment I keep linking to is done.
0. Message metadata. This is so we can stash things like flow id when sending a message and still have access to them when delivery, bounce and complaint notifications arrive on the queue. Reads and writes are implemented.
0. Config. This is intended to replace the `selectEmailServices` stuff from the auth server and also act as storage for any relier-specific config we might need when the email service is opened up to other services. I did have this implemented on a branch somewhere once upon a time, but I can’t find it anywhere. So, not implemented.

As mentioned, the migration to the email service is unfinished. These are some issues from the backlog that I had to cover the outstanding work:

* [Enable the queues process in prod][434]
* [Add a config endpoint][435]
* [Migrate away from auth db][440]

Then later, if we want to make the email service fully standalone and open it up to other consumers within Mozilla, we should implement these issues:

* [Bounce-handling behaviours][436]
* [Running as a separate service][437]
* [Authentication][438]
* [Rate-limiting][439]

(those are not exhaustive lists btw, there’s other issues that should also be fixed at some point)



[aws-notification-docs]: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notification-contents.html
[3358]: https://github.com/mozilla-services/cloudops-deployment/pull/3358
[2095]: https://github.com/mozilla/fxa/pull/2095
[2192]: https://github.com/mozilla/fxa/pull/2192
[2574]: https://github.com/mozilla/fxa-auth-server/pull/2574
[434]: https://github.com/mozilla/fxa/issues/434
[435]: https://github.com/mozilla/fxa/issues/435
[436]: https://github.com/mozilla/fxa/issues/436
[437]: https://github.com/mozilla/fxa/issues/437
[438]: https://github.com/mozilla/fxa/issues/438
[439]: https://github.com/mozilla/fxa/issues/439
[440]: https://github.com/mozilla/fxa/issues/440
[fxa-email-service]: https://mozilla.github.io/fxa/fxa-email-service/fxa_email_service/
