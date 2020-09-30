import React, { useEffect } from 'react';
import styles from './App.module.css';
import { saveSampleData } from '../../utils/api';
import LogIn from '../LogIn/LogIn'

function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <LogIn />
    </div>
  );
}

export default App;
