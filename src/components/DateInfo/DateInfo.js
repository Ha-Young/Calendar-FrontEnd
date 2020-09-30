import React from 'react';
import styles from './DateInfo.module.css';
import { MODE_DAY } from '../../constants/ActionType';

const DateInfo = ({ mode, year, month, date }) => {
  return (
    <div className={styles.DateInfo}>
      <span>{year}년</span>
      <span>{month}월</span>
      {
        mode === MODE_DAY &&
        <span>{date}일</span>
      }
    </div>
  );
};

export default DateInfo;