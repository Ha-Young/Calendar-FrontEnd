import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './CalendarContainer.module.css';

import EventContainer from '../EventsContainer/EventsContainer';

import { readEventListOnce } from '../../utils/api';
import { stepToDay, generateDayString, generateWeekList } from '../../utils/date';

function Calendar({ onLoad, dateInfo, onBackward, onForward }) {
  useEffect(() => {
    onLoad();
  }, []);

  function handleClickToPrevious() {
    if (dateInfo.isWeeklyMode) {
      const newWeekList = generateWeekList(dateInfo.weekList[0], true);
      return onBackward(newWeekList);
    }
    const newSelectedDay = stepToDay(dateInfo.selectedDay, true);
    onBackward(newSelectedDay, true);
  }

  function handleClickToNext() {
    if (dateInfo.isWeeklyMode) {
      const newWeekList = generateWeekList(dateInfo.weekList[0], false);
      return onForward(newWeekList);
    }
    const newSelectedDay = stepToDay(dateInfo.selectedDay, false);
    onForward(newSelectedDay, true);
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
      dispatch({ type: 'LOADED_EVENTS', payload: { isLoading: false }});
      dispatch({ type: 'RECEIVE_EVENTS', events: result });
    },
    onBackward(data, option) {
      if (option) {
        dispatch({ type: 'BACKWARD_DAYS', payload: { selectedDay: data, dayStringify: generateDayString(data) }});
        return;
      }
      dispatch({ type: 'BACKWARD_DAYS', payload: { weekList: data }});
    },
    onForward(data, option) {
      if (option) {
        dispatch({ type: 'FORWARD_DAYS', payload: { selectedDay: data, dayStringify: generateDayString(data) }});
        return;
      }
      dispatch({ type: 'FORWARD_DAYS', payload: { weekList: data }});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
