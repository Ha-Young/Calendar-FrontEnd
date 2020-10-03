import React, { useState } from 'react';
import styles from './Timeline.module.css';
import fetchData from '../../utils/api';
import TimeBar from './Timebar';
import DailyDayAndDate from './DailyDayAndDate';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import { time, week, monthDays } from '../../constants';

function Timeline({ showDailyPage, ...props }) {
  useState(() => {
    fetchData()
      .then(response => {
        props.addEvent(response);
      });
  }, []);

  const updateDate = props.updateDateReducer;

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
        <TimeBar />
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
