import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjDXtEiHyMJBO4ikWCIWFljTxEmjFKVz4",
  authDomain: "vanilla-calendar-26d51.firebaseapp.com",
  databaseURL: "https://vanilla-calendar-26d51-default-rtdb.firebaseio.com",
  projectId: "vanilla-calendar-26d51",
  storageBucket: "vanilla-calendar-26d51.appspot.com",
  messagingSenderId: "298929391198",
  appId: "1:298929391198:web:a69a4906183349f63cd6cf",
  measurementId: "G-W1J81VYLHJ"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
