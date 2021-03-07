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

    calendarMode.length && getAllEventsByDates(dateArray, dispatchScheduleData);
  }, [calendarMode.length]);
  
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
      <CalendarUpper dateArr={dateArr} />
      <hr />
      <CalendarTimeTable scheduleData={scheduleData} calendarMode={calendarMode} callback={handleSchduleClickEvent} />
    </div>
  );
};

export default Calendar;
