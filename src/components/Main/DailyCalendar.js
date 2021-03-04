import React, { useState } from 'react';
import styles from './DailyCalendar.module.css';
import { Link } from 'react-router-dom';
import { makeDailyFullDate, isEventScheduled } from '../../utils';
import { TIME_TABLE, SCHEDULE_BOX } from '../../constant';

const DailyCalendar = ({ schedules }) => {
  const [todayDate, setTodayDate] = useState(new Date());
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const timeCells = [];
  const eventCells = [];
  let daysList;

  for (let i = 0; i < TIME_TABLE; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < SCHEDULE_BOX; j++) {
    eventCells.push(j);
  }

  const handlePrevClick = () => {
    const prevDate = todayDate.setDate(date - 1);
    const resetDate = new Date(prevDate);

    setTodayDate(resetDate);
  }

  const handleNextClick = () => {
    const nextDate = todayDate.setDate(date + 1);
    const resetDate = new Date(nextDate);

    setTodayDate(resetDate);
  }

  const timeList = timeCells.map((time, index) => {

    return (
      <div key={index}>
        <div className={styles.time}>{time}</div>
      </div>
    )
  });

  daysList = (
    <div className={styles.weekDay}>
      <div className={styles.dayDateWrapper}>
        <div className={styles.dayDate}>
          <div>{days[todayDate.getDay()]}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className={styles.eventWrapper}>
        {eventCells.map((item, time) => {
          const keyId = makeDailyFullDate(year, month, date, time);

          for (const event of schedules) {
            const eventDay = Number(event.date.split('-')[2]);
            const eventTitle = event.title;
            const showSchedule = isEventScheduled(
              time,
              event.startTime,
              event.endTime,
              eventDay,
              date
            );

            if (showSchedule) {
              return (
                <div key={keyId}>
                  <Link
                    to={`/dailycalendar/dailyevent/${keyId}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={styles.scheduledEvent}>
                      {(Number(event.startTime) === time) && `${eventTitle}`}
                    </div>
                  </Link>
                </div>
              )
            }
          }

          return (
            <div key={keyId}>
              <Link to={`/dailycalendar/${keyId}`}>
                <div className={styles.event} />
              </Link>
            </div>
            )
          })
        }
      </div>
    </div>
  )

  return (
    <div className={styles.calendar}>
      <div>
        <div>
          {year}년 {month + 1}월
        </div>
        <div>
          <button onClick={handlePrevClick}>&lt;</button>
          <button>Today</button>
          <button onClick={handleNextClick}>&gt;</button>
        </div>
      </div>
      <div className={styles.days}>
        <div>
          <div className={styles.timeTableWrapper}>
            <div>
              timeTable
            </div>
          </div>
          <div>
            {timeList}
          </div>
        </div>
        {daysList}
      </div>
    </div>
  )
}

export default DailyCalendar;
