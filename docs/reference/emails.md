---
title: Emails
---

Current as of `April 11, 2022`

## fxa-auth-server

All of the code for sending email lives in the `fxa-auth-server`. FxA uses nodemailer and AWS SES to send its emails.

Emails are sent by calling methods on the mailer object that are passed around the codebase. The methods are defined by a reducer in `lib/senders/index.js` and have names like `sendVerifyEmail`, `sendNewDeviceLoginEmail` and `sendPasswordResetEmail`, but those are really just thin wrappers that do a little bit of argument marshalling before handing off to other methods that actually do the work. Those are defined in `lib/senders/email.js` and don’t have send in the name, so `verifyEmail`, `newDeviceLoginEmail` and `passwordResetEmail` would be counterparts to the above. Ultimately each of these methods calls `send`, which in turn calls the nuts-and-bolts methods `localize`, `render`, `selectEmailServices` and `sendMail`.

## Triggering emails locally

Check out [creating an account locally](../how-tos/creating-an-account-locally) as well as our [local emails with MailDev](../how-tos/local-emails-with-maildev.md) docs. Almost every email can be triggered locally by walking through the flow locally to trigger an email, but certain environment variables may be different across staging and production than they are locally.

If you want to run CAD (connect another device) emails locally, update `dev.json` to something like this:

```
"cadReminders": {
  "firstInterval": "1s",
  "secondInterval": "2s"
},
```

Then, run:
```
NODE_ENV=dev ./scripts/verification-reminders.js
```

## Templates

FxA emails use [EJS](https://ejs.co/) to allow logic and conditional rendering without additional helper methods, [MJML](https://mjml.io/) to shift the burden of maintaining solutions for email quirks off of FxA engineers, [SCSS](https://sass-lang.com/) with [Tailwind](https://tailwindcss.com/)-like classes compiled down to inline CSS for easy maintenance and consistency, and [Fluent](https://github.com/projectfluent/fluent.js/tree/master/fluent-dom) for localization. We also create [Storybook](https://storybook.js.org/) stories to preview emails and for documentation purposes. [See this ADR](https://github.com/mozilla/fxa/blob/main/docs/adr/0024-upgrade-templating-toolset-of-auth-server-emails.md) for more details on why this stack was chosen.

A small example of how template variables are passed down from the mailer object and consumed in the templates:

`email.js`:
```js
Mailer.prototype.verifyLoginCodeEmail = async function (message) {
  // ... Logging for metrics, setting headers, and assigning other variables

  return this.send({
  ...message,
  // always send appropriate headers
  headers,
  // always specify the name of the template
  template: 'verifyLoginCode',
  templateValues: {
    code: message.code,
    // ... all other templateValues
}
```

`layout` defaults to `fxa`. Pass in `layout: 'subscription'` at the same level `headers` and `template` is at (_outside_ of the `templateValues` object) for the SubPlat layout.

Corresponding MJML/EJS:
```html
<mj-section>
  <mj-column>
    // other MJML elements and strings

    <mj-text css-class="code-large"><%- code %></mj-text>

    // other MJML elements and strings
  </mj-column>
</mj-section>

```

Emails have a "campaign" assigned to them in a key/value map in `email.js`, as well as a `_versions.json` file for metrics. Every email has a rich HTML version as well as a plaintext version for users that prefer to see plaintext emails instead. Sometimes, the HTML version and plaintext version differ very slightly, but as a rule of thumb they should generally match for a consistent experience.

`lib/senders/emails` contains `layouts`, `partials`, and `templates.` Layouts contain outer scaffolding that’s common across emails, like headers and footers. Partials contain reusable components that are common to many emails. Templates are the actual body of emails, and their names map to conventions described at the beginning of this doc, without the words 'send' or 'email', e.g. `verify`, `newDeviceLogin` and `passwordReset` etc.


### Previewing Emails and Storybook

You can quickly preview all emails [here](https://storage.googleapis.com/mozilla-storybooks-fxa/commits/latest/fxa-auth-server/index.html), or alternatively run `yarn storybook` in the auth-server. We maintain Storybook for all FxA emails as a single source of truth for documentation; every email should have a clear description noting when and why we send the email, and all email states should be accounted for when updating or creating a new email template.

Check out our docs on [Storybook deploys with CircleCI](../reference/storybook-deploys-with-circleci.md) for details on how to preview changes in PRs or to send a link out to anyone who may need to see FxA email copy or documentation.

:::note
Emails previewed in HTML are meant to be a rough representation of what an email will look like in an email client. They're essentially identical and MJML helps us with consistency, but keep in mind you're previewing in a browser when emails may be viewed in email clients in practice.
:::

We couple Storybook with the `merge-ftl` grunttask to display strings from our `en.ftl` files (see the l10n section for more details). At the time of writing, Storybook is our way to preview or manually check the English strings we ultimately pass to translators, and our tests cover the English fallback copy.

In addition to running locally, Storybook can be built into a static format. This is ultimately what happens in our CI. This static format is then deployed and manual QA may be conducted against it. To test what this will look like, run `yarn build-storybook` then navigate to the `storybook-static` folder and run `http-server . -p 8081`. From there, simply navigate to `http://locahost:8081/index.html` and you will see the resulting static build. _(If you don't have `http-server` installed, simply run `npm install -g http-server`)_

:::info
The previews in Storybook are generated using the `mjml-browser` module and not the de facto `mjml` module. The difference is subtle but important. As the name indicates, `mjml-browser` is designed to render from a browser context, whereas mjml uses a nodejs context. Ideally these modules would be identical, but at the time of writing this, there are a couple of [minor differences](https://github.com/mjmlio/mjml/tree/master/packages/mjml-browser#unavailable-features). Our code introduces a couple work arounds to achieve parity with the way templates would be rendered using the `mjml` module. If styles in sent out emails ever seem off, consider this discrepancy as an unlikely but potential source of error.
:::

#### write-emails-to-disk.js

Before Storybook, the only way to preview emails was to run `yarn write-emails` which runs the `write-emails-to-disk.js` script. This runs through each `Mailer.prototype.templateNameEmail` function and writes its output to disk. This script has a lot of limitations that Storybook makes up for, but is still around because it actually creates an instance of our Mailer and gives us a more production-like output with real links generated from the server with UTM parameters. Because of this, it's also useful sometimes for debugging.

At the time of writing, we are maintaining use of the script [until it can be phased out](https://github.com/mozilla/fxa/issues/10601).

### Styles

We use `scss` stylesheets compiled to CSS and inlined by MJML for maximum mail client compatibility. We maintain shared stylesheets with common styles and variables, and template or partial-specific stylesheets scoped to that template or partial.

FxA created a [styleguide](https://storage.googleapis.com/mozilla-storybooks-fxa/index.html) (click on a recent commit, and go into "fxa-settings"; also see ["styling components" in `fxa-settings`](https://github.com/mozilla/fxa/tree/main/packages/fxa-settings#styling-components)) for engineers to reference convenience classes provided by Tailwind, which we use in other major front-end packages. While we would love to use Tailwind itself, it would have added even more complexity to the build pipeline and was not immediately compatible with MJML. Instead, we use class name conventions and styles that mirror Tailwind classes as using the closest `px` value to the design guide for consistency across FxA's CSS.

Use SCSS variables set to mirror Tailwind's values, like for colors, `margin`, and `padding`, typically in the global file. Try to use existing, or create new, helper utility classes, when needed, that are similar to Tailwind's classes.

```scss
$s-2: 8px;
$s-5: 20px;

.mt {
  &-2 {
    margin-top: $s-2 !important;
  }
  &-5 {
    margin-top: $s-5 !important;
  }
  ...
```

Use `@extend` and placeholder selectors where appropriate.

```scss
.font-sans {
  font-family: $font-sans !important;
}

.link-blue {
  @extend .text-blue-400, .font-sans;
  text-decoration: none;
}

%text-body-common {
  @extend .font-sans;
}
```

Then use the placeable:
```scss
.text-body-no-margin div {
  @extend %text-body-common;
}

.text-body div {
  @extend %text-body-common;
  @extend .mb-5;
}
```

If it makes more sense to scope changes to a certain layout file or component file, do so. You'll have to import any files that have references you need to use, and reference any variables with `global.` in front.

```scss
@use '../../global.scss';
@use '../../layouts/fxa/index.scss';

.text-body-grey-no-margin div {
  @extend %text-body-common;
  color: global.$grey-500 !important;
}

.text-body-grey {
  @extend .text-body-grey-no-margin;
  div {
    @extend .mb-6;
  }
}
```

#### MJML styling caveats

MJML internally adds some default styling to their elements and use `!important` for better coverage of mail client quirks. This means if we add custom styles to overwrite theirs, we inevitably also need to use `!important`. With that in mind, we should _not_ use it unless we explicitely need to.

Sometimes, styling classes is not always how it seems due to how MJML compiles into HTML, and you may need to add `div` or `td` after the class to target that specific element.

### Email subjects and actions

Every template has either an `includes.json` file or an `includes.ts` file where email subjects and optionally, actions, are housed. These are pulled in and localized _before_ the email is rendered because 1) these values are needed in layout files and aren't easily localized since "subject" goes inside an `mj-title` and "action" goes in a script in `metadata.mjml` (where would we insert the Fluent IDs in the DOM?) and 2) we need to return a localized "subject" back to the Mailer anyway.

Use `includes.json` unless logic is required to determine the subject or action like so:

```json
{
  "subject": {
    "id": "verify-subject",
    "message": "Finish creating your account"
  },
  "action": {
    "id": "verify-action",
    "message": "Confirm email"
  }
}
```

Then in the corresponding FTL file:
```ftl
verify-subject = Finish creating your account
verify-action = Confirm email
```

If you need logic, you must create a function that is returned at the import step after checking for the template name. An example of `includes.ts`:

```ts
import { GlobalTemplateValues } from '../../../renderer';

const getSubject = (numberRemaining: number) =>
  numberRemaining === 1
    ? '1 recovery code remaining'
    : '<%= numberRemaining %> recovery codes remaining';

export const getIncludes = (numberRemaining: number): GlobalTemplateValues => ({
  subject: {
    id: 'lowRecoveryCodes-subject',
    message: getSubject(numberRemaining),
  },
  action: {
    id: 'lowRecoveryCodes-action',
    message: 'Confirm email',
  },
});

export default getIncludes;
```

The corresponding FTL file:
```
lowRecoveryCodes-subject =
    { $numberRemaining ->
        [one] 1 recovery code remaining
       *[other] { $numberRemaining } recovery codes remaining
   }
```

And then, in the Renderer, check for the template and dynamically import the required file with the argument it expects:
```ts
if (context.template === 'lowRecoveryCodes') {
  return (
    await require('../emails/templates/lowRecoveryCodes/includes')
  ).getIncludes(context.numberRemaining);
}
```

### Localization (L10n)

:::note
See also [this deep dive on Localization](localization).
:::

Strings are automatically extracted to the [`fxa-content-server-l10n` repo](https://github.com/mozilla/fxa-content-server-l10n) where they reach Pontoon for translations to occur by our l10n team and contributors. This is achieved by concatenating all of our .ftl (Fluent) files into a single `auth.ftl` file with the `merge-ftl` grunttask, and the `extract-and-pull-request.sh` script that runs in `fxa-content-server-l10n` on a weekly cadence.

Non-email strings that must be translated are placed directly in `lib/l10n/auth.ftl`, under any brands we have set to [message references](https://projectfluent.org/fluent/guide/references.html). Email strings for translation are placed in a nearby (`templates/[templateName]/en.ftl` or `partials/[partialName]/en.ftl`).

Fluent requires a Fluent ID to find the translated string in other languages, but MJML doesn't support custom attributes since an MJML element may produce many HTML elements. We pass our email templates into [`@fluent/dom`](https://www.npmjs.com/package/@fluent/dom) and provide Fluent an FTL ID by ensuring strings wrapped in a DOM element, like a `span`, where we can supply the ID via `data-l10n-id`.

We don't have a hard rule for FTL ID naming but generally we start the ID matching the template, partial, or variable name, or a shortened version of it which may be snake-case or camelCase, followed by a short, snake case summary of the text.

:::tip
You must use curly quotes for strings in our MJML, plaintext, and FTL files, except in comments. They're considered more proper for copy and the l10n team will push back against straight quotes.
:::

`subscriptionSupportContact` MJML partial:
```html
<mj-text css-class="text-body">
  <span data-l10n-id="subscriptionSupportContact" data-l10n-args="<%= JSON.stringify({productName}) %>">
    Thank you for subscribing to <%- productName %>. If you have any questions about your subscription or need more information about <%- productName %>, please <a data-l10n-name="subscriptionSupportUrl" href="<%- subscriptionSupportUrl %>">contact us</a>.
  </span>
</mj-text>
```

We use `JSON.stringify` to ensure all values are JSON strings as expected. Note that at the time of writing, we have a spike open for l10n improvements across FxA ([FXA-4477](https://mozilla-hub.atlassian.net/browse/FXA-4477)), including not needing to specify `data-l10n-args`.

We also use Fluent to localize our plaintext. Strings in plaintext should follow a `fluent-id = "default value provided"` pattern where value of `fluent-id` is same as `data-l10n-id` attribute of the corresponding markup element. If `fluent-id` is present in Fluent bundle, the text will be localized, else it will be replaced with the fallback value present. In cases where we don't need localization, like for directly outputting a variable, use EJS instead and it will be rendered as-is.

`subscriptionSupportContact` plaintext partial:
```
subscriptionSupportContact-plaintext = "Thank you for subscribing to <%- productName %>. If you have any questions about your subscription or need more information about <%- productName %>, please contact us:"
<%- subscriptionSupportUrl %>
```

Every variable should have a comment to help translators with context. It can also be helpful to let translators know what a word's intent is if it can be ambiguous, or to let them know if something is followed by a link.

`subscriptionSupportContact` FTL:
```
# Variables
#   $productName (String) - The name of the subscribed product, e.g. Mozilla VPN
subscriptionSupportContact = Thank you for subscribing to { $productName }. If you have any questions about your subscription or need more information about { $productName }, please <a data-l10n-name="subscriptionSupportUrl">contact us</a>.
# After the colon, there's a link to https://accounts.firefox.com/support
subscriptionSupportContact-plaintext = Thank you for subscribing to { $productName }. If you have any questions about your subscription or need more information about { $productName }, please contact us:
```

If the element you need translated is already wrapped in a non-MJML tag, like `b`, or `li`, supply the `data-l10n-id` on that element instead of creating an extra `span` DOM element.

```
<b data-l10n-id="payment-details">Payment details:</b>
```

You do _not_ need a `data-l10n-id` on strings that only contains a variable since the variable won't be localized.
```
<mj-text css-class="code-large"><%- code %></mj-text>
```

Fluent will overlay the translation onto the source fragment preserving attributes like `class` and `href` from the source and adding translations for the elements inside.

:::warning
If you need to change a string, you must also update the Fluent ID. Generally speaking, we just append a `-2` or `-v2` to the string if it's a rewording or we create a new ID entirely if the copy is significantly different. We must do this because IDs are saved in Pontoon and tied to translations for the original string.

If you change a variable name and not the string text around it, technically you also need a new ID since the string is not identical. However, to not lose existing translations, you can also find-and-replace the variable name in that ID across locales in the l10n repo directly before or after your PR in `fxa` is merged. You must coordinate with the l10n team if you plan to do this. [See a PR](https://github.com/mozilla/fxa-content-server-l10n/pull/559) where we did this.
:::

At the time of writing, Storybook is our way to preview or manually check the English strings we ultimately pass to translators, and our tests cover the English fallback copy.
### Images and localizing alt text

You _must_ provide a `width` on `mj-image` tags. Otherwise, the parent width will be used in at least MacOS' native Mail app, resulting in large, 100% width images. See [this PR](https://github.com/mozilla/fxa/pull/11840) for more details.

Since we must pass Fluent an FTL ID for each string to be localized, localizing alt text for images is tricky. We use [`mj-html-attributes`](https://documentation.mjml.io/#mj-html-attributes) to add a custom attribute where we need them, and all of our images are given these HTML attributes in an `images.mjml` file pulled into every layout file:

```html
<mj-selector path=".mozilla-logo a">
  <mj-html-attribute name="data-l10n-id">subplat-footer-mozilla-logo</mj-html-attribute>
</mj-selector>
```

In MJML layout:

```html
<!--- remember to always provide a width --->
<mj-image css-class="mozilla-logo"
  width="120px"
  href="https://www.mozilla.org"
  src="https://accounts-static.cdn.mozilla.net/product-icons/mozilla-logo.png"
  alt="Mozilla logo"
  title="Mozilla">
</mj-image>
```

In corresponding FTL files:

```
subplat-footer-mozilla-logo = <img data-l10n-name="mozilla-logo" alt="{ -brand-mozilla } logo">
```

We could have technically localized strings this way as well rather than wrap text elements in `span`s, but that would have been significantly messier and confusing.

## Bounces and complaints

[SES delivery, bounce and complaint notifications](https://docs.aws.amazon.com/ses/latest/dg/notification-contents.html) are published to SQS queues. As well as emitting metrics (see below), we also store bounce records in the auth db whenever a bounce or complaint occurs. The email service then checks those records against thresholds defined in the config and if any thresholds are violated, sending will fail.

The bounce and complaint handling code is in `lib/email/bounces.js` but long-term we want to migrate to the email service’s implementation instead, which was written some time ago but has not been deployed yet. The motivation for moving is partly semantic, because bounce records don’t really belong in the auth db, but also security, because the email service should not need access to the auth db.

### Bounce types

| bounceType     | bounceSubType              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Undetermined` | `Undetermined`             | The recipient's email provider sent a bounce message. The bounce message didn't contain enough information for Amazon SES to determine the reason for the bounce. The bounce email, which was sent to the address in the Return-Path header of the email that resulted in the bounce, might contain additional information about the issue that caused the email to bounce.                                                                                                                                                                                  |
| `Permanent`    | `General`                  | The recipient's email provider sent a hard bounce message, but didn't specify the reason for the hard bounce.<br />⚠️ **Important**<br />When you receive this type of bounce notification, you should immediately remove the recipient's email address from your mailing list. Sending messages to addresses that produce hard bounces can have a negative impact on your reputation as a sender. If you continue sending email to addresses that produce hard bounces, we might pause your ability to send additional email.                               |
| `Permanent`    | `NoEmail`                  | The intended recipient's email provider sent a bounce message indicating that the email address doesn't exist.<br />⚠️ **Important**<br />When you receive this type of bounce notification, you should immediately remove the recipient's email address from your mailing list. Sending messages to addresses that don't exist can have a negative impact on your reputation as a sender. If you continue sending email to addresses that don't exist, we might pause your ability to send additional email.                                                |
| `Permanent`    | `Suppressed`               | The recipient's email address is on the Amazon SES suppression list because it has a recent history of producing hard bounces. To override the global suppression list, see [Using the Amazon SES account-level suppression list](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html)                                                                                                                                                                                                                                             |
| `Permanent`    | `OnAccountSuppressionList` | Amazon SES has suppressed sending to this address because it is on the [account-level suppression list](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html). This does not count toward your bounce rate metric.                                                                                                                                                                                                                                                                                                                  |
| `Transient`    | `General`                  | The recipient's email provider sent a general bounce message. You might be able to send a message to the same recipient in the future if the issue that caused the message to bounce is resolved.<br />ℹ️ **Note**<br />If you send an email to a recipient who has an active automatic response rule (such as an "out of the office" message), you might receive this type of notification. Even though the response has a notification type of `Bounce`, Amazon SES doesn't count automatic responses when it calculates the bounce rate for your account. |
| `Transient`    | `MailboxFull`              | The recipient's email provider sent a bounce message because the recipient's inbox was full. You might be able to send to the same recipient in the future when the mailbox is no longer full.                                                                                                                                                                                                                                                                                                                                                               |
| `Transient`    | `MessageTooLarge`          | The recipient's email provider sent a bounce message because message you sent was too large. You might be able to send a message to the same recipient if you reduce the size of the message.                                                                                                                                                                                                                                                                                                                                                                |
| `Transient`    | `ContentRejected`          | The recipient's email provider sent a bounce message because the message you sent contains content that the provider doesn't allow. You might be able to send a message to the same recipient if you change the content of the message.                                                                                                                                                                                                                                                                                                                      |
| `Transient`    | `AttachmentRejected`       | The recipient's email provider sent a bounce message because the message contained an unacceptable attachment. For example, some email providers may reject messages with attachments of a certain file type, or messages with very large attachments. You might be able to send a message to the same recipient if you remove or change the content of the attachment.                                                                                                                                                                                      |

Source: [Bounce types | Amazon SNS notification contents for Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/notification-contents.html#bounce-types)

## Metrics

We emit metrics when emails are sent, delivered and when they bounce or complaints are received. A regrettable decision was made to treat complaints as a type of bounce when the metrics were first implemented, which means some of the numbers are unintuitive. Specifically, you might expect that `count sent = count delivered + count bounced`. That’s not true. Instead, `count sent = count delivered + count bounced - count complained`.

The metrics code is slightly confusing because, as mentioned in the previous section, we haven’t finished migrating to the email service yet. That means there’s metrics code we’re using right now and other stuff we’re not using yet, which is waiting for the email service deployment.

The stuff we’re using right now is in `lib/email/delivery.js` and `lib/email/bounces.js`. These modules receive events directly from SES and should be pretty straightforward to understand.

The stuff we’re not using yet is in `lib/email/notifications.js`, which receives events from the email service (using the same format as SES for consistency). That queue won’t receive any events until the above-linked PR is deployed. The story behind it is we want to keep the metrics code in the auth server, even though bounce and complaint handling is moving away.

The two handlers are designed to co-exist, so it’s fine for them both to be in operation when the email service stuff gets deployed, they’ll just compete for events without duplicating any metrics or whatever. When we’re happy that the email service is behaving correctly, we should remove the old SQS handlers from the auth server.

## Tests

Historically the email tests have been a burden to maintain because there’s so many of them, and it’s easy for such a large volume of tests to obscure the presence of bugs.

The main test cases are in `test/local/senders/email.js`, declared as data in maps called `TESTS` and `COMMON_TESTS`. Taking a declarative approach like this made it easier to get a feel for the test coverage and spot gaps in it. It also ensured we had common test cases that are applied to every email, e.g. we can make sure there are no HTML character entities in the plain text emails and that required headers are always set. There is also a "partials" test section for testing stateful partials.

To test values other than what's in the `MESSAGE` const at the top of the file, use the `updateTemplateValues` helper function. In this example, `productName` will be updated and then the tests above it will be ran with the new value, `undefined`.

```ts
['templateNameEmail', new Map<string, Test | any>([
  ['subject', { test: 'equal', expected: 'Expected subject' }],
  ['headers', new Map([/* header tests */],
  ])],
  ['html', [/* html tests */],
  ['text', [/* plaintext tests */]
]), {updateTemplateValues: templateValues => ({...templateValues, productName: undefined})}],
```

We also have a `functional-tests` package containing end-to-end tests for our emails. You may need to update or add to them depending on your changes.

## Bulk mailer

There have been unfortunate occasions in the past where it became necessary to manually send email out to large subsets of our user base. We have `scripts/bulk-mailer.js` for that purpose. Run `node scripts/bulk-mailer --help` to see usage information.

## How do I…

### ...change an existing template?
1. Find the template you want to change in `lib/senders/emails/templates`.
1. Make sure you update the HTML, plaintext, FTL, and Storybook forms of your template if applicable. You will need a new Fluent ID for new strings, see the l10n section for more info.
1. If you need to make changes in `layouts` or `partials`, ensure you don’t break other templates.
1. Change or add test data in `test/local/senders/emails.ts`.
1. Bump the template version(s) in `lib/senders/emails/templates/_versions.json`, so that metrics can attribute any changes to the template change.
1. If you’re changing strings, make sure you’ve updated the FTL ID, more details above.
1. Be sure to run Storybook and make any needed changes there as well.

### ...add a new template?
1. Add HTML (`index.mjml`), plaintext (`index.txt`), FTL (`en.ftl`), includes (`includes.json`), and `index.stories.ts` in a new directory, lib/senders/templates/[templateName]`.
1. Use MJML (HTML) and EJS (HTML, plaintext, `includes.json`) to create your new template. Ensure the rich HTML and plaintext versions render as expected, the FTL file is properly filled out, and that Storybook includes documentation as well as displaying all states.
1. Add a version property to `lib/senders/templates/_versions.json`. Set it to 1.
1. Add a corresponding method to `lib/senders/email.js`. Make sure that method calls send with the subject and any template data you need.
1. Invoke your method from the code as `mailer.send...Email`.
1. Add new test data in `test/local/senders/email.js`.
1. If all the pieces are hooked up at the time (the endpoint, etc.), add the end-to-end test to `functional-tests/lib/email.ts`. Otherwise, make sure to file a follow up issue.

### ...change an email subject?

1. Make the change in the relevant `includes.json` or `includes.ts` file, updating the FTL ID as well.
1. Update the test data in `test/local/senders/email.js`.

### ...view rendered templates locally?

1. Run `yarn storybook` and see all emails, HTML and plaintext, with all states, alongside documentation.
1. Optionally run `node scripts/write-emails-to-disk` then open the `.mail_output` directory in your browser. A rendered copy of every* template will be there.
1. Note this is not a substitute for testing changes in a real mail client. Email rendering is famously unreliable.

*Some email methods render two templates based on conditional logic. Using `yarn write-emails` only runs through each method once providing the Mailer the `message` constant set in the script. You won't see every single template or state this way.

## Relevant ADRs

* [Upgrade the templating toolset of auth server emails](https://github.com/mozilla/fxa/blob/main/docs/adr/0024-upgrade-templating-toolset-of-auth-server-emails.md)
* [Retiring fxa-email-service](https://github.com/mozilla/fxa/blob/main/docs/adr/0028-retiring-email-service.md)