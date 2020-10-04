import React, { useEffect } from 'react';
import renderSchedules from '../../utils/renderSchedules';
import * as Styled from '../styled';

export default function Weekly ({ week, scheduleDatas, updateTimespan }) {
  useEffect(() => {
    updateTimespan('weekly');
  }, []);

  function renderDayline () {
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const daylines = days.map((day, i) => {
      return (
        <div className='dayline' key={`day-${i}`}>
          <span className='day'>{`${week[i].slice(5)} ${day}`}</span>
        </div>);
    });

    return daylines;
  }

  function renderTimeline () {
    let timelines = [];
    for (let i = 0; i < 24; i++) {
      const time = i % 12;
      timelines.push(
        <div className='timeline' key={`time-${i}`}>
          <span className='time'>{`${i >= 12 ? 'PM' : 'AM'} ${time}시`}</span>
        </div>
      );
    }

    return timelines;
  }

  function renderWeeklySchedules (schedules, week) {
    const weeklySchedules = week.map((date) => {
      const scheduleDate = date.split('/').join('-');

      return (
        <div className='daily' key={date}>
          {schedules[scheduleDate] && renderSchedules(schedules, scheduleDate, true)}
        </div>
      );
    });

    return weeklySchedules;
  }

  return (
    <Styled.Weekly>
      <h2>{`${week[0].slice(5)} ~ ${week[week.length - 1].slice(5)}`}</h2>
      <div className='daylines'>
        {renderDayline()}
      </div>
      <div className='timelines'>
        {renderTimeline()}
      </div>
      <div className='schedules'>
        {renderWeeklySchedules(scheduleDatas, week)}
      </div>
    </Styled.Weekly>
  );
}
