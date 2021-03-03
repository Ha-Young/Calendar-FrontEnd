import React from "react";

import { getWeekDateListBasedOnDate } from "../../utils/date";
import DailySchedule from "../DailySchedule";

function WeeklySchedule({ currentDate, eventListEachDay }) {
  console.log(eventListEachDay);
  const weekList = getWeekDateListBasedOnDate(currentDate);
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
