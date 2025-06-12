---
title: Serve Production Build of Settings Locally
---

Occasionally you might need to serve the production build of Settings locally to test or verify something.  If you already have the stack up and running, do the following to serve the production bundle instead of proxying to the Webpack devserver.

1. Run fxa-settings' `copy-dev-build` script (e.g. `yarn workspace fxa-settings copy-dev-build` from the project root directory).  This will build Settings and copy the files into fxa-content-server.
1. Set `PROXY_SETTINGS=false` and `STATIC_SETTINGS_DIRECTORY='dev'` for shell/env vars.
1. Restart the content server with `pm2 restart content --update-env`.

