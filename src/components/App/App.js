import React, { useEffect } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api'

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Route to="/" render={() => (<div>Main</div>)} />
      <Route to="/event" render={() => (<div>Event</div>)} />
    </div>
  );
}

export default App;
