import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Event from "../Event/Event";

function App({ onInitialLoad, currentDay }) {
  const { year, month, date } = currentDay;

  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <h3>{year} / {month} / {date}</h3>
      <Switch>
        <Route path="/" exact>
          <div>Main</div>
        </Route>
        <Route path="/event">
          <Event />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
