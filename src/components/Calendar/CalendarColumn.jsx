import React from "react";
import styles from "./Calendar.module.css";
import Schedule from "./Schedule/Schedule";
import PropTypes from "prop-types";

import CALENDAR from "../../constants/calendarConstants";

function CalendarColumn({ events, columnDay, dayID }) {
  const hasEvent = events && events.byId[dayID];
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
          events.byId[dayID].map((event) =>
            <Schedule key={event.eventId} event={event} dayID={dayID} />
          )
        }
      </div>
    </>
  );
}

CalendarColumn.propTypes = {
  events: PropTypes.shape({
    byId: PropTypes.object.isRequired
  }),
  columnDay: PropTypes.string.isRequired,
  dayID: PropTypes.string.isRequired
};

export default CalendarColumn;
