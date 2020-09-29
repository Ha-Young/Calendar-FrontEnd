import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './EventContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getSample } from '../../utils/api';

function EventContainer({ onLoad, events, date }) {
  useEffect(() => {
    console.log('load events');
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    console.log('event setting', events);
  }, [events]);

  useEffect(() => {
    console.log('date setting', date);
  }, [date]);

  return (
    <div className={styles.EventContainer}>
      <DailyCard />
      {/* <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard /> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    async onLoad() {
      const result = await getSample(); // firebase
      dispatch({ type: 'RECEIVE_EVENTS', events: result });
    }
  }
}

const mapStateToProps = (state) => ({
  date: state.date,
  events: state.events
})

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);