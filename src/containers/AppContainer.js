import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loggin, setCalendarType } from 'action/action';
import { App } from 'components/App/App';
import { authService } from 'utils/firebase';

export const AppContainer = ({ isLoggedIn, setIsLoggedIn, setCalendarType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      authService.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(user.uid, true);
        } else {
          setIsLoggedIn(null, false);
        }
      });
    } catch (error) {
      console.error(error.message);
    }
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

    try {
      if (isNewAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
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
            <App onCalendarTypeChange={setCalendarType} />
          </>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLogin,
    calendarType: state.calendarType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoggedIn: (user, isLoggedIn) => { dispatch(loggin(user, isLoggedIn)) },
    setCalendarType: (calendarType) => { dispatch(setCalendarType(calendarType)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
