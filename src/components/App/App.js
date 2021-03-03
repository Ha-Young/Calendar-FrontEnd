import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import moment from 'moment';

import Header from "../../containers/Header";
import Calendar from '../../containers/Calendar';
import Background from '../publicComponent/Background/Background';
import { DAILY_MODE } from "../../constants/dateFormats";

function App({ initStore }) {
  
  useEffect(() => {
    const currentDate = moment().format('YYYY-M-D');
    const currentWeekSunday = moment().day(0).format('YYYY-M-D');
    const currentWeekSaturday = moment().day(6).format('YYYY-M-D');
    const currentWeek = currentWeekSunday + '/' + currentWeekSaturday;
    const initCalendarMode = DAILY_MODE;
    initStore(currentDate, currentWeek, initCalendarMode);
  }, []);

  return (
    <Background>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Calendar />
          </Route>
          <Route path="/event" exact>
            <div>Event 상세</div>
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
