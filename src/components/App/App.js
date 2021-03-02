import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar/:dateUnit">
          <Calendar />
        </Route>
        <Route path="/event">
          <div>Event</div>
        </Route>
        <Redirect path="*" to="/calendar/week" />
      </Switch>
    </div>
  );
}

export default App;
