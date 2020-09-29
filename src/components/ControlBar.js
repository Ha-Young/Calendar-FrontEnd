import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  span {
    display: flex;
    align-items: center;
  }
`;

export default function ControlBar({
  isWeekly,
  onToggle,
  movePrev,
  moveNext,
  date: { year, month, date }
}) {
  return (
    <Container className='status-bar'>
      <Button value='<' onClick={movePrev} />
      <span>{year}.{month}.{date}</span>
      <Button value='>' onClick={moveNext} />
      <Button value={isWeekly ? "일별 보기" : "주간 보기"} onClick={onToggle} />
    </Container>
  );
}
