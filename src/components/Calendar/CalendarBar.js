import React from "react";
import PropTypes from "prop-types";
import CalendarEventBar from "./CalendarEventBar";
import styles from "./CalendarBar.module.scss";

function CalendarBar({ events }) {
  return (
    <div className={styles.DailyCalendarBar}>
      {events &&
        events.map((event) => {
          const { eventId, eventTitle } = event;

          return <CalendarEventBar eventId={eventId} eventTitle={eventTitle} />;
        })}
    </div>
  );
}

CalendarBar.propTypes = {
  events: PropTypes.array,
};

export default CalendarBar;
