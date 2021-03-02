import React from 'react';
import { makeSundayDate } from '../../utils';

const WeeklyCalendar = ({ children }) => {
  const todayDate = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const timeCells = [];
  const eventCells = [];
  let sundayDate = makeSundayDate(todayDate);
  let daysList;

  for (let i = 0; i < 25; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < 24; j++) {
    eventCells.push(j);
  }

  const timeList = timeCells.map((time, index) => {

    return (
      <div className='timeable'>
        <div className='time' key={index}>{time}</div>
      </div>
    )
  });

  const eventList = eventCells.map((event, index) => {

    return (
      <div className='eventTable'>
        <div className='event' key={index}>event</div>
      </div>
    )
  });

  if (!children) {
    daysList = days.map((day, index) => {
      let startDate = sundayDate.getDate();

      sundayDate.setDate(++startDate);

      return (
        <div className='week-day' key={index}>
          <div className='day-date-wrapper'>
            <div>{day}</div>
            <div>{startDate - 1}</div>
          </div>
          <div className='event-wrapper' key={index}>{eventList}</div>
        </div>
      )
    });
  } else {
    daysList = days.map((day, index) => {
      return (
        <div className='week-day' key={index}>
          <div className='day-date-wrapper'>
          </div>
          <div className='event-wrapper' key={index}>{eventList}</div>
        </div>
      )
    })
  }


  return (
    <div className='calendar'>
      <div className='days'>
        <div>
          <div className='time-table-title'>TimeTable</div>
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
