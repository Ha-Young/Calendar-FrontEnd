import React, { useEffect } from 'react';
import * as Styled from '../styled';

export default function Daily ({ scheduleDatas }) {
  let timelines = [];
  for (let i = 0; i < 24; i++) {
    const time = i % 12;
    timelines.push(
    <div className='timeline' key={i}> {/* key need to be changed */}
      <span className='time'>{`${i >= 12 ? 'PM' : 'AM'} ${time}시`}</span>
    </div>);
  }

  const schedules = [];
  for (let schedule of Object.values(scheduleDatas)) {
    console.log(schedule);
    const scheduleTop = calculateScheduleTop(schedule);
    const scheduleHeight = calculateScheduleHeight(schedule);

    function calculateScheduleTop (schedule) {
      if (schedule.scheduleStartTime === '') return 0;

      const [hour, minute] = schedule.scheduleStartTime.split(':');
      return parseInt(hour) * 60 + parseInt(minute);
    }
    function calculateScheduleHeight (schedule) {
      if (schedule.scheduleEndTime === '') return 60;

      const [hour, minute] = schedule.scheduleEndTime.split(':');
      return parseInt(hour) * 60 + parseInt(minute) - calculateScheduleTop(schedule);
    }

    const style = {
      top: scheduleTop,
      height: scheduleHeight,
      backgroundColor: schedule.color || '#cbf542'
    };

    const element =
      <div className='schedule' key={schedule.id} style={style}>
        <span className='scheduleName'>{schedule.scheduleName}</span>
        <br/>
        <span className='scheduleDesc'>{schedule.scheduleDesc}</span>
      </div>;
    schedules.push(element);
  }

  return (
    <Styled.CalendarContainer>
      <Styled.Daily>
        <div className='timelines'>
          {timelines}
        </div>
        <div className='schedules'>
          {schedules}
        </div>
      </Styled.Daily>
    </Styled.CalendarContainer>
  );
}
