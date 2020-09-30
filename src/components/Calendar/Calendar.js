import React from 'react';
import styles from './Calendar.module.css';
import ScheduleModeDay from '../ScheduleModeDay/ScheduleModeDay';
import ScheduleModeWeek from '../ScheduleModeWeek/ScheduleModeWeek';
import { MODE_WEEK } from '../../constants/ActionType';

const Calendar = ({ mode, dateObj, weekState }) => {
  return (
    <div className={styles.Calendar}>
      {
        mode === MODE_WEEK ?
        <ScheduleModeWeek dateObj={dateObj} weekState={weekState}/>
        :
        <ScheduleModeDay date={dateObj.date} />
      }
    </div>
  );
};

export default Calendar;

//9.29