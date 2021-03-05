import { connect } from "react-redux";
import React from "react";
import App from "../components/App/App";
import {
  changeCalendarMode,
  moveToPrevDate,
  moveToNextDate,
} from "../actions/index";
import { saveSampleData } from "../api";

function AppContainer({
    currentDate,
    calendarMode,
    changeCalendarMode,
    moveToPrevDate,
    moveToNextDate,
    onInitialLoad,
}) {
  return (
    <App
      currentDate={currentDate}
      calendarMode={calendarMode}
      changeCalendarMode={changeCalendarMode}
      moveToPrevDate={moveToPrevDate}
      moveToNextDate={moveToNextDate}
      onInitialLoad={onInitialLoad}
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

    onInitialLoad: () => {
        saveSampleData();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
