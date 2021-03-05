import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main/"
import EventForm from "../EventForm";

function App({
  currentDate,
  calendarMode,
  changeCalendarMode,
}) {
  console.log(changeCalendarMode, "3")
  return (

    <div className={styles.App}>

      <Switch>
        <Route path="/calender" exact>
          <Header
            currentDate={currentDate}
            calendarMode={calendarMode}
            changeCalendarMode={changeCalendarMode}
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
