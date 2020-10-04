import React from 'react';
import { MODE_WEEK } from '../../constants/ActionType';
import ScheduleModeDay from '../ScheduleModeDay/ScheduleModeDay';
import ScheduleModeWeek from '../ScheduleModeWeek/ScheduleModeWeek';
import styles from './Calendar.module.css';

const Calendar = ({ mode, dateState }) => {
  return (
    <div className={styles.Calendar}>
      {mode === MODE_WEEK ? <ScheduleModeWeek dateState={dateState}/> : <ScheduleModeDay />}
    </div>
  );
};

export default Calendar;
