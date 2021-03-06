import React, { useEffect } from "react";
import ScheduleContainer from "../../../containers/CalendarContainer/ScheduleContainer";
import TimeContainer from "../CalendarItem/TimeContainer";
import styles from "./DayCalendar.module.css";
import PropTypes from "prop-types";

function DayCalendar({
  date,
  day: { string, number },
  onLoad,
}) {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <div></div>
        <div className={styles.day}>
          <h6>{string}</h6>
          <h3>{number}</h3>
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
    string: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
  onLoad: PropTypes.func.isRequired,
};
