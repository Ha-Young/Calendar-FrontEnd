import React from 'react';

import styles from './SignInAndSignUp.module.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

export default function SignInAndSignUp() {
  return (
    <>
      <h2 className={styles.title}>Sign In & Sign Up</h2>
      <div className={styles.container}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}
