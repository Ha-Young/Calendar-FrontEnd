import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Events from "../Events/Events";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Calendar />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route>
          NOT FOUND
        </Route>
      </Switch>
    </div>
  );
}

export default App;
