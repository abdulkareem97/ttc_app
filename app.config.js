export default {
  "expo": {
    "name": "aqutech",
    "slug": "aqutech",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package":"com.aqutech.android",
      "googleServicesFile":process.env.GOOGLE_SERVICES_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "0cff566d-d805-4f57-b0b2-6df7f61215df"
      }
    },
    "plugins": ["@react-native-google-signin/google-signin"],
  }
}
