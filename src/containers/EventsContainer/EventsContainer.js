import React from 'react';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getEventListByDate } from '../../reducers/index';

function EventsContainer({ events, date }) {
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

export default connect(mapStateToProps, null)(EventsContainer);

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