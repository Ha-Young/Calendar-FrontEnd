import React from 'react';
import firebase from './utils/firebase';
import { authService } from './utils/api';

const onSocialAuthClick = async event => {
  const { target: { name } } = event;
  let provider;

  if (name === "GoogleAuth") {
    provider = new firebase.auth.GoogleAuthProvider();
  } else if (name === "") {

  }
  const authData = await authService.signInWithPopup(provider);
  console.log(authData);
};

const Auth = () => {
  return (
    <button
      name="GoogleAuth"
      onClick={onSocialAuthClick}
    >
      goolgeLogin
    </button>
  );
}

export default Auth;