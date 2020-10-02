import React from 'react';

import styles from './SignInAndSignUp.module.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

export default function SignInAndSignUp() {
  return (
    <>
      <h3 className={styles.calendarName}>CARROT CALENDAR</h3>
      <h1 className={styles.title}>Sign In & Sign Up</h1>
      <div className={styles.container}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}
