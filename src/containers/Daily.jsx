import React, { useState, useEffect } from "react";
import { directionConst } from "constants/constants";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailySchedule from "../components/DailySchedule/DailySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";
import { getDateISO, parseDate } from "utils/utilFunction";

const Daily = ({ showPreviousDay, showNextDay }) => {
  const [dateCount, setDateCount] = useState(0);
  const [date, setDate] = useState(parseDate(getDateISO(0)));

  useEffect(() => {
    const currentDate = parseDate(getDateISO(dateCount));
    setDate(currentDate);
  }, [dateCount]);

  const setNewDate = (direction) => {
    let currentDateCount = dateCount;

    if (direction === directionConst.PREV) {
      currentDateCount--;
      showPreviousDay(currentDateCount);
    }

    if (direction === directionConst.NEXT) {
      currentDateCount++;
      showNextDay(currentDateCount);
    }

    setDateCount(currentDateCount);
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewDate}
        currentPeriod={
          date.month +
          "월 " +
          date.date +
          "일 " +
          date.day.toUpperCase().slice(0, 3)
        }
      />
      <DailySchedule />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPreviousDay: (dateCount) =>
      dispatch(actionCreators.showPreviousDay(dateCount)),
    showNextDay: (dateCount) =>
      dispatch(actionCreators.showPreviousDay(dateCount)),
  };
};

export default connect(null, mapDispatchToProps)(Daily);
