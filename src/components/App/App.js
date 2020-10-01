import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authService } from "../../utils/firebase";
import styles from "./App.module.css";

import EventContainer from "../../containers/EventContainer";
import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import NavButton from "../NavButton/NavButton";

export default function App (props) {
  const {
    userLogIn,
    userLogOut,
    isLoggedIn,
    date, // 무슨 날짜?
    clickPrevDateButton,
    clickNextDateButton,
    isDailyView,
    changeWeeklyView,
    eventList
  } = props;

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        userLogIn();
      } else {
        userLogOut();
      }
    });
  }, [userLogIn, userLogOut]);

  return (
    <>
      {
        !isLoggedIn
          ? <Auth />
          : <main className={styles.appMain}>
              <Header changeWeeklyView={changeWeeklyView} />
              <Switch>
                <Route path="/calendar">
                  <NavButton
                    date={date}
                    isDailyView={isDailyView}
                    clickPrevDateButton={clickPrevDateButton}
                    clickNextDateButton={clickNextDateButton}
                  />
                  {
                    isDailyView
                      ? <Daily date={date} eventList={eventList} />
                      : <Weekly date={date} eventList={eventList} />
                  }
                </Route>
                <Route path="/events">
                  <EventContainer />
                </Route>
                <Redirect to="/calendar" />
              </Switch>
            </main>
      }
    </>
  );
}
