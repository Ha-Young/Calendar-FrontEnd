import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../SchedulesBar/SchedulesBar";
import { getWeekList, calculateDate } from "../../utils/date";
import styles from "./Weekly.module.css";

function Weekly({ date, weeklyEvents }) {
  const weekList = getWeekList();

  console.log(weeklyEvents);

  return (
    <div className={styles.weekly}>
      <HoursBar />
      {weekList.map((v, i) => {
        const calculatedDate = calculateDate(date, v);
        const dayId = calculatedDate.format("YYYY-MM-DD");
        const isTheDay = (v === 0) ? true : false;

        return (
          <SchedulesBar
            key={dayId}
            date={calculatedDate}
            isTheDay={isTheDay}
            events={weeklyEvents[i]}
          />
        );
      })}
    </div>
  );
}

export default Weekly;
