import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../../containers/Header";
import Event from "../Events/Events"
import Calendar from "../../containers/Calendar";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/events" component={Event} />
        <Route>
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
