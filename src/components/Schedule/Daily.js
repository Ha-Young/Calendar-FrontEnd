import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendar from "./Calendar";
import { goPrevDate, goNextDate, setDailyCalendarMode } from "../../actions";

const Daily = ({ calendarMode, today, selectedDate, goPrevDate, goNextDate, changeToDailyMode }) => {
  useEffect(() => {
    if (calendarMode === "weekly") {
      setDailyCalendarMode();
    }
  }, []);

  return (
    <Calendar
      today={today}
      selectedDate={selectedDate}
      goPrev={goPrevDate}
      goNext={goNextDate}
    />
  )
};

const mapStateToProps = (state) => ({
  today: state.today,
  selectedDate: state.selectedDate,
  calendarMode: state.calendarMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goPrevDate() {
      dispatch(goPrevDate());
    },
    goNextDate() {
      dispatch(goNextDate());
    },
    setDailyCalendarMode() {
      dispatch(setDailyCalendarMode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Daily);
