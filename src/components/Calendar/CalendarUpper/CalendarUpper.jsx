import React from 'react';
import styles from './CalendarUpper.module.scss';

import CalendarUpperDays from './CalendarUpperDays/CalendarUpperDays';

const CalendarUpper = ({ dateArr }) => {
  const year = dateArr.length ? dateArr[0].year : '';
  const month = dateArr.length ? dateArr[0].monthAlphaBet : '';
  return (
    <div className={styles.calendarUpper}>
      <div className={styles.calendarUpperMonth}>
        <div>{year}</div>
        <div>{month}</div>
      </div>
      <CalendarUpperDays dateArr={dateArr}></CalendarUpperDays>
    </div>
  );
};

export default CalendarUpper;
