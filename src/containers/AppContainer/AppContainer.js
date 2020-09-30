import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './AppContainer.module.css';
import Header from '../../components/Header/Header';

import { auth } from '../../firebase';
import saveSampleData from '../../firebase/saveSampleData';
import registerUserProfile from '../../firebase/registerUserProfile';

import { setCurrentUser } from '../../redux/user/user-actions';

const AppContainer = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    saveSampleData();
  }, []);

  useEffect(() => {
    console.log('useEffect by', setCurrentUser);
    const setCurruntUserBySnapShot = async userAuth => {
      if (userAuth) {
        const userSnapShot = await registerUserProfile(userAuth).once('value');

        console.log('userSnapShot', userSnapShot);
        console.log('userSnapShot.val()', userSnapShot.val());

        setCurrentUser({ ...userSnapShot.val() });
      } else {
        setCurrentUser(null);
      }
    };

    const unsubscribeAuth = auth.onAuthStateChanged(setCurruntUserBySnapShot);

    return unsubscribeAuth;
  }, [setCurrentUser]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div>DashBoard</div>
        </Route>
        <Route path='/event'>
          <div>Event</div>
        </Route>
        <Route
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <div>Sign In And Sign Up</div>
          }
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
