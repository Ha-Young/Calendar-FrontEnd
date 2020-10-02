import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
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
import { START_TIME_OPTIONS, FINISH_TIME_OPTIONS } from "../../constants";

// Feel free to modify as you need.
function AppContainer({
  // onLoad,
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
  fetchEvents,
  eventData,
}) {
  const [currentYear, setCurrentYear] = useState(displayDate.slice(0, 4));
  const [currentMonth, setCurrentMonth] = useState(displayDate.slice(5, 7));
  const [currentDay, setCurrentDay] = useState(displayDate.slice(8, 10));
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("");
  const [newEventFinishTime, setNewEventFinishTime] = useState("");

  useEffect(() => {
    setCurrentYear(displayDate.slice(0, 4));
    setCurrentMonth(displayDate.slice(5, 7));
    setCurrentDay(displayDate.slice(8, 10));
  }, [displayDate]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const displayDateRef = database.ref(`${auth.currentUser.uid}/${currentYear}/${currentMonth}/${currentDay}`);

    displayDateRef.on('value', function(snapshot) {
      console.log(snapshot.val()); // 기존 정보가 나옴..
    });
  }, [isLoggedIn, displayDate]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) return onLogin();
      return onLogout();
    });
  }, [auth.currentUser]);

  function onGoogleLoginClick() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth.signOut();
  }

  return (
    <div className={styles.AppContainer}>
      {
        isLoggedIn
          ? <>
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
              <Route path="/" exact>
                <Calendar
                  viewMode={viewMode}
                  date={displayDate}
                />
                <button onClick={logout}>나가기</button>
              </Route>
              <Route path="/events/new">
                <Form
                  buttonDescription="일정 더하기"
                  submitHandler={saveNewEvent.bind(null, newEventTitle, newEventDescription, newEventDate, newEventStartTime, newEventFinishTime)}
                >
                  <input type="text" name="title" placeholder="할 일" autoComplete="off" onChange={ev => setNewEventTitle(ev.target.value)} value={newEventTitle} />
                  <input type="text" name="description" placeholder="설명" autoComplete="off" onChange={ev => setNewEventDescription(ev.target.value)} value={newEventDescription} />
                  <input type="date" name="date" onChange={ev => setNewEventDate(ev.target.value)} value={newEventDate} />
                  <select onChange={ev => setNewEventStartTime(ev.target.value)} value={newEventStartTime}>
                    <option>{"시작 시간"}</option>
                    {
                      START_TIME_OPTIONS.map(option => {
                        return (
                          <option key={option}>{`${option}부터`}</option>
                        );
                      })
                    }
                  </select>
                  <select onChange={ev => setNewEventFinishTime(ev.target.value)} value={newEventFinishTime}>
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
            </Switch>
          </>
          : <Auth onClick={onGoogleLoginClick} />
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
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
    onLoad() {
      dispatch(fetchEvents());
    }
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
