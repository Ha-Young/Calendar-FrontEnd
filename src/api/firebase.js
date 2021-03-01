import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2eOak4H8L6Zubk_76y7rQfP-0qu_25d0",
  authDomain: "kingcalendar.firebaseapp.com",
  databaseURL: "https://kingcalendar-default-rtdb.firebaseio.com",
  projectId: "kingcalendar",
  storageBucket: "kingcalendar.appspot.com",
  messagingSenderId: "120802554404",
  appId: "1:120802554404:web:18e0e3bfa02ee30f679eb1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
