import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './DailyColumn.scss';
import EventBlock from '../EventBlock/EventBlock';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import convertToISOString from '../../utils/convertToISOString';

export default function DailyColumn({ viewMode, date, eventList }) {
  const isToday = moment().isSame(date, 'day');
  return (
    <div className='daily-container'>
      <div className={`day-block${isToday ? ' isToday' : ''}`}>
        <div className='day-of-week'>{date.format('ddd')}</div>
        <div className='day'>{date.format('D')}</div>
      </div>
      <div className='events-container'>
        {eventList.map((event, idx) => (
          <EventBlock key={idx} viewMode={viewMode} content={event} />
        ))}
      </div>
      {TIMELINE_NUM_SET.map(hour => (
        <Link
          key={hour}
          to={{
            pathname: '/events/new',
            state: {
              date: convertToISOString.Dates(date),
              startHour: hour,
              endHour: hour + 1,
            },
          }}
        >
          <div className='cell' key={hour} />
        </Link>
      ))}
    </div>
  );
}
