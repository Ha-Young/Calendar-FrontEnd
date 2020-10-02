import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authService } from "../../utils/firebase";
import moment from "moment";
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
    selectedDate,
    clickPrevDateButton,
    clickNextDateButton,
    isDailyView,
    changeWeeklyView,
    eventList
  } = props;
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        userLogIn();
        setUserProfile({
          ...userProfile,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        userLogOut();
        setUserProfile({});
      }
    });
  }, [userLogIn, userLogOut]);

  const matchedEventList = eventList.filter((list) => {
    return list.eventDate === selectedDate;
  });

  const selectedWeek = [];
  for (let i = 0; i < 7; i++) {
    selectedWeek.push(moment(selectedDate).day(i));
  }

  return (
    <>
      {
        !isLoggedIn
          ? <Auth />
          : <main className={styles.appMain}>
              <Header
                changeWeeklyView={changeWeeklyView}
                userProfile={userProfile.email}
              />
              <Switch>
                <Route path="/calendar">
                  <NavButton
                    selectedDate={selectedDate}
                    isDailyView={isDailyView}
                    clickPrevDateButton={clickPrevDateButton}
                    clickNextDateButton={clickNextDateButton}
                  />
                  {
                    isDailyView
                      ? <Daily
                          selectedDate={selectedDate}
                          eventList={matchedEventList}
                        />
                      : <Weekly
                          selectedWeek={selectedWeek}
                          eventList={eventList}
                        />
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
