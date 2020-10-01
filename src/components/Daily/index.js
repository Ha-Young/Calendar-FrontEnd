import React from 'react';
import { format } from 'date-fns';
import * as Styled from '../styled';

export default function Daily ({ scheduleDatas, renderSchedules }) {
  let timelines = [];
  for (let i = 0; i < 24; i++) {
    const time = i % 12;
    timelines.push(
    <div className='timeline' key={`time-${i}`}>
      <span className='time'>{`${i >= 12 ? 'PM' : 'AM'} ${time}시`}</span>
    </div>);
  }

  const date = format(new Date(), 'yyyy-MM-dd');
  const schedules = renderSchedules(scheduleDatas, date);

  return (
    <Styled.Daily>
      <div className='timelines'>
        {timelines}
      </div>
      <div className='schedules'>
        {schedules}
      </div>
    </Styled.Daily>
  );
}
