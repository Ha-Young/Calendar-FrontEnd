import React, { useState } from 'react';
import styles from './Timeline.module.css';
import fetchData from '../../utils/api';
import TimeBar from './Timebar';
import DailyDayAndDate from './DailyDayAndDate';
import WeekDaysAndDate from './WeekDaysAndDate';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import { time, week } from '../../constants';

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

  function WeeklySchedulePage() {
    const day = updateDate.day;
    const unitTime = time.map((time) => {
      return (
        <div key={time} className={styles.UnitTime}></div>
      );
    });

    const weeklySchedule = week.map((week, i) => {
      const todayCheking = (day === i + 1 || day - 1 === i) ? "TodayWeekScheduleBox" : "WeekScheduleBox";
      console.log(todayCheking)
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
