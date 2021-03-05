import React from 'react';
import styles from './MonthlyCalendar.module.css';

const MonthlyCalendar = () => {
const date = new Date();
const thisYear = date.getFullYear();
const thisMonth = date.getMonth();
const days = ['일', '월', '화', '수', '목', '금', '토'];
const prevLast = new Date(thisYear, thisMonth, 0);
const thisLast = new Date(thisYear, thisMonth + 1, 0);
const PLDay = prevLast.getDay();
const PLDate = prevLast.getDate();
const TLDay = thisLast.getDay();
const TLDate = thisLast.getDate();
const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const daysList = days.map((day, index) => {
    return (
      <div className={styles.day} key={index}>{day}</div>
    )
  });

  const dates = prevDates.concat(thisDates, nextDates);

  const datesList = dates.map((date, index) => {
    return (
      <div className={styles.date} key={index}>{date}</div>
    )
  });

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div>{thisYear}년 {thisMonth + 1}월</div>
          <div>
            <button>&lt;</button>
            <button>Today</button>
            <button>&gt;</button>
          </div>
        </div>
      <div>
        <div className={styles.days}>
          {daysList}
        </div>
        <div className={styles.dates}>
          {datesList}
        </div>
      </div>
    </div>
  )
}

export default MonthlyCalendar;
