import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./AppContainer.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
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
import { auth, database, provider } from "../../utils/firebase";
import Auth from "../../Auth/Auth";
import Event from "../../components/Event/Event";
import EventDetails from "../../components/EventDetails/EventDetails";
import NewEventForm from "../../components/NewEventForm/NewEventForm";
import EditForm from "../../components/EditForm/EditForm";
import { mockData } from "../../utils/mockData";

// mock -> real
// isLoggedIn initial state false..
// fetch data async?

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
  onDismount,
}) {
  const dayIndex = displayDate.slice(0, 10);
  const thisDayEvents = mockData[dayIndex];

  // let thisDayEvents;
  // if (eventData) thisDayEvents = eventData[dayIndex];

  useEffect(() => {
    if (!auth.currentUser) return;
    onLoad(dayIndex);

    return () => {
      if (!auth.currentUser) return;
      onDismount(dayIndex);
    };
  }, [isLoggedIn, displayDate]);

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
                thisDayEvents
                && Object.entries(thisDayEvents).map(eachEvent => {
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
              <NewEventForm />
            </Route>
            <Route exact path="/events/:eventId">
              <EventDetails date={dayIndex} events={thisDayEvents} />
            </Route>
            <Route exact path="/events/:eventId/edit">
              <EditForm eventData={thisDayEvents} />
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
  function dispatchFetchEventsAction(snapshot) {
    dispatch(fetchEvents(snapshot.val()));
  }

  return {
    onLoad(date) {
      const displayDateRef = database.ref(`${auth.currentUser.uid}/${date}`);
      displayDateRef.on("value", dispatchFetchEventsAction);
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
    onDismount(date) {
      const displayDateRef = database.ref(`${auth.currentUser.uid}/${date}`);
      displayDateRef.off("value", dispatchFetchEventsAction);
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
