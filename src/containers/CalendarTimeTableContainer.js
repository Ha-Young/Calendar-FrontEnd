import React, { useEffect } from "react";
import { connect } from "react-redux";
import CalendarTimeTable from "../components/CalendarMain";
import CalendarMatrix from "../components/CalendarMatrix"
import { fetchEventsList } from "../api"
import { getUserEvents } from "../actions";

function CalendarTimeTableContainer({
  calendarMode,
  currentDate,
  getUserEvents,
  EventInfoControlReducer,
}) {

  async function getUserEventsFromFirebase() {
    const result = await fetchEventsList();
    getUserEvents(result);
  }

  useEffect(() => {
    getUserEventsFromFirebase();
  }, []);

console.log(currentDate, "in container")
  return (
    <CalendarMatrix
      calendarMode={calendarMode}
      currentDate={currentDate}
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
    currentDate,
    calendarMode,
    EventInfoControlReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserEvents(fetchedUserEvents) {
      dispatch(getUserEvents(fetchedUserEvents));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarTimeTableContainer);
