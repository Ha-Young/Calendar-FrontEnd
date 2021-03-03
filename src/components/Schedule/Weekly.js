import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendar from "./Calendar";
import { goLastWeek, goNextWeek, changeToWeeklyMode } from "../../actions";

const Weekly = ({ calendarMode, changeToWeeklyMode, today, selectedDate, week, goLastWeek, goNextWeek }) => {
  useEffect(() => {
    if (calendarMode === "daily") {
      changeToWeeklyMode();
    }
  }, []);

  return (
    <Calendar
      calendarMode={calendarMode}
      today={today}
      selectedDate={selectedDate}
      week={week}
      goPrev={goLastWeek}
      goNext={goNextWeek}
    />
  )
};

const mapStateToProps = (state) => ({
  today: state.today,
  selectedDate: state.selectedDate,
  week: state.week,
  calendarMode: state.calendarMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goLastWeek() {
      dispatch(goLastWeek());
    },
    goNextWeek() {
      dispatch(goNextWeek());
    },
    changeToWeeklyMode() {
      dispatch(changeToWeeklyMode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Weekly);
