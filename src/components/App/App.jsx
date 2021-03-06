import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";

import Header from "../Header/Header";
import Event from "../../containers/EventContainer";
import Weekly from "../Calendar/Weekly/WeeklyCalendar";
import Daily from "../Calendar/Daily/DailyCalendar";
import DetailEvent from "../../containers/DetailEventContainer";
import PageNotFound from"../PageNotFound";

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
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

App.proTypes = {
  onInitialLoad: PropTypes.func.isRequired,
};

export default App;
