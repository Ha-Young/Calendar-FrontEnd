import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import styles from './AppContainer.module.scss';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import NewEvent from '../../components/NewEvent/NewEvent';
import EventDetail from '../../components/EventDetail/EventDetail';
import SignInAndSignUp from '../../components/SignInAndSignUp/SignInAndSignUp';

import { auth } from '../../firebase';
import { registerUserProfile } from '../../firebase/utils/user';

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
              <CalendarContainer />
            </Route>
            <Route path='/events/new'>
              <NewEvent createdBy={currentUser.uid} />
            </Route>
            <Route path='/events/:eventId'>
              <EventDetail createdBy={currentUser.uid} />
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