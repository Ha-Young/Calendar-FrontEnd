import React from 'react';
import { makeSundayDate } from '../../utils';
import styles from './WeeklyCalendar.module.css';

const WeeklyCalendar = ({ children }) => {
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
      <div>
        <div className={styles.time} key={index}>{time}</div>
      </div>
    )
  });

  // eventCells.map((event, index) => {

  //   return (
  //     <div className='eventTable'>
  //       <div className='event' key={index}>event</div>
  //     </div>
  //   )
  // });

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
            {eventCells.map((event, index) => {
              return (
                <div className='eventTable'>
                  <div className={styles.event} key={index + (startDate - 1)}>event</div>
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
          <div>
            <div>{days[todayDate.getDay()]}</div>
            <div>{todayDate.getDate()}</div>
          </div>
        </div>
        <div className={styles.eventWrapper} >
          {eventCells.map((event, index) => {
            return (
              <div className='eventTable'>
                <div className={styles.event} key={index}>event</div>
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
      <div className={styles.days}>
        <div>
          <div className={styles.timeTableTitle}>TimeTable</div>
          <div className={'time-table-wrapper'}>
            {timeList}
          </div>
        </div>
        {daysList}
      </div>
    </div>
  )
}

export default WeeklyCalendar;
