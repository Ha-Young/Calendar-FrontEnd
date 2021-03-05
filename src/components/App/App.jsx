import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import Error from "../Error/Error";
// TODO remove useless props
function App({ selectDay, nextButtonClicked, prevButtonClicked, toggleCalendarView, selectedDate, calculatedDates, events, selectedEventInfo, isDailyView }) {
  return (
    <div className={styles.App}>
      <Header nextButtonClicked={nextButtonClicked} prevButtonClicked={prevButtonClicked} />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route exact path="/calendar">
            <Calendar selectedDate={selectedDate} toggleCalendarView={toggleCalendarView} isDailyView={isDailyView}/>
          </Route>
          <Route path="/events/new">
            <Event />
          </Route>
          <Route path="/events/:eventId">
            <Event events={events} selectedEventInfo={selectedEventInfo} />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
