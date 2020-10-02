import React from 'react';
import { formatISO } from 'date-fns';
import TimeLineNav from '../TimeLineNav/TimeLineNav';
import DayList from '../DayList/DayList';
import styles from './Calendar.module.css';

export default function Calendar({ list }) {
  return (
    <div className={styles.Calendar}>
      <TimeLineNav/>
      {list.map((date) =>
        <DayList
          key={date}
          today={formatISO(date)}
        />
      )}
    </div>
  );
}
