import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import Header from "../Header/Header";
import styles from "./App.module.css";
import DayCalendar from "../Calendar/DayCalendar/DayCalendar";
import WeekCalendar from "../Calendar/WeekCalendar/WeekCalendar";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path="/calendar" component={DayCalendar} />
        <Route path="/calendar/:unit" component={WeekCalendar} />
        <Route path="/events/new">
          <div>New Event</div>
        </Route>
        <Route path="/events/:eventId">
          <div>Event Detail</div>
        </Route>
        <Redirect from="/" to="/calendar" />
      </Switch>
    </div>
  );
}

export default App;
