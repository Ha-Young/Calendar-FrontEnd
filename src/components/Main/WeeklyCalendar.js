import React from 'react';
import { makeSundayDate } from '../../utils';
import styles from './WeeklyCalendar.module.css';
import { useRouteMatch, Link } from 'react-router-dom';

const WeeklyCalendar = ({ children }) => {
  const { url } = useRouteMatch();
  const todayDate = new Date();
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
                    >
                    </div>
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
            return (
              <div key={todayDate.getDate() + index}>
                <div className={styles.event}>
                </div>
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
        <button>&lt;</button>
        <button>Today</button>
        <button>&gt;</button>
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
