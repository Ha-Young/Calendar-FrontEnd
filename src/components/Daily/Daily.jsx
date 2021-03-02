import React, { useState } from "react";
import { directionConst } from "constants/constants";
import { getDate } from "utils/utilFunction";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailyMain from "./DailyMain";

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
        text={date.month + "월 " + date.date + "일" + date.day}
      />
      <DailyMain />
    </>
  );
};

export default Daily;
