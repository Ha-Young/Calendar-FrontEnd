import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { observeAuthService, getDateFromFirebase } from '../utils/api';

export default function App({
  isLogin,
  currentUserID,
  setUser,
  setInitData
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    async function initAuthService() {
      const currentUserState = await observeAuthService();
      setUser(currentUserState);
    }

    initAuthService();
  }, [setUser]);

  useEffect(() => {
    if (!currentUserID) return;

    getDateFromFirebase({
      uid: currentUserID,
      success: (data) => setInitData(data),
      fail: (errMessage) => setErrMessage(errMessage),
      final: () => setIsLoading(false),
    });
  }, [currentUserID, setInitData]);

  return (
    errMessage ?
      <p>{errMessage}</p>
    :
      isLogin ?
        <MainPage isLoading={isLoading}/>
      :
        <LoginPage />
  );
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentUserID: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  setInitData: PropTypes.func.isRequired,
};
