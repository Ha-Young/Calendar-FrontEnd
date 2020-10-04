import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
      <Button buttonText='<' onClick={handleMovePrev}/>
      <span>{year}.{month}.{date}</span>
      <Button buttonText='>' onClick={handleMoveNext}/>
      <Button buttonText={isWeekly ? '일별 보기' : '주간 보기'} onClick={onToggle}/>
    </Container>
  );
}

ControlBar.propTypes = {
  isWeekly: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  movePrev: PropTypes.func.isRequired,
  moveNext: PropTypes.func.isRequired,
  date: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
