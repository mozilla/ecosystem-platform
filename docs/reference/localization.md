---
title: Localization
---

Current as of `November 6, 2023`

Translations for Mozilla accounts and Subscription Platform are located in the [fxa-content-server-l10n repo][#l10n-repo]. This includes translations for UI and emails, but does not include [legal documents](#terms-of-service-and-privacy-policy-are-handled-differently). 

# Process overview
1. [Adding new strings for localization](#adding-new-strings-for-localization)
    * Use legacy [gettext][#gettext] for fxa-content-server
    * Use [Fluent][#fluent] everywhere else
2. [Extraction](#extraction-process): Strings are extracted to the [l10n repo][#l10n-repo]
3. [Localization](#localization-process): Strings are localized on [Pontoon][#pontoon]
4. [Build](#build-process): Localized strings are copied from the l10n repo and bundled with builds

# Adding new strings for localization

## With gettext

Within fxa-content-server, all localizable strings are wrapped in a `t` method. `t` is a signal to the l10n extraction script that the embedded string is meant for translation. Within mustache templates, strings meant for extraction are wrapped in `{{#t}}{{/t}}` or `{{#unsafeTranslate}}{{/unsafeTranslate}}` tags.

Strings wrapped in a `{{#t}}{{/t}}` tag are HTML escaped by default to prevent unexpected HTML from being written to the DOM. HTML can be written to the DOM from a string that is translated using the `{{#unsafeTranslate}}{{/unsafeTranslate}}` tag. Within an `unsafeTranslate` tag, named variables must contain the escaped prefix to remind developers that the variable must be HTML escaped before being written.

For example:
```
{{#unsafeTranslate}}Enter the code that was sent to %(escapedEmail)s within 5 minutes.{{/unsafeTranslate}}
```

When translated by the content-server, `escapedEmail` will be passed as a variable to the translate function, causing `%(escapedEmail)s` to be replaced with the passed in value.

Gettext comments can be used to provide extra context to translators to allow them to effectively translate strings that could be vague in different languages. Text preceeded by `///` is extracted as a gettext comment (`#.`), while adding `msgctxt` marks the text as a separate entry for localization even if there are other strings with identical text. For example:

```
/// submit button
const buttonSignInText = this.translate(t('Sign in'), {
  msgctxt: 'submit button',
});
```

```
#. submit button
msgctxt "submit button"
msgid "Sign in"
msgstr "Identificarse"
```

See [gettext documentation][#gettext-docs] for more details.

## With Fluent

:::note
Developers should read the [Fluent syntax guide][#fluent-syntax-guide] before adding or modifying Fluent strings. Particular care should be taken when including variables, attributes or embedded elements in localized strings.
:::

To localize an element with Fluent, the message must be added to an FTL file with a unique identifier. In the [Fxa repo][#fxa-repo], Fluent strings are kept close to the file where they are used by adding an `en.ftl` file at the component-level. These files are then concatenated at the package-level with a `merge-ftl` grunttask. For example, all `en.ftl` files in fxa-settings are concatenanted into `settings.ftl` before the strings are extracted to the l10n repo.

A very basic example of an en.ftl file:
```
## Example component
## This is a group comment that applies to all strings until anoter group comment is added - only use it at the top of the file

# This is a standalone comments for developers, it won't show up on Pontoon
# The id, file name and project will be shown as context on Pontoon

example-component-heading = Page heading example
# This is a note that applies only to example-subheading
example-component-subheading = Page subheading example

```

Our convention for naming FTL id:
1. FTL IDs should be all lower-case alphanumeric characters.
2. Words should be separated with hyphens (kebab case).
3. IDs should be prefixed with the name of the component/page (e.g., bento-menu-... for BentoMenu component files)
4. If an existing string is modified, add a version suffix to the string id (e.g., bento-menu-heading-v2).
5. The id should be descriptive for both the developer and the localizer, as it might be used as context to understand how the string is used.
6. Prefer whole words vs abbreviations (e.g., 'button' instead of 'btn') as they are clearer for non-native English speakers.

React-based packages (`fxa-payments`, `fxa-react`, `fxa-settings`) use [React bindings for Project Fluent](https://github.com/projectfluent/fluent.js/wiki/React-Bindings).

Preferred implementation: use [FtlMsg][#ftl-msg-component] wrapper element and [useFtlMsgResolver][#ftl-msg-resolver] hook for new additions, or when updating existing components that directly use the [Localized](https://github.com/projectfluent/fluent.js/wiki/Localized) component and [useLocalization](https://github.com/projectfluent/fluent.js/wiki/useLocalization) hook. The custom `FtlMsg` wrapper and `useFtlMsgResolver` hook provide additional safety by forcing the inclusion of fallback text and preparing for additional l10n testing (see [L10n/I18n Improvements ADR](https://github.com/mozilla/fxa/blob/main/docs/adr/0032-l10n-i18n-improvements.md))

```
<FtlMsg id="example-component-heading">
  <h1>Page heading example</h1>
</FtlMsg>
```

The useFtlMsgResolver can be used to pass a localized string as a prop to a child component or to add a localized string as an element attribute.

```
const ftlMsgResolver = useFtlMsgResolver();
const localizedMessage = ftlMsgResolver.getMsg('ftl-id','Fallback text');
```

Branding [terms][#fluent-terms] (such as Mozilla, Mozilla accounts) can be found in [branding.ftl][#branding-terms] and are shared by all packages that use Fluent strings. The branding file is bundled with other package-level ftl files at build time into a `main.ftl` file to ensure the branding terms are made available for use as placeables in other strings.

Fluent strings used in emails are implemented a bit differently because of MJML template constraints. See [fxa-auth-server email localization](emails#localization-l10n) for details.

### Modifying strings

If a string must be modified, a new string must be created (for example by adding `-2` or `-v2` to the previous id). Modifying an existing string won't trigger a localization request - the 'en' string would be updated, but localized strings would all have the old text as the localizers would not be notified of the change. If a string used as a [placeable](https://projectfluent.org/fluent/guide/references.html) in other strings is updated, all dependant strings must *also* be bumped to a new version to include the updated id and will trigger a new localization request.

E.g.,

```
unique-id = Some string
another-unique-id = { unique-id } is repeated here
```

```
unique-id-v2 = An updated string
another-unique-id-v2 = { unique-id-v2 } is repeated here
```

### A few important notes about localization with Fluent/React

#### Attributes

Attributes can be localized declaratively with `<Localized>` or `<FtlMsg>` components. See the [Fluent Wiki for examples and notes](https://github.com/projectfluent/fluent.js/wiki/Localized#attributes) on the importance of including the `attrs` prop. If `attrs` is not passed, no attributes will be set!

An alternative is to use a hook (either `useLocalization` or `useFtlMsgResolver`) to pass the localized string as a prop. In this scenario, the FTL id should include the name of the attribute (e.g., component-name-image-alt-text) to provide context for localizers.

#### Markup/embedded elements in strings

If the string contains markup (for example, a link), the `elems` prop MUST be used. See [Fluent Wiki for examples and notes](https://github.com/projectfluent/fluent.js/wiki/Localized#markup).

#### Using styling to uppercase/lowercase localized text

Just don't - locales may have different rules around capitalization. Best to apply capitalization to the default 'en' string with a comment about the context, and let localizers determine what is best for their locale.

See [notes about paramtrization for brand terms](https://mozilla-l10n.github.io/localizer-documentation/tools/fluent/basic_syntax.html#terms-and-parameterized-terms).

### Documentation about using Fluent:
- [Project Fluent Wiki](https://github.com/projectfluent/fluent/wiki)
- [Fluent Syntax Guide][#fluent-syntax-guide]
- [Documentation for Mozilla Localizers](https://mozilla-l10n.github.io/localizer-documentation/index.html)
- [Fluent for Firefox Developers](https://firefox-source-docs.mozilla.org/l10n/fluent/index.html)
- [Bedrock Fluent documentation](https://bedrock.readthedocs.io/en/latest/l10n.html#fluent)

# Extraction process
Timed [cron job on CircleCI](https://github.com/mozilla/fxa-content-server-l10n/blob/main/.github/workflows/l10n_extract.yaml) runs twice weekely on Monday and Thursday afternoons. This job can also be run manually if needed (reach out to the Mozilla accounts l10n project manager).
- Calls [clone.sh][#clone-script] to clone the l10n repo before extracting strings.
- Runs the `merge-ftl` grunt tasks for required fxa packages.
- Calls [extract_strings.sh][#extract-strings] to extract strings from the fxa repo (including running [l10n-extract][#l10n-extract] for gettext) and create a commit with a random branch name.
- Branch becomes a pull request on the `fxa-content-server-l10n` repository which must be merged after doing cursory checks to ensure new/changed strings “look right”. If l10n notices any issues that weren't spotted in the PR review, they will typically let the team know at this point so that a fix can be implemented before manually re-running the export script.
- Once merged, [Pontoon automatically pulls in string][#pontoon-fxa-repo] changes and notifies localizers.

## Extraction process deep dive (gettext)

Gettext string extraction on the content server is done with a grunt task called [l10n-extract][#l10n-extract]. The content server is a mixture of JavaScript, TypeScript, JSX, Handlebars, and Mustache, and each of these file types may contain translatable strings. [jsxextract][#jsx-extract] is used to extract strings from a variety of file types, including JavaScript extensions such as babel-specific dynamic imports and class properties that `jsx-gettext` does not handle.

* Use [babel to convert non-standard JavaScript, JSX, and TypeScript into ES5 JavaScript][#l10n-extract-babel-cmd].
* `jsxextract` analyses source files looking for the keywords [‘t’, and ‘unsafeTranslate’][#l10n-extract-keywords], saving a list of strings along with source location annotations to `client.pot` and `server.pot`.
  * The `.pot` files contain only the current strings that need to be translated.
* For [each locale in the fxa-content-server-l10n repo][#l10n-repo-locale-dir], the strings from the .pot files are [merged with existing strings][#merge-with-existing-strings] in `.po` files.
  * Translations of strings in the `.pot` file that are already in the existing `.po` files are kept.
  * New entries are added for strings in the `.pot` file that have no entries in the existing `.po` files.
  * Any strings in the `.po` files that no longer have entries in the `.pot` files are commented out.

The translations in `.po` (Portable Object) files are stored with a relatively simple format. Here is an example:

```po
#: .es5/views/confirm_reset_password.js:195
msgid "Password reset"
msgstr "Slaptažodžio atkūrimas"
```

- First line (#: .es5…): location(s) where the string is used in the source code.
- Second line (msgid): string in English.
- Third line (msgstr): the translation (if available). If no translation is provided, msgstr is an empty string `""`

# Localization process
* Localizers are notified that Mozilla accounts strings have changed.
* Localizers make updates and a review request is issued.
* Reviewer accepts changes.
* Changes are pushed back to the [fxa-content-server-l10n][#l10n-repo] repo as a commit to master.
  * Every commit to master causes a [linting job][#grunt-lint-l10n] to be run.
    * The linter checks to ensure:
      * All HTML within the translations is well formed, e.g., no unclosed anchor tags.
      * No unexpected HTML elements, attributes or values exist.
      * All named variables in the translations exist in the English strings.
    * These checks prevent:
      * l10n being used as an attack vector since HTML element attributes can contain JavaScript or external links.
      * Incorrect page renderings due to malformed HTML in l10n strings.

# Build process

The latest strings from [fxa-content-server-l10n repo][#download-l10n-script] are cloned with each build (see [decision outcome #4 of the the L10n/I18 Improvements ADR](https://github.com/mozilla/fxa/blob/main/docs/adr/0032-l10n-i18n-improvements.md#decision-outcome-4-clone-fxa-content-server-l10n-once-instead-of-per-package) for details on this approach). Newly localized strings from Pontoon are not available (on stage/production) until a new release (including a dot release) is created.

* On prebuild, [l10n:prime][#l10n-prime-script] pulls the latest localization files into target workspaces.
* The build process calls a `build-l10n` task:
    - In fxa-content-server:
        - The [l10n-create-json grunt task][#l10n-create-json-grunt-task] copies all translated `.po` files from the fxa-content-server-l10n repo and runs the [grunt po2json task][#grunt-po2json-task], once for each of the 2 `.po` files for each locale, resulting in 2 `.json` files for each locale.
        - A copy of the compiled JavaScript bundles is created for each locale.
        - Static JavaScript resources are deployed to a 3rd party CDN (Amazon) and [Subresouce Integrity (SRI)][#sri] is used to ensure the resources are not modified on the CDN. Each JavaScript bundle (per locale) has its own SRI hash.
    - In other localized packages (fxa-auth-server, fxa-payments, fxa-react, fxa-settings, fxa-shared):
        - Individual source `en.ftl` files for the default 'en' locale are merged into a package-level `.ftl` file (`merge-ftl` grunt task) to ensure local builds have access to the latest FTL strings.
        - l10n bundles are created for use by Fluent's `<LocalizationProvider>` with [bundle.sh][#l10n-bundle-script]. 

# Additional notes

## Dates and Times
Dates and times are a special case because dates and times are very locale specific. For example, in Europe it is common for July 10 to be written `10/07` whereas that would read October 10th to North Americans. All of our times and dates are translated using the locale-aware version of MomentJS. Since the locale-aware [MomentJS][#momentjs] is rather large (67kb), dates and times displayed in the [Connected services][#settings-connected-services] of FxA are translated on the auth-server when requesting the devices and apps list.

Where possible in packages that use Fluent, we should instead use [Fluent's DATETIME function][#fluent-datetime-function].

## Terms of Service and Privacy Policy are handled differently
The FxA [Terms of Service][#fxa-tos-source] and [Privacy Policy][#fxa-pp-source] are handled differently to other FxA translations. The most important difference is that these are considered legally binding documents, as such changes are driven by Mozilla’s legal team and source documents are held in the [mozilla/legal-docs repository][#legal-docs-repo] on Github. Any time either document is updated, paid specialist legal translators make the updates for other languages.

Unlike the rest of the FxA translations that are held in gettext .po files, the terms of service and privacy policy source documents are full markdown documents to allow the Legal team control over the formatting of the documents. During the FxA docker image build, the head of the legal-docs repo is pulled in and the markdown documents converted to HTML.

## Text direction

In fxa-settings and fxa-payments, we use React-Helmet to set the text direction in the Head by comparing the rendered locale with a list of RTL languages. If the negotiated locale is a right-to-left (RTL) language, the page-content will be displayed in RTL layout.

:::note
Packages that use Tailwind for styling can use [Tailwind's logical properties](https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties) to automatically adjust the layout for LTR/RTL.
:::

[#branding-terms]: https://github.com/mozilla/fxa/blob/main/libs/shared/l10n/src/lib/branding.ftl
[#clone-script]: https://github.com/mozilla/fxa/blob/main/_scripts/l10n/clone.sh
[#download-l10n-script]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/scripts/download_l10n.sh
[#extract-strings]: https://github.com/mozilla/fxa-content-server-l10n/blob/master/scripts/extract_strings.sh
[#fluent]: https://projectfluent.org/
[#fluent-datetime-function]: https://projectfluent.org/fluent/guide/functions.html
[#fluent-syntax-guide]: https://projectfluent.org/fluent/guide/
[#fluent-terms]: https://projectfluent.org/fluent/guide/terms.html
[#ftl-msg-component]: https://github.com/mozilla/fxa/blob/d4397b040dd83c13344bbecfad04c88507964ad7/packages/fxa-react/lib/utils.tsx#L81
[#ftl-msg-resolver]: https://github.com/mozilla/fxa/blob/efe165b98896e503dd13a0c72b46a450990eff13/packages/fxa-settings/src/models/hooks.ts#L185
[#fxa-repo]: https://github.com/mozilla/fxa
[#fxa-pp-source]: https://github.com/mozilla/legal-docs/tree/master/firefox_cloud_services_PrivacyNotice
[#fxa-tos-source]: https://github.com/mozilla/legal-docs/blob/master/en/firefox_cloud_services_tos.md
[#gettext]: https://www.gnu.org/software/gettext/
[#gettext-docs]: https://www.gnu.org/software/gettext/manual/html_node/index.html
[#grunt-lint-l10n]: https://github.com/mozilla/grunt-l10n-lint
[#grunt-po2json-task]: https://github.com/rockykitamura/grunt-po2json/
[#jsx-extract]: https://github.com/mozilla/fxa/blob/d4397b040dd83c13344bbecfad04c88507964ad7/packages/fxa-content-server/grunttasks/l10n-extract.js#L28
[#l10n-bundle-script]: https://github.com/mozilla/fxa/blob/main/_scripts/l10n/bundle.sh
[#l10n-create-json-grunt-task]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/grunttasks/l10n-create-json.js
[#l10n-extract]: https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/grunttasks/l10n-extract.js
[#l10n-extract-babel-cmd]: https://github.com/mozilla/fxa/blob/d4397b040dd83c13344bbecfad04c88507964ad7/packages/fxa-content-server/grunttasks/l10n-extract.js#L22
[#l10n-extract-keywords]: https://github.com/mozilla/fxa/blob/d4397b040dd83c13344bbecfad04c88507964ad7/packages/fxa-content-server/grunttasks/l10n-extract.js#L54
[#l10n-prime-script]: https://github.com/mozilla/fxa/blob/main/_scripts/l10n/prime.sh
[#l10n-repo-locale-dir]: https://github.com/mozilla/fxa-content-server-l10n/tree/master/locale
[#l10n-repo]: https://github.com/mozilla/fxa-content-server-l10n/
[#legal-docs-repo]: https://github.com/mozilla/legal-docs/
[#merge-with-existing-strings]: https://github.com/mozilla/fxa-content-server-l10n/blob/master/scripts/merge_po.sh
[#momentjs]: https://momentjs.com/
[#pontoon]: https://pontoon.mozilla.org/
[#pontoon-fxa-repo]: https://pontoon.mozilla.org/projects/mozilla-accounts/
[#settings-connected-services]: https://accounts.firefox.com/settings/clients
[#sri]: https://developer.mozilla.org/docs/Web/Security/Subresource_Integrity
[#supported-languages]: https://github.com/mozilla/fxa/blob/main/packages/fxa-shared/l10n/supportedLanguages.json