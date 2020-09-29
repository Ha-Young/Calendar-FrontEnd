import React from 'react';
import { Link } from 'react-router-dom';

export default function NewEventContainer() {
  return (
    <>
      <Link to='/calendar'>Back</Link>
      <form action='/abcd' method="get">
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <input type='text' id='description'/>
        </div>
        <div>
          <label htmlFor='start-time'>Start:</label>
          <input type='datetime-local' id='start-time'/>
        </div>
        <div>
          <label htmlFor='end-time'>End:</label>
          <input type='datetime-local' id='end-time'/>
        </div>
        <input type='submit' value='create event' />
      </form>
    </>
  );
}