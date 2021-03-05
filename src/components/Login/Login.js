import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import { loginWithGoogleAccount } from "../../api/googleLogin";
import { FcGoogle } from "react-icons/fc";
import { FaSmileWink } from "react-icons/fa";
import styles from "./Login.module.scss";

export default function Login({ setUserId, userId }) {

  const signIn = async () => {
    const userId = await loginWithGoogleAccount();
    setUserId(userId, true);
  }

  return (
    <div className={styles.Login}>
          <div className={styles.LoginBox}>
            {userId === ""
              ? (
                <>
                  <p className={styles.title}>CALENDAR VIEWER</p>
                  <Link to="/">
                    <Button type="button" handleClickEvent={signIn}>
                      <FcGoogle className={styles.googleIcon} />
                      <span>구글 계정으로 로그인</span>
                    </Button>
                  </Link>
                </>
              )
              : (
                <>
                  <FaSmileWink className={styles.smileIcon}/>
                  <p className={styles.title}>Welcome!</p>
                  <p>Calender Viewer에 오신 것을 환영합니다.</p>
                </>
              )
            }
          </div>
    </div>
  )
}
