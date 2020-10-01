import React from 'react';
import styled from 'styled-components';
import CalendarBody from '../Calendar/CalendarBody';
import ArrowShapedButton from '../Shared/ArrowShapedButton';


const Wrapper = styled.div`
  display: grid;
`;

export default function ScheduleHead ({ type, dates, onClickPrevWeek, onClickNextWeek }) { //CalendarDateBar
  
  function renderByType () {
    if (type === 'weekly') {
      return (
        <Wrapper style={{gridTemplateColumns: '8% 1fr 7%'}}>
          <ArrowShapedButton
            css={{margin: '25px 0 0 25px', width: '10px', height: '10px'}} 
            direction='left'
            onClick={onClickPrevWeek}
          />
          <CalendarBody type={type} dates={dates} />
          <ArrowShapedButton
            css={{margin: '24px 0 0 15px', width: '10px', height: '10px'}} 
            direction='right'
            onClick={onClickNextWeek}
          />
        </Wrapper>
      );
    } 

    return (
      <Wrapper style={{gridTemplateColumns: '1fr'}}>
        <CalendarBody type={type} dates={dates} />
      </Wrapper>
    );
  }
  return renderByType();
}
