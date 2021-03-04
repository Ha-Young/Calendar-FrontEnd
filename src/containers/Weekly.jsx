import React, { useState, useEffect } from "react";
import { dateConst, directionConst } from "constants/constants";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import WeeklySchedule from "../components/WeeklySchedule/WeeklySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";
import { fetchWeeklyEvent } from "api/firebaseAPIs";
import { getDateISO, getMonthAndWeek, getDaysOfWeek } from "utils/utilFunction";

const Weekly = ({ weeklyEvent, showWeekly }) => {
  const [weekCount, setWeekCount] = useState(0);
  const [monthAndWeek, setMonthAndWeek] = useState(
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
    }

    if (direction === directionConst.NEXT) {
      currentWeekCount = currentWeekCount + dateConst.DAY_OF_WEEK;
    }

    setWeekCount(currentWeekCount);
    setMonthAndWeek(getMonthAndWeek(getDateISO(currentWeekCount)));
    setDaysOfWeek(getDaysOfWeek(currentWeekCount));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewWeek}
        currentPeriod={monthAndWeek.month + "월 " + monthAndWeek.week + "주차"}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
