import React from 'react';
import styles from './Daily.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import CalendarItemHeader from '../CalendarItemHeader/CalendarItemHeader';

function Daily ({ currentDisplayDate, currentDisplayDay }) {
  return (
    <div className={styles.DailyOutline}>
      <div className={styles.DateBox}>
        <CalendarItemHeader
          date={currentDisplayDate}
          day={currentDisplayDay}
        />
      </div>
      <div className={styles.EventDisplayBox}>
        <Timeline />
        <Todo />
      </div>
    </div>
  );
}

export default Daily;
