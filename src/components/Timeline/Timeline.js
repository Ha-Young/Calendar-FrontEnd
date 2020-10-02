import React from 'react';
import styles from './Timeline.module.css';
import { connect } from 'react-redux';

function Timeline({ showDailyPage, ...props }) {

  const time = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5,
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5,
    15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5,
    20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];

  const week = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function Time() {
    const hour = time.filter(time => Number.isInteger(time) === true);
    const hourUnit = hour.map((hour) => {
      let presentHour = hour;

      if ((hour + '').length === 1) {
        presentHour = '0' + hour;
      }

      return (
        <div key={hour} className={styles.Hour}>{presentHour}:00</div>
      );
    });

    return (
      <div className={styles.Time}>
        {hourUnit}
      </div>
    );
  }

  function DailyDayAndDate() {
    let date = props.updateDateReducer.date;
    let day = props.updateDateReducer.day;
    let month = props.updateDateReducer.monthDaily + 1;

    if (day < 0) {
      while (day < 0) {
        day += 7;
      }
    }

    if (day >= 7) {
      day = day % 7;
    }

    return (
      <div className={styles.DailyDayAndDate}>
        <span className={styles.Month}>{month}월</span>
        <span className={styles.Date}>{date}일</span>
        <span className={styles.Day}>{week[day]}</span>
      </div>
    );
  }

  function DailySchedule() {
    const unitTime = time.map((time, i) => {
      return (
        <div key={i} className={styles.UnitTime}> </div>
      );
    });

    return (
      <div className={styles.DailyScheduleBox}>
        {unitTime}
      </div>
    );
  }

  function WeekDaysAndDate() {
    const day = new Date().getDay();
    const monthWeekly = props.updateDateReducer.monthWeekly;
    let monday = props.updateDateReducer.monday;

    return (
      week.map((week, i) => {
        const todayCheking = (day === i + 1 || day - 1 === i) ? "Today" : "Days";

        if (i !== 0) monday++;

        if (monday >= monthDays[monthWeekly] + 1) {
          monday = 1;
        }


        return (
          <div key={i} className={styles[todayCheking]}>
            <div className={styles.Week}> {week} </div>
            <div> {monday} </div>
          </div>
        );
      })
    );
  }

  function WeekSchedule() {
    const day = new Date().getDay();

    const unitTime = time.map((time, i) => {
      return (
        <div key={i} className={styles.UnitTime}></div>
      );
    });

    const weeklySchedule = week.map((week, i) => {
      const todayCheking = (day === i + 1 || day - 1 === i) ? "TodayWeekScheduleBox" : "WeekScheduleBox";

      return (
        <div key={i} className={styles[todayCheking]}>
          {unitTime}
        </div>
      );
    });

    return weeklySchedule;
  }

  return (
    <>
      <div className={styles.WeekDaysAndDate}>
        {showDailyPage ? <DailyDayAndDate /> : <WeekDaysAndDate />}
      </div>
      <div className={styles.TimelineContainer}>
        <Time />
        {showDailyPage ? <DailySchedule /> : <WeekSchedule />}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer
  };
};

export default connect(mapStateToProps)(Timeline);
