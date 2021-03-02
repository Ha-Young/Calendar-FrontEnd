import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyCTrcxnv_n2XTO9Lm00saqMJg5V1Hxz3gE",
  authDomain: "vaco-calendar-viewer.firebaseapp.com",
  databaseURL: "https://vaco-calendar-viewer-default-rtdb.firebaseio.com",
  projectId: "vaco-calendar-viewer",
  storageBucket: "vaco-calendar-viewer.appspot.com",
  messagingSenderId: "338122815300",
  appId: "1:338122815300:web:3c938fbd45f80b55c40911",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
