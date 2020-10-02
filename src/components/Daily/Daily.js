import React from 'react';
import styles from './Daily.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import CalendarItemHeader from '../CalendarItemHeader/CalendarItemHeader';

function Daily ({ currentDisplayDay, currentDisplayDayOfWeek }) {
  return (
    <div className={styles.Outline}>
      <div className={styles.DateBox}>
        <CalendarItemHeader
          currentDisplayDay={currentDisplayDay}
          currentDisplayDayOfWeek={currentDisplayDayOfWeek}
        />
      </div>
      <div className={styles.Box}>
        <Timeline />
        <Todo />
      </div>
    </div>
  );
}

export default Daily;
