import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:
    "https://vanillacoding-calendar-viewer-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
console.log(
  `REACT_APP_FIREBASE_DATA_BASE_URL = ${process.env.REACT_APP_FIREBASE_DATA_BASE_URL}`
);

console.log(
  process.env.REACT_APP_FIREBASE_DATA_BASE_URL ===
    "https://vanillacoding-calendar-viewer-default-rtdb.firebaseio.com"
);

console.log(typeof process.env.REACT_APP_FIREBASE_DATA_BASE_URL);
export default firebase;
