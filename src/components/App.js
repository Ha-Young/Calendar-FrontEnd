import React from 'react';
import PropTypes from 'prop-types';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

export default function App({ isLogin, isLoading }) {
  return (
    isLogin ?
      <MainPage isLoading={isLoading}/>
    :
      <LoginPage />
  );
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
