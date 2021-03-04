import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Modal from '../../containers/Modal';
import MonthlyCalendar from '../Main/MonthlyCalendar';
import Event from '../../containers/EventPage';
import WeeklyCalendar from '../../containers/WeeklyCalendar';
import DailyCalendar from '../../containers/DailyCalendar';

function App({ onInitialLoad }) {
  useEffect(() => {
  
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
        <Route exact path='/weeklycalendar/:date'>
          <Modal />
        </Route>
        <Route exact path='/dailycalendar/:date'>
          <Modal />
        </Route>
        <Route path='/dailycalendar/dailyevent/:date'>
          <Event />
        </Route>
        <Route path='/weeklycalendar/weeklyevent/:date'>
          <Event />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
