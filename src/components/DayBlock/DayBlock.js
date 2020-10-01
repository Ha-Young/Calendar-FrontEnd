import React from 'react';
import moment from 'moment';

import './DayBlock.scss';

export default function DayBlock({ date }) {
  const isToday = moment().isSame(date, 'day');

  return (
    <div className={`day-block${isToday ? ' isToday' : ''}`}>
      <div className='day-of-week'>{date.locale('ko').format('ddd')}</div>
      <div className='day'>{date.format('D')}</div>
    </div>
  );
}
