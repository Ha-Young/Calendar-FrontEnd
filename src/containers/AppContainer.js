import { connect } from "react-redux";
import React from "react";
import App from "../components/App/App";
import {
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
} from "../actions/index";

function AppContainer({
    currentDate,
    calendarMode,
    changeCalendarMode,
    moveToPrevDate,
    moveToNextDate,
}) {
  return (
    <App
      currentDate={currentDate}
      calendarMode={calendarMode}
      changeCalendarMode={changeCalendarMode}
      moveToPrevDate={moveToPrevDate}
      moveToNextDate={moveToNextDate}
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
    currentDate: currentDate,
    calendarMode: calendarMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCalendarMode(calendarMode){
      dispatch(changeCalendarMode(calendarMode));
    },
    moveToPrevDate(newDate){
      dispatch(moveToPrevDate(newDate));
    },
    moveToNextDate(newDate){
      dispatch(moveToNextDate(newDate));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
