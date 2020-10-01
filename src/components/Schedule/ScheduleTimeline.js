import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  align-items: start;
  border: 3px solid black;
`;

const Hour = styled.div`
  text-align: center;
`;

export default function ScheduleTimeline () {
  
  function makeHourbox () {
    const hours = [];
    for (let i = 1; i < 25; i++) {
      if (i === 24) {
        hours[i] = <Hour key={i}>{i - 12}AM</Hour>
        hours[0] = <Hour key={0}>{i - 12}AM</Hour>
      } else if (i === 1) {
        hours[i] = <Hour key={i}>{i}AM</Hour>
        hours[25] = <Hour key={25}>1AM</Hour>
      } else if (i === 12) {
        hours[i] = <Hour key={i}>{i}PM</Hour>  
      } else if (i > 11) {
        hours[i] = <Hour key={i}>{i - 12}PM</Hour>
      } else hours[i] = <Hour key={i}>{i}AM</Hour>
    }
    return hours;
  }

  return (
    <Wrapper>
      {makeHourbox()}
    </Wrapper>
  );
}
