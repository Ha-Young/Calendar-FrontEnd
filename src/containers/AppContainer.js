import { connect } from "react-redux";
import React, { useEffect } from "react";
import App from "../components/App/App";
import {
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  getUserEvents,
  moveToToday
} from "../actions";
import { fetchEventsList } from "../api";

function AppContainer({
    currentDate,
    calendarMode,
    changeCalendarMode,
    moveToPrevDate,
    moveToNextDate,
    moveToToday,
    onInitialLoad,

    EventInfoControlReducer,
    getUserEvents,
}) {

  async function getUserEventsFromFirebase() {
    const result = await fetchEventsList();
    getUserEvents(result);
  }

  useEffect(() => {
    getUserEventsFromFirebase();
  }, []);

  return (
    <App
      currentDate={currentDate}
      calendarMode={calendarMode}
      changeCalendarMode={changeCalendarMode}
      moveToPrevDate={moveToPrevDate}
      moveToNextDate={moveToNextDate}
      moveToToday={moveToToday}
      onInitialLoad={onInitialLoad}

      eventInfoList={EventInfoControlReducer}
    />
  );
}

function mapStateToProps({
  DateControlReducer: {
    currentDate,
    calendarMode,
  },
  EventInfoControlReducer,
}) {
  return {
    currentDate: currentDate,
    calendarMode: calendarMode,
    EventInfoControlReducer: EventInfoControlReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCalendarMode(calendarMode) {
      dispatch(changeCalendarMode(calendarMode));
    },
    moveToPrevDate(newDate) {
      dispatch(moveToPrevDate(newDate));
    },
    moveToNextDate(newDate) {
      dispatch(moveToNextDate(newDate));
    },
    moveToToday(currentDate) {
      dispatch(moveToToday(currentDate));
    },
    getUserEvents(fetchedUserEvents) {
      dispatch(getUserEvents(fetchedUserEvents));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
