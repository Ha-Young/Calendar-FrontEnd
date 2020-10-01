import React from 'react';

import './DailyView.scss';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import DayBlock from '../DayBlock/DayBlock';

export default function DailyView({ date, events }) {
  return (
    <div className='daily-container'>
      <DayBlock date={date} />
      {TIMELINE_NUM_SET.map(hour => (
        <div
          className='cell'
          key={hour}
          onClick={() => console.log(date, hour)}
        >
          <span></span>
        </div>
      ))}
    </div>
  );
}
