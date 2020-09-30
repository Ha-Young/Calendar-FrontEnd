import React from 'react';

import './Timeline.scss';

import { TIMELINE_12_SET } from '../../constants/calendar.constants';

export default function Timeline() {
  return (
    <div className='timeline-container'>
      {TIMELINE_12_SET.map(hour => (
        <div className='cell'>
          <span>{hour}</span>
        </div>
      ))}
    </div>
  );
}
