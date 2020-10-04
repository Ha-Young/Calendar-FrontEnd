import React from 'react';

import Button from './Button';
import firebase from '../utils/firebase';

export default function LoginPage() {
  function handleClick() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  return (
    <>
      <h1>로그인을 먼저 해주세요</h1>
      <Button onClick={handleClick} buttonText='Google Login'/>
    </>
  );
}
