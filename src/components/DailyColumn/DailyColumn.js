import React from 'react';
import { Link } from 'react-router-dom';

import './DailyColumn.scss';
import DailyTitleBlock from '../DailyTitleBlock/DailyTitleBlock';
import DailyEvents from '../../container/DailyEvents/DailyEvents';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import convertToISOString from '../../utils/convertToISOString';

export default function DailyColumn({ date }) {
  return (
    <div className='daily-container'>
      <DailyTitleBlock date={date} />
      <DailyEvents date={date} />
      {TIMELINE_NUM_SET.map(hour => (
        <Link
          key={hour}
          to={{
            pathname: '/events/new',
            state: {
              initDate: convertToISOString.Dates(date),
              initHour: hour,
            },
          }}
        >
          <div className='cell' key={hour} />
        </Link>
      ))}
    </div>
  );
}
