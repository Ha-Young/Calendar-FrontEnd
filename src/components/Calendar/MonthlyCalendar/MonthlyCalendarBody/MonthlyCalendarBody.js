import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display:grid;
  grid-template-rows: repeat(7, 1fr);
  border: 3px solid tomato;
  // 월화수목금토일 과 일자들로 그리드
`;


export default function MonthlyCalendarBody () {
 // 받아서 몇주 인지 결정해서 깔기
  return (
    <Wrapper>
     
    </Wrapper>
  );
}