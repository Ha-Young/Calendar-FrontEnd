import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Event = ({ event, match }) => {
  // const url = useHistory();
  // url.push(`/events/${event.id}`);

  return (
    <>
      <Link to={`/events/${event.id}`}>
        <h4>{event.title}</h4>
      </Link>
      <div>{event.description}</div>
      <div>{event.date}</div>
    </>
  );
};

export default Event;
