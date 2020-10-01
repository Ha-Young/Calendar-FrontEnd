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
import { showDaily, showWeekly, login, logout, showPreviousDay, showNextDay, showPreviousWeek, showNextWeek } from "../../actions";
import Form from "../../components/Form/Form";
import { auth, provider } from "../../utils/firebase";
import Auth from "../../Auth/Auth";

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
}) {
  // useEffect(() => {
  //   const starCountRef = firebase.database().ref(`users/${userId}`);
  //   starCountRef.on('value', function(snapshot) {
  //     updateStarCount(postElement, snapshot.val());
  //   });
  // }, []);

  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("");
  const [newEventFinishTime, setNewEventFinishTime] = useState("");
  const startTimeOptions = ["오전 12시", "오전 1시", "오전 2시", "오전 3시", "오전 4시", "오전 5시", "오전 6시", "오전 7시", "오전 8시", "오전 9시", "오전 10시", "오전 11시", "오후 12시", "오후 1시", "오후 2시", "오후 3시", "오후 4시", "오후 5시", "오후 6시", "오후 7시", "오후 8시", "오후 9시", "오후 10시", "오후 11시"];
  const finishTimeOptions = ["오전 1시", "오전 2시", "오전 3시", "오전 4시", "오전 5시", "오전 6시", "오전 7시", "오전 8시", "오전 9시", "오전 10시", "오전 11시", "오후 12시", "오후 1시", "오후 2시", "오후 3시", "오후 4시", "오후 5시", "오후 6시", "오후 7시", "오후 8시", "오후 9시", "오후 10시", "오후 11시", "오후 11시59분"];

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
                      startTimeOptions.map(option => {
                        return (
                          <option key={option}>{`${option}부터`}</option>
                        );
                      })
                    }
                  </select>
                  <select onChange={ev => setNewEventFinishTime(ev.target.value)} value={newEventFinishTime}>
                    <option>{"끝나는 시간"}</option>
                    {
                      finishTimeOptions.map(option => {
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
    onNextDateClick() {
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
  console.log(state);
  return {
    viewMode: state.viewMode,
    isLoggedIn: state.isLoggedIn,
    displayDate: state.displayDate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
