import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './CalendarContainer.module.css';

import EventContainer from '../EventsContainer/EventsContainer';

import { readEventListOnce } from '../../utils/api';
import { stepToDay, generateDayString, generateWeekList } from '../../utils/date';

function Calendar({ onLoad, date, onBackward, onForward }) {
  useEffect(() => {
    onLoad();
  }, []);

  function handleClickToPrevious() {
    if (date.isWeeklyMode) {
      const newWeekList = generateWeekList(date.weekList[0], true);
      return onBackward(newWeekList);
    }
    const newSelectedDay = stepToDay(date.selectedDay, true);
    onBackward(newSelectedDay, true);
  }

  function handleClickToNext() {
    if (date.isWeeklyMode) {
      const newWeekList = generateWeekList(date.weekList[0], false);
      return onForward(newWeekList);
    }
    const newSelectedDay = stepToDay(date.selectedDay, false);
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
          date.isLoading ? <div>is loading...</div>
          :
          <>
            <EventContainer />
          </>
        }
      </div>
    </>
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
      const result = await readEventListOnce();
      // console.log('onLoad:', result);
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
