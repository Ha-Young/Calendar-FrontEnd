import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";

import Header from "../Header/Header";
import Event from "../Event/Event";
import Calendar from "../Calendar/Calendar";
import Weekly from "../Calendar/Weekly/Weekly";
import Daily from "../Calendar/Daily/Daily";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Calendar />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/weekly">
          <Weekly />
        </Route>
        <Route path="/daily">
          <Daily />
        </Route>
        <Route>
          {/* not found */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
