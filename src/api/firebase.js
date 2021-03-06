import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
var firebaseConfig = {
  apiKey: "AIzaSyBObR6_K47_NQr8nt7fGfMoHgzKEQuiHhQ",
  authDomain: "vanillacoding-calendar-viewer.firebaseapp.com",
  databaseURL:
    "https://vanillacoding-calendar-viewer-default-rtdb.firebaseio.com",
  projectId: "vanillacoding-calendar-viewer",
  storageBucket: "vanillacoding-calendar-viewer.appspot.com",
  messagingSenderId: "570533634013",
  appId: "1:570533634013:web:60bf55df4de0442adea034",
  measurementId: "G-NB49T4B12H",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
