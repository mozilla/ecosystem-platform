---
title: How does FxA process email?
---

Current as of `October 7th, 2019`

## fxa-auth-server

All of the code for sending email lives in the auth server.

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
