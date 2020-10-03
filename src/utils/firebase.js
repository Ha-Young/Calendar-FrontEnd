import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyBOe32pG_A182iM1Y6GYgcTgWXG2uUNM5I",
  authDomain: "calender-viewer-af33c.firebaseapp.com",
  databaseURL: "https://calender-viewer-af33c.firebaseio.com",
  projectId: "calender-viewer-af33c",
  storageBucket: "calender-viewer-af33c.appspot.com",
  messagingSenderId: "305218919236",
  appId: "1:305218919236:web:db58815a88c05b426c9511",
  measurementId: "G-79S8NY5N0D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
