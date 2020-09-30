import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getSample } from '../../utils/api';
import { getEventListByDate } from '../../reducers/index';

function EventsContainer({ onLoad, events, date }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className={styles.EventsContainer} >
      {
        date.isWeeklyMode ?
        date.weekList.map((targetDate, idx) => {
          return (
            <DailyCard
              key={idx}
              date={targetDate}
              events={getEventListByDate(events, targetDate)}
            />
          );
        })
        :
        <DailyCard
          date={date.selectedDay}
          events={getEventListByDate(events, date.selectedDay)}
        />
      }
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

// const [filteredEvents, setFilteredEvents] = useState(null);

  // useEffect(() => {
  //   if (date.isWeeklyMode) {
  //     console.log(date.weekList);
  //   }

  //   // const filtered = [];
  //   // for (const eventId of Object.keys(events)) {
  //   //   if (events[eventId].date === date.selectedDay) {
  //   //     filtered.push(events[eventId]);
  //   //   }
  //   // }

  //   const result = getEventListByDate(events, date.selectedDay);
  //   setFilteredEvents(result);
  // }, [events, date]);

  // useEffect(() => {
  //   // console.log(events);
  //   const filtered = [];
  //   for (const eventId of Object.keys(events)) {
  //     if (events[eventId].date === date.selectedDay) {
  //       filtered.push(events[eventId]);
  //     }
  //   }

  //   setFilteredEvents(filtered);
  // }, [events]);