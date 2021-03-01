import React from 'react';
import './calendar.css';

export default function Calendar () {
  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth();
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

  const dates = prevDates.concat(thisDates, nextDates);
  const calendarDates = dates.map(date => {
    return (
      <div class='date'>{date}</div>
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
          <div className='day'>일</div>
          <div className='day'>월</div>
          <div className='day'>화</div>
          <div className='day'>수</div>
          <div className='day'>목</div>
          <div className='day'>금</div>
          <div className='day'>토</div>
        </div>
      <div className='dates'>
        {calendarDates}
      </div>
      </div>
    </div>
  )
}
