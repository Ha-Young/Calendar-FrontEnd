import React from 'react';
import { connect } from 'react-redux';

import './DailyEvents.scss';
import EventBlock from '../EventBlock/EventBlock';

const DayEvents = ({ currentViewMode, events }) => {
  return (
    <div className='events-container'>
      {events.map((event, idx) => (
        <EventBlock key={idx} viewMode={currentViewMode.title} event={event} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ user, calendar }) => ({
  currentUser: user.currentUser,
  currentViewMode: calendar.currentViewMode,
});

export default connect(mapStateToProps, null)(DayEvents);
