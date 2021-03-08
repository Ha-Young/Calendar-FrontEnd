import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";
import UpdateEventForm from "../../containers/UpdateEventForm";
import CreateEventForm from "../../containers/CreateEventForm";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar">
          <Daily />
        </Route>
        <Redirect exact from="/" to="/calendar" />
        <Route path="/weekly">
          <Weekly />
        </Route>
        <Route path="/event/:time/new">
          <CreateEventForm type="new" />
        </Route>
        <Route path="/event/:time">
          <UpdateEventForm type="update" />
        </Route>
        <Redirect from="*" to="/https://http.cat/404" />
      </Switch>
    </div>
  );
}

export default App;
