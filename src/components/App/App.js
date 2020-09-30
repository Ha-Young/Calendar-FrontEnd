import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import { authService } from "../../utils/firebase";
import { saveSampleData } from "../../utils/api";
import moment from "moment";

import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventContainer from "../../containers/EventContainer";
import Auth from "../Auth/Auth";
import DatePicker from "../DatePicker/DatePicker";

export default function App ({ userLogIn, userLogOut, isLoggedIn, date, clickPrevButton, clickNextButton, changeWeeklyView, isDailyView }) {
  useEffect(() => {
    saveSampleData();
  }, []);

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
                clickPrevButton={clickPrevButton}
                clickNextButton={clickNextButton}
              />
              {
                isDailyView
                ? <Daily date={date} />
                : <Weekly date={date} />
              }
            </Route>
            <Route path="/events">
              <EventContainer />
            </Route>
            <Redirect to="/calendar" />
          </Switch>
        </>
      }
    </div>
  );
}
