import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './CalendarContainer.module.css';

import EventContainer from '../EventsContainer/EventsContainer';

import { readEventListOnce } from '../../utils/api';
import { stepToDay, generateWeekList } from '../../utils/date';
import { changeTargetDate, setLoadedState, receiveEventList } from '../../actions/index';

function Calendar({ onLoad, onChange, dateInfo }) {
  const { isWeeklyMode, weekList, selectedDay, isLoading } = dateInfo;

  useEffect(() => {
    onLoad();
  }, []);

  function handleClick({ target }) {
    let isPrevious = false;
    if (target.name === 'previous') isPrevious = true;

    if (isWeeklyMode) {
      const newWeekList = generateWeekList(weekList[0], isPrevious);
      return onChange(newWeekList);
    }

    const newSelectedDay = stepToDay(selectedDay, isPrevious);
    onChange(newSelectedDay, !isWeeklyMode);
  }

  return (
    <>
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
                      {`${idx > 9 ? idx : '0' + idx}:00`}
                    </div>
                  );
                })
              }
            </div>
            <EventContainer />
          </>
        }
      </div>
    </>
  );
}

const mapStateToProps = ({ dateInfo }) => ({
  dateInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
    async onLoad() {
      try {
        const result = await readEventListOnce();
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
