import React from 'react';

export default function renderSchedules (scheduleDatas, date, isWeekly) {
  const schedules = [];

  console.log(scheduleDatas);
  console.log(date);
  const datas = scheduleDatas[date];
  console.log(datas);
  if (!datas) {
    return;
  }

  console.log(Object.values(datas));

  for (let schedule of Object.values(scheduleDatas[date])) {
    const scheduleTop = calculateScheduleTop(schedule);
    const scheduleHeight = calculateScheduleHeight(schedule);

    const style = {
      top: scheduleTop,
      height: scheduleHeight,
      backgroundColor: schedule.color || '#cbf542'
    };

    const element =
      <div className='schedule' key={`schedule-${schedule.name}`} style={style}>
        <span className='scheduleName'>{schedule.name}</span>
        <br/>
        <span className='scheduleDesc'>{schedule.desc}</span>
      </div>;

    schedules.push(element);
  }

  function calculateScheduleTop (schedule) {
    if (schedule.startTime === '') return 0;

    const [hour, minute] = schedule.startTime.split(':');
    return parseInt(hour) * 60 + parseInt(minute);
  }

  function calculateScheduleHeight (schedule) {
    if (schedule.endTime === '') return 60;

    const [hour, minute] = schedule.endTime.split(':');

    if (schedule.endTime < schedule.startTime) {
      return 1440 - calculateScheduleTop(schedule);
    }

    return parseInt(hour) * 60 + parseInt(minute) - calculateScheduleTop(schedule);
  }

  return schedules;
}
