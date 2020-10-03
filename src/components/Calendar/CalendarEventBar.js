import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CalendarEventBar.module.scss";

function CalendarEventBar({ eventId, eventTitle }) {
  return (
    <Link
      className={styles.CalendarEventBar}
      key={eventId}
      to={`/events/${eventId}`}
      style={{ textDecoration: "none" }}
    >
      <h3>{eventTitle}</h3>
    </Link>
  );
}

CalendarEventBar.propTypes = {
  eventId: PropTypes.number.isRequired,
  eventTitle: PropTypes.string.isRequired,
};

export default CalendarEventBar;
