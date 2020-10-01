import React, { useState } from 'react';

import styles from './SignUp.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth } from '../../firebase';

export default function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if (password !== confirmPassword) {
      setError('패스워드가 일치하지 않습니다.');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({ displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.warn('Sign Up Error', error);
      setError(error.message);
    }
  };

  return (
    <div className={styles.SignUp}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={ev => {
            setDisplayName(ev.target.value);
            setError(null);
          }}
          required
        />
        <CustomInput
          type='text'
          name='email'
          label='Email'
          value={email}
          onChange={ev => {
            setEmail(ev.target.value);
            setError(null);
          }}
          required
        />
        <CustomInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={ev => {
            setPassword(ev.target.value);
            setError(null);
          }}
          required
        />
        <CustomInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={ev => {
            setConfirmPassword(ev.target.value);
            setError(null);
          }}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
      {error && <span className={styles.error}>{`😡 ${error}`}</span>}
    </div>
  );
}
