import React from "react";
import DailySchedule from "./DailySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";

const Schedule = function ({ isWeeklySchedule, dateObject }) {
  return (
    <div>
      {isWeeklySchedule
        ? <WeeklySchedule dateObject={dateObject} />
        : <DailySchedule dateObject={dateObject} />
      }
    </div>
  );
};

export default Schedule;
