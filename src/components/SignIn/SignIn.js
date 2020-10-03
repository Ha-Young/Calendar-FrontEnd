import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import styles from './SignIn.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase';

export default function SignIn() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async ev => {
    ev.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(
        inputValue.email,
        inputValue.password
      );
      setInputValue({ email: '', password: '' });
    } catch (error) {
      console.warn('Sign In Error', error);
      setError(error.message);
    }
  };

  const handleChange = ev => {
    const { type, value } = ev.target;

    setInputValue(prev => ({
      ...prev,
      [type]: value,
    }));

    setError(null);
  };

  return (
    <div className={styles.SignIn}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type='email'
          label='Email'
          value={inputValue.email}
          handleChange={handleChange}
          required
        />
        <CustomInput
          type='password'
          label='Password'
          value={inputValue.password}
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
