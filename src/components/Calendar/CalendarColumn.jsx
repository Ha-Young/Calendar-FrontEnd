import React from "react";
import styles from "./Calendar.module.css";
import Schedule from "./Schedule/Schedule";

import CALENDAR from "../../constants/calendarConstants";

function CalendarColumn({ events, colummDay, dayID }) {
  const hasEvent = events && events.byId[dayID];
  const result = [];

  for (let i = 0; i < CALENDAR.COLUMN_LENGTH; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles.day}>
        {colummDay}
      </div>
      <div className={styles.columnList}>
        {result.map((time) => {
          return (
            <div
              key={time}
              className={styles.day}
            >
            </div>
          );
        })}
        {hasEvent &&
          events.byId[dayID].map((event) =>
            <Schedule key={event.eventId} event={event} dayID={dayID} />
          )
        }
      </div>
    </>
  );
}

export default CalendarColumn;
