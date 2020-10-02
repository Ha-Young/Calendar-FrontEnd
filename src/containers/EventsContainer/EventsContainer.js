import React from 'react';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getEventListByDate } from '../../reducers/events';

function EventsContainer({ events, dateInfo }) {
  return (
    <div className={styles.EventsContainer} >
      {
        dateInfo.isWeeklyMode ?
        dateInfo.weekList.map((targetDate, idx) => {
          {/* console.log(targetDate); */}
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
          date={dateInfo.selectedDay}
          events={getEventListByDate(events, dateInfo.selectedDay)}
        />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dateInfo: state.dateInfo,
    events: state.events
  };
};

export default connect(mapStateToProps, null)(EventsContainer);
