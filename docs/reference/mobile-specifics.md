---
title: Mobile Specifics
---

### Firefox for iOS

:::tip
Skip this if you are not working on Firefox for iOS and FxA.
:::

You can test sync locally in Firefox iOS using the XCode simulator.
[Follow the steps at github.com/mozilla/firefox-ios and setup _firefox-ios_ ](https://github.com/mozilla/firefox-ios) build locally.
Currently there is no way to dynamically switch servers in Firefox for iOS, to use **local** servers you need to run the script below:

```shell
FIREFOX_IOS_HOME=<path_to_firefox_ios_project> npm run config-fxios
```

After the script you need to rebuild _firefox-ios_.

### Android debugging

#### Emulator setup

The Android emulator is most accessible through the Android Studio IDE, and confusingly, we do not need to build an app project in order to use only the emulator with a released version of Firefox for Android.

1. Install Android Studio from [the website](https://developer.android.com/studio).
2. In the Welcome dialog, click More Actions > Virtual Device Manager and follow the prompts to setup an emulator.
    * Any Hardware Profile will work.
    * Select an image with a higher API version. Avoid using the "named" pre-release versions.
    * Ensure you select an image that is compatible with your system. e.g. if you have an Apple Silicon MacBook, then choose the arm64-v8a images only.
3. Download a recent version of Firefox for Android from [archive.mozilla.org](https://archive.mozilla.org).
    * Nightly: https://archive.mozilla.org/pub/fenix/nightly/
    * Release variants: https://archive.mozilla.org/pub/fenix/releases/
    * When you find the version that you want to install, choose the same CPU architecture that you selected for your emulator.
4. Once your emulator has started up, drag-and-drop the APK file on the emulator to install it.
5. Open and verify everything is working as expected.

#### Pointing to the Custom Mozilla Account server

To communicate with an Android device, we need to install the Android platform command-line tools first (namely `adb`).

You can download these in multiple ways:
1. (Preferred) Install them from your OS package manager. For example, on Mac OS using HomeBrew: `brew install --cask android-platform-tools`
2. Download the binaries directly from the developer site and (optionally) add them to your `PATH`: https://developer.android.com/tools/releases/platform-tools
3. Install Android Studio and locate the binaries within the built-in Android SDK.

In addition, for Firefox for Android, follow [the instructions on support.mozilla.org](https://support.mozilla.org/en-US/kb/how-set-firefox-sync-firefox-android) to make the application use your local server by setting the Custom Mozilla Account and/or Sync server fields.

:::tip
⚠️ Ensure you enter a fully-qualified URL that includes the `http://` scheme. e.g. `http://localhost:3030`
:::

#### Forwarding local server ports

The following technique works with any Android application and can also be used for Firefox for Android.

Simply forward the following ports from the host machine to the Android device:

```shell
npm run adb-reverse
```

or

```shell
adb reverse tcp:3306  tcp:3306  # MySQL server
adb reverse tcp:6379  tcp:6379  # redis
adb reverse tcp:4100  tcp:4100  # Fake SQS/SNS
adb reverse tcp:8085  tcp:8085  # google-pubsub-emulator
adb reverse tcp:9090  tcp:9090  # google-firestore-emulator
adb reverse tcp:5000  tcp:5000  # sync server
adb reverse tcp:8001  tcp:8001  # cirrus (experimenter)
adb reverse tcp:8000  tcp:8000  # auth-server db mysql
adb reverse tcp:9000  tcp:9000  # auth-server key server
adb reverse tcp:3030  tcp:3030  # content-server
adb reverse tcp:1111  tcp:1111  # profile-server
adb reverse tcp:9292  tcp:9292  # Fortress
adb reverse tcp:8080  tcp:8080  # 123done
adb reverse tcp:10139 tcp:10139 # 321done
adb reverse tcp:5050  tcp:5050  # browserid-verifier
adb reverse tcp:3031  tcp:3031  # payments server
adb reverse tcp:7100  tcp:7100  # support admin panel
adb reverse tcp:8002  tcp:8002  # pushbox
adb reverse tcp:3000  tcp:3000  # react app
adb reverse tcp:8290  tcp:8290  # graphql api
```

Then run `yarn start` and get to work!
