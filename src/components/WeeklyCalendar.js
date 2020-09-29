import React from 'react';

import DateBox from './DateBox';
import { getWeekData } from '../utils/utilFunction';

export default function WeeklyCalendar({
  currentDate
}) {
  const weekData = getWeekData(currentDate);

  return (
    <div className='calendar'>
      {weekData.map((date, index) => {
        return <DateBox key={index} date={date} />
      })}
    </div>
  );
}
