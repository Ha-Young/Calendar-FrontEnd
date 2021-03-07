import React, { useEffect } from "react";
import ScheduleContainer from "../../../containers/CalendarContainer/ScheduleContainer";
import TimeContainer from "../CalendarItem/TimeContainer";
import { WEEK } from "../../../constants/time";
import styles from "./WeekCalendar.module.css"
import PropTypes from "prop-types";

function WeekCalendar({ week, checkPeriodUnit }) {
  useEffect(() => {
    checkPeriodUnit();
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <div></div>
        <div className={styles.week}>
          {week.map(({letterDate, numericDate, id}) => (
            <div className={styles.day} key={id}>
              <h6>{letterDate}</h6>
              <h3>{numericDate}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <TimeContainer />
        <div className={styles.weekContainer}>
          {WEEK.map((item, index) => (
            <ScheduleContainer
              className={styles.ScheduleContainer}
              key={item}
              dateId={week[index].id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekCalendar;

WeekCalendar.propTypes = {
  week: PropTypes.array.isRequired,
  checkPeriodUnit: PropTypes.func.isRequired,
};
