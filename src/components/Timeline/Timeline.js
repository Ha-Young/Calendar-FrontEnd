import React, { useEffect, useState } from 'react';
import styles from './Timeline.module.css';
import fetchData from '../../utils/api';
import TimeBar from './Timebar';
import DailyDayAndDate from './DailyDayAndDate';
import WeekDaysAndDate from './WeekDaysAndDate';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import { time, week } from '../../constants';

function Timeline({ showDailyPage, ...props }) {
  useEffect(() => {
    fetchData()
      .then(response => {
        props.addEvent(response);
      });
  }, []);

  const updateDate = props.updateDateReducer;
  const addedEvent = props.addEventReducer;
  const year = new Date().getFullYear();

  function DailySchedulePage() {
    const todayEventTime = [];
    const eventTimeIndexArray = [];
    let newDateFormat;
    let startTime;
    let endTime;

    for (let keys in addedEvent) {
      let date = addedEvent[keys].date.split('-');
      if (String(updateDate.date).length === 1) {
        newDateFormat = '0' + updateDate.date;
      }

      const hasEventOnThisDailyPage = (
        date[0] === String(year) &&
        date[1] === String(updateDate.monthDaily + 1) &&
        date[2] === newDateFormat
      );

      if (hasEventOnThisDailyPage) {
        let timeArray = [addedEvent[keys].startTime, addedEvent[keys].endTime];
        todayEventTime.push(timeArray);
      }
    }

    for (let i = 0; i < todayEventTime.length; i++) {
      if (todayEventTime[i][0].includes('30')) {
        startTime = Number(todayEventTime[i][0].slice(0, 2)) + 0.5;
      } else startTime = Number(todayEventTime[i][0].slice(0, 2));

      if (todayEventTime[i][1].includes('30')) {
        endTime = Number(todayEventTime[i][1].slice(0, 2)) + 0.5;
      } else endTime = Number(todayEventTime[i][1].slice(0, 2));

      let eventTimeIndex = time.indexOf(startTime);

      for (let i = 0; i < time.indexOf(endTime) - time.indexOf(startTime); i++) {
        eventTimeIndexArray.push(eventTimeIndex);
        eventTimeIndex++;
      }
    }

    const unitTime = time.map((time, i) => {
      let eventChecking = 'UnitTime';
      if (eventTimeIndexArray[0] === i) {
        eventChecking = 'EventUnitTime';
        eventTimeIndexArray.shift();
      }

      return (
        <div key={i} className={styles[eventChecking]}> </div>
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
      const todayCheking = (day === i + 1 || day - 1 === i) ? 'TodayWeekScheduleBox' : 'WeekScheduleBox';
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
