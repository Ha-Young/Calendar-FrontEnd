import React, { useEffect, useState } from 'react';
import './Calendar.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';
import CalendarTimeTable from './CalendarTimeTable/CalendarTimeTable';
import { dateInfoToObject, dateInfoToObjectArr } from '../../utils/dateUtil';
import { DAILY_MODE } from '../../constants/dateFormats';
import { getAllEventsByDates } from '../../api';

const Calendar = ({ currentDate, currentWeek, calendarMode, scheduleData, dispatchScheduleData }) => {
  function getDateArr() {
    // 이걸로 그려야하는 날짜의 갯수를 정한다.
    console.log(calendarMode);
    if (calendarMode === DAILY_MODE) {
      console.log(" come in!! DAILY");
      return [dateInfoToObject(currentDate)];
    }

    return dateInfoToObjectArr(currentDate);
  }
  const dateArr = getDateArr();

  useEffect(() => {
    const dateArray = getDateArr();
    console.log('dateArr : ', dateArray);
    console.log(calendarMode);

    function eventCallBack(value) {
      console.log('in callback: ', value);
      dispatchScheduleData(value);
    }

    // 여기서 firebase에서 데이터를 가져온다.
    calendarMode.length && getAllEventsByDates(dateArray, eventCallBack);
  }, [calendarMode]);

  return (
    <div className="calendar">
      <CalendarUpper dateArr={dateArr}></CalendarUpper>
      <hr></hr>
      <CalendarTimeTable scheduleData={scheduleData} calendarMode={calendarMode}></CalendarTimeTable>
    </div>
  );
};

export default Calendar;
