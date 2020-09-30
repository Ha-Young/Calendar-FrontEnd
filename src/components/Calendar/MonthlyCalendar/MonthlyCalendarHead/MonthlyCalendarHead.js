import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
  border: 3px solid green;
`;

export default function MonthlyCalendarHead () {

  return (
    <Wrapper>
      <div>month</div>
      <button>prev</button>
      <button>next</button>
    </Wrapper>
  );
}