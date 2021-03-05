import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Week from "../Week.js/Week";
import Daily from "../../containers/Daily";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

function App({ onInitialLoad, something }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={Week} />
        <Route path="/week" component={Week} />
        <Route path="/day" component={Daily} />
        <Route path="/events/new" component={CalendarEvent} />
      </Switch>
    </div>
  );
}

export default App;
