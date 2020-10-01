import React from 'react';
import styled from 'styled-components';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function Calendar ({ thisMonth, dates, onClickPrevMonth, onClickNextMonth }) { //MonthlyCalendar
  
  return (
    <Wrapper>
      <CalendarHead
        thisMonth={thisMonth} 
        onClickPrevMonth={onClickPrevMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <CalendarBody type="weekly" dates={dates} />
    </Wrapper>
  );
}
