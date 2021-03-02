import React from "react";

import { getCalcDay } from "../../utils/date";
import DailySchedule from "../DailySchedule";

function WeeklySchedule({ currentDate }) {
  const weekCalcDays = [-3,-2,-1,0,1,2,3];

  return (
    <>
      {
        weekCalcDays.map(calcDay => {
          const date = getCalcDay(currentDate, calcDay);

          return (<DailySchedule
            key={date}
            date={date}
            diffForCurrentDate={calcDay}
          />);
        })
      }
    </>
  );
}

export default WeeklySchedule;
