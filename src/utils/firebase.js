import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'calendar-toggo.firebaseapp.com',
  databaseURL: 'https://calendar-toggo.firebaseio.com',
  projectId: 'calendar-toggo',
  storageBucket: 'calendar-toggo.appspot.com',
  messagingSenderId: '118110214373',
  appId: '1:118110214373:web:1d3a6668d814d4d5b19c0c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
