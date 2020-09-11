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
1. Now, in `about:config`, set `identity.fxaccounts.autoconfig.uri` to `https://accounts.stage.mozaws.net`.
1. Restart Firefox. Make sure to use the same profile you setup in step #1.
1. Now, either login to an existing staging Firefox account, OR create a new Firefox account now that you're pointed to staging.
1. Once you're logged into your Firefox account, verify that you're actually pointed to staging by [testing a manual Sync](/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly).

### iOS

1. First, delete and then re-install the Firefox iOS app to ensure you're using a fresh profile.
1. Before logging in, go to App Menu > Settings. Scroll to the bottom, and tap the version number 5 times. You should now see some hidden menu options appear.
1. Scroll back up to the top of the Settings screen, and click `Advanced Sync Settings`.
1. Enable `Use stage servers`.
1. Then, `Sign in to Sync`. Make sure you're using either an existing staging account, or create a fresh one now that you're pointed to staging.
1. Once you're logged into your Firefox account, verify that you're actually pointed to staging by [testing a manual Sync](/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly).

### Android

1. First, delete and then re-install the Firefox Android app to ensure you're using a fresh profile.
1. Before logging in, go to App Menu > Settings > About Firefox. Click the logo 5 times. You should see a "debug menu enabled" notification.
1. Now, return to App Menu > Settings. Scroll to the very top. You'll see an option for `Custom Firefox Account server`. Set this value to `https://accounts.stage.mozaws.net`. Changing this value will cause Firefox to close.
1. Re-open Firefox, and either login to an existing staging Firefox account, OR create a new Firefox account now that you're pointed to staging. Pairing doesn't work against staging, so you'll need to use an email address if you're signing into an existing staging account.
1. Once you're logged into your Firefox account, verify that you're actually pointed to staging by [testing a manual Sync](/ecosystem-platform/docs/process/sync-testing#verify-ive-set-things-up-correctly).

## How do I...

## ...create a new Firefox Profile?

Follow the instructions [here](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles) for managing your profiles. It can be very useful to set a shortcut to open the profile picker when testing Sync.

* `alias ff_profiles='/Applications/Firefox.app/Contents/MacOS/firefox-bin -P -no-remote'` - an example of a bash alias you could use to start Firefox with the profile picker on OSX.
