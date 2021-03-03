import React from "react";

import { getWeekDaysBasedOnDate } from "../../utils/date";
import DailySchedule from "../DailySchedule";

function WeeklySchedule({ currentDate, eventListEachDay }) {
  const weekList = getWeekDaysBasedOnDate(currentDate);
  return (
    <>
      {
        weekList.map(({ date, calcDay }) => {
          const eventList = eventListEachDay[date];
          return (
            <DailySchedule
              key={date}
              date={date}
              diffForCurrentDate={calcDay}
              eventList={eventList}
            />
          );
        })
      }
    </>
  );
}

export default WeeklySchedule;
