import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import EventForm from "../EventForm/EventForm";
import DailyCalendar from "../DailyCalendar/DailyCalendar";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);
 
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/event" exact>
          <DailyCalendar />
        </Route>
        <Route path="/event/new">
          <EventForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
