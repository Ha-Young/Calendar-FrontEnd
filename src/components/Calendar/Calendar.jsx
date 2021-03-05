import React, { useEffect } from 'react';
import './Calendar.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';
import CalendarTimeTable from './CalendarTimeTable/CalendarTimeTable';
import { dateInfoToObject, dateInfoToObjectArr } from '../../utils/dateUtil';
import { DAILY_MODE } from '../../constants/dateFormats';
import { getAllEventsByDates } from '../../api';

const Calendar = ({ currentDate, calendarMode, scheduleData, dispatchScheduleData, setTargetScheduleData }) => {
  function getDateArr() {
    // 이걸로 그려야하는 날짜의 갯수를 정한다.
    return calendarMode === DAILY_MODE 
    ? [dateInfoToObject(currentDate)] 
    : dateInfoToObjectArr(currentDate)
  }
  const dateArr = getDateArr();

  useEffect(() => {
    const dateArray = getDateArr();
    function eventCallBack(value) {
      dispatchScheduleData(value);
    }

    // 여기서 firebase에서 데이터를 가져온다.
    calendarMode.length && getAllEventsByDates(dateArray, eventCallBack);
  }, [calendarMode, currentDate]);

  function handleSchduleClickEvent(targetSchedule) {
    return () => setTargetScheduleData(targetSchedule);
  }

  return (
    <div className="calendar">
      <CalendarUpper dateArr={dateArr}></CalendarUpper>
      <hr></hr>
      <CalendarTimeTable scheduleData={scheduleData} calendarMode={calendarMode} callback={handleSchduleClickEvent}></CalendarTimeTable>
    </div>
  );
};

export default Calendar;
