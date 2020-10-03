import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { getEventListByDate } from '../../reducers/events';

function EventsContainer({ events, dateInfo }) {
  const { isWeeklyMode, weekList, selectedDay } = dateInfo;

  return (
    <div className={styles.EventsContainer} >
      {
        isWeeklyMode ?
        weekList.map((targetDate, idx) => {
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
          date={selectedDay}
          events={getEventListByDate(events, selectedDay)}
        />
      }
    </div>
  );
}

const mapStateToProps = ({ dateInfo, events }) => ({
  dateInfo,
  events
});

export default connect(mapStateToProps, null)(EventsContainer);

EventsContainer.propTypes = {
  events: PropTypes.shape({
    byId: PropTypes.object.isRequired,
    allIds: PropTypes.array.isRequired
  }),
  dataInfo: PropTypes.shape({
    dayStringify: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    selectedDay: PropTypes.string.isRequired,
    weekList: PropTypes.array.isRequired,
    isWeeklyMode: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};
