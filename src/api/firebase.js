import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyAqY_qvyU9E0m8D0S8ZdXk9VL8tlv4ssIc",
  authDomain: "mocking-calendar-viewer.firebaseapp.com",
  databaseURL: "https://mocking-calendar-viewer-default-rtdb.firebaseio.com",
  projectId: "mocking-calendar-viewer",
  storageBucket: "mocking-calendar-viewer.appspot.com",
  messagingSenderId: "470682663037",
  appId: "1:470682663037:web:51096121bf5d8d0d3a9914",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
