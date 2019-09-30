## Firefox Ecosystem Platform Docs

This repo hosts the source code and tooling for the [Firefox Ecosystem
Platform](https://mozilla.github.io/ecosystem-platform/) documentation portal.

### Scope and Target Audience

The docs in this repository are intended for engineers, designers or product managers working on
applications in the Firefox Ecosystem.

Our aim is to help them understand *how* and *why* to incorporate Account-related features into
their application, in a way that makes the Firefox family of products feel like a cohesive
cross-app and cross-device experience for users.

### Working on the Docs

The site is build using [Docusaurus](https://docusaurus.io/en/) and is automatically
deployed from master to GitHub Pages using CircleCI. To build and run it locally you can:

```
$> cd ./website/
$> npm install
$> npm start
```

That should open a new browser window automatically, or you can manually browse
to http://localhost:3000/ecosystem-platform/ to view the docs.

This repository contains:

* `./website`: Config for the docusaurus website, such as themes and deployment options.
* `./docs`: Markdown files for the actual documentation itself.
