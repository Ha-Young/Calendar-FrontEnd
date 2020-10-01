import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Reset } from "styled-reset";
import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import Main from "../Main/Main";
import CalendarContainer from "../../containers/CalendarContainer/CalendarCotainer";
import EventPageCotainer from "../../containers/EventPageCotainer/EventPageCotainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Reset />
      <HeaderContainer />
      <Main>
        <Route path="/calendar">
          <CalendarContainer />
        </Route>
        <Route path="/events/:eventId">
          <EventPageCotainer />
        </Route>
        <Redirect to="/calendar" />
      </Main>
    </div>
  );
}

export default App;
