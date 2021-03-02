import React from 'react';
import WeekelyCalendar from './WeeklyCalendar';


const DailyCalendar = () => {
  const date = new Date();

  return (
    <WeekelyCalendar>
      <div>children</div>
    </WeekelyCalendar>
  )
}

export default DailyCalendar;
