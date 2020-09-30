import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import styles from './SignIn.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async ev => {
    ev.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.warn('Sign In Error', error);
      setError(error.message);
    }
  };

  const handleChange = ev => {
    const { value, type } = ev.target;

    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }

    setError(null);
  };

  return (
    <div className={styles.SignIn}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type='email'
          label='email'
          value={email}
          handleChange={handleChange}
          required
        />
        <CustomInput
          type='password'
          label='password'
          value={password}
          handleChange={handleChange}
          required
        />
        <div className={styles.buttons}>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle}>
            Sign In With
            <FcGoogle size={22} />
          </CustomButton>
        </div>
      </form>
      {error && <span className={styles.error}>{`😡 ${error}`}</span>}
    </div>
  );
}
