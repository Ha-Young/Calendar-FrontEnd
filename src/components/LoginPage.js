import React from 'react';

import firebase from '../utils/firebase';
import Button from './Button';

export default function LoginPage() {
  function handleClick() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  return (
    <>
    <h1>로그인을 먼저 해주세요</h1>
    <Button onClick={handleClick} value="Google Login" />
    </>
  );
}
