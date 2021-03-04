import React from "react";
import Button from "../Shared/Button";
import { loginWithGoogleAccount } from "../../api/index";
import { FcGoogle } from "react-icons/fc";
import styles from "./Login.module.scss";

export default function Login({ saveUserId }) {

  const signIn = async () => {
    const userId = await loginWithGoogleAccount();
    saveUserId(userId);
  }

  return (
    <div className={styles.Login}>
      <div className={styles.GoogleLoginBox}>
        <p>CALENDAR VIEWER</p>
        <Button type="button" handleClickEvent={signIn}>
          <FcGoogle className={styles.icon} />
          <span>구글 계정으로 로그인</span>
        </Button>
      </div>
    </div>
  )
}
