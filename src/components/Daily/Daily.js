import React, { useState } from 'react';
import styles from './Daily.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import Date from '../CalendarItemHeader/CalendarItemHeader';

function Daily ({ day, date }) {
  return (
    <div className={styles.Outline}>
      <div className={styles.DateBox}>
        <Date day={day} date={date} />
      </div>
      <div className={styles.Box}>
        <Timeline />
        <Todo />
      </div>
    </div>
  );
}

export default Daily;
