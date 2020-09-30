import React from 'react';
import styled from 'styled-components';
import ArrowShapedButton from '../../../Shared/Button/ArrowShapedButton/ArrowShapedButton.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
  border: 3px solid green;
  padding: 0 5px 0 5px;
`;

export default function MonthlyCalendarHead ({ thisMonth, onClickPrevMonth, onClickNextMonth }) {

  return (
    <Wrapper>
      <div style={{marginTop: "4px"}}>{thisMonth}</div>
      <ArrowShapedButton css={{marginTop: "10px"}} direction="left" onClick={onClickPrevMonth} />
      <ArrowShapedButton css={{marginTop: "10px"}} direction="right" onClick={onClickNextMonth} />
    </Wrapper>
  );
}