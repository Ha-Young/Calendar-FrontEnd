import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: 'AIzaSyDDCJRLFsxrD4Gmsv2SBYRXPq-kMjouLHQ',
  authDomain: 'calender-b863f.firebaseapp.com',
  databaseURL: 'https://calender-b863f.firebaseio.com',
  projectId: 'calender-b863f',
  storageBucket: 'calender-b863f.appspot.com',
  messagingSenderId: '881861819445',
  appId: '1:881861819445:web:0f12dbedd605720758057c'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
