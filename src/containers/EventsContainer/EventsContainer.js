import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getSample } from '../../utils/api';

function EventsContainer({ onLoad, events, date }) {
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    console.log(events);
    const filtered = [];
    for (const eventId of Object.keys(events)) {
      if (events[eventId].date === date.selectedDay) {
        filtered.push(events[eventId]);
      }
    }

    setFilteredEvents(filtered);
  }, [events]);

  return (
    <div className={styles.EventsContainer} >
      <DailyCard
        date={date}
        events={filteredEvents}
      />
      {/* <DailyCard /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    date: state.date,
    events: state.events
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    async onLoad() {
      const result = await getSample(); // firebase
      dispatch({ type: 'RECEIVE_EVENTS', events: result });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);

