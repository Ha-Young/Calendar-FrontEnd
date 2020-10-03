import React, { useState } from 'react';
import styles from './Timeline.module.css';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import fetchData from '../../utils/api';
import { time, week, monthDays } from '../../constants';

function Timeline({ showDailyPage, ...props }) {
  useState(() => {
    fetchData()
      .then(response => {
        props.addEvent(response);
      });
  }, []);

  const updateDate = props.updateDateReducer;

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
    const date = updateDate.date;
    const month = updateDate.monthDaily + 1;
    let day = updateDate.day;

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

  function DailySchedulePage() {
    const unitTime = time.map((time) => {
      return (
        <div key={time} className={styles.UnitTime}> </div>
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
    const monthWeekly = updateDate.monthWeekly;
    let monday = updateDate.monday;

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

  function WeeklySchedulePage() {
    const day = updateDate.day;

    const unitTime = time.map((time) => {
      return (
        <div key={time} className={styles.UnitTime}></div>
      );
    });

    const weeklySchedule = week.map((week, i) => {
      const todayCheking = (day === i + 1 || day - 1 === i) ? "TodayWeekScheduleBox" : "WeekScheduleBox";

      return (
        <div key={week} className={styles[todayCheking]}>
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
        {showDailyPage ? <DailySchedulePage /> : <WeeklySchedulePage />}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer,
    addEventReducer: state.addEventReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEvent: (form) => dispatch(addEvent(form)),
    selectEvent: () => dispatch(selectEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
