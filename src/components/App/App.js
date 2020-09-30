import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import { authService } from "../../utils/firebase";

import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventContainer from "../../containers/EventContainer";
import Auth from "../Auth/Auth";
import DatePicker from "../DatePicker/DatePicker";

export default function App ({ userLogIn, userLogOut, isLoggedIn, date, clickPrevButton, clickNextButton, changeWeeklyView, isDailyView, eventDetail}) {
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
    <div className={styles.App}>
      {
        !isLoggedIn
        ? <Auth />
        :
        <>
          <Header
            changeWeeklyView={changeWeeklyView}
          />
          <Switch>
            <Route path="/calendar">
              <DatePicker
                date={date}
                isDailyView={isDailyView}
                clickPrevButton={clickPrevButton}
                clickNextButton={clickNextButton}
              />
              {/* container로 전환 */}
              {
                isDailyView
                ? <Daily date={date} eventDetail={eventDetail} />
                : <Weekly date={date} eventDetail={eventDetail} />
              }
            </Route>
            <Route path="/events/new">
              <EventContainer />
            </Route>
            <Redirect to="/calendar" />
          </Switch>
        </>
      }
    </div>
  );
}
