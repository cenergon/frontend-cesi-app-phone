export const AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 's8LvyhmucczSvRNvwB5vtOwihurHefUN',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 's8LvyhmucczSvRNvwB5vtOwihurHefUN',
    domain: 'dev-ohss4vph.auth0.com',
    packageIdentifier: 'mutual22', // config.xml widget ID, e.g., com.auth0.ionic
    // packageIdentifier: 'YOUR_PACKAGE_ID' // config.xml widget ID, e.g., com.auth0.ionic
  };

  // Navigation is unreachable: 
  // mutual22://dev-ohss4vph.auth0.com/cordova/Mutual22/callback?code=VumunW-YDRKasdL0&state=yQwt7FXN5HW_viFsl_s6DmVb8NQLSvnefyqRgER7JQ8
// Configuracion web

// 1
  // You should set the Allowed Callback URL to
  // # replace YOUR_PACKAGE_ID with your app package ID
  // YOUR_PACKAGE_ID://YOUR_DOMAIN/cordova/YOUR_PACKAGE_ID/callback


// 2
  // Replace YOUR_PACKAGE_ID with your application's package name.

// 3
//   Configure Logout URLs
//   # replace YOUR_PACKAGE_ID with your app package ID
//   YOUR_PACKAGE_ID://YOUR_DOMAIN/cordova/YOUR_PACKAGE_ID/callback


// 4
// To be able to make requests from your application to Auth0. Set the following origins in your Application Settings.
// http://localhost, ionic://localhost, http://localhost:8100

 // tslint:disable-next-line: max-line-length
 // ionic cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME='Mutual22' --variable ANDROID_SCHEME='Mutual22' --variable ANDROID_HOST=YOUR_DOMAIN --variable ANDROID_PATHPREFIX=/cordova/YOUR_PACKAGE_ID/callback


 // Anda en web
 // Mutual22://dev-ohss4vph.auth0.com/cordova/Mutual22/callback, http://localhost:8100/callback, http://localhost:8100/,

 // logout url
//  http://localhost:8100/login, http://localhost, ionic://localhost, http://localhost:8100, 


// ionic cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME=mutual22 --variable ANDROID_SCHEME=mutual22 --variable ANDROID_HOST=dev-ohss4vph.auth0.com --variable ANDROID_PATHPREFIX=/cordova/mutual22/callback
