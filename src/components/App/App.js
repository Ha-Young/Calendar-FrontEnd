import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar" exact>
          <div>Main</div>
        </Route>
        <Route path="/events/new">
          <div>New Event</div>
        </Route>
        <Route path="/events/:eventId">
          <div>Event Detail</div>
        </Route>
        <Route path="/event">
          <div>Event</div>
        </Route>
        <Redirect from="/" to="/calendar" />
      </Switch>
    </div>
  );
}

export default App;
