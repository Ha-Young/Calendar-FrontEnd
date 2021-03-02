import React, { useState } from 'react';
import { makeSundayDate } from '../../utils';
import styles from './WeeklyCalendar.module.css';
import { useRouteMatch, Link } from 'react-router-dom';

const WeeklyCalendar = ({ children }) => {
  const [todayDate, setTodayDate] = useState(new Date());
  const { url } = useRouteMatch();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const timeCells = [];
  const eventCells = [];
  let sundayDate = makeSundayDate(todayDate);
  let daysList;

  for (let i = 0; i < 25; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < 24; j++) {
    eventCells.push(j);
  }

  const handlePrevClick = () => {
    const date = todayDate.getDate();
    let prevDate = new Date();
    prevDate.setDate(date - 7);

    setTodayDate(prevDate);
  }

  const handleNextClick = () => {
    const date = todayDate.getDate();
    let nextDate = new Date();
    nextDate.setDate(date + 7);

    setTodayDate(nextDate);
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
        <button onClick={handlePrevClick}>&lt;</button>
        <button>Today</button>
        <button onClick={handleNextClick}>&gt;</button>
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
