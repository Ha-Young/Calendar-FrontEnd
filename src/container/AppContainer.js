import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import firebase from '../utils/firebase';
import { setUser } from '../actions';
import App from '../components/App';

const defaultAuth = firebase.auth();

function AppContainer({ isLogin, setUser }) {
  useEffect(() => {
    defaultAuth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [setUser]);

  return (
    <App isLogin={isLogin}/>
  );
}

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser(userData) {
      dispatch(setUser(userData));
    },
  };
}

AppContainer.propTypes = {
  isLogin: Proptypes.bool.isRequired,
  setUser: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
