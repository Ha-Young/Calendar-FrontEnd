import React from 'react';
// import styles from './Calendar.module.css';

import EventContainer from '../../containers/EventContainer/EventContainer';

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
