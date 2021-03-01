import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyCg7LdWWFq-pWBsykO-2w5I-bcZP5dvAlo",
  authDomain: "calendar-viewer-1d702.firebaseapp.com",
  databaseURL: "https://calendar-viewer-1d702-default-rtdb.firebaseio.com",
  projectId: "calendar-viewer-1d702",
  storageBucket: "calendar-viewer-1d702.appspot.com",
  messagingSenderId: "992537971735",
  appId: "1:992537971735:web:900d54177dc245835e2052"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
