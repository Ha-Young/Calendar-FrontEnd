import React from 'react';
import { Link } from 'react-router-dom';

import './EventBlock.scss';

import convertToISOString from '../../utils/convertToISOString';
import getEventBlockStyle from '../../utils/getEventBlockStyle';

export default function EventBlock({
  viewMode,
  content: { eventId, title, description, start, end },
}) {
  return (
    <Link
      to={{
        pathname: `/events/${eventId}`,
        state: {
          eventId,
          title,
          description,
          date: convertToISOString.Dates(start),
          startHour: start.slice(-2),
          endHour: end.slice(-2),
        },
      }}
    >
      <div
        className={`${viewMode.toLowerCase()} event-block`}
        style={getEventBlockStyle(start.slice(-2), end.slice(-2))}
      >
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
      </div>
    </Link>
  );
}
