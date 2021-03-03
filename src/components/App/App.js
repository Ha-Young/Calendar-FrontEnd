import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";

function App({ onInitialLoad, eventInfo, onEventInfoSubmit }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>Main</div>
        </Route>
        <Route path="/calendar" exact>
          <Calendar />
        </Route>
        <Route path="/event">
          <Event onEventInfoSubmit={onEventInfoSubmit} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
