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

function App({ selectDay, selectedDate, selectedWeek }) {
  // useEffect(() => {
  //   onInitialLoad();
  // }, []);
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route path="/calendar/daily">
            <DailyCalendar selectedDate={selectedDate} />
          </Route>
          <Route path="/calendar/weekly">
            <WeeklyCalendar selectedWeek={selectedWeek} />
          </Route>
          <Route path="/events/new">
            <CreateEvent />
          </Route>
          <Route path="/events/:eventId">
            <div>이벤트 상세 페이지</div>
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
