import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/Modal';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { authService, dataService } from '../utils/api';
import { reduceSnapshot } from '../utils/utilFunction';

export default function App({
  isLogin,
  currentUserID,
  setUser,
  setInitData
}) {
  const [isLoading, setIsLoading] = useState(true);

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
    isLogin ?
      <MainPage isLoading={isLoading}/>
    :
      <Modal>
        <LoginPage />
      </Modal>
  );
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentUserID: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setInitData: PropTypes.func.isRequired,
};
