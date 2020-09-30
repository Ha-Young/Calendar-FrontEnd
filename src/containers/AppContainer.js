import React, { useState, useEffect } from 'react';
import { authService } from '../utils/firebase';
import { App } from '../components/App/App';
import { connect } from 'react-redux';
import { loggin } from '../action/action';
import { formatDistance, subDays } from 'date-fns'

export const AppContainer = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user.email, true);
      } else {
        setIsLoggedIn(user.email, false);
      }
    });
  }, []);

  const Logout = () => {
    authService.signOut();
    setIsLoggedIn(false);
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
            <App />
          </>
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoggedIn: (user, isLoggedIn) => { dispatch(loggin(user, isLoggedIn)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
