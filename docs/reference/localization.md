---
title: Localization
---

Current as of `October 17th, 2019`

Translations for FxA's content and auth servers are located in the
[https://github.com/mozilla/fxa-content-server-l10n/][#l10n-repo] repo.

Within the [locale/*][#l10n-repo-locale-dir] directories, 2 files exist:
* client.json - for the content server (UI, frontend)
* server.json - for the server side strings (emails, backend templates)

The l10n infrastructure used by FxA’s content and auth servers
is based on [gettext][#gettext]. When localization was first
added to FxA, the only l10n format supported by Mozilla’s l10n
system [Pontoon][#pontoon] was gettext as the newer format based
on [Fluent](https://projectfluent.org/) did not yet exist.

## Extraction process
* Timed [cron job on Circle](https://github.com/mozilla/fxa-content-server-l10n/blob/main/.github/workflows/l10n_extract.yaml), runs on Thursday afternoons.
* Calls [extract-and-pull-request.sh][#extract-and-pull-request] which extracts strings and creates a branch with a random name.
  - In turn calls [extract_strings.sh][#extract-strings]
  - See [Extraction process deep dive](#extraction-process-deep-dive) for more info.
* Branch becomes a pull request on the `fxa-content-server-l10n` repository which must be merged by a developer after doing cursory checks.
  - Check to ensure new/changed strings “look right”.
* Once merged, [Pontoon automatically pulls in string][#pontoon-fxa-repo] changes and notifies localizers.

## Localization process
* Localizers are notified that FxA’s strings have changed.
* Localizers open [Pontoon to their locale's FxA project][#pontoon-fxa-es-ar].
* Localizers make updates, a review request is issued.
* Reviewer accepts changes.
* Changes are pushed back to the [fxa-content-server-l10n][#l10n-repo] repo as a commit to master.
  * Every commit to master causes a linting job to be run on Travis.
    * The linter checks to ensure:
      * All HTML within the translations is well formed, e.g., no unclosed anchor tags.
      * No unexpected HTML elements exist.
      * No unexpected HTML element attributes exist.
      * No unexpected HTML element attribute values exist.
      * All named variables in the translations exist in the English strings.
    * These checks prevent:
      * l10n being used as an attack vector since HTML element attributes can contain JavaScript.
      * There was at least one case of a translation including unexpected HTML that contained a link to an external site.
      * There have been multiple cases of malformed HTML which ended up causing templates to be incorrectly rendered.
    * If any of the lint checks fail the [folks listed here are notified][#l10n-lint-error-notification-list] and corrections are made.

## Import to production process
Every time a content server or auth server Docker image is created, the latest version of the [fxa-content-server-l10n repo is downloaded][#download-l10n-script] and bundled with the docker image. See [Import Process Deep Dive](#import-process-deep-dive) for more info on how this process works.

The downside to how this process works is that strings are only pulled into production whenever a docker image is created. Any given train is typically cut on a Monday and deployed the following Monday. If the last docker image for the train is created on the first Monday, and deployed on the 2nd Monday, and entire week of translations are not deployed to production. This usually isn’t as much of a problem in reality because we generally create at least 1 point release during that second week before going to production.

## A bit about gettext

While gettext does not have the expressive power of Fluent, it has on the whole been sufficient for our needs. Gettext translations are held in .po (Portable Object) files with a relatively simple format. A simple example from the [current Lithuanian translations][#lithuanian-translation-example-1]:

```po
#: .es5/views/confirm_reset_password.js:195
msgid "Password reset"
msgstr "Slaptažodžio atkūrimas"
```

The first line (#: .es5…) says where in the source the string is located.
The second line (msgid) gives the string in English.
The third line (msgstr) gives the translation.

If no translation is provided, msgstr is an empty string:
```
#: .es5/views/confirm_reset_password.js:195
msgid "Password reset"
msgstr ""
```

Basic string interpolation can be done using named variables, another [example from the Lithuation translations][#lithuanian-translation-example-2]:

```
#: .es5/views/ready.js:75
msgid "Account notifications will now also be sent to %(secondaryEmailVerified)s."
msgstr "Paskyros pranešimai dabar taip pat bus siunčiami adresu %(secondaryEmailVerified)s."
```
When translated by the content or auth-servers, secondaryEmailVerified will be passed as a variable to the translate function, causing %(secondaryEmailVerified)s to be replaced with the passed in value.

Within the content and auth server, all strings that are to be translated are wrapped in a `t` method. `t` is a signal to the l10n extraction script that the embedded string is meant for translation. Within mustache templates, strings meant for extraction are wrapped in `{{#t}}{{/t}}` or `{{#unsafeTranslate}}{{/unsafeTranslate}}` tags.

Gettext comments can be used to provide extra context to translators to allow them to effectively translate strings that could be vague in different languages. For example, [from the sign_in view on the content server][#signin-view-example]:

```
/// submit button
const buttonSignInText = this.translate(t('Sign in'), {
  msgctxt: 'submit button',
});
```
The triple-slash /// is [extracted as a gettext comment][#gettext-comment-extraction]:

```
#. submit button
msgid "Sign in"
msgstr "Identificarse"
```

Contrast this with another usage of [“Sign in” in the header text][#gettext-comment-extraction-2] which has a different connotation in Spanish:

```
#. msgctxt "header text"
msgid "Sign in"
msgstr "Iniciar sesión"
```

### Content server gotchas

Strings within mustache templates wrapped a `{{#t}}{{/t}}` tag are HTML escaped by default to prevent unexpected HTML from being written to the DOM. HTML can be written to the DOM from a string that is translated using the `{{#unsafeTranslate}}{{/unsafeTranslate}}` tag. Within an `unsafeTranslate` tag, named variables must contain the escaped prefix to remind developers that the variable must be HTML escaped before being written.

## Extraction process deep dive
Here we go into more detail about the internals of `extract-and-pull-request.sh`. The call to [extract_strings.sh][#extract-strings] needs the most explanation.

String extraction on both the content and auth server are facilitated using a grunt task called l10n-extract. The content server is a mixture of JavaScript, TypeScript, JSX, Handlebars, and Mustache, each of these file types may contain translatable strings. The `jsx-gettext parser` was written by Zach Carter, a former FxA teammate at a time when no generic solution existed to extract strings from a variety of file types. Jsx-gettext is able to handle standard JavaScript, TypeScript, JSX, Handlebars, and Mustache, however it is unable to parse JavaScript extensions such as babel-specific dynamic imports and class properties. The first major step in the string extraction process is to have [babel convert JavaScript, TypeScript, and JSX into ES5 Javascript][#l10n-extract].

* Use [babel to convert non-standard JavaScript, JSX, and TypeScript into ES5 JavaScript][#l10n-extract].
* `jsx-gettext parser` analyses source files looking for the keywords [‘t’, and ‘unsafeTranslate’][#l10n-extract-keywords], saving a list of strings along with source location annotations to &lt;package&gt;/locale/templates/LC_MESSAGES/client.pot and &lt;package&gt;/locale/templates/LC_MESSAGES/server.pot
  * The .pot files contain only the current strings that need to be translated.
* For [each locale in the fxa-content-server-l10n repo][#l10n-repo-locale-dir], the strings from the .pot files are [merged with existing strings][#merge-with-existing-strings] in .po files.
  * Translations of strings in the .pot file that are already in the existing .po files are kept.
  * New entries are added for strings in the .pot file that have no entries in the existing .po files.
  * Any strings in the .po files that no longer have entries in the .pot files are commented out.

## Import process deep dive
Here we go into more detail about how strings are imported from the [fxa-content-server-l10n repo][#l10n-repo] into FxA. This section assumes [changes made on Pontoon have already been merged into FxA](#localization-process) and the lint tests have passed.

The major issue here is that translations on Pontoon are held in gettext .po files and the FxA content server needs translations in a format that is understood by JavaScript. We chose a JSON key->value format, meaning we need to convert .po files to .json.

A second issue is initial page load speed. Our initial approach was to create .json files that could be loaded via XHR requests once the initial FxA JavaScript bundle was loaded, delaying initial render until the translated strings were loaded. We found this approach delayed initial render significantly, sometimes by several hundred milliseconds. To speed up the initial render, translations are embedded into the initial JavaScript bundle, resulting in one JavaScript bundle for each translation.

We deploy static resources such as JavaScript to a 3rd party CDN (Amazon), and use [Subresource Integrity (SRI)][#sri] to ensure the CDN does not modify those resources. SRI hashes must be declared in the HTML for any scripts included in the HTML, and must be included in the request for any scripts loaded dynamically. To minimize the number of CPU cycles needed to render any given page, we pre-render as much as possible during the build step, resulting in one set of web pages for each translation, each page containing a link to the build JavaScript bundle along with its SRI hash. All this means bundling the translations did improve initial page render at the cost of significant build complexity.

* During a Docker image build, the [fxa-content-server-l10n repo is cloned][#docker-l10n-clone] and the build process started.
* The build process starts the [l10n-create-json grunt task][#l10n-create-json-grunt-task].
* The l10n-create-json task copies all of the translated .po files from the fxa-content-server-l10n repo and runs the [grunt po2json task][#grunt-po2json-task], once for each of the 2 .po files for each locale, resulting in 2 .json files for each locale.
* A copy of the compiled JavaScript bundles are created for each locale.
  * For each locale, client.json is injected into the [special comment in app/lib/translator.js][#translator-special-comment].
  * SRI hashes for any dynamically loaded scripts are [added to the JS][#add-sri-to-js].
* A copy of the .html templates are created for each locale in [server/templates/pages/dist][#dist-template-dir].
  * The SRI hash of that locale’s JavaScript bundle is [added to the script tag in the HTML][#add-sri-to-html].

## Dates and Times
Dates and times are a special case because dates and times are very locale specific. For example, in Europe it is common for July 10 to be written `10/07` whereas that would read October 10th to North Americans. All of our times and dates are translated using the locale-aware version of MomentJS. Since the locale-aware [MomentJS][#momentjs] is rather large (67kb), dates and times displayed in the [Devices & apps panel][#devices-and-apps-panel] of FxA are translated on the auth-server when requesting the devices and apps list.

## Terms of Service and Privacy Policy are handled differently
The FxA [Terms of Service][#fxa-tos-source] and [Privacy Policy][#fxa-pp-source] are handled differently to other FxA translations. The most important difference is that these are considered legally binding documents, as such changes are driven by Mozilla’s legal team and source documents are held in the [mozilla/legal-docs repository][#legal-docs-repo] on Github. Any time either document is updated, paid specialist legal translators make the updates for other languages.

Unlike the rest of the FxA translations that are held in gettext .po files, the terms of service and privacy policy source documents are full markdown documents to allow the Legal team control over the formatting of the documents. During the FxA docker image build, the head of the legal-docs repo is pulled in and the markdown documents converted to HTML.

## Future directions / Possible improvements
* Send a slack notification or [email][#email-on-extraction] whenever strings are extracted.
* Notify a mailing list if l10n-lint fails.
* Back out a commit if l10n-lint fails.
* Extract strings more frequently, even up to every commit?
  * Would the l10n team be on board with this? A stated goal was to minimize the number of pings a translator received for any given project to avoid notification burnout.
* Strings are only bundled in with the production JS whenever docker images are created. During a normal release, a train is cut and a docker image created on a Monday. The train is then deployed the following Monday. If no new docker images are created in between, then an entire week of translations may not be deployed to production.
* Automate checking Pontoon for newly translated locales. If a locale reaches a certain threshold (we have used 70% in the past), open a PR against the [supportedLanguages list][#supported-languages].

[#add-sri-to-html]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/grunttasks/sriify.js#L74
[#add-sri-to-js]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/grunttasks/sriify.js#L96
[#devices-and-apps-panel]: https://accounts.firefox.com/settings/clients
[#dist-template-dir]: https://github.com/mozilla/fxa/tree/main/packages/fxa-content-server/server/templates/pages
[#docker-l10n-clone]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/Dockerfile-build#L19
[#download-l10n-script]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/scripts/download_l10n.sh
[#email-on-extraction]: https://github.com/mozilla/fxa-content-server-l10n/blob/ed36b87ccf22a4420fd7a65ecfd9f6eb89c45c15/scripts/email-dev-l10n.sh#L3
[#extract-and-pull-request]: https://github.com/mozilla/fxa-content-server-l10n/blob/master/scripts/extract-and-pull-request.sh
[#extract-strings]: https://github.com/mozilla/fxa-content-server-l10n/blob/ed36b87ccf22a4420fd7a65ecfd9f6eb89c45c15/scripts/extract_strings.sh
[#extract-strings]: https://github.com/mozilla/fxa-content-server-l10n/blob/master/scripts/extract_strings.sh
[#fxa-pp-source]: https://github.com/mozilla/legal-docs/tree/master/firefox_cloud_services_PrivacyNotice
[#fxa-tos-source]: https://github.com/mozilla/legal-docs/blob/master/en/firefox_cloud_services_tos.md
[#gettext-comment-extraction-2]: https://github.com/mozilla/fxa-content-server-l10n/blob/ed36b87ccf22a4420fd7a65ecfd9f6eb89c45c15/locale/es/LC_MESSAGES/client.po#L2483
[#gettext-comment-extraction]: https://github.com/mozilla/fxa-content-server-l10n/blob/ed36b87ccf22a4420fd7a65ecfd9f6eb89c45c15/locale/es/LC_MESSAGES/client.po#L26
[#gettext]: https://www.gnu.org/software/gettext/
[#grunt-po2json-task]: https://github.com/rockykitamura/grunt-po2json/
[#l10n-create-json-grunt-task]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/grunttasks/l10n-create-json.js
[#l10n-extract-keywords]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/grunttasks/l10n-extract.js#L54
[#l10n-extract]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/grunttasks/l10n-extract.js#L21
[#l10n-lint-error-notification-list]: https://github.com/mozilla/fxa-content-server-l10n/blob/master/.travis.yml#L19
[#l10n-repo-locale-dir]: https://github.com/mozilla/fxa-content-server-l10n/tree/master/locale
[#l10n-repo]: https://github.com/mozilla/fxa-content-server-l10n/
[#legal-docs-repo]: https://github.com/mozilla/legal-docs/
[#lithuanian-translation-example-1]: https://github.com/mozilla/fxa-content-server-l10n/blob/b54413751c27964c8f6db9bc94904ffe50036c4c/locale/lt/LC_MESSAGES/client.po#L18:L20
[#lithuanian-translation-example-2]: https://github.com/mozilla/fxa-content-server-l10n/blob/b54413751c27964c8f6db9bc94904ffe50036c4c/locale/lt/LC_MESSAGES/client.po#L72:L74
[#merge-with-existing-strings]: https://github.com/mozilla/fxa-content-server-l10n/blob/ed36b87ccf22a4420fd7a65ecfd9f6eb89c45c15/scripts/merge_po.sh
[#momentjs]: https://momentjs.com/
[#pontoon-fxa-es-ar]: https://pontoon.mozilla.org/es-AR/firefox-accounts/
[#pontoon-fxa-repo]: https://pontoon.mozilla.org/projects/firefox-accounts/
[#pontoon]: https://pontoon.mozilla.org/
[#signin-view-example]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/app/scripts/views/sign_in.js#L58:L61
[#sri]: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
[#supported-languages]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-shared/l10n/supportedLanguages.json
[#translator-special-comment]: https://github.com/mozilla/fxa/blob/dfc7a258402840e35139fd918c7bc93bc39ca9b7/packages/fxa-content-server/app/scripts/lib/translator.js#L36
