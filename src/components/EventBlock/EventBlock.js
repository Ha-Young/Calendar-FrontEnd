import React from 'react';

import './EventBlock.scss';
import getEventBlockStyle from '../../utils/getEventBlockStyle';

export default function EventBlock({
  viewMode,
  event: { title, description, start, end },
}) {
  return (
    <div
      className={`${viewMode} event-block`}
      style={getEventBlockStyle(start, end)}
    >
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  );
}
