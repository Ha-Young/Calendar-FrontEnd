import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../../containers/Daily";
import Event from "../Event/Event";

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/calendar" />
        </Route>
        <Route path="/calendar">
          <Daily />
        </Route>
        <Route path="/weekly">
          <div>Weekly</div>
        </Route>
        <Route path="/event/:time">
          <Event />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
