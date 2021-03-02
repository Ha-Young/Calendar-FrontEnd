import React, { useState } from "react";
import { dateConst, directionConst } from "constants/constants";
import { getWeek, getWeekOfMonth } from "utils/utilFunction";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import WeeklySchedule from "../components/WeeklySchedule/WeeklySchedule";
import { connect } from "react-redux";

const Weekly = (props) => {
  const [week, setWeek] = useState(getWeek(0));
  const [weekCount, setWeekCount] = useState(0);
  const [weekOfMonth, setWeekOfMonth] = useState(getWeekOfMonth(0));

  const setNewWeek = (direction) => {
    let currentWeekCount = weekCount;

    if (direction === directionConst.PREV) {
      currentWeekCount--;
    }

    if (direction === directionConst.NEXT) {
      currentWeekCount++;
    }

    setWeekCount(currentWeekCount);
    setWeek(getWeek(currentWeekCount * dateConst.DAY_OF_WEEK));
    setWeekOfMonth(getWeekOfMonth(currentWeekCount * dateConst.DAY_OF_WEEK));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewWeek}
        currentPage={weekOfMonth.month + "월 " + weekOfMonth.week + "주차"}
      />
      <WeeklySchedule week={week} />
    </>
  );
};

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({
  // This function is passed to App component.
});

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
