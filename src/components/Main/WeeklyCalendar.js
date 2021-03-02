import React, { useState } from 'react';
import { makeSundayDate } from '../../utils';

const WeeklyCalendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const times = [];
  const events = [];
  let sundayDate = makeSundayDate(todayDate);

  for (let i = 0; i < 25; i++) {
    times.push(i);
  }

  for (let i = 0; i < 24; i++) {
    events.push(i);
  }

  const timeList = times.map((time, index) => {

    return (
      <div className='timeable'>
        <div className='time' key={index}>{time}</div>
      </div>
    )
  });

  const eventList = events.map((event, index) => {

    return (
      <div className='eventTable'>
        <div className='event' key={index}>event</div>
      </div>
    )
  });

  const daysList = days.map((day, index) => {
    let startDate = sundayDate.getDate();

    sundayDate.setDate(++startDate);

    return (
      <div className='week-day' key={index}>
        <div>
          <div>{day}</div>
          <div>{startDate - 1}</div>
        </div>
        <div className='event-wrapper'>{eventList}</div>
      </div>
    )
  });

  return (
    <div className='calendar'>
      <div className='days'>
        <div>
          <div>TimeTable</div>
          <div className='time-table-wrapper'>
            {timeList}
          </div>
        </div>
        {daysList}
      </div>
    </div>
  )
}

export default WeeklyCalendar;
