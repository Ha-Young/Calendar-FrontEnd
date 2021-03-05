import { connect } from "react-redux";
import React from "react";

import App from "../components/App/App";
// import { saveSampleData } from "../api";
import { changeCalendarMode } from "../actions/index";

function AppContainer({
    currentDate,
    calendarMode,
    changeCalendarMode,
}) {
    console.log(changeCalendarMode, "4")

    return (
        <App
            currentDate={currentDate}
            calendarMode={calendarMode}
            changeCalendarMode={changeCalendarMode}
        />
    )
}

function mapStateToProps({
    currentDate,
    calendarMode,
}) {
    return {
      currentDate: currentDate,
      calendarMode: calendarMode,
    }
}

function mapDispatchToProps(dispatch) {
    console.log("??", changeCalendarMode)

    return {
        // changeCalendarMode: dispatch(changeCalendarMode(calendarMode))
        changeCalendarMode(calendarMode){
            dispatch(changeCalendarMode(calendarMode))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
