import React from "react";
import { connect } from "react-redux";
import CalendarHeader from "../components/CalendarHeader";
import {
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  moveToToday,
} from "../actions";

function CalendarHeaderContainer({
  currentDate,
  calendarMode,
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
  moveToToday,
}) {
  return (
    <CalendarHeader
      currentDate={currentDate}
      calendarMode={calendarMode}
      changeCalendarMode={changeCalendarMode}
      moveToPrevDate={moveToPrevDate}
      moveToNextDate={moveToNextDate}
      moveToToday={moveToToday}
    />
  );
}

function mapStateToProps({
  DateControlReducer: {
    currentDate,
    calendarMode,
  },
}) {
  return {
    currentDate,
    calendarMode,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeaderContainer);
