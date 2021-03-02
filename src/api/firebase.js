import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyARZXJ7CBDN1OpWyLPpDV_tzKMCSpsL1Sk",
  authDomain: "calenderviewer-662ce.firebaseapp.com",
  databaseURL: "https://calenderviewer-662ce-default-rtdb.firebaseio.com",
  projectId: "calenderviewer-662ce",
  storageBucket: "calenderviewer-662ce.appspot.com",
  messagingSenderId: "870045493730",
  appId: "1:870045493730:web:957afe63899c60187fb1bb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
