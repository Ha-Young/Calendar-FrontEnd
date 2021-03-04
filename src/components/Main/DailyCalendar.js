import React, { useState } from 'react';
import styles from './DailyCalendar.module.css';
import { Link } from 'react-router-dom';

const DailyCalendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());

  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const timeCells = [];
  const eventCells = [];
  let daysList;

  for (let i = 0; i < 25; i++) {
    timeCells.push(i);
  }

  for (let j = 0; j < 24; j++) {
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
        {eventCells.map((item, index) => {
          const keyId = todayDate.getDate() + index;

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