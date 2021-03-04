import React, { useState } from 'react';
import { makeSundayDate, setLastWeek, setNextWeek, makeWeekFullDate, isEventScheduled } from '../../utils';
import styles from './WeeklyCalendar.module.css';
import { useRouteMatch, Link } from 'react-router-dom';
import { TIME_TABLE, SCHEDULE_BOX } from '../../constant';

const WeeklyCalendar = ({ events }) => {
  console.log(events);
  const [todayDate, setTodayDate] = useState(new Date());
  const currentDate = new Date();
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth();
  const { url } = useRouteMatch();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const timeCells = [];
  const eventCells = [];
  let sundayDate = makeSundayDate(todayDate);
  let daysList, prevMonth, prevYear, nextMonth, nextYear;

  for (let i = 0; i < TIME_TABLE; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < SCHEDULE_BOX; j++) {
    eventCells.push(j);
  }

  const handlePrevClick = () => {
    if (month !== prevMonth) currentDate.setMonth(month);

    if (year !== prevYear) currentDate.setFullYear(year);

    setLastWeek(currentDate, date);
    prevMonth = month;
    prevYear = year;
    setTodayDate(currentDate);
  }

  const handleNextClick = () => {
    if (month !== nextMonth) currentDate.setMonth(month);

    if (year !== nextYear) currentDate.setFullYear(year);

    setNextWeek(currentDate, date);
    nextMonth = month;
    nextYear = year;
    setTodayDate(currentDate);
  }

  const timeList = timeCells.map((time, index) => {

    return (
      <div key={index}>
        <div className={styles.time}>{time}</div>
      </div>
    )
  });

  daysList = days.map((day, index) => {
    let startDate = sundayDate.getDate();

    sundayDate.setDate(++startDate);
    const currentDate = startDate - 1;

    return (
      <div className={styles.weekDay} key={index}>
        <div className={styles.dayDateWrapper}>
          <div>{day}</div>
          <div>{currentDate}</div>
        </div>
        <div className={styles.eventWrapper} key={index}>
          {eventCells.map((item, time) => {
            const fullDate = makeWeekFullDate(year, month, startDate, time);

            for (const event of events) {
              const eventDay = Number(event.keyId.split('-')[2]);
              const eventTitle = event.title;
              const showSchedule = isEventScheduled(
                time,
                event.startTime,
                event.endTime,
                eventDay,
                currentDate
              );

              if (showSchedule) {
                return (
                  <div key={fullDate}>
                    <div className={styles.scheduledEvent}>
                      {(Number(event.startTime) === time) && `${eventTitle}`}
                    </div>
                  </div>
                )
              }
            }

            return (
              <div key={fullDate}>
                <Link to={`${url}/${fullDate}`}>
                  <div className={styles.event} />
                </Link>
              </div>
            )})
          }
        </div>
      </div>
    )
  });

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

export default WeeklyCalendar;
