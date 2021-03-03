import React, { useEffect } from "react";
import { generateTimeList } from "../../utils/calendarUtils";
import { useLocation } from "react-router-dom";
import DailySchedule from "./DailySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";

const Schedule = function ({ isWeeklySchedule, setIsSchedule, date }) {
  const timeList = generateTimeList();
  let location = useLocation();

  useEffect(() => {
    setIsSchedule(location.pathname);
  }, []);

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
