import React from 'react';

import './DailyView.scss';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import DailyTitleBlock from '../DailyTitleBlock/DailyTitleBlock';
import DayEvents from '../DailyEvents/DailyEvents';

export default function DailyView({ date, events }) {
  return (
    <div className='daily-container'>
      <DailyTitleBlock date={date} />
      <DayEvents />
      {TIMELINE_NUM_SET.map(hour => (
        <div
          className='cell'
          key={hour}
          onClick={() => console.log(date, hour)}
        />
      ))}
    </div>
  );
}
