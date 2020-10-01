import React from 'react';
import PropTypes from 'prop-types';

import DateBox from './DateBox';
import { getWeekData } from '../utils/utilFunction';

export default function WeeklyCalendar({
  currentDate,
  eventData
}) {
  const weekData = getWeekData(currentDate);

  return (
    <div className='calendar'>
      {weekData.map((date, index) => {
        return <DateBox key={index} date={date} eventData={eventData} />
      })}
    </div>
  );
}

WeeklyCalendar.propTypes = {
  currentDate: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  eventData: PropTypes.shape({
    date: PropTypes.object,
    events: PropTypes.array,
    eventsId: PropTypes.object,
  }).isRequired,
};
