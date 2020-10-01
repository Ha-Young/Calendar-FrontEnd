import React from 'react';
import { connect } from 'react-redux';

import './DailyEvents.scss';
import EventBlock from '../EventBlock/EventBlock';

const DayEvents = ({ currentViewMode }) => {
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
      {events.map((event, idx) => (
        <EventBlock key={idx} viewMode={currentViewMode.title} event={event} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ calendar }) => ({
  currentViewMode: calendar.currentViewMode,
});

export default connect(mapStateToProps, null)(DayEvents);
