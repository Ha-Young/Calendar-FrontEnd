import React, { useState, useEffect } from "react";
import { dateConst, directionConst } from "constants/constants";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import WeeklySchedule from "../components/WeeklySchedule/WeeklySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";
import { fetchWeeklyEvent } from "api/firebaseAPIs";
import { getDateISO, getMonthAndWeek, getDaysOfWeek } from "utils/utilFunction";

const Weekly = ({
  weeklyEvent,
  showWeekly,
  showPreviousWeek,
  showNextWeek,
}) => {
  const [weekCount, setWeekCount] = useState(0);
  const [weekOfMonth, setWeekOfMonth] = useState(
    getMonthAndWeek(getDateISO(weekCount))
  );
  const [daysOfWeek, setDaysOfWeek] = useState(getDaysOfWeek(0));

  useEffect(() => {
    fetchWeeklyEvent((events) => {
      showWeekly(events);
    }, getDateISO(weekCount));
  }, [showWeekly, weekCount]);

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
    setWeekOfMonth(getMonthAndWeek(getDateISO(currentWeekCount)));
    setDaysOfWeek(getDaysOfWeek(currentWeekCount));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewWeek}
        currentPeriod={weekOfMonth.month + "월 " + weekOfMonth.week + "주차"}
      />
      <WeeklySchedule daysOfWeek={daysOfWeek} weeklyEvent={weeklyEvent} />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWeekly: (events) => dispatch(actionCreators.showWeekly(events)),
    showPreviousWeek: (weekCount) =>
      dispatch(actionCreators.showPreviousWeek(weekCount)),
    showNextWeek: (weekCount) =>
      dispatch(actionCreators.showNextWeek(weekCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
