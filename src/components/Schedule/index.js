import React from "react";
import { useHistory } from "react-router-dom";

import { PATH_EVENTS, PATH_NEW } from "../../constants/path";
import { VIEW_OPTION } from "../../constants/stateTypes";
import DailySchedule from "../DailySchedule";
import ScheduleAddBtn from "../ScheduleAddBtn";
import TimeColumn from "../TimeColumn";
import WeeklySchedule from "../WeeklySchedule";
import styles from "./Schedule.module.css";

function Schedule({ viewOption, currentDate, eventListEachDay }) {
  const history = useHistory();

  function moveAddEventPage() {
    history.push(`${PATH_EVENTS}${PATH_NEW}`);
  }

  return (
    <div className={styles.wrapper}>
      <TimeColumn />
      {viewOption === VIEW_OPTION.DAILY && (
        <DailySchedule date={currentDate} eventList={eventListEachDay[currentDate]}/>
      )}
      {viewOption === VIEW_OPTION.WEEKLY && (
        <WeeklySchedule currentDate={currentDate} eventListEachDay={eventListEachDay}/>
      )}
      <ScheduleAddBtn onClick={moveAddEventPage} />
    </div>
  );
}

export default Schedule;
