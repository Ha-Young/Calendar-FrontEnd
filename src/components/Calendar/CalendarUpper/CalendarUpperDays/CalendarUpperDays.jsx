import React from 'react';
import styles from './CalendarUpperDays.module.scss';

import RoundShape from '../../../publicComponent/RoundShape/RoundShape';

const CalendarUpperDays = ({ dateArr }) => {
  function getDayArray() {
    const dayArray = [];
    
    dateArr.forEach((el, index) => {
      dayArray.push(
        <div key={index} className={styles.dayInfoContainer}>
          <RoundShape textContext={el.day}></RoundShape>
          <div className={styles.date}>{el.date}</div>
        </div>
      )
    })

    return dayArray;
  }

  return (
    <div className={styles.calendarUpperDays}>
      {getDayArray()}
    </div>
  );
}

export default CalendarUpperDays;
