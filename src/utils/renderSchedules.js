import React from 'react';
import { Link } from 'react-router-dom';

export default function renderSchedules (scheduleDatas, date) {
  const schedules = [];

  const datas = scheduleDatas[date];
  if (!datas) {
    return;
  }

  let counter = Object.values(datas).length;
  for (let [key, schedule] of Object.entries(datas)) {
    const scheduleTop = calculateScheduleTop(schedule);
    const scheduleHeight = calculateScheduleHeight(schedule);

    const style = {
      zIndex: counter * 500,
      top: scheduleTop,
      height: scheduleHeight,
      backgroundColor: schedule.color || '#cbf542'
    };

    const element =
      <div className='schedule' key={`schedule-${schedule.name}`} style={style}>
        <Link to={`event/${key}`}>
          <span className='scheduleName'>{schedule.name}</span>
          <br/>
          <span className='scheduleDesc'>{schedule.desc}</span>
        </Link>
      </div>;

    schedules.push(element);

    counter--;
  }

  function calculateScheduleTop (schedule) {
    if (schedule.startTime === '') return 0;

    const [hour, minute] = schedule.startTime.split(':');
    return parseInt(hour) * 30 + parseInt(minute) / 2;
  }

  function calculateScheduleHeight (schedule) {
    if (schedule.endTime === '') return 30;

    const [hour, minute] = schedule.endTime.split(':');

    if (schedule.endTime < schedule.startTime) {
      return 720 - calculateScheduleTop(schedule);
    }

    return parseInt(hour) * 30 + parseInt(minute) / 2 - calculateScheduleTop(schedule);
  }

  return schedules;
}
