import React, { useState } from "react";
import { dateConst, directionConst } from "constants/constants";
import { getDaysOfWeek, getWeekOfMonth } from "utils/utilFunction";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import WeeklySchedule from "../components/WeeklySchedule/WeeklySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions";

const Weekly = ({
  currentWeekDays,
  currentWeekOfMonth,
  showPreviousWeek,
  showNextWeek,
}) => {
  const [weekCount, setWeekCount] = useState(0);
  const [weekOfMonth, setWeekOfMonth] = useState(getWeekOfMonth(0));
  // console.log(daysOfWeek);

  const setNewWeek = (direction) => {
    let currentWeekCount = weekCount;

    if (direction === directionConst.PREV) {
      currentWeekCount = currentWeekCount - dateConst.DAY_OF_WEEK;
      showPreviousWeek(currentWeekCount);
    }

    if (direction === directionConst.NEXT) {
      currentWeekCount = currentWeekCount + dateConst.DAY_OF_WEEK;
      showNextWeek(currentWeekCount);
    }

    setWeekCount(currentWeekCount);
    setWeekOfMonth(getWeekOfMonth(currentWeekCount));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewWeek}
        currentPeriod={weekOfMonth.month + "월 " + weekOfMonth.week + "주차"}
      />
      <WeeklySchedule week={currentWeekDays} />
    </>
  );
};

const mapStateToProps = (state) => {
  const { currentWeekDays, currentWeekOfMonth } = state;
  return { currentWeekDays };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPreviousWeek: (weekCount) =>
      dispatch(actionCreators.showPreviousWeek(weekCount)),
    showNextWeek: (weekCount) =>
      dispatch(actionCreators.showNextWeek(weekCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
