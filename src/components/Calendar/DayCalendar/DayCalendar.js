import React, { useEffect } from "react";
import ScheduleContainer from "../../../containers/CalendarContainer/ScheduleContainer";
import TimeContainer from "../CalendarItem/TimeContainer";
import styles from "./DayCalendar.module.css";
import PropTypes from "prop-types";

function DayCalendar({
  date,
  day: { letterDate, numericDate },
  checkPeriodUnit,
}) {
  useEffect(() => {
    checkPeriodUnit();
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <div></div>
        <div className={styles.day}>
          <h6>{letterDate}</h6>
          <h3>{numericDate}</h3>
        </div>
      </div>
      <div className={styles.wrapper}>
        <TimeContainer />
        <ScheduleContainer dateId={date}/>
      </div>
    </div>
  );
}

export default DayCalendar;

DayCalendar.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.shape({
    letterDate: PropTypes.string.isRequired,
    numericDate: PropTypes.number.isRequired,
  }).isRequired,
  checkPeriodUnit: PropTypes.func.isRequired,
};
