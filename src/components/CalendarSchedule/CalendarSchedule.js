import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  
  background: yellow;  
`;

export default function CalendarSchedule () {

  return (
    <Wrapper style={{border: "3px solid tomato"}}>
      <h1>CalendarSchedule</h1>
    </Wrapper>
  );
}