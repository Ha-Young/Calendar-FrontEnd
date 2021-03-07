import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../../containers/Header";
import Calendar from "../../containers/Calendar";
import NewEventForm from "../../containers/NewEventForm";
import EventDetail from "../../containers/EventDetail";

function App({ onInitialLoad }) {
  // useEffect(() => {
  //   onInitialLoad();
  // }, [onInitialLoad]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/events">
          <Switch>
            <Route path="/events/new" exact component={NewEventForm} />
            <Route path="/events/:eventId" component={EventDetail} />
            <Redirect to="/events/new" />
          </Switch>
        </Route>
        <Redirect to="/calendar" />
      </Switch>
    </div>
  );
}

export default App;
