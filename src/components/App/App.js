import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main/"
import EventForm from "../EventForm";

function App({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
}) {

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
          />
        </Route>

        <Route path="/events">
          <EventForm />
        </Route>

        <Route path="/event/:id">
          <EventForm />
        </Route>

        <Redirect path="/" to="/calender"/>
      </Switch>
    </div>
  );
}

export default App;
