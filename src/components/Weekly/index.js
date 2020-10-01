import React from 'react';
import * as Styled from '../styled';

export default function Weekly ({ scheduleDatas, renderSchedules }) {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const daylines = days.map((day, i) => {
    return (
      <div className='dayline' key={`day-${i}`}>
        <span className='day'>{`${day}`}</span>
      </div>);
  })

  let timelines = [];
  for (let i = 0; i < 24; i++) {
    const time = i % 12;
    timelines.push(
    <div className='timeline' key={`time-${i}`}>
      <span className='time'>{`${i >= 12 ? 'PM' : 'AM'} ${time}시`}</span>
    </div>);
  }
  const schedules = renderSchedules(scheduleDatas);

  return (
    <Styled.Weekly>
      <div className='daylines'>
        {daylines}
      </div>
      <div className='timelines'>
        {timelines}
      </div>
      <div className='schedules'>
        {schedules}
      </div>
    </Styled.Weekly>
  );
}
