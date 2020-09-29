import React, { useEffect } from 'react';
import * as Styled from '../styled';

export default function Daily () {
  let timelines = [];
  for (let i = 0; i < 24; i++) {
    const time = i % 12;
    timelines.push(
    <div className="timeline" key={time}>
      <span className="time">{`${i >= 12 ? 'PM' : 'AM'} ${time}시`}</span>
    </div>);
  }

  return (
    <Styled.CalendarContainer>
      <Styled.Daily>
        {timelines}
        {/* {schedules} */}
      </Styled.Daily>
    </Styled.CalendarContainer>
  );
}
