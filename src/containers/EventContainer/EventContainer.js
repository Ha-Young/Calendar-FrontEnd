import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './EventContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getSample } from '../../utils/api';

function EventContainer({ onLoad, events, date }) {
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    const filtered =
      events.filter((event) => event.date === date.selectedDay);

    console.log('events', events);
    console.log('filtered', filtered);

    setFilteredEvents(filtered);
  }, [events]);

  return (
    <div className={styles.EventContainer} >
      <DailyCard
        date={date.selectedDay}
        events={filteredEvents}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);