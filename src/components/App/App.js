import React, { useEffect } from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api';
import AppRouter from '../Router/Router'
// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
