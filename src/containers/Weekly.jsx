import React, { useState } from "react";
import { dateConst, directionConst } from "constants/constants";
import { getDaysOfWeek, getWeekOfMonth } from "utils/utilFunction";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import WeeklySchedule from "../components/WeeklySchedule/WeeklySchedule";
import { connect } from "react-redux";

const Weekly = (props) => {
  const [daysOfWeek, setDaysOfWeek] = useState(getDaysOfWeek(0));
  const [weekCount, setWeekCount] = useState(0);
  const [weekOfMonth, setWeekOfMonth] = useState(getWeekOfMonth(0));

  const setNewWeek = (direction) => {
    let currentWeekCount = weekCount;

    if (direction === directionConst.PREV) {
      currentWeekCount = currentWeekCount - dateConst.DAY_OF_WEEK;
    }

    if (direction === directionConst.NEXT) {
      currentWeekCount = currentWeekCount + dateConst.DAY_OF_WEEK;
    }

    setWeekCount(currentWeekCount);
    setDaysOfWeek(getDaysOfWeek(currentWeekCount));
    setWeekOfMonth(getWeekOfMonth(currentWeekCount));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewWeek}
        currentPeriod={weekOfMonth.month + "월 " + weekOfMonth.week + "주차"}
      />
      <WeeklySchedule week={daysOfWeek} />
    </>
  );
};

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

export default connect(mapStateToProps)(Weekly);
