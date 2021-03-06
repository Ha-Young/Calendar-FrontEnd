import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../../containers/Calendar";
import EventForm from "../EventForm/EventForm";

function App({ onInitialLoad, onEventInfoSubmit, eventIdRoute }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/calendar" exact>
          <Calendar />
        </Route>
        <Route path="/event/new">
          <EventForm
            onEventInfoSubmit={onEventInfoSubmit}
            isCreateMode={true}
          />
        </Route>
        <Route path={`/event/${eventIdRoute}`}>
          <EventForm
            onEventInfoSubmit={onEventInfoSubmit}
            isCreateMode={false}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
