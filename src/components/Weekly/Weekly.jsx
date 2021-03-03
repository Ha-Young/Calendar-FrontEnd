import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../../containers/ScheduleBar";
import { getWeekList } from "../../utils/date";
import styles from "./Weekly.module.css";

function Weekly() {
  const weekList = getWeekList();

  return (
    <div className={styles.weekly}>
      <HoursBar />
      {weekList.map((v) => {
        return (
          <SchedulesBar
            key={v}
            dayDiff={v}
          />
        );
      })}
    </div>
  );
}

export default Weekly;
