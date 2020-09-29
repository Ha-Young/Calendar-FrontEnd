import React from 'react';
import styled from 'styled-components';
import Button from '../../Shared/Button/Button';

const Wrapper = styled.div`
  
  background: yellow;  
`;

export default function CalendarSchedule () {
  // 새로운 일정은 크리에이트 버튼으로 추가
  // 기존일정의 디테일 확인은 기존 일정 클릭
  return (
    <Wrapper style={{border: "3px solid tomato"}}>
      <h2>x</h2>
      <h1>CalendarSchedule</h1>
      <button>create</button>
      <button>correction</button>
      <button>delete</button>

   
    </Wrapper>
  );
}