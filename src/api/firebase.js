import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyCIgtbQFASJKG4WQ-_HXlyWO-4hS9SVsJw",
  authDomain: "calendar-d255d.firebaseapp.com",
  projectId: "calendar-d255d",
  storageBucket: "calendar-d255d.appspot.com",
  messagingSenderId: "802260962582",
  appId: "1:802260962582:web:bc80f12ea779acfd485437",
  measurementId: "G-028E39V14H"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
