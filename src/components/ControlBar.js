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
  function handleMoveNext() {
    moveNext(isWeekly ? 7 : 1);
  }

  function handleMovePrev() {
    movePrev(isWeekly ? 7 : 1);
  }

  return (
    <Container className='status-bar'>
      <Button value='<' onClick={handleMovePrev} />
      <span>{year}.{month}.{date}</span>
      <Button value='>' onClick={handleMoveNext} />
      <Button value={isWeekly ? "일별 보기" : "주간 보기"} onClick={onToggle} />
    </Container>
  );
}
