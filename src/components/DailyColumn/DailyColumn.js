import React from 'react';
import { Link } from 'react-router-dom';

import './DailyColumn.scss';
import DailyTitleBlock from '../DailyTitleBlock/DailyTitleBlock';
import EventBlock from '../EventBlock/EventBlock';

import { TIMELINE_NUM_SET } from '../../constants/calendar.constants';
import convertToISOString from '../../utils/convertToISOString';

export default function DailyColumn({ date, eventList, viewMode }) {
  return (
    <div className='daily-container'>
      <DailyTitleBlock date={date} />
      <div className='events-container'>
        {eventList.map((event, idx) => (
          <EventBlock key={idx} viewMode={viewMode.title} content={event} />
        ))}
      </div>
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
