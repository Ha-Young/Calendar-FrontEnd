import React from 'react';
import { Route } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const id = '12343456';
  
  return (
    <>
      {
        events &&
        <Route path={`/events/${id}`}>
          <div>
            <div>{events.title}</div>
            <div>{events.description}</div>
            <div>{events.date}</div>
            <button >수정</button>
            <button >삭제</button>
          </div>
        </Route>
      }
    </>
  );
};

export default EventDetails;
