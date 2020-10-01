import React, { useState } from 'react';
import styled from 'styled-components';
import MonthlyCalendarBody from './MonthlyCalendarBody/MonthlyCalendarBody';
import MonthlyCalendarHead from './MonthlyCalendarHead/MonthlyCalendarHead';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function Calendar ({ thisMonth, dates, onClickPrevMonth, onClickNextMonth }) { //MonthlyCalendar
  
  return (
    <Wrapper>
      <MonthlyCalendarHead thisMonth={thisMonth} 
        onClickPrevMonth={onClickPrevMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <MonthlyCalendarBody type="weekly" dates={dates} />
    </Wrapper>
  );
}