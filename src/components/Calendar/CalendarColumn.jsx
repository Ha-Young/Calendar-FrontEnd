import React from "react";
import PropTypes from "prop-types";

import Schedule from "./Schedule/Schedule";
import CALENDAR from "../../constants/calendarConstants";

import styles from "./Calendar.module.css";

function CalendarColumn({ calendarData, columnDay, dayID }) {
  const hasEvent = calendarData && calendarData.byId[dayID];
  const result = [];

  for (let i = 0; i < CALENDAR.COLUMN_LENGTH; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles.day}>
        {columnDay}
      </div>
      <div className={styles.columnList}>
        {result.map((time) => {
          return (
            <div key={time} className={styles.day} />
          );
        })}
        {hasEvent &&
          calendarData.byId[dayID].map((event) =>
            <Schedule key={event.eventId} event={event} dayID={dayID} />
          )
        }
      </div>
    </>
  );
}

CalendarColumn.propTypes = {
  calendarData: PropTypes.shape({
    byId: PropTypes.object.isRequired
  }),
  columnDay: PropTypes.string.isRequired,
  dayID: PropTypes.string.isRequired
};

export default CalendarColumn;
