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
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("");
  const [newEventFinishTime, setNewEventFinishTime] = useState("");
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
      !newEventTitle
      || !newEventDescription
      || !newEventDate
      || !newEventStartTime
      || !newEventFinishTime
    ) {
      alert("양식을 모두 채워주세요.");

      return;
    }

    saveNewEvent(newEventTitle, newEventDescription, newEventDate, newEventStartTime, newEventFinishTime);

    alert("새 일정을 추가했습니다.");

    history.push("/calendar");

    setNewEventTitle("");
    setNewEventDescription("");
    setNewEventDate("");
    setNewEventStartTime("");
    setNewEventFinishTime("");
  }

  const mockData = {
    "2020": {
      "09": {
        "03": {
          "-MIeKmgtk7cUWzjXRLpv": {
            "description": "한 자릿수 달",
            "finishTime": "19",
            "startTime": "01",
            "title": "9월"
          }
        }
      },
      "10": {
        "02": {
          "-MIbjmYwMRwO-_VstH41": {
            "description": "redirect test",
            "finishTime": "15",
            "startTime": "11",
            "title": "redirect"
          },
        },
        "03": {
          "-MIbiXeN1CzWbl2YQZBq": {
            "description": "QZBq",
            "finishTime": "10",
            "startTime": "02",
            "title": "QZBq"
          },
          "-MIbwWeyHPO-pDMCL_i1": {
            "description": "L_i1",
            "finishTime": "06",
            "startTime": "03",
            "title": "L_i1"
          }
        }
      }
    }
  };

  const dayArray = displayDate.slice(0, 10).split("-");
  const thisDayEvents = mockData[dayArray[0]][dayArray[1]][dayArray[2]];

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
