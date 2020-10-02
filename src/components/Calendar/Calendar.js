import React, { useEffect } from 'react';
import styled from 'styled-components';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';
import { CHANGE_DAY } from '../../constants/actionTypes';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function Calendar ({ dates, updateCalendar, updateToday }) {
  useEffect(() => {
    const newToday = new Date().getDate();
    if (dates.today !== newToday) {
      updateToday(CHANGE_DAY, newToday);
    }
  }, [dates]);

  return (
    <Wrapper>
      <CalendarHead
        thisMonth={dates.thisMonth}
        updateCalendar={updateCalendar}
      />
      <CalendarBody type='weekly' dates={dates.monthlyDates}/>
    </Wrapper>
  );
}
