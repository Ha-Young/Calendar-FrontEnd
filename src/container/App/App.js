import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import styles from './App.module.scss';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';
import Calendar from '../Calendar/Calendar';
import NewEvent from '../../components/NewEvent/NewEvent';
import SignInAndSignUp from '../../components/SignInAndSignUp/SignInAndSignUp';

import { auth } from '../../firebase';
import registerUserProfile from '../../firebase/utils/registerUserProfile';

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userSnapShot = await registerUserProfile(user);
        setCurrentUser({ ...userSnapShot.val() });
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribeAuth;
  }, [setCurrentUser]);

  return (
    <div className={styles.App}>
      {!currentUser ? (
        <SignInAndSignUp />
      ) : (
        <>
          <Header isLoggedIn={!!currentUser} />
          <Switch>
            <Route exact path='/'>
              <UserProfile user={currentUser} />
            </Route>
            <Route path='/calendar'>
              <Calendar />
            </Route>
            <Route path='/events/new'>
              <NewEvent createdBy={currentUser.uid} />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
