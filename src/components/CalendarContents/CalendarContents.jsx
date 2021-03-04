import React, { useEffect } from "react";
import { DateTime } from "luxon";
import styles from "./CalendarContents.module.css";
import { readWeeklyData } from "../../api";
import { calculateWeek } from "../../reducers";

// TODO component로 빼기
const createTimeLineItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    let prefix;

    if (i < 12) prefix = "오전";
    else prefix = "오후";

    items.push(<div key={i * 2} className={styles.timeLineItem}>{`${prefix} ${i}시`}</div>);
  }

  return items;
}

// TODO component로 빼기
const createCalendarItem = (dayIndex) => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    items.push(
      <div
        key={i * 2}
        className={styles.calendarItem}
      />
    );
  }

  return items;
}

const createCalendar = (localDates, events) => {
  debugger;
  const days = localDates.map((date, index) => {
    const event = events[index];
    const items = [];

    for (let hour = 0; hour < 24; hour++) {
      // TODO 그냥 for문으로 바꿔서 break 가능하게 바꾸는것도 좋을듯. 지금은 24 * event 개수가 시간복잡도라 너무 느림.
      let isEvent = false;
      for (let eventKey in event) {
        const min = DateTime.fromISO(event[eventKey].startDateTime).hour;
        const max = DateTime.fromISO(event[eventKey].endDateTime).hour;
        if (event.hasOwnProperty(eventKey) && (hour >= DateTime.fromISO(event[eventKey].startDateTime).hour && hour <= DateTime.fromISO(event[eventKey].endDateTime).hour)) {
          isEvent = true;
          if (DateTime.fromISO(event[eventKey].startDateTime).hour === hour) {
            items.push(<div key={hour}className={styles.fillItem}>{event[eventKey].title}</div>);
          } else {
            items.push(<div key={hour} className={styles.fillItem}></div>);
          }
        }
      }
      if (!isEvent) {
        items.push(
          <div
            key={hour}
            className={styles.calendarItem}
          />
        );
      }
    }

    return items;
  });

  return days;
}




export default function CalendarContents({ selectedDate, calculatedDates, events, selectedEventId, isDailyView, loadEvents, toggleCalendarView }) {
  debugger;
  // TODO 이러지 말고 옛날 selectedWeek처럼 localdate같은걸(이름바꿔서) store에 만들고 reducer에서 계산하는것도 방법인듯.
  // isDailyView까지 store에 넣으면 reducer안에서 데일리/위클리에 따라서 계산 가능하니까
  let localDates = calculateWeek(selectedDate, isDailyView);
  console.log(isDailyView)
  // console.log('calendar content render')
  console.log(localDates)
  // console.log(localDate.map(date => date.toFormat("yyyy-LL-dd")))
  console.log(events)

  useEffect(() => {
    debugger;
    const readData = async () => {
      // console.log('get firebase data')
      // console.log(localDate);
      const events = await readWeeklyData(localDates.map(date => date.toFormat("yyyy-LL-dd")));
      // console.log('after get events')
      loadEvents(events);
      // console.log('after dispatch action')
    }

    readData();
  }, [selectedDate, isDailyView]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLineWrapper}>
        {createTimeLineItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        {createCalendar(localDates, events)}
        
      </div>
    </div>
  );
}
