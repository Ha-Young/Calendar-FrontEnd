import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './CalendarContainer.module.css';

import EventContainer from '../EventsContainer/EventsContainer';

import { readEventListOnce } from '../../utils/api';
import { stepToDay, generateWeekList } from '../../utils/date';

import { changeTargetDate, setLoadedState, receiveEventList } from '../../actions/index';

function Calendar({ onLoad, dateInfo, onChange }) {
  useEffect(() => {
    onLoad();
  }, []);

  function handleClickToPrevious() {
    if (dateInfo.isWeeklyMode) {
      const newWeekList = generateWeekList(dateInfo.weekList[0], true);
      return onChange(newWeekList);
    }
    const newSelectedDay = stepToDay(dateInfo.selectedDay, true);
    onChange(newSelectedDay, true);
  }

  function handleClickToNext() {
    if (dateInfo.isWeeklyMode) {
      const newWeekList = generateWeekList(dateInfo.weekList[0], false);
      return onChange(newWeekList);
    }
    const newSelectedDay = stepToDay(dateInfo.selectedDay, false);
    onChange(newSelectedDay, true);
  }

  return (
    <>
      <div className={styles.Calendar}>
        <div className={styles.controller}>
          <button onClick={handleClickToPrevious}>Previous</button>
          <button onClick={handleClickToNext}>Next</button>
        </div>
        {
          dateInfo.isLoading ? <div>is loading...</div>
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

const mapStateToProps = (state) => {
  return {
    dateInfo: state.dateInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    async onLoad() {
      const result = await readEventListOnce();
      dispatch(setLoadedState());
      dispatch(receiveEventList(result));
    },
    onChange(date, option) {
      dispatch(changeTargetDate(date, option));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
