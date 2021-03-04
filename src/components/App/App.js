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
      <Switch>
        <Route path="/event/key" exact>
          <div className={styles.modal}>Event 상세</div>
        </Route>
        <Route path="/">
        <div className={styles.AppContainer}>
          <DateNavigator direction={LEFT} onClick={moveDate(calendarMode, currentDate)} />
          <div className={styles.App}>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Calendar />
              </Route>
              <Route path="/event/new" exact>
                <ScheduleCreateForm />
              </Route>
            </Switch>
          </div>
          <DateNavigator direction={RIGHT} onClick={moveDate(calendarMode, currentDate)} />
        </div>
        </Route>
      </Switch>
    </Background>
  );
}

export default App;
