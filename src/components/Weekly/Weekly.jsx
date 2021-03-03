import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../SchedulesBar/SchedulesBar";
import { getWeekList, calculateDate } from "../../utils/date";
import styles from "./Weekly.module.css";

function Weekly({ date }) {
  const weekList = getWeekList();

  return (
    <div className={styles.weekly}>
      <HoursBar />
      {weekList.map((v) => {
        const theDay = calculateDate(date, v);
        const dayId = theDay.format("YYYY-MM-DD");

        return (
          <SchedulesBar
            key={dayId}
            date={theDay}
            dayDiff={v}
          />
        );
      })}
    </div>
  );
}

export default Weekly;
