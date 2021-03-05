import React from 'react';
import styles from './CalendarTimeTable.module.scss';
import { WEEKLY_MODE } from '../../../constants/dateFormats';

import TimeLayout from './TimeLayout/TimeLayout';
import ContentLayout from './ContentLayout/ContentLayout';

const CalendarTimeTable = ({ scheduleData = [], calendarMode, callback }) => {
  function getOneDayLayoutArray() {
    return scheduleData.map((el, index) => {
      return (
        <ContentLayout 
          key={index} 
          todayData={el} 
          isWeek={calendarMode === WEEKLY_MODE} 
          callback={callback}
        />
      );
    });
  }

  return (
    <div className={styles.calendarTimeTableContainer}>
      <TimeLayout></TimeLayout>
      {getOneDayLayoutArray()}
    </div>
  )
}

export default CalendarTimeTable;
