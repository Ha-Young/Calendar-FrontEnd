import { Button } from "antd";
import React from "react";

import { signInWithGoogle } from "../../api/firebase";
import styles from "./Login.module.css";

function Login({ onLoginComplete }) {
  async function handleGoogleLoginClick() {
    const result = await signInWithGoogle();

    const user = result.user;

    const newUser = {
      id: user.uid,
      email: user.email,
      photoURL: user.photoURL,
    };

    onLoginComplete(newUser);
  }
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginForm} >
        <h2>로그인</h2>
        <Button onClick={handleGoogleLoginClick}>Google로 로그인</Button>
      </div>
    </div>
  );
}

export default Login;
