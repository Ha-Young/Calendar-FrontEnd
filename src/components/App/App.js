import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Modal from '../../containers/Modal';
import MonthlyCalendar from '../Main/MonthlyCalendar';
import WeeklyCalendar from '../../components/Main/WeeklyCalendar';
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
        <Route exact path='/dailycalendar'>
          <DailyCalendar />
        </Route>
        <Route exact path='/weeklycalendar/:keyId'>
          <Modal />
        </Route>
        <Route path='/dailycalendar/:keyId'>
          <Modal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
