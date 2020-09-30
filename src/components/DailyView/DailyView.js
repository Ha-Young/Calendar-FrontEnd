import React from 'react';

import './DailyView.scss';

import { TIMELINE_12_SET } from '../../constants/calendar.constants';

export default function DailyView({ day }) {
  return (
    <div className='daily-container'>
      <div className='date'>{day}</div>
      {TIMELINE_12_SET.map(hour => (
        <div className='cell'>
          <span></span>
        </div>
      ))}
    </div>
  );
}
