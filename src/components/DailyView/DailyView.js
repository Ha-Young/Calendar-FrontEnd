import React from 'react';
import { Link } from 'react-router-dom';

import './DailyView.scss';
import DailyTitleBlock from '../DailyTitleBlock/DailyTitleBlock';
import DayEvents from '../DailyEvents/DailyEvents';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import convertToISOString from '../../utils/convertToISOString';

export default function DailyView({ date, events }) {
  return (
    <div className='daily-container'>
      <DailyTitleBlock date={date} />
      <DayEvents events={events} />
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
