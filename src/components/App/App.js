import React, { useEffect } from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import { saveSampleData } from '../../utils/api';
import AppRouter from '../Router/Router'

function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
}

export default App;
