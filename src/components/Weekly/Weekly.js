import React from 'react';
import styles from './Weekly.module.css';
import Todo from '../Todo/Todo';
import Timeline from '../Timeline/Timeline';
import CalendarItemHeader from '../CalendarItemHeader/CalendarItemHeader';

const sevenDays = [
  'Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday',
  'Saturday'
];

function Weekly () {
  return (
    <div className={styles.WeeklyOutline}>
      <div className={styles.SevenDays}>
        {
          sevenDays.map((item, index) => {
            return (
              <CalendarItemHeader key={item} day={item} />
            );
          })
        }
      </div>
      <div className={styles.TimeTable}>
        <Timeline />
        {
          sevenDays.map((item, index) => {
            return (
              <div className={styles.box} key={item}>
                <Todo />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Weekly;
