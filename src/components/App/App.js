import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import WeeklyCalendar from '../weeklyCalendar/weeklyCalendar';

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <WeeklyCalendar></WeeklyCalendar>
        </Route>
        <Route path="/event">
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
