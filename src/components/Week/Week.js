import React from 'react';
import styles from './Week.module.css';
import TimeLine from 'components/TimeLine/TimeLine';

const Week = () => {
  const date = new Date();
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
      <TimeLine />
    </>
  );
};

export default Week;
