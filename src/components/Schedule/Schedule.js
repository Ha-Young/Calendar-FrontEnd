import React, { useEffect } from "react";
import { START_TIME_LIST } from "../../constants/calendarConstants";
import { useLocation } from "react-router-dom";
import DailySchedule from "./DailySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";

const Schedule = function ({
  isWeeklySchedule,
  setIsSchedule,
  date,
  updateDateWithTime,
  events
}) {
  let location = useLocation();

  useEffect(() => {
    setIsSchedule(location.pathname);
  }, [setIsSchedule, location.pathname]);

  return (
    <div>
      {isWeeklySchedule
        ? <WeeklySchedule
          date={date}
          timeList={START_TIME_LIST}
          updateDateWithTime={updateDateWithTime}
          events={events}
        />
        : <DailySchedule
          date={date}
          timeList={START_TIME_LIST}
          updateDateWithTime={updateDateWithTime}
          events={events}
        />
      }
    </div>
  );
};

export default Schedule;
