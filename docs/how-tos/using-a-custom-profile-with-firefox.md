---
title: Using a Custom Profile with Firefox
---

If you're working on something in FxA involving Firefox you may need to configure the browser to suit your development environment.

Run `yarn start firefox`, which will open an instance of Firefox. It is configurable with the following environment variables:

| Variable | Values | Default |
| ---- | --------------- | --- |
| `FXA_ENV` - The API endpoints Firefox should use | `local`, `latest`, `stable`, `stage` | `local` |
| `FXA_DESKTOP_CONTEXT` - The [`context`](https://github.com/mozilla/fxa/blob/main/packages/fxa-content-server/docs/query-params.md#context) in which FxA is being run | `fx_desktop_v3`, `fx_fennec_v1`, `fx_ios_v1`, `oauth_webchannel_v1` | `fx_desktop_v3` |
| `FIREFOX_BIN` - Path to Firefox bin file | | `/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin` |
| `FIREFOX_DEBUGGER` - Open the [Browser Toolbox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox) | `true`, `false` | `false` |
| `FXA_E10S` - Enable [Electrolysis](https://wiki.mozilla.org/Electrolysis) | `true`, `false` | `false` |

## Stage environment setup instructions for different platforms

### Stage environment setup on Android:
1. Launch Firefox browser
2. Tap on the 3 dots menu and then on `Settings`
3. Scroll down to `About Firefox` and tap on it
4. Tap 5 consecutive times on Firefox Browser to enable the debug menu
5. Go back
6. Tap on the `Custom Firefox Account` server just below "Turn on Sync"
7. Enter value: `https://accounts.stage.mozaws.net` and tap OK
8. Reopen the browser

### Stage environment setup on iOS:
1. Launch Firefox browser
2. Tap on `Next` and then on `Start browsing`
3. Tap on Hamburger menu in the browser
4. Tap on `Settings`
5. Scroll down to the `About` section and tap 5 consecutive times on the Firefox version (e.g Firefox Daylight 101.1) to enable the debug menu
6. Scroll up to the `Firefox Account` section and tap on `Advanced Sync Settings`. (If you are signed into an account, disconnect first.)
7. Switch the `Use stage servers` to ON.
8. Restart the browser.

> **Note:** On mobile when switching between Stage and Prod viceversa, it’s recommended to uninstall and reinstall the browser.

### Stage environment setup on desktop browser:
1. Launch Firefox browser.
2. Go to `about:profiles` and create a new profile.
3. Go to `about:config`.
4. Change the preference `identity.fxaccounts.autoconfig.uri` to `https://accounts.stage.mozaws.net`.

