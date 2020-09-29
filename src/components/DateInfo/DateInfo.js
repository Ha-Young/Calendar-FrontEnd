import React from 'react';
import styles from './DateInfo.module.css';

const DateInfo = ({ year, month, day }) => {
  return (
    <div className={styles.DateInfo}>
      <div>{year}년</div>
      <div>{month}월</div>
      <div>{day}일</div>
    </div>
  );
};

export default DateInfo;