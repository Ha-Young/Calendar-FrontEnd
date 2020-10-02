import React from 'react';

import './EventBlock.scss';
import getEventBlockStyle from '../../utils/getEventBlockStyle';

export default function EventBlock({
  viewMode,
  content: { title, description, start, end },
}) {
  return (
    <div
      className={`${viewMode} event-block`}
      style={getEventBlockStyle(start.slice(-2), end.slice(-2))}
    >
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  );
}
