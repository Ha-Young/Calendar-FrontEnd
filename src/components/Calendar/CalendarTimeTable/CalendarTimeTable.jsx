import React from 'react';
import styles from './CalendarTimeTable.module.scss';
import { WEEKLY_MODE } from '../../../constants/dateFormats';

import TimeLayout from './TimeLayout/TimeLayout';
import ContentLayout from './ContentLayout/ContentLayout';

const CalendarTimeTable = ({ scheduleData = [], calendarMode, callback }) => {
  function getOneDayLayoutArray() {
    return scheduleData.map((todayData, i) => {
      return (
        <ContentLayout 
          key={i} 
          todayData={todayData} 
          isWeek={calendarMode === WEEKLY_MODE} 
          callback={callback}
        />
      );
    });
  }

  return (
    <div className={styles.calendarTimeTableContainer}>
      <TimeLayout />
      {getOneDayLayoutArray()}
    </div>
  );
}

export default CalendarTimeTable;
