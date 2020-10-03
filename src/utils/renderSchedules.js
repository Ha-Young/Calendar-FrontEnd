import React from 'react';
import { Link } from 'react-router-dom';
import {} from '../actions';

export default function renderSchedules (scheduleDatas, date, isWeekly) {
  const schedules = [];

  const datas = scheduleDatas[date];
  if (!datas) {
    return;
  }

  let zIndexOrder = Object.values(datas).length;
  for (let [key, schedule] of Object.entries(datas)) {
    const scheduleTop = calculateScheduleTop(schedule);
    const scheduleHeight = calculateScheduleHeight(schedule);

    const style = {
      zIndex: zIndexOrder * 500,
      top: scheduleTop,
      width: '100%',
      height: scheduleHeight,
      backgroundColor: schedule.color || '#cbf542',
      overflow: 'auto'
    };

    const element =
      <Link
        to={`/main/${isWeekly ? 'weekly' : 'daily'}/${key}`}
        onClick={() => handleClick(date, key)}
        key={`schedule-${schedule.name}`}
      >
        <div className='schedule' style={style} >
            <span className='scheduleName'>{schedule.name}</span>
            <br/>
            <span className='scheduleDesc'>{schedule.desc}</span>
        </div>
      </Link>

    schedules.push(element);

    zIndexOrder--;
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

  function handleClick (date, key) {
    // 각 스케줄이 클릭되었을 때 실행된다
    console.log(date, key);
    // 날짜와 스케줄 키를 가지고 검색을 해야겠지요..
    // 어디에서? 스토어에 있는 스테이트에서!
    // 그럼 액션을 보내야한다.
    // 액션 이름은..무슨 액션이냐면..하나를 가져오는거니까
    // getSchedule
  }

  return schedules;
}
