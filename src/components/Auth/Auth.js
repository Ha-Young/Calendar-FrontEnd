import React from "react";
import { authService, firebaseInstance } from "../../utils/firebase";
import { MdImportContacts } from "react-icons/md";
import styles from "./Auth.module.css";
import Button from "../Header/Button";

export default function Auth () {
  const handleSocialLogin = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };

  return (
    <main className={styles.Auth}>
      <MdImportContacts size="7rem" />
      <h1>Calendar</h1>
      <Button
        title="Continue with Google"
        onClick={handleSocialLogin}
      />
    </main>
  );
}
