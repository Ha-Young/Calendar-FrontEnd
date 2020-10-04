import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CalendarContainer.module.css';

import EventContainer from '../EventsContainer/EventsContainer';

import { VIEW } from '../../constants/viewMode';
import { readEventList } from '../../utils/api';
import { stepToDay, generateWeekList, generateTimeFormat } from '../../utils/date';
import { changeTargetDate, setLoadedState, receiveEventList } from '../../actions/index';

function Calendar({ onLoad, onChange, dateInfo }) {
  const { viewMode, weekList, selectedDay, isLoading } = dateInfo;

  useEffect(() => {
    onLoad();
  }, []);

  const handleClick = useCallback(function ({ target }) {
    const isPrevious = target.name === 'previous' ? true : false;

    if (viewMode === VIEW.WEEKLY_MODE) {
      const newWeekList = generateWeekList(weekList[0], isPrevious);
      return onChange(newWeekList);
    }

    const newSelectedDay = stepToDay(selectedDay, isPrevious);
    onChange(newSelectedDay, true);
  }, [onChange, dateInfo]);

  return (
    <div className={styles.Calendar}>
      <div className={styles.controller}>
        <button name='previous' onClick={handleClick}>Previous</button>
        <button name='next' onClick={handleClick}>Next</button>
      </div>
      {
        isLoading ? <div>is loading...</div>
        :
        <>
          <div className={styles.timeTable}>
            {
              Array.from({ length: 24 }).map((_, idx) => {
                return (
                  <div key={idx}>
                    {generateTimeFormat(idx)}
                  </div>
                );
              })
            }
          </div>
          <EventContainer />
        </>
      }
    </div>
  );
}

const mapStateToProps = ({ dateInfo }) => ({
  dateInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
    async onLoad() {
      try {
        const result = await readEventList();
        dispatch(setLoadedState());
        dispatch(receiveEventList(result));
      } catch (error) {
        console.warn(error.message);
      }
    },
    onChange(date, option) {
      dispatch(changeTargetDate(date, option));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

Calendar.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dataInfo: PropTypes.shape({
    dayStringify: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    selectedDay: PropTypes.string.isRequired,
    weekList: PropTypes.array.isRequired,
    viewMode: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};
