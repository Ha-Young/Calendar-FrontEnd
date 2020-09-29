import React from 'react';
import PropTypes from 'prop-types';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

export default function App({ isLogin }) {
  return (
    isLogin
    ?
      <MainPage />
    :
      <LoginPage />
  );
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
