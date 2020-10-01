import React from 'react';
import styles from './Week.module.css';
import TimeLine from 'components/TimeLine/TimeLine';
import Cell from 'components/Cell/Cell';

const Week = ({ days }) => {
  const cells = [];

  for (let i = 0; i < 7; i++) {
    cells.push(<Cell />);
  }
  return (
    <>
      {
        days &&
        <>
          <div className={styles.week}>
            <div className={styles.days}>
              <div className={styles.day}><h1>{days.mon}</h1></div>
              <div className={styles.day}><h1>{days.tue}</h1></div>
              <div className={styles.day}><h1>{days.wen}</h1></div>
              <div className={styles.day}><h1>{days.thu}</h1></div>
              <div className={styles.day}><h1>{days.fri}</h1></div>
              <div className={styles.day}><h1>{days.sat}</h1></div>
              <div className={styles.day}><h1>{days.sun}</h1></div>
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
