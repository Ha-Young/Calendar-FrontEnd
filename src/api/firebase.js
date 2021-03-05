import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_CALENDAR_API_KEY,
  authDomain: process.env.REACT_APP_CALENDAR_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_CALENDAR_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_CALENDAR_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CALENDAR_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_CALENDAR_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
