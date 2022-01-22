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

The following technique works with any Android application and can also be used for Firefox for Android.

Simply forward the following ports from the host machine to the Android device:

```shell
npm run adb-reverse
```

or

```shell
adb reverse tcp:3030 tcp:3030 # Content server
adb reverse tcp:9000 tcp:9000 # Auth server
adb reverse tcp:9010 tcp:9010 # OAuth server
adb reverse tcp:1111 tcp:1111 # Profile server
adb reverse tcp:5000 tcp:5000 # Sync server
```

Then run `yarn start` and get to work!