import "firebase/auth";
import "firebase/database";

import firebase from "firebase/app";

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: "AIzaSyAvhk_t4USS0XKZJea_pWHbcyjeDb_CrWw",
  authDomain: "vaco-calendar-7a9c7.firebaseapp.com",
  databaseURL: "https://vaco-calendar-7a9c7-default-rtdb.firebaseio.com",
  projectId: "vaco-calendar-7a9c7",
  storageBucket: "vaco-calendar-7a9c7.appspot.com",
  messagingSenderId: "390533237521",
  appId: "1:390533237521:web:37b18e11ccd70cba475ab0",
  measurementId: "G-2Z2Z9T7VSV",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
