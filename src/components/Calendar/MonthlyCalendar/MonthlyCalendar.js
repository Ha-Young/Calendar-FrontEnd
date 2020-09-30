import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
  border: 3px solid yellowgreen;
`;

const CalendarHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
`;


export default function MonthlyCalendar () {

  return (
    <Wrapper>
      <CalendarHead>

      </CalendarHead>
      
    </Wrapper>
  );
}