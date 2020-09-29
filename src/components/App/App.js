import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
// import LogIn from '../LogIn/LogIn'
import { saveSampleData } from '../../utils/api';
import LogIn from '../LogIn/LogIn'

function App() {

  useEffect(() => {
    saveSampleData();
  }, []);


  return (
    <>
      <div className={styles.App}>
        <LogIn />
      </div>
    </>
  );
}
export default App;
