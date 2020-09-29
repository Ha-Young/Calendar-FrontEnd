import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../AppHeader/AppHeader';
import { saveSampleData } from '../../utils/api';
import Calendar from '../Calendar/Calendar';

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path='/calendar' exact>
          <div>Main</div>
        </Route>
      </Switch>
      <Calendar />
    </div>
  );
}

export default App;
