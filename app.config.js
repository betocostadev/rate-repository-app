/* eslint-disable no-undef */
import 'dotenv/config';

// Using the file this way, we are getting the config from app.config.json and adding the extras
export default ({ config }) => {
  // console.log(config.name); // prints 'My App'
  return {
    ...config,
    extra: {
      env: process.env.ENV,
      apollo_uri: process.env.APOLLO_URI
    },
  };
};

// Old config
// export default {
//   "name": "rate-repository-app",
//   "slug": "rate-repository-app",
//   "version": "1.0.0",
//   "orientation": "portrait",
//   "icon": "./assets/icon.png",
//   "splash": {
//     "image": "./assets/splash.png",
//     "resizeMode": "contain",
//     "backgroundColor": "#ffffff"
//   },
//   "updates": {
//     "fallbackToCacheTimeout": 0
//   },
//   "assetBundlePatterns": [
//     "**/*"
//   ],
//   "ios": {
//     "supportsTablet": true
//   },
//   "web": {
//     "favicon": "./assets/favicon.png"
//   },
//   extra: {
//     env: process.env.ENV,
//     apollo_uri: process.env.APOLLO_URI
//   },
//   env: {
//     "grelos": true
//   }
// };
