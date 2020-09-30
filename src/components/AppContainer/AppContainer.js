import React, { useEffect } from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import AppRouter from '../Router/Router'
import { connect } from 'react-redux';
import { loggin } from '../../action/action';
import styles from './App.module.css';
export const AppContainer = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className={styles.App}>
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.boolean
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoggedIn: boolean => { dispatch(loggin(boolean)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
