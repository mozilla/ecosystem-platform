---
id: sync-testing
title: Sync Testing
sidebar_label: Sync Testing
---

## Overview
Testing Sync is complex; it involves testing multiple possible clients, engines, storage options, all against different environments. Configuring each of these can be time consuming; here's a cheat sheet to help you get up and running.

## Testing Against Specific Environments
Note: these documents are all geared towards the newer [syncstorage-rs](https://github.com/mozilla-services/syncstorage-rs) project. Until the legacy Sync server is retired, you can find detailed instructions on it's usage [here](https://mozilla-services.readthedocs.io/en/latest/howtos/run-sync-1.5.html).

### Development

#### Desktop

1. Use a production Firefox account.
2. Now, follow the instructions in the [connecting to Firefox section](https://github.com/mozilla-services/syncstorage-rs#connecting-to-firefox) of the README. It's recommended to test against [MySQL](https://github.com/mozilla-services/syncstorage-rs#mysql), but if you're feeling adventurous, you can also try [Spanner](https://github.com/mozilla-services/syncstorage-rs#spanner).


### Staging

#### Desktop

1. First, make sure you're using a [staging Firefox account](/ecosystem-platform/docs/process/using-the-staging-environment#working-with-staging-firefox-accounts).
2. Now, follow the instructions to [verify setup via a manual Sync](#verify-ive-set-things-up-correctly).

#### iOS

1. Follow the instructions to [point Firefox iOS to staging](/ecosystem-platform/docs/process/using-the-staging-environment#ios).
2. Now, follow the instructions to [verify setup via a manual Sync](#verify-ive-set-things-up-correctly).

#### Android

This is not currently possible for Fenix. See [using the staging environment](/ecosystem-platform/docs/process/using-the-staging-environment#android) for more details.

## Testing Specific Sync Engines

Sync engines are the term used for types of data that can be Synced. Ie, "bookmarks" is a different engine than "addresses", and so forth.

### Lockwise

Behind the scenes, [Lockwise](https://www.mozilla.org/en-US/firefox/lockwise/) uses Sync to share logins across devices.

#### Desktop
Testing Lockwise in Desktop against staging follows [the same process as Desktop](/ecosystem-platform/docs/process/using-the-staging-environment#desktop).


#### iOS
Currently, Lockwise iOS requires a custom build to test against a custom Sync server. You can follow the feature request to get this added to the UI [here](https://github.com/mozilla-lockwise/lockwise-android/issues/1129). In the meantime, you'll need to create a local custom build for testing:

1. First, you'll need to [setup Lockwise iOS locally](https://github.com/mozilla-lockwise/lockwise-ios/blob/master/docs/install.md).
2. Now, open [AccountStore.swift](https://github.com/mozilla-lockwise/lockwise-ios/blob/master/lockbox-ios/Store/AccountStore.swift) and change the [config declaration](https://github.com/mozilla-lockwise/lockwise-ios/blob/master/lockbox-ios/Store/AccountStore.swift#L122) from `FxAConfig.release` to `FxAConfig.dev`. 
3. Re-build the lockbox scheme in Xcode (Product > Build).
4. Open the XCode Simulator, and login using an existing [staging Firefox account](/ecosystem-platform/docs/process/using-the-staging-environment#working-with-staging-firefox-accounts).
5. Test adding a new login on Desktop (pointed to staging) Lockwise.
6. Now, in the XCode Simulator force a Sync by pulling down on the list of logins.

#### Android

Currently, Lockwise Android requires a custom build to test against a custom Sync server. You can follow the feature request to get this added to the UI [here](https://github.com/mozilla-lockwise/lockwise-ios/issues/1175). In the meantime, you'll need to create a local custom build for testing:

1. First, you'll need to [setup Lockwise for Android locally](https://github.com/mozilla-lockwise/lockwise-android/blob/master/docs/install.md). Make sure to at least open the project in [Android Studio](https://developer.android.com/studio/install) once, which will force it to install the correct dependencies.
2. Now, open [AccountStore.kt](https://github.com/mozilla-lockwise/lockwise-android/blob/master/app/src/main/java/mozilla/lockbox/store/AccountStore.kt) and change the [config declaration](https://github.com/mozilla-lockwise/lockwise-android/blob/master/app/src/main/java/mozilla/lockbox/store/AccountStore.kt#L269) from `ServerConfig.release` to `ServerConfig.dev`.
3. Rebuild the project in Android Studio (Build > Make Project).
4. Now, open the [Android Virtual Device Manager](https://developer.android.com/studio/run/managing-avds) within Android Studio, and make sure you have a device downloaded.
5. Open your device in the [Android Studio Emulator](https://developer.android.com/studio/run/emulator), and login using an existing [staging Firefox account](/ecosystem-platform/docs/process/using-the-staging-environment#working-with-staging-firefox-accounts). If you've previously logged in using this virtual device while pointed to production, you may need to download a new device to bypass auth caching.


## How do I...

## ...find my Sync id?

Each Firefox account has a unique Sync id associated with it. There's a few different ways to find it:

#### via the Browser Console:

1. First, make sure that the Browser Console (different than Developer Tools Console) is enabled. Open the [Developer Tools Settings](https://developer.mozilla.org/en-US/docs/Tools/Settings) (Desktop menu: Tools > Web Developer > Toggle Tools > “…” > Settings), and check the “Enable browser chrome and add-on debugging toolboxes” setting in the “Advanced settings” section.

2. In `about:config`, set `devtools.chrome.enabled` to `true`. This will allow you to type into the Browser Console.

3. Now, manually Sync (Account Menu > Sync Now).

4. Open the Browser Console (Tools > Web Developer > Browser Console) and type `Weave.Service.clusterURL`. 

   You should see something similar to `https://sync-3-us-east-1.stage.mozaws.net/1.5/0000000/`, where `0000000` corresponds to your Sync Id.

#### via Sync Logs:

1. First, verify that you've configured your Sync logs to [log successful Syncs](#configure-sync-logging).

2. Now, manually Sync (Account Menu > Sync Now).

3. Now, [browse to your Sync logs](#configure-sync-logging), and open the most recent one. Scan through it for something that looks like this: `POST success 200 https://sync-3-us-east-1.stage.mozaws.net/1.5/0000000/storage/tabs?batch=true&commit=true`. The `0000000` will correspond to your Sync Id.


## ...verify I've set things up correctly?

1. In Desktop, manually Sync (Account Menu > Sync Now).
2. Open your [Sync logs](#configure-sync-logging) to verify that you're syncing to the correct host. Sometimes, you'll need to restart Firefox after making a change to the Sync host in order for your new host to register correctly. Scan through the logs for something that looks like this: 
     `POST success 200 https://sync-3-us-east-1.stage.mozaws.net/1.5/0000000/storage/tabs?batch=true&commit=true.`

    * For **production**, your sync host will look like this:
        
        * `sync-<id-number>-<gcp-region>-g.sync.services.mozilla.com` ie, `https://sync-1-us-east-1.sync.services.mozilla.com` (GCP)
        * `sync-<id-number>-<aws-region>.sync.service.mozilla.com` ie, `https://sync-1-us-west1-g.sync.services.mozilla.com` (AWS - Legacy) 
    * For **staging**, your sync host will look like this: 
    
      * `https://stage.sync.nonprod.cloudops.mozgcp.net` (GCP)
      * `https://sync-3-us-east-1.stage.mozaws.net` (AWS - Legacy)
    * For **development**, you should see `localhost:PORT` for your sync host.

## ...configure Sync logging?

Open `about:sync-log` to see all your Sync logs.

#### log output for successful Syncs:

By default, sync logs are setup to log only errors. You can force successful syncs to output log info as well by:

1. Open `about:config`.
2. Set `services.sync.log.appender.file.logOnSuccess` to `true`.

#### enable trace logging:

1. First, download and install the [about-sync](https://addons.mozilla.org/en-US/firefox/addon/about-sync/) add-on.
2. Then, open `about:sync` and from the "General Options" menu, select `Actively looking for issues and want detailed logging`.

## ...get access to Spanner?

This is currently a manual process. Contact <a href="mailto:servicesengineering@mozilla.com">services engineering</a> for more information.

## ...know if my Firefox account is pointed to Spanner?

1. Follow the instructions to get your [Sync host](#verify-ive-set-things-up-correctly) above, and then paste it into a browser followed by `__version__`, ie: `https://sync-3-us-east-1.stage.mozaws.net/__version__`. If you see a `0`, you're using MySQL. If you see more detailed JSON including a `source` value of `https://github.com/mozilla-services/syncstorage-rs`, you're pointed to Spanner.

## ...disable caching for auth creds for Sync?

This can be useful if you're making changes to auth servers while testing Sync. There's a flag called `services.sync.debug.ignoreCachedAuthCredentials` that you can set to `true`.
