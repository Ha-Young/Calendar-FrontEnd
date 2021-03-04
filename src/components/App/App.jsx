import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";

import Header from "../Header/Header";
import Event from "../../containers/EventContainer";
import Weekly from "../Calendar/Weekly/WeeklyCalendar";
import Daily from "../Calendar/Daily/DailyCalendar";
import DetailEvent from "../../containers/DetailEventContainer";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact component={Weekly} />
        <Route path="/event/new" component={Event} />
        <Route exact path="/event/:id" component={DetailEvent} />
        <Route path="/weekly" component={Weekly} />
        <Route path="/daily" component={Daily} />
        <Route>
          <div>잘못된 접근입니다.</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
