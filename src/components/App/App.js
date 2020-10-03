import React from "react";
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
        <Route path="/calendar" component={CalendarContainer} />
        <Route path="/events/:eventId" component={EventPageCotainer} />
        <Redirect to="/calendar" />
      </Main>
    </div>
  );
}

export default App;
