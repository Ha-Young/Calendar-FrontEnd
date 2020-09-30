import React from "react";
import { authService, firebaseInstance } from "../../utils/firebase";

export default function Auth () {
  const onSocialClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = await authService.signInWithPopup(provider);
  };

  return (
    <button onClick={onSocialClick}>Continue with Google</button>
  );
}

