import React from "react";
import PropTypes from 'prop-types';

import styles from "./Calendar.module.css";

export default function Header({ datesOfWeek }) {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <>
      <div className={styles.DayHeader}>
        {daysOfWeek.map(day => {
          return <div className={styles.EachDay} key={day}>{day}</div>
        })}
      </div>
      <div className={styles.dateHeader}>
        {datesOfWeek.map((date, index) => {
          return (
            <div className={styles.date} key={date + index}>
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </>
  );
}

Header.propTypes = {
  datesOfWeek: PropTypes.array.isRequired,
};
