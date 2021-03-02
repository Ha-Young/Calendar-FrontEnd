import React, { useState } from 'react';
import { makeSundayDate } from '../../utils';
import styles from './WeeklyCalendar.module.css';
import { useRouteMatch, Link } from 'react-router-dom';

const WeeklyCalendar = ({ children }) => {
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

  for (let i = 0; i < 25; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < 24; j++) {
    eventCells.push(j);
  }

  const handlePrevClick = () => {
    if (children) {
      currentDate.setDate(date - 1);

      setTodayDate(currentDate);
      return;
    }

    if (month !== prevMonth) {
      currentDate.setMonth(month);
    }

    if (year !== prevYear) {
      currentDate.setFullYear(year);
    }

    currentDate.setDate(date - 7);
    prevMonth = month;
    prevYear = year;
    setTodayDate(currentDate);
  }

  const handleNextClick = () => {
    if (children) {
      currentDate.setDate(date + 1);

      setTodayDate(currentDate);
      return;
    }

    if (month !== nextMonth) {
      currentDate.setMonth(month);
    }

    if (year !== nextYvggear) {
      currentDate.setFullYear(year);
    }

    currentDate.setDate(date + 7);
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

  if (!children) {
    daysList = days.map((day, index) => {
      let startDate = sundayDate.getDate();

      sundayDate.setDate(++startDate);

      return (
        <div className={styles.weekDay} key={index}>
          <div className={styles.dayDateWrapper}>
            <div>{day}</div>
            <div>{startDate - 1}</div>
          </div>
          <div className={styles.eventWrapper} key={index}>
            {eventCells.map((item, index) => {
              const keyId = index + (startDate - 1);

              return (
                <div key={keyId}>
                  <Link to={`${url}/${keyId}`}>
                    <div
                      className={styles.event}
                    />
                  </Link>
                </div>
                )
              })
            }
          </div>
        </div>
      )
    });
  } else {
    daysList = (
      <div className={styles.weekDay}>
        <div className={styles.dayDateWrapper}>
          <div className={styles.dayDate}>
            <div>{days[todayDate.getDay()]}</div>
            <div>{todayDate.getDate()}</div>
          </div>
        </div>
        <div className={styles.eventWrapper}>
          {eventCells.map((item, index) => {
            const keyId = todayDate.getDate() + index;

            return (
              <div key={keyId}>
                <Link to={`/dailycalendar/${keyId}`}>
                  <div className={styles.event}
                  />
                </Link>
              </div>
              )
            })
          }
        </div>
      </div>
    )
  }

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
