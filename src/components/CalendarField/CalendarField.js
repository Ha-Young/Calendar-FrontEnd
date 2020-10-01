import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './CalendarField.scss';
import DailyView from '../DailyView/DailyView';

export default function CalendarField({ viewMode, date }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const { gap } = viewMode;

    if (gap === 1) {
      setDays([date]);
    } else if (gap === 7) {
      const startOfThisWeek = moment(date).startOf('week');
      const dates = [];
      for (let i = 0; i < gap; i++) {
        const weekday = moment(startOfThisWeek).add(i, 'days');
        dates.push(weekday);
      }
      setDays(dates);
    }
  }, [viewMode, date]);

  return (
    <div className='calendar-field'>
      {days.map(day => (
        <DailyView key={day.valueOf()} date={day} />
      ))}
    </div>
  );
}
