import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.scss";
import Header from "../Header/Header";
import Weekly from "../Schedule/Weekly";
import Daily from "../Schedule/Daily";
import EventEdit from "../Event/EventEdit";
import EventView from "../Event/EventView";

function App({ selectedDate, onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header
        selectedDate={selectedDate}
      />
      <Switch>
        <Route path="/" exact>
          <Daily />
        </Route>
        <Route path="/schedule">
          <Weekly />
        </Route>
        <Route path="/event" exact>
          <EventEdit />
        </Route>
        <Route path="/event/:event_id">
          <EventView />
        </Route>
        <Route>
          <Daily />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
