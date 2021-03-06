import React from "react";
import PropTypes from 'prop-types';

import styles from "./Calendar.module.css";

export default function Header({ datesOfWeek }) {
  return (
    <>
      <div className={styles.DayHeader}>
        <div className={styles.EachDay}>SUN</div>
        <div className={styles.EachDay}>MON</div>
        <div className={styles.EachDay}>TUE</div>
        <div className={styles.EachDay}>WED</div>
        <div className={styles.EachDay}>THU</div>
        <div className={styles.EachDay}>FIR</div>
        <div className={styles.EachDay}>SAT</div>
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
