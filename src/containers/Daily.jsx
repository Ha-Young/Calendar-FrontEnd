import React, { useState } from "react";
import { directionConst } from "constants/constants";
import { getDate } from "utils/utilFunction";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailySchedule from "../components/DailySchedule/DailySchedule";
import { connect } from "react-redux";

const Daily = (props) => {
  const [date, setDate] = useState(getDate(0));
  const [dateCount, setDateCount] = useState(0);

  const setNewDate = (direction) => {
    let currentDateCount = dateCount;

    if (direction === directionConst.PREV) {
      currentDateCount--;
    }

    if (direction === directionConst.NEXT) {
      currentDateCount++;
    }

    setDateCount(currentDateCount);
    setDate(getDate(currentDateCount));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewDate}
        currentPage={date.month + "월 " + date.date + "일" + date.day}
      />
      <DailySchedule />
    </>
  );
};

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({
  // This function is passed to App component.
});

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
