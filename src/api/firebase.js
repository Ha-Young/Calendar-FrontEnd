import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SETTING = {
  API_KEY: process.env.API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  DATA_BASE_URL: process.env.DATA_BASE_URL,
  PROJECT_ID: "vanilla-calendar-96dfa",
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  APP_ID: process.env.APP_ID,
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
