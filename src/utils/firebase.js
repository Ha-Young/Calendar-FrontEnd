import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEYS,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
