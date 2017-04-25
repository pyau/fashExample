# fashExample
Serving the app on browser emulation might not work when connecting to server.
But network connection to server is verified working for iOS and Android.

# Run on iOS
ionic build ios
Open xcode to load up the .xcodeproj under ./platforms/ios, choose your device as target

# Run on Android
cordova platform add android
ionic build android
adb install -r (apk location)

# might need to add these additional plugins
ionic plugin add cordova-plugin-camera
npm install --save @ionic-native/camera
cordova plugin add com-badrit-base64

# known issues
04/25/2017: Android build's open camera is not working.
