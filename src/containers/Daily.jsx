import React, { useState } from "react";
import { directionConst } from "constants/constants";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailySchedule from "../components/DailySchedule/DailySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";

const Daily = ({ currentDate, showPreviousDay, showNextDay }) => {
  const [dateCount, setDateCount] = useState(0);

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
          currentDate.month +
          "월 " +
          currentDate.date +
          "일 " +
          currentDate.day.toUpperCase().slice(0, 3)
        }
      />
      <DailySchedule />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const { currentDate } = state;
  return { currentDate };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPreviousDay: (dateCount) =>
      dispatch(actionCreators.showPreviousDay(dateCount)),
    showNextDay: (dateCount) =>
      dispatch(actionCreators.showPreviousDay(dateCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
