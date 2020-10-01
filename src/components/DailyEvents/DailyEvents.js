import React from 'react';

import './DailyEvents.scss';
import getEventBlockStyle from '../../utils/getEventBlockStyle';

export default function DayEvents() {
  const viewMode = 'DAILY';
  const events = [
    {
      title: '장보기',
      description: '설명쓰',
      start: '2020-10-27T04',
      end: '2020-10-27T07',
    },
    {
      title: '물고기밥주기',
      description: '설명쓰1',
      start: '2020-10-27T05',
      end: '2020-10-27T06',
    },
    {
      title: '알람키기',
      description: '설명쓰2',
      start: '2020-10-27T08',
      end: '2020-10-27T09',
    },
  ];

  return (
    <div className='events-container'>
      {events.map(({ title, description, start, end }, idx) => (
        <div
          key={idx}
          className={`${viewMode.toLowerCase()} event-block`}
          style={getEventBlockStyle(start, end)}
        >
          <div className='title'>{title}</div>
          <div className='description'>{description}</div>
        </div>
      ))}
    </div>
  );
}
