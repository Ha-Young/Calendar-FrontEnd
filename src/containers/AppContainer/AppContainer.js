import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import styles from "./AppContainer.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import { saveNewEvent } from "../../utils/api";
import Calendar from "../../components/Calendar/Calendar";
import { connect } from "react-redux";
import {
  showDaily,
  showWeekly,
  login,
  logout,
  showPreviousDay,
  showNextDay,
  showPreviousWeek,
  showNextWeek,
  fetchEvents,
} from "../../actions";
import Form from "../../components/Form/Form";
import { auth, database, provider } from "../../utils/firebase";
import Auth from "../../Auth/Auth";
import Event from "../../components/Event/Event";
import EventDetails from "../../components/EventDetails/EventDetails";
import { START_TIME_OPTIONS, FINISH_TIME_OPTIONS } from "../../constants";

function AppContainer({
  onLoad,
  eventData,
  showDaily,
  showWeekly,
  viewMode,
  onLogin,
  onLogout,
  isLoggedIn,
  displayDate,
  onPreviousDayClick,
  onNextDayClick,
  onPreviousWeekClick,
  onNextWeekClick,
}) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventFinishTime, setEventFinishTime] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!auth.currentUser) return;
    onLoad();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        onLogin();

        return;
      }

      onLogout();
    });
  }, [auth.currentUser]);

  function onGoogleLoginClick() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth.signOut();
  }

  function submitNewEventHandler(ev) {
    ev.preventDefault();

    if (
      !eventTitle
      || !eventDescription
      || !eventDate
      || !eventStartTime
      || !eventFinishTime
    ) {
      alert("양식을 모두 채워주세요.");

      return;
    }

    saveNewEvent(eventTitle, eventDescription, eventDate, eventStartTime, eventFinishTime);

    alert("새 일정을 추가했습니다.");

    history.push("/calendar");

    setEventTitle("");
    setEventDescription("");
    setEventDate("");
    setEventStartTime("");
    setEventFinishTime("");
  }

  const mockData = {
    "2020-10-02": {
      "-MIiQiBbtvyT2BwLhkdW": {
        "description": "어제",
        "finishTime": "07",
        "startTime": "04",
        "title": "어제"
      }
    },
    "2020-10-03": {
      "-MIiQ0KwVZwxQmE-qG2u": {
        "description": "test",
        "finishTime": "18",
        "startTime": "12",
        "title": "test"
      },
      "-MIiQejb47RVcszGOgVh": {
        "description": "second",
        "finishTime": "08",
        "startTime": "03",
        "title": "second"
      }
    },
    "2020-10-04": {
      "-MIiQkMeRJ7WzXL1151Q": {
        "description": "내일",
        "finishTime": "10",
        "startTime": "03",
        "title": "내일"
      }
    }
  };

  const dayIndex = displayDate.slice(0, 10);
  const thisDayEvents = mockData[dayIndex];

  return (
    <div className={styles.AppContainer}>
      {
        isLoggedIn
        && <>
          <AppHeader
            viewMode={viewMode}
            showDaily={showDaily}
            showWeekly={showWeekly}
            displayDate={displayDate}
            onPreviousDayClick={onPreviousDayClick}
            onNextDayClick={onNextDayClick}
            onPreviousWeekClick={onPreviousWeekClick}
            onNextWeekClick={onNextWeekClick}
          />
          <Switch>
            <Redirect exact from="/" to="/calendar" />
            <Route exact path="/calendar">
              <Calendar
                viewMode={viewMode}
                date={displayDate}
              />
              {
                Object.entries(thisDayEvents).map(eachEvent => {
                  const [eachEventId, eachEventDetails] = eachEvent;

                  return (
                    <Event
                      key={eachEventId}
                      eventId={eachEventId}
                      eventDetails={eachEventDetails}
                    />
                  );
                })
              }
              <button onClick={logout}>나가기</button>
            </Route>
            <Route exact path="/events/new">
              <Form
                buttonDescription="일정 더하기"
                submitHandler={submitNewEventHandler}
              >
                <input type="text" name="title" placeholder="할 일" autoComplete="off" onChange={ev => setEventTitle(ev.target.value)} value={eventTitle} />
                <input type="text" name="description" placeholder="설명" autoComplete="off" onChange={ev => setEventDescription(ev.target.value)} value={eventDescription} />
                <input type="date" name="date" onChange={ev => setEventDate(ev.target.value)} value={eventDate} />
                <select onChange={ev => setEventStartTime(ev.target.value)} value={eventStartTime}>
                  <option>{"시작 시간"}</option>
                  {
                    START_TIME_OPTIONS.map(option => {
                      return (
                        <option key={option}>{`${option}부터`}</option>
                      );
                    })
                  }
                </select>
                <select onChange={ev => setEventFinishTime(ev.target.value)} value={eventFinishTime}>
                  <option>{"끝나는 시간"}</option>
                  {
                    FINISH_TIME_OPTIONS.map(option => {
                      return (
                        <option key={option}>{`${option}까지`}</option>
                      );
                    })
                  }
                </select>
              </Form>
            </Route>
            <Route exact path="/events/:eventId">
              <EventDetails events={thisDayEvents} />
            </Route>
          </Switch>
        </>
      }
      {
        !isLoggedIn && <Auth onClick={onGoogleLoginClick} />
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      const displayDateRef = database.ref(`${auth.currentUser.uid}/`);

      displayDateRef.on("value", function(snapshot) {
        dispatch(fetchEvents(snapshot.val()));
      });
    },
    showDaily() {
      dispatch(showDaily());
    },
    showWeekly() {
      dispatch(showWeekly());
    },
    onLogin() {
      dispatch(login());
    },
    onLogout() {
      dispatch(logout());
    },
    onPreviousDayClick() {
      dispatch(showPreviousDay());
    },
    onNextDayClick() {
      dispatch(showNextDay());
    },
    onPreviousWeekClick() {
      dispatch(showPreviousWeek());
    },
    onNextWeekClick() {
      dispatch(showNextWeek());
    },
  };
};

const mapStateToProps = state => {
  return {
    viewMode: state.viewMode,
    isLoggedIn: state.isLoggedIn,
    displayDate: state.displayDate,
    eventData: state.eventData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
