import React, { useState } from 'react';
import styles from './Calendar.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import Date from '../Date/Date';

function Calendar () {
  const [date, setDate] = useState('');

  return (
    <div className={styles.Outline}>
      <div className={styles.DateBox}>
        <Date />
      </div>
      <div className={styles.Box}>
        <Timeline />
        <Todo />
      </div>
    </div>
  );
}

export default Calendar;
