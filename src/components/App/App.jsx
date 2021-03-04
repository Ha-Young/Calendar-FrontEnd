import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import DailyCalendar from "../DailyCalendar/DailyCalendar";
import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar";
import SideBar from "../SideBar/SideBar";
import CreateEvent from "../CreateEvent/CreateEvent";
import Calendar from "../Calendar/Calendar";

function App({ selectDay, nextButtonClicked, prevButtonClicked, loadEvents, toggleCalendarView, selectedDate, calculatedDates, events, selectedEventId, isDailyView }) {
  console.log('app render');

  return (
    <div className={styles.App}>
      <Header nextButtonClicked={nextButtonClicked} prevButtonClicked={prevButtonClicked} />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route path="/calendar/daily">
            <DailyCalendar selectedDate={selectedDate} />
          </Route>
          <Route path="/calendar/weekly">
            <WeeklyCalendar loadEvents={loadEvents} events={events} />
          </Route>
          <Route path="/events/new">
            <CreateEvent />
          </Route>
          <Route path="/events/:eventId">
            <div>이벤트 상세 페이지</div>
          </Route>
          <Route path="/calendar">
            <Calendar selectedDate={selectedDate} loadEvents={loadEvents} events={events} />
          </Route>
          <Route>
            <Redirect to="/calendar/daily" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
