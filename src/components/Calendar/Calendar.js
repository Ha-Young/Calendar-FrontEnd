import React from 'react';
import './Calendar.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';
import CalendarTimeTable from './CalendarTimeTable/CalendarTimeTable';
import { useSelector } from 'react-redux';
import { dateInfoToObject, dateInfoToObjectArr } from '../../utils/dateUtil';

// width 값은 여기서 동일하게 가진다.
// height 값도 통일해주자
// border 값도 통일

// Redux = 지금 상태가 week 인지 daily인지

const Calendar = () => {
  const currentDate = useSelector(state => state.currentDate);
  const currentWeek = useSelector(state => state.currentWeek);
  const calendarMode = useSelector(state => state.calendarMode);

  function getDateArr() {
    // 이걸로 그려야하는 날짜의 갯수를 정한다.
    const dateArr = [];
    if (calendarMode === 'daily') {
      dateArr.push(dateInfoToObject(currentDate));
      return dateArr;
    }

    const weekDateArr = dateInfoToObjectArr(currentDate);
    weekDateArr.forEach(el => {
      dateArr.push(el);
    });

    console.log(dateArr);
    return dateArr;
  }
  const dateArr = getDateArr();

  return (
    <div className="calendar">
      <CalendarUpper dateArr={dateArr}></CalendarUpper>
      <hr></hr>
      <CalendarTimeTable dateArr={dateArr}></CalendarTimeTable>
    </div>
  );
};

export default Calendar;
