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
        <Route path="/" exact component={Calendar} />
        <Route path="/event/new" component={Event} />
        <Route exact path="/event/:id" component={Event} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/weekly" component={Weekly} />
        <Route path="/daily" component={Daily} />
        <Route>
          {/* not found */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
