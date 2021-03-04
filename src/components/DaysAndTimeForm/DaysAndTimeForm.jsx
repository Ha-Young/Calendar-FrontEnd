import React from "react";

import TheDate from "../DaysBoard/DaysBoard";
import TimeSelector from "../TimeSelector/TimeSelector";
import styles from "./DaysAndTimeForm.module.css";

function DaysAndTimeForm({
  date,
  isTheDay,
  start,
  end,
  handleStartChange,
  handleEndChange,
}) {
  return (
    <div className={styles.daysAndTimeForm}>
        <TheDate date={date} isTheDay={isTheDay} />
        <span className={styles.timeSelectorContainer}>
          <TimeSelector
            time={start}
            onChange={handleStartChange}
          />
          <TimeSelector
            time={end}
            onChange={handleEndChange}
          />
        </span>
      </div>
  );
}

export default DaysAndTimeForm;
