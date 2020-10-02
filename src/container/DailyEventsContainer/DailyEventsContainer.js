import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './DailyEventsContainer.scss';
import EventBlock from '../../components/EventBlock/EventBlock';

import getEventLists from '../../firebase/utils/getEventLists';

const DailyEvents = ({ date, currentUser, currentViewMode }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsByDate = await getEvents(currentUser.uid, date);
      setEvents(eventsByDate);
    };
    getEvents();
  }, []);

  return (
    <div className='events-container'>
      {events.map((event, idx) => (
        <EventBlock
          key={idx}
          viewMode={currentViewMode.title}
          content={event}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ user, calendar }) => ({
  currentUser: user.currentUser,
  currentViewMode: calendar.currentViewMode,
});

export default connect(mapStateToProps, null)(DailyEvents);
