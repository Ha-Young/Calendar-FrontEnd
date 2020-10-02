import React from 'react';
import { MODE_WEEK, MODE_DAY } from '../../constants/ActionType';
import styles from './DateInfo.module.css';

const DateInfo = ({ dateState , mode }) => {
  const { year, month, date, betweenState } = dateState;

  return (
    <div className={styles.DateInfo}>
      <span>{ year }년</span>
      {
        mode === MODE_WEEK &&
          (betweenState === -1 ?
            <span>{ month }월 - { month + 1 }월</span> :
            betweenState === 1 ?
              <span>{ month + 1 }월 - { month + 2 }월</span> :
              <span>{ month + 1 }월</span>)
      }
      {mode === MODE_DAY && <span>{ month }월 { date }일</span>}
    </div>
  );
};

export default DateInfo;
