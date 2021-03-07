import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import Header from "../../containers/Header/HeaderContainer";
import DayCalendar from "../../containers/CalendarContainer/DayCalendar";
import WeekCalendar from "../../containers/CalendarContainer/WeekCalendar";
import NewEvent from "../EventPage/NewEvent/NewEvent";
import EventDetail from "../../containers/EventContainer/EventDetail"
import { CALENDAR, DEFAULT, EVENT } from "../../constants/address";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path={CALENDAR.DAY} component={DayCalendar} />
        <Route path={CALENDAR.WEEK} component={WeekCalendar} />
        <Route path={EVENT.NEW} component={NewEvent} />
        <Route path={EVENT.DETAIL} component={EventDetail} />
        <Redirect from={DEFAULT} to={CALENDAR.DAY} />
      </Switch>
    </div>
  );
}

export default App;
