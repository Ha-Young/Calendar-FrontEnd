import React from "react";

import { getTimeList } from "../../utils/date";
import { getTimeAMPM } from "../../utils/date";
import styles from "./TimeColumn.module.css";

function TimeColumn() {
  const timeList = getTimeList();

  return (
    <div className={styles.timeColumnWrapper}>
      {timeList.map(time => (
        <div key={time} className={styles.timeRowWrapper}>
          <span className={styles.timeText}>{getTimeAMPM(time)}</span>
        </div>)
      )}
    </div>
  );
}

export default TimeColumn;
