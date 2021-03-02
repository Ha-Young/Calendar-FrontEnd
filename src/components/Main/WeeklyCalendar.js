import React from 'react';


const WeeklyCalendar = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date();
  const thisDay = date.getDay();
  const thisDate = date.getDate();
  const times = [];
  const events = [];

  for (let i = 0; i < 24; i++) {
    times.push(i);
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
    return (
      <div className='week-day' key={index}>
        <div>{day}</div>
        <div>{eventList}</div>
      </div>
    )
  });

  return (
    <div className='calendar'>
      <div className='days'>
        <div>
          <div>TimeTable</div>
          {timeList}
        </div>
        {daysList}
      </div>
    </div>
  )
}

export default WeeklyCalendar;
