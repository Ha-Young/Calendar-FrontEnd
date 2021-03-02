import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SETTING = {
  API_KEY: process.env.REACT_APP_API_KEY,
  AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
  DATA_BASE_URL: process.env.REACT_APP_DATA_BASE_URL,
  PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
  STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.REACT_APP_MESSAGING_SENDER_ID,
  APP_ID: process.env.REACT_APP_APP_ID,
}

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: SETTING.API_KEY,
  authDomain: SETTING.AUTH_DOMAIN,
  databaseURL: SETTING.DATABASE_URL,
  projectId: SETTING.PROJECT_ID,
  storageBucket: SETTING.STORAGE_BUCKET,
  messagingSenderId: SETTING.MESSAGING_ID,
  appId: SETTING.APP_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
