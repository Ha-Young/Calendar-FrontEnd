import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarEventBar.module.scss";

function CalendarEventBar({ eventTitle }) {
  return (
    <div className={styles.CalendarEventBar}>
      <h3>{eventTitle}</h3>
    </div>
  );
}

CalendarEventBar.propTypes = {
  eventTitle: PropTypes.string.isRequired,
};

export default CalendarEventBar;
