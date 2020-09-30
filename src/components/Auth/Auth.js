import React, { useState, useEffect } from 'react';
import { authService } from '../../utils/firebase';
import styles from './Auth.module.css';

const Auth = ({ login, setLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [login]);

  const Logout = () => {
    authService.signOut();
    setLogin(false);
    setIsNewAccount(false);
    setEmail('');
    setPassword('');
  };

  const onChange = (event) => {
    const { target: { name, value } } = event;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data; //data 전달 사용 안함
    try {
      if (isNewAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);

      if (error.code === "auth/wrong-password") {
        setIsNewAccount(false);
      } else if (error.code === 'auth/user-not-found') {
        setIsNewAccount(true);
      }
    }
  };

  return (
    <>
      {
        !login ?
          <>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                name='email'
                placeholder='Email'
                required
                value={email}
                onChange={onChange}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
                value={password}
                onChange={onChange}
              />
              <input type='submit' value={isNewAccount ? 'Create Account' : 'Login'} />
            </form>
            <p>{error}</p>
          </>
          :
          <>
            <div>{email}</div>
            <button onClick={Logout}>Logout</button>
          </>
      }
    </>
  )
};

export default Auth;
