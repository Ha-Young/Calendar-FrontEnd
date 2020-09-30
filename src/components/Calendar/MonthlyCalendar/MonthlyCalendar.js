import React, { useState } from 'react';
import styled from 'styled-components';
import arrangeDatesWeeklyBasis from '../../../utils/arrangeDatesWeeklyBasis'
import MonthlyCalendarBody from './MonthlyCalendarBody/MonthlyCalendarBody';
import MonthlyCalendarHead from './MonthlyCalendarHead/MonthlyCalendarHead';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function MonthlyCalendar () {
  const [ changeMonth, setChangeMonth ] = useState(0);
  const { thisMonth, weeklyBasisDates } = arrangeDatesWeeklyBasis(changeMonth); //리덕스 스테이트
  
  const nextMonth = function () {
    setChangeMonth(changeMonth + 1);
  };

  const prevMonth = function () {
    setChangeMonth(changeMonth - 1);
  };

  return (
    <Wrapper>
      <MonthlyCalendarHead month={thisMonth} 
        nextMonth={nextMonth}
        prevMonth={prevMonth}  
      />
      <MonthlyCalendarBody></MonthlyCalendarBody>
    </Wrapper>
  );
}