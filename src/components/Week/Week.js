import React, { useEffect } from 'react';
import Cell from 'components/Cell/Cell';
import TimeLine from 'components/TimeLine/TimeLine';
import styles from './Week.module.css';

const Week = ({ week, onWeekdayAdd, onWeekInitSet }) => {
  const cells = [];

  for (let i = 0; i < 7; i++) {
    cells.push(<Cell />);
  }

  useEffect(() => {
    onWeekInitSet({
      mon: onWeekdayAdd(0),
      tue: onWeekdayAdd(1),
      wen: onWeekdayAdd(2),
      thu: onWeekdayAdd(3),
      fri: onWeekdayAdd(4),
      sat: onWeekdayAdd(5),
      sun: onWeekdayAdd(6)
    });
  }, []);

  return (
    <>
      {
        week &&
        <>
          <div className={styles.week}>
            <div className={styles.days}>
              <div className={styles.day}><h3>{week.mon}</h3></div>
              <div className={styles.day}><h3>{week.tue}</h3></div>
              <div className={styles.day}><h3>{week.wen}</h3></div>
              <div className={styles.day}><h3>{week.thu}</h3></div>
              <div className={styles.day}><h3>{week.fri}</h3></div>
              <div className={styles.day}><h3>{week.sat}</h3></div>
              <div className={styles.day}><h3>{week.sun}</h3></div>
            </div>
          </div>
          <div className={styles.cellContainer}>
            <TimeLine />
            {
              cells.map(cell => cell)
            }
          </div>
        </>
      }
    </>
  );
};

export default Week;
