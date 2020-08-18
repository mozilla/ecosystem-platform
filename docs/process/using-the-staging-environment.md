---
id: using-the-staging-environment
title: Using the Staging Environment
sidebar_label: Using the Staging Environment
---

## Overview
Staging is available in order to test against an environment that more closely mirrors production. Here is where you can access production-like logs, perform load tests, and work with various Firefox clients that can be more difficult to configure locally.


## Working with Staging Firefox Accounts

The first thing you'll need to do is create a Firefox account while pointed at the staging environment. It's easiest to do this in Desktop:

### Desktop

1. First, make sure you are [using a new profile](/ecosystem-platform/docs/process/using-the-staging-environment#create-a-new-firefox-profile).
2. Now, in `about:config`, set `identity.fxaccounts.autoconfig.uri` to `https://accounts.stage.mozaws.net`.
3. Restart Firefox. Make sure to use the same profile you setup in step #1.
4. Now, either login to an existing staging Firefox account, OR create a new Firefox account now that you're pointed to staging.
5. Once you're logged into your Firefox account, verify that you're actually pointed to staging by [testing a manual Sync](/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly).

### iOS

1. First, delete and then re-install the Firefox iOS app to ensure you're using a fresh profile.
2. Before logging in, go to App Menu > Settings. Scroll to the bottom, and tap the version number 5 times. You should now see some hidden menu options appear.
3. Scroll back up to the top of the Settings screen, and click `Advanced Sync Settings`.
4. Enable `Use stage servers`.
5. Then, `Sign in to Sync`. Make sure you're using either an existing staging account, or create a fresh one now that you're pointed to staging.
6. Once you're logged into your Firefox account, verify that you're actually pointed to staging by [testing a manual Sync](/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly).

### Android

#### Fenix

At the time of this writing, Fenix is the codename for the upcoming Firefox for Android client. On Google's Play Store, it's called [Firefox Preview](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US). It's not currently possible to test Fenix against staging FxA servers, however there is an issue open to implement this [here](https://github.com/mozilla-mobile/android-components/issues/3729).

## How do I...

## ...create a new Firefox Profile?

Follow the instructions [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) for managing your profiles. It can be very useful to set a shortcut to open the profile picker when testing Sync.

* `alias ff_profiles='/Applications/Firefox.app/Contents/MacOS/firefox-bin -P -no-remote'` - an example of a bash alias you could use to start Firefox with the profile picker on OSX.
