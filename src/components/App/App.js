import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main/";
import EventFormContainer from "../../containers/EventFormContainer";
import InvaildIdModal from "../InvailIdModal";

function App({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  moveToToday,
  eventInfoList,
}) {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/calendar" exact>
          <Header
            currentDate={currentDate}
            calendarMode={calendarMode}
            changeCalendarMode={changeCalendarMode}
            moveToPrevDate={moveToPrevDate}
            moveToNextDate={moveToNextDate}
            moveToToday={moveToToday}
          />
          <Main
            currentDate={currentDate}
            calendarMode={calendarMode}
            eventInfoList={eventInfoList}
          />
        </Route>

        <Route path="/events">
          <EventFormContainer/>
        </Route>

        <Route>
          <InvaildIdModal/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
