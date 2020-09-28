import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  
  background: yellow;  
`;

export default function CalendarTimeline () {

  return (
    <Wrapper style={{border: "3px solid blue"}}>
      <h1>CalendarTimeline</h1>
    </Wrapper>
  );
}