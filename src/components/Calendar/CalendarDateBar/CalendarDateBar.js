import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  background: yellow;  
`;

export default function CalendarDateBar () {

  return (
    <Wrapper style={{border: "5px solid green"}}>
      <h1>CalendarDateBar</h1>
    </Wrapper>
  );
}