import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main/"
import EventForm from "../EventForm";
import EventFormContainer from "../../containers/EventFormContainer";

function App({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  onInitialLoad,

  eventInfoList,
}) {

  useEffect(() => {
    onInitialLoad()
  }, [])

  return (
    <div className={styles.App}>

      <Switch>
        <Route path="/calender" exact>
          <Header
            currentDate={currentDate}
            calendarMode={calendarMode}
            changeCalendarMode={changeCalendarMode}
            moveToPrevDate={moveToPrevDate}
            moveToNextDate={moveToNextDate}
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

        <Redirect path="/" to="/calender"/>
      </Switch>
    </div>
  );
}

export default App;
