import React, { useEffect, useState } from 'react';
import styles from './Timeline.module.css';
import fetchData from '../../utils/api';
import TimeBar from './Timebar';
import DailyDayAndDate from './DailyDayAndDate';
import WeekDaysAndDate from './WeekDaysAndDate';
import CheckDailyEvent from './CheckDailyEvent';
import ChangeTimeToTimeIndex from './ChangeTimeToTimeIndex';
import { connect } from 'react-redux';
import { addEvent, selectEvent } from '../../actions';
import { monthDays, time, week } from '../../constants';

function Timeline({ showDailyPage, addEvent, ...props }) {
  useEffect(() => {
    delay();
  }, []);

  async function delay() {
    try {
      const result = await fetchData();
      console.log(result)
      addEvent(result);
    }
    catch {
      throw new Error ('error');
    }
  }

  const updateDate = props.updateDateReducer;
  const addedEvent = props.addEventReducer;

  function DailySchedulePage() {
    const todayEventTime = CheckDailyEvent(addedEvent, updateDate);
    const eventTimeIndexArray = ChangeTimeToTimeIndex(todayEventTime);

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
    const eventOfThisWeek = {};
    const day = updateDate.day;

    for (let keys in addedEvent) {
      const date = addedEvent[keys].date.split('-');
      if (updateDate.monday > updateDate.monthWeekly - 7) {
        if (Number(date[1]) === updateDate.monthWeekly + 1 || Number(date[1]) === updateDate.monthWeekly + 2) {
          if (Number(date[2]) >= updateDate.monday || Number(date[2]) < 7 - (updateDate.monthWeekly - updateDate.monday)) {
            if (!eventOfThisWeek.hasOwnProperty(date[2])) {
              const newArray = [];
              newArray.push(addedEvent[keys]);
              eventOfThisWeek[date[2]] = newArray;
            } else {
              eventOfThisWeek[date[2]].push(addedEvent[keys]);
            }
          }
        }
      }
      else if ((Number(date[1]) === updateDate.monthWeekly + 1) &&
        (Number(date[2]) >= updateDate.monday || Number(date[2]) < updateDate.monday + 7)) {
        if (!eventOfThisWeek.hasOwnProperty(date[2])) {
          const newArray = [];
          newArray.push(addedEvent[keys]);
          eventOfThisWeek[date[2]] = newArray;
        } else {
          eventOfThisWeek[date[2]].push(addedEvent[keys]);
        }
      }
    }

    let currentDate = updateDate.monday;

    const weeklySchedule = week.map((week, i) => {
      const todayCheking = (day === i + 1 || day - 1 === i) ? 'TodayWeekScheduleBox' : 'WeekScheduleBox';
      const monthWeekly = updateDate.monthWeekly;
      let eventTimeOfEachDay = [];

      if (i !== 0) currentDate++;
      if (currentDate > monthDays[monthWeekly]) {
        currentDate = 1;
      }
      if (String(currentDate).length === 1) {
        currentDate = '0' + currentDate;
      }

      for (let keys in eventOfThisWeek) {
        if (keys === currentDate) {
          if (eventOfThisWeek[keys].length > 0) {
            for (let i = 0; i < eventOfThisWeek[keys].length; i++) {
              let timeArray = [eventOfThisWeek[keys][i].startTime, eventOfThisWeek[keys][i].endTime];
              eventTimeOfEachDay.push(timeArray);
            }
          }
        }
      }

      const eventTimeIndexOfEachDay = ChangeTimeToTimeIndex(eventTimeOfEachDay);
      const unitTime = time.map((time, i) => {
        let eventChecking = 'UnitTime';

        if (eventTimeIndexOfEachDay[0] === i) {
          eventChecking = 'EventUnitTime';
          eventTimeIndexOfEachDay.shift();
        }

        return (
          <div key={time} className={styles[eventChecking]}></div>
        );
      });

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
