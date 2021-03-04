import React from 'react';
import { useParams } from 'react-router-dom';

const Event = ({ eventsInfo }) => {
  const params = useParams();
  console.log(eventsInfo);
  return (
    <div>
      123
    </div>
  )
}

export default Event;
