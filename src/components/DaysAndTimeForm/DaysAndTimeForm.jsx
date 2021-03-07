import React from "react";

import DayBoard from "../DayBoard/DayBoard";
import TimeSelector from "../TimeSelector/TimeSelector";
import styles from "./DaysAndTimeForm.module.css";

function DaysAndTimeForm({
  date,
  isTheDay,
  start,
  end,
  handleStartChange,
  handleEndChange,
  disabled = false,
}) {
  return (
    <div className={styles.daysAndTimeForm}>
      <DayBoard date={date} isTheDay={isTheDay} />
      <span className={styles.timeSelectorContainer}>
        <TimeSelector
          time={start}
          onChange={handleStartChange}
          disabled={disabled}
        />
        <TimeSelector
          time={end}
          onChange={handleEndChange}
          disabled={disabled}
        />
      </span>
    </div>
  );
}

export default DaysAndTimeForm;
