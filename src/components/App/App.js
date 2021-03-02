import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/CalendarMonth";

function App({ onInitialLoad, something }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Calendar />

      <Switch>
        <Route path="/" exact>
          <div>Main</div>
        </Route>
        <Route path="/event">
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
