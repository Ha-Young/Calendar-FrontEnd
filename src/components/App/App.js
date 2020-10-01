import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import { authService } from "../../utils/firebase";

import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventContainer from "../../containers/EventContainer";
import Auth from "../Auth/Auth";
import DatePicker from "../DatePicker/DatePicker";
import EventDetail from "../EventDetail/EventDetail";

export default function App ({ userLogIn, userLogOut, isLoggedIn, date, clickPrevButton, clickNextButton, changeWeeklyView, isDailyView, eventDetail, updateEvent}) {
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        userLogIn();
      } else {
        userLogOut();
      }
    });
  }, [userLogIn, userLogOut]);

  const matchEvent = eventDetail?.filter((event) => {
    return event?.id === eventId;
  });

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
              {/* container로 전환 이벤트 받아오는 일은 위에서 처리해서 내려주도록 로직 개선 필요....*/}
              {
                isDailyView
                ? <Daily date={date} eventDetail={eventDetail} />
                : <Weekly date={date} eventDetail={eventDetail} />
              }
            </Route>
            <Route path="/events/new">
              <EventContainer />
            </Route>
            <Route path="/events/:eventId">
              <EventDetail
                setEventId={(eventId) => setEventId(eventId)}
                matchEvent={matchEvent.pop()}
                updateEvent={updateEvent}
              />
            </Route>
            <Redirect to="/calendar" />
          </Switch>
        </>
      }
    </div>
  );
}
