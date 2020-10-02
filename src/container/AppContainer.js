import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../components/App';
import { authService, dataService } from '../utils/api';
import { reduceSnapshot } from '../utils/utilFunction';
import * as UserStateActions from '../actions';

function AppContainer({ isLogin, currentUserID, setUser, setInitData }) {
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [setUser]);

  useEffect(() => {
    if (!currentUserID) return;

    dataService.ref(`/calendar/userId/${currentUserID}/events`)
      .on('value', (snapshot) => {
        setInitData(reduceSnapshot(snapshot.val()));
        setIsLoading(false);
      });
  }, [currentUserID, setInitData]);

  return (
    <App isLogin={isLogin} isLoading={isLoading}/>
  );
}

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    currentUserID: state.user?.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserStateActions, dispatch);
}

AppContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentUserID: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setInitData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
