import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MonthlyCalendar from '../Main/MonthlyCalendar';
import WeeklyCalendar from '../Main/WeeklyCalendar';
import DailyCalendar from '../Main/DailyCalendar';

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MonthlyCalendar />
        </Route>
        <Route exact path='/weeklycalendar'>
          <WeeklyCalendar />
        </Route>
        <Route path='/dailycalendar'>
          <DailyCalendar />
        </Route>
        <Route exact path='/weeklycalendar/:keyId'>
          <Modal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
