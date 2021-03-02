import React from 'react';


const WeeklyCalendar = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토', '일'];
  const times = [];

  for (let i = 0; i < 24; i++) {
    times.push(i);
  }

  const daysList = days.map((day, index) => {
    return (
      <div className='day' key={index}>{day}</div>
    )
  });

  const timeList = times.map((time, index) => {
    return (
      <div className='time' key={index}>{time}</div>
    )
  });

  return (
    <div className='calendar'>
      <div className='days'>
        {daysList}
      </div>
      <div className='times'>
        {timeList}
      </div>
    </div>
  )
}

export default WeeklyCalendar;
