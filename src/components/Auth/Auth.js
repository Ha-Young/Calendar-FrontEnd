import React from "react";
import { authService, firebaseInstance } from "../../utils/firebase";
import styles from "./Auth.module.css";
import Button from "../Header/Button";
import { MdImportContacts } from "react-icons/md";

export default function Auth () {
  const onSocialClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };

  return (
    <main className={styles.Auth}>
      <MdImportContacts size="7rem" />
      <h1>Calendar</h1>
      <Button
        onClick={onSocialClick}
        title="Continue with Google"
      />
    </main>
  );
}
