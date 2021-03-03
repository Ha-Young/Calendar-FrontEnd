import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyAH8Uul5ZFOvVc0Tdh4ZA0SFPkDNcFSs88",
  authDomain: "calendar-viewer-b602e.firebaseapp.com",
  databaseURL: "https://calendar-viewer-b602e-default-rtdb.firebaseio.com/",
  projectId: "calendar-viewer-b602e",
  storageBucket: "calendar-viewer-b602e.appspot.com",
  messagingSenderId: "95835663215",
  appId: "1:95835663215:web:b60f6ca81e17d90da1569a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
