import React from 'react';
import './MonthlyCalendar.css';

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

const MonthlyCalendar = () => {
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
      <div className='day' key={index}>{day}</div>
    )
  });

  const dates = prevDates.concat(thisDates, nextDates);

  const datesList = dates.map((date, index) => {
    return (
      <div className='date' key={index}>{date}</div>
    )
  });

  return (
    <div className='calendar'>
      <div className='header'>
        <div className='year-month'>{thisYear}년 {thisMonth}월</div>
          <div className='nav'>
            <button className='nav-btn go-prev'>&lt;</button>
            <button className='nav-btn go-today'>Today</button>
            <button className='nav-btn go-next'>&gt;</button>
          </div>
        </div>
      <div className='main'>
        <div className='days'>
          {daysList}
        </div>
        <div className='dates'>
          {datesList}
        </div>
      </div>
    </div>
  )
}

export default MonthlyCalendar;
