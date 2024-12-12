---
title: Mobile Specifics
---

### Firefox for iOS

:::tip
Skip this if you are not working on Firefox for iOS and FxA.
:::

You can test sync locally in Firefox iOS using the XCode simulator.
[Follow the steps at github.com/mozilla/firefox-ios and setup _firefox-ios_ ](https://github.com/mozilla-mobile/firefox-ios) build locally.

To change which FxA servers to use, in XCode simulator while in a signed-out state:
1. Go into Firefox browser settings and tap 5 consecutive times on the version (e.g. "Firefox 133.0"), which will open a "Debug" section
1. Look under the "Account" section and tap "Advanced Sync Settings"
    * For stage testing, toggle "Use stage servers"
    * For local testing, toggle "Use Custom FxA Content Server" and set "Custom Account Content Server URI" to `http://localhost:3030`

### Android debugging

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
