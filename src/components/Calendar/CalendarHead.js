import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import ArrowShapedButton from '../Shared/ArrowShapedButton';
import { CHANGE_MONTH } from '../../constants/actionTypes';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
  border: 3px solid green;
  padding: 0 5px 0 5px;
`;

export default function CalendarHead ({ thisMonth, updateCalendar }) {
  const [clickCount, setClickCount] = useState(0);
  
  const onClick = useCallback((callback, status, change) => {
    callback(status + change);
  }, [clickCount]);

  useEffect(() => {
    updateCalendar(CHANGE_MONTH, clickCount);
  }, [clickCount]);
  
  return (
    <Wrapper>
      <div style={{marginTop: '4px'}}>{thisMonth}</div>
      <ArrowShapedButton css={{marginTop: '10px'}} direction='left' onClick={onClick.bind(null, setClickCount, clickCount, -1)}/>
      <ArrowShapedButton css={{marginTop: '10px'}} direction='right' onClick={onClick.bind(null, setClickCount, clickCount, 1)}/>
    </Wrapper>
  );
}
