Ecosystem Platform Portal Website

This directory contains the source and tooling for building the Ecosystem Platform website. It pulls content from markdown docs in the ../docs/product-portal/ directory.
Running locally

npm install
npm start

If this doesn't automatically launch a browser, you can navigate to the local docs at http://localhost:3000/ecosystem-platform/
Deploy

USE_SSH=true npm run publish-gh-pages

Read more about the build at: https://docusaurus.io/docs/en/installation.html