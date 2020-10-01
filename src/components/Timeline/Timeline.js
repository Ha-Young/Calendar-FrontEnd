import React from 'react';

import './Timeline.scss';

import { TIMELINE_12_SET } from '../../constants/calendar.constants';

export default function Timeline() {
  return (
    <div className='timeline-container'>
      {TIMELINE_12_SET.map((hour, idx) => (
        <div key={idx} className='cell'>
          <span>{hour}</span>
        </div>
      ))}
    </div>
  );
}
