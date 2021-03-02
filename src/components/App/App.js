import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import MonthlyCalendar from '../Main/MonthlyCalendar';
import WeeklyCalendar from '../Main/WeeklyCalendar';

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <MonthlyCalendar />
        </Route>
        <Route path='/weeklycalendar'>
          <WeeklyCalendar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
