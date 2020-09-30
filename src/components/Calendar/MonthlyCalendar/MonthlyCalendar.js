import React from 'react';
import styled from "styled-components";
import MonthlyCalendarBody from './MonthlyCalendarBody/MonthlyCalendarBody';
import MonthlyCalendarHead from './MonthlyCalendarHead/MonthlyCalendarHead';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
  border: 3px solid yellowgreen;
`;

export default function MonthlyCalendar () {

  return (
    <Wrapper>
      <MonthlyCalendarHead></MonthlyCalendarHead>
      <MonthlyCalendarBody></MonthlyCalendarBody>
    </Wrapper>
  );
}