import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import moment from 'moment';
import { DAILY_MODE, YYYYMD } from "../../constants/dateFormats";
import { LEFT, RIGHT } from "../../constants/constants";
import { getThisWeekSunAndSat } from "../../utils/dateUtil";

import Header from "../../containers/Header";
import Calendar from '../../containers/Calendar';
import Background from '../publicComponent/Background/Background';
import DateNavigator from '../DateNavigator/DateNavigator';
import ScheduleCreateForm from '../../containers/ScheduleCreateForm';
import ScheduleDetail from '../../containers/ScheduleDetail';

function App({ currentDate, calendarMode, initStore, moveDate, onInitialLoad }) {
  
  useEffect(() => {
    const currentDate = moment().format(YYYYMD);
    const currentWeek = getThisWeekSunAndSat(currentDate);
    const initCalendarMode = DAILY_MODE;
    initStore(currentDate, currentWeek, initCalendarMode);
    //onInitialLoad();
  }, []);

  return (
    <Background>
      <div className={styles.AppContainer}>
        <DateNavigator direction={LEFT} onClick={moveDate(calendarMode, currentDate)} />
        <div className={styles.App}>
          <Header />
          <Switch>
            <Route path="/" exact component={Calendar} />
            <Route path="/event/new" component={ScheduleCreateForm} />
            <Route path="/event/:key1" component={ScheduleDetail} />
          </Switch>
        </div>
        <DateNavigator direction={RIGHT} onClick={moveDate(calendarMode, currentDate)} />
      </div>
    </Background>
  );
}

export default App;
