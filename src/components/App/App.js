import React from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import EventForm from "../EventForm/EventForm";
import DailyCalendar from "../DailyCalendar/DailyCalendar";

function App({ state, onEventInfo }) {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar" exact>
          <DailyCalendar eventInfo={state}/>
        </Route>
        <Route path="/event/new">
          <EventForm onEventInfo={onEventInfo} />
        </Route>
        <Route path="/event/:eventId">
          <EventForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
