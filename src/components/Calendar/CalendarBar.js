import React from "react";
import { Link } from "react-router-dom";
import styles from "./CalendarBar.module.scss";
import CalendarEventBar from "./CalendarEventBar";

function CalendarBar({ eventTitle, eventId }) {
  return (
    <>
      <div className={styles.DailyCalendarBar}>
        {eventTitle && (
          <Link to={`/events/${eventId}`} style={{ textDecoration: "none" }}>
            <CalendarEventBar eventId={eventId} eventTitle={eventTitle} />
          </Link>
        )}
      </div>
    </>
  );
}

export default CalendarBar;
