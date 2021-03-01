import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyAvIy6eaEoC9QbwJEWaIrv3B3F38Eneu9A",
  authDomain: "calendar-viewer-a72b6.firebaseapp.com",
  databaseURL: "https://calendar-viewer-a72b6-default-rtdb.firebaseio.com",
  projectId: "calendar-viewer-a72b6",
  storageBucket: "calendar-viewer-a72b6.appspot.com",
  messagingSenderId: "534521528616",
  appId: "1:534521528616:web:31c0d6f1f28d140318501d",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
