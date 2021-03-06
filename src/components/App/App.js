import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import Header from "../../containers/Header/HeaderContainer";
import DayCalendar from "../../containers/CalendarContainer/DayCalendar";
import WeekCalendar from "../../containers/CalendarContainer/WeekCalendar";
import NewEvent from "../EventPage/NewEvent/NewEvent";
import EventDetail from "../../containers/EventContainer/EventDetail"
import styles from "./App.module.css";
import PropTypes from "prop-types";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path="/calendar" component={DayCalendar} />
        <Route path="/calendar/:unit" component={WeekCalendar} />
        <Route path="/events/new" component={NewEvent} />
        <Route path="/events/:eventId" component={EventDetail} />
        <Redirect from="/" to="/calendar" />
      </Switch>
    </div>
  );
}

export default App;

App.propTypes = {
  onInitialLoad: PropTypes.func.isRequired,
};
