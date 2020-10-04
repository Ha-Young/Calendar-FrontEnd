import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './EventsContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

import { VIEW } from '../../constants/viewMode';
import { getEventListByDate } from '../../reducers/events';

function EventsContainer({ events, dateInfo }) {
  const { viewMode, weekList, selectedDay } = dateInfo;

  return (
    <div className={styles.EventsContainer} >
      {
        viewMode === VIEW.WEEKLY_MODE ?
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

export default connect(mapStateToProps)(EventsContainer);

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
    viewMode: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};
