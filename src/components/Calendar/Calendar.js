import React from 'react';
import styled from 'styled-components';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function Calendar ({ dates, updateCalendar }) { //MonthlyCalendar
  
  return (
    <Wrapper>
      <CalendarHead
        thisMonth={dates.thisMonth} 
        updateCalendar={updateCalendar}
      />
      <CalendarBody type="weekly" dates={dates.monthlyDates} />
    </Wrapper>
  );
}
