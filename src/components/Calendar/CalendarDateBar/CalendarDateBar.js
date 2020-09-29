import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  style={{border: "5px solid green"}
  background: yellow;  
`;

export default function CalendarDateBar () {

  return (
    <Wrapper>
      <h1>CalendarDateBar</h1>
    </Wrapper>
  );
}