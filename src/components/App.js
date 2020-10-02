import React from 'react';
import PropTypes from 'prop-types';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import Modal from '../components/Modal';

export default function App({ isLogin, isLoading }) {
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
};
