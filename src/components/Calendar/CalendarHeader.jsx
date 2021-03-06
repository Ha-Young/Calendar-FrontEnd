import React from "react";
import styles from "./Calendar.module.css";
import PropTypes from "prop-types";

import CALENDAR from "../../constants/calendarConstants";

export default function CalendarHeader({ calendarTime, onButtonClick, typeOfTime }) {
  function currentMonthName() {
    return calendarTime.format("MMMM");
  }

  function currentYear() {
    return calendarTime.format("YYYY");
  }

  function previousTime() {
    return calendarTime.clone().subtract(1, typeOfTime);
  }

  function nextTime() {
    return calendarTime.clone().add(1, typeOfTime);
  }

  return (
    <div className={styles.header}>
      <button
        className={styles.previous}
        onClick={() => onButtonClick(previousTime())}
      >
        {String.fromCharCode(CALENDAR.PREV_BUTTON)}
      </button>
      <div className={styles.current}>
        {currentMonthName()}{currentYear()}
      </div>
      <button
        className={styles.next}
        onClick={() => onButtonClick(nextTime())}
      >
        {String.fromCharCode(CALENDAR.NEXT_BUTTON)}
      </button>
    </div>
  );
}

CalendarHeader.propTypes = {
  calendarTime: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  typeOfTime: PropTypes.string.isRequired
};
