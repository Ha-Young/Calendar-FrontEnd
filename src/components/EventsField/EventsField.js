import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './EventsField.scss';
import DailyView from '../DailyView/DailyView';

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
      {dates.map((day, idx) => (
        <DailyView key={idx} date={day} events={[]} />
      ))}
    </div>
  );
}
