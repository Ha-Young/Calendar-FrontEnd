import React, { useEffect } from 'react';
import styles from './Calendar.module.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';
import CalendarTimeTable from './CalendarTimeTable/CalendarTimeTable';
import { dateInfoToObject, dateInfoToObjectArr } from '../../utils/dateUtil';
import { DAILY_MODE } from '../../constants/dateFormats';
import { getAllEventsByDates } from '../../api';

const Calendar = ({ currentDate, calendarMode, scheduleData, dispatchScheduleData, setTargetScheduleData }) => {
  useEffect(() => {
    const dateArray = getDateArr();
    function eventCallBack(value) {
      dispatchScheduleData(value);
    }

    calendarMode.length && getAllEventsByDates(dateArray, eventCallBack);
  }, [calendarMode, currentDate]);
  
  function getDateArr() {
    return calendarMode === DAILY_MODE 
    ? [dateInfoToObject(currentDate)] 
    : dateInfoToObjectArr(currentDate)
  }
  const dateArr = getDateArr();

  function handleSchduleClickEvent(targetSchedule) {
    return () => setTargetScheduleData(targetSchedule);
  }

  return (
    <div className={styles.calendar}>
      <CalendarUpper dateArr={dateArr}></CalendarUpper>
      <hr></hr>
      <CalendarTimeTable scheduleData={scheduleData} calendarMode={calendarMode} callback={handleSchduleClickEvent}></CalendarTimeTable>
    </div>
  );
};

export default Calendar;
