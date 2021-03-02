import React from "react";
import { useHistory } from "react-router-dom";

import { VIEW_OPTION } from "../../constants/stateTypes";
import DailySchedule from "../DailySchedule";
import ScheduleAddBtn from "../ScheduleAddBtn";
import TimeColumn from "../TimeColumn";
import WeeklySchedule from "../WeeklySchedule";
import styles from "./Schedule.module.css";

function Schedule({ viewOption, currentDate }) {
  // 여기 있어도 되는걸까? 질문하기.
  const history = useHistory();

  function moveAddEventPage() {
    history.push("/events/new");
  };

  return (
    <div className={styles.wrapper}>
      <TimeColumn />
      {viewOption === VIEW_OPTION.DAILY && <DailySchedule date={currentDate}/>}
      {viewOption === VIEW_OPTION.WEEKLY && <WeeklySchedule currentDate={currentDate}/>}
      <ScheduleAddBtn onClick={moveAddEventPage}/>
    </div>
  );
}

export default Schedule;
