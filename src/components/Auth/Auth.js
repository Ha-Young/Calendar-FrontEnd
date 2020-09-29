import React, { useState, useEffect } from 'react';
import { authService } from '../../utils/firebase';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const Logout = () => {
    authService.signOut().then(console.log);
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
        break;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
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
        !isLoggedIn ?
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
            <Link to="/events/new">
              <button className={styles.AddEventButton}>add event</button>
            </Link>
          </>
      }
    </>
  )
};

export default Auth;