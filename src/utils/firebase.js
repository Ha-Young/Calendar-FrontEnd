import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FIREBASE_API_KEY, FIREBASE_AUTHDOMAIN, FIREBASE_DATABASEURL, FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET, FIREBASE_MESSAGINGSENDERID, FIREBASE_APPID } from "../config/calender";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
