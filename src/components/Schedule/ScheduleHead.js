import React, { useEffect, useState, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import CalendarBody from '../Calendar/CalendarBody';
import ArrowShapedButton from '../Shared/ArrowShapedButton';
import { CHANGE_WEEK } from '../../constants/actionTypes';

const Wrapper = styled.div`
  display: grid;
`;

export default function ScheduleHead ({ type, dates, updateCalendar }) {
  const [clickCount, setClickCount] = useState(0);
  
  const onClick = useCallback((callback, status, change) => {
    callback(status + change);
  }, [clickCount]);

  useEffect(() => {
    updateCalendar(CHANGE_WEEK, clickCount);
  }, [clickCount]);

  const renderWeeklyLayout = useCallback(() => {
    return (
      <Wrapper style={{gridTemplateColumns: '8% 1fr 7%'}}>
        <ArrowShapedButton
          css={{margin: '25px 0 0 25px', width: '10px', height: '10px'}}
          direction='left'
          onClick={onClick.bind(null, setClickCount, clickCount, -1)}
        />
        <CalendarBody type={type} dates={dates}/>
        <ArrowShapedButton
          css={{margin: '24px 0 0 15px', width: '10px', height: '10px'}}
          direction='right'
          onClick={onClick.bind(null, setClickCount, clickCount, 1)}
        />
      </Wrapper>
    );
  }, [clickCount]);

  const renderDailyLayout = useCallback(() => {
    return (
      <Wrapper style={{gridTemplateColumns: '1fr'}}>
        <CalendarBody type={type} dates={dates}/>
      </Wrapper>
    );
  });

  return (
    <>
      {
        (useRouteMatch().path === '/weekly')
        ? renderWeeklyLayout()
        : renderDailyLayout()
      }
    </>
  );
}
