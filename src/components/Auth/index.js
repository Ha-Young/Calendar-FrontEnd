import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import styles from "./LogIn.module.css";
import { FcGoogle } from "react-icons/fc";
import { SiGooglecalendar } from "react-icons/si";
import CalendarContainer from "../../containers/CalendarContainer";

export default function Auth ({
  logInState,
  userName,
  userEmail,
  userPhotoUrl,
  setLogIn,
}) {
  useEffect(() => {
    if (!logInState) return;

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        alert(`안녕하세요 ${result.user.displayName}님 🤓`)
        console.log(userName)
      })
      .catch(error => {
        alert(`로그인에 실패하였습니다. 다시 확인해주세요`)
      });
  }, [logInState]);

  return (
    <div className={styles.container}>
      {logInState
      ? <CalendarContainer />
      : <div className={styles.contents}>
          <div className={styles.title}>
            Coogle Calendar
            <SiGooglecalendar className={styles.calendar_logo} />
          </div>
          <button className={styles.login_btn} onClick={setLogIn}>
            <FcGoogle className={styles.google_logo} />
            Sign in with Coogle
          </button>
        </div>
      }
    </div>
  );
}
