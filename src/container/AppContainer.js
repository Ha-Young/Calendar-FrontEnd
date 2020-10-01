import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../components/App';
import { authService, dataService } from '../utils/api';
import { reduceSnapshot } from '../utils/utilFunction';
import { setUser, setInitData } from '../actions';

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
  return {
    setUser(userData) {
      dispatch(setUser(userData));
    },
    setInitData(data) {
      dispatch(setInitData(data));
    },
  };
}

AppContainer.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentUserID: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setInitData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
