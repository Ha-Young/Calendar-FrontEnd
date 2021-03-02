import React from 'react';
import './Calendar.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';
import CalendarTimeTable from './CalendarTimeTable/CalendarTimeTable';

// width 값은 여기서 동일하게 가진다.
// height 값도 통일해주자
// border 값도 통일

// Redux = 지금 상태가 week 인지 daily인지

const Calendar = () => {
  return (
    <div className="calendar">
      <CalendarUpper></CalendarUpper>
      <hr></hr>
      <CalendarTimeTable></CalendarTimeTable>
    </div>
  );
};

export default Calendar;
