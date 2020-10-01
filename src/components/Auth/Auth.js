import React from "react";
import { authService, firebaseInstance } from "../../utils/firebase";
import styles from "./Auth.module.css";
import Button from "../Header/Button";

export default function Auth () {
  const onSocialClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };

  return (
    <main className={styles.Auth}>
      <h1>Calendar</h1>
      <Button
        onClick={onSocialClick}
        title="Continue with Google"
      />
    </main>
  );
}
