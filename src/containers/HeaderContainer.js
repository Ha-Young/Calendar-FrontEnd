import React from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";
import { connect } from "react-redux";
import Header from "../components/Header/Header"
import { selectDay, nextButtonClicked, prevButtonClicked, toggleCalendarView } from "../actions/index";

const HeaderContainer = ({ nextButtonClicked, prevButtonClicked, toggleCalendarView, selectedDate, isDailyView }) => {
  const history = useHistory();

  const handleClick = () => {
    selectDay(DateTime.now().toJSDate());
    history.push("/calendar");
  }

  return (
    <Header
      nextButtonClicked={nextButtonClicked}
      prevButtonClicked={prevButtonClicked}
      selectedDate={selectedDate}
      isDailyView={isDailyView}
      toggleCalendarView={toggleCalendarView}
      handleClick={handleClick}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  nextButtonClicked,
  prevButtonClicked,
  toggleCalendarView,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
