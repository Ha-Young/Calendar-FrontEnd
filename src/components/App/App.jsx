import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import Error from "../Error/Error";

function App({ selectDay, nextButtonClicked, prevButtonClicked, toggleCalendarView, selectedDate, events, selectedEventInfo, isDailyView }) {
  return (
    <div className={styles.App}>
      <Header nextButtonClicked={nextButtonClicked} prevButtonClicked={prevButtonClicked} />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route exact path="/calendar">
            <Calendar selectedDate={selectedDate} toggleCalendarView={toggleCalendarView} isDailyView={isDailyView}/>
          </Route>
          <Route exact path="/events/new">
            <Event />
          </Route>
          <Route path="/events/:eventId">
            <Event events={events} selectedEventInfo={selectedEventInfo} />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route>
            <Redirect to="/calendar" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
