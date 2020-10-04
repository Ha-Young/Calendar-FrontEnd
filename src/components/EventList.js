import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import EventBox from './EventBox';
import Button from './Button';

export default function EventList({ events }) {
  const history = useHistory();

  function handleAddEvent() {
    history.push('/events/new');
  }

  return (
    <nav>
      <Button onClick={handleAddEvent} buttonText='이벤트 만들기'/>
      {
        events.events.map((eventId) => {
          const data = events.eventsId[eventId];

          return <EventBox key={data.id} {...data}/>;
        })
      }
    </nav>
  );
}

EventList.propTypes = {
  events: PropTypes.object,
};