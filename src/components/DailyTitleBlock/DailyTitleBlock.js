import React from 'react';
import moment from 'moment';

import './DailyTitleBlock.scss';

export default function DailyTitleBlock({ date }) {
  const isToday = moment().isSame(date, 'day');

  return (
    <div className={`day-block${isToday ? ' isToday' : ''}`}>
      <div className='day-of-week'>{date.locale('ko').format('ddd')}</div>
      <div className='day'>{date.format('D')}</div>
    </div>
  );
}
