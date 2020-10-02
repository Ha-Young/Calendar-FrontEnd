import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './EventsField.scss';
import DailyColumn from '../DailyColumn/DailyColumn';

export default function EventsField({ viewMode, date }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const { gap } = viewMode;

    if (gap === 1) {
      setDates([date]);
    } else if (gap === 7) {
      const startOfThisWeek = moment(date).startOf('week');
      const weeklyDates = [];
      for (let i = 0; i < gap; i++) {
        weeklyDates.push(moment(startOfThisWeek).add(i, 'days'));
      }
      setDates(weeklyDates);
    }
  }, [viewMode, date]);

  return (
    <div className='events-field'>
      {dates.map((date, idx) => (
        <DailyColumn key={idx} date={date} />
      ))}
    </div>
  );
}
