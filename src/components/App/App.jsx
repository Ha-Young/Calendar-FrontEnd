import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import SideBar from "../SideBar/SideBar";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import Error from "../Error/Error";
import HeaderContainer from "../../containers/HeaderContainer";

function App({ selectDay, selectedDate, selectedEventInfo, isDailyView, errorMessage }) {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <div className={styles.bodyWrapper}>
        <SideBar selectDay={selectDay} />
        <Switch>
          <Route exact path="/calendar">
            <Calendar selectedDate={selectedDate} isDailyView={isDailyView} />
          </Route>
          <Route exact path="/events/new">
            <Event />
          </Route>
          <Route path="/events/:eventId">
            <Event selectedEventInfo={selectedEventInfo} />
          </Route>
          <Route exact path="/error">
            <Error text={errorMessage}/>
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
