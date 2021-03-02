import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import moment from 'moment';

import Header from "../Header/Header";
import Calendar from '../Calendar/Calendar';
import Background from '../publicComponent/Background/Background';
import { useDispatch } from "react-redux";
import { changeCalendarMode, setCurrentDate, setCurrentWeek } from "../../actions";

function App() {
  const dispatchReducers = useDispatch();
  
  useEffect(() => {
    const currentDate = moment().format('YYYY-M-D');
    const currentWeekSunday = moment().day(0).format('YYYY-M-D');
    const currentWeekSaturday = moment().day(6).format('YYYY-M-D');
    dispatchReducers(setCurrentDate(currentDate));
    dispatchReducers(setCurrentWeek(currentWeekSunday + '-' + currentWeekSaturday));
    dispatchReducers(changeCalendarMode('daily'));
  }, []);

  return (
    <Background>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Calendar></Calendar>
          </Route>
          <Route path="/event" exact>
            <div>Event</div>
          </Route>
          <Route path="/event/new" exact>
            <div>New</div>
          </Route>
        </Switch>
      </div>
    </Background>
  );
}

export default App;
