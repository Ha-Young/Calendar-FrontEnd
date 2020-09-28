import React from 'react';
import firebase from 'firebase/app';
import styles from './LogIn.module.css';
import { FcGoogle } from 'react-icons/fc';

export default function LogIn ({ setIsLogIn }) {

  const onLogIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log("Login Success");
        console.log(user);
        console.log(token);
      }).catch(error => {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in");
        console.log(user.displayName, user.email);
        setIsLogIn({
          isLogIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      } else {
        console.log("User signed in");
      }
    });
  };

  return (
    <div>
      <button className={styles.LogIn} onClick={onLogIn}>
        <FcGoogle className={styles.logo}/>
        Sign in with Coogle
      </button>
    </div>
  );
}
