import React from 'react';
// import styles from './Calendar.module.css';

import EventContainer from '../../containers/EventsContainer/EventsContainer';

export default function Calendar() {
  return (
    <>
      <div>Calendar</div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <EventContainer />
    </>
  );
}
