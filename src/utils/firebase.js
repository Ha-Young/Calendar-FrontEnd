import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: Enter your own config object
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_ID',
  appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
