import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../SchedulesBar/SchedulesBar";
import styles from "./Daily.module.css";

function Daily({ date, events }) {
  return (
    <div className={styles.daily}>
      <HoursBar />
      <SchedulesBar
        date={date}
        events={events}
        isTheDay={true}
      />
    </div>
  );
}

export default Daily;
