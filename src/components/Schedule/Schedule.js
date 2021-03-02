import React from "react";
import { generateTimeList } from "../../utils/calendarUtils";
import DailySchedule from "./DailySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";

const Schedule = function ({ isWeeklySchedule, date }) {
  const timeList = generateTimeList();

  return (
    <div>
      {isWeeklySchedule
        ? <WeeklySchedule date={date} timeList={timeList} />
        : <DailySchedule date={date} timeList={timeList} />
      }
    </div>
  );
};

export default Schedule;
