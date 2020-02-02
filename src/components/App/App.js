import React, { useEffect } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api'

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
