import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyDVvDBoQV7mvO4oxsTZ7N9ZC_ohL-elAeY",
  authDomain: "calendar-5fd53.firebaseapp.com",
  databaseURL: "https://calendar-5fd53.firebaseio.com",
  projectId: "calendar-5fd53",
  storageBucket: "calendar-5fd53.appspot.com",
  messagingSenderId: "193401623164",
  appId: "1:193401623164:web:47d904ea96b7b27867aff9",
  measurementId: "G-FFQTW6YY7N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
