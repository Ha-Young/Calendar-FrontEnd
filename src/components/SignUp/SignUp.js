import React, { useState, useEffect } from 'react';

import styles from './SignUp.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth } from '../../firebase';

export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async ev => {
    ev.preventDefault();

    const { email, password, confirmPassword } = inputValue;

    if (password !== confirmPassword) {
      setError('패스워드가 일치하지 않습니다.');
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      setInputValue({ email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.warn('Sign Up Error', error);
      setError(error.message);
    }
  };

  const handleChange = ev => {
    const { type: name, value } = ev.target;

    setInputValue(prev => ({
      ...prev,
      [name]: value,
    }));

    setError(null);
  };

  return (
    <div className={styles.SignUp}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          name='email'
          type='text'
          label='Email'
          value={inputValue.email}
          handleChange={handleChange}
          required
        />
        <CustomInput
          name='password'
          type='password'
          label='Password'
          value={inputValue.password}
          handleChange={handleChange}
          required
        />
        <CustomInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          value={inputValue.confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
      {error && <span className={styles.error}>{`😡 ${error}`}</span>}
    </div>
  );
}
