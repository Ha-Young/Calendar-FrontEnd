import React from "react";
import styles from "./TimeTableBox.module.css";
import Column from "./Column";

export default function TimeTableColumnBox({ isWeek, week, day, weekEvents, dayEvent }) {
  if (isWeek) {
    return (
      <div className={styles.TimeTable}>
        {
          week.map((day, i) => {
            return (
              <Column
                key={i}
                day={day} 
                events={weekEvents[i]}
                isEventBarWide={!isWeek}
                isColorReverse={i % 2 === 0}
              />
            );
          })
        }
      </div>
    );
  }

  return (
    <div className={styles.TimeTable}>
      <Column day={day} events={dayEvent} isEventBarWide={!isWeek} />
    </div>
  );
}
