import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import CreateEvent from "../CreateEvent/CreateEvent";
import Calendar from "../Calendar/Calendar";
// TODO remove useless props
function App({ selectDay, nextButtonClicked, prevButtonClicked, toggleCalendarView, selectedDate, calculatedDates, selectedEventId, isDailyView }) {
  console.log('app render');

  return (
    <div className={styles.App}>
      <Header nextButtonClicked={nextButtonClicked} prevButtonClicked={prevButtonClicked} />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route path="/events/new">
            <CreateEvent />
          </Route>
          <Route path="/events/:eventId">
            <div>이벤트 상세 페이지</div>
          </Route>
          <Route path="/calendar">
            <Calendar selectedDate={selectedDate} toggleCalendarView={toggleCalendarView} isDailyView={isDailyView}/>
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
