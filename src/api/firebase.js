import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyCAR1iuW8IEk-FTO8yQ4Dw0HEX9ZnGC9gA",
  authDomain: "vaco-calnedar.firebaseapp.com",
  databaseURL: "https://vaco-calnedar-default-rtdb.firebaseio.com",
  projectId: "vaco-calnedar",
  storageBucket: "vaco-calnedar.appspot.com",
  messagingSenderId: "502627325682",
  appId: "1:502627325682:web:a10204c10f5c5a5bc0626b"
};// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
