import React from 'react';
import styles from './Week.module.css';
import TimeLine from 'components/TimeLine/TimeLine';
import Cell from 'components/Cell/Cell';

const Week = () => {
  const cells = [];
  
  for (let i = 0; i < 7; i++) {
    cells.push(<Cell />);
  }
    return (
    <>
      <div className={styles.week}>
        <div className={styles.days}>
          <div className={styles.day}><h1>월</h1></div>
          <div className={styles.day}><h1>화</h1></div>
          <div className={styles.day}><h1>수</h1></div>
          <div className={styles.day}><h1>목</h1></div>
          <div className={styles.day}><h1>금</h1></div>
          <div className={styles.day}><h1>토</h1></div>
          <div className={styles.day}><h1>일</h1></div>
        </div>
      </div>
      <div className={styles.cell}>
      <TimeLine />
      {
        cells.map(cell => cell)
      }
      </div>
      </>
  );
};

export default Week;
