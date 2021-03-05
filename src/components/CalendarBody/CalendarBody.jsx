import React, { useEffect } from "react";
import CalendarContents from "../CalendarContents/CalendarContents";
import styles from "./CalendarBody.module.css";
import { getEvents } from "../../api";
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

export default function CalendarBody({ selectedDate, calculatedDates, events, isDailyView, loadEvents, toggleCalendarView, selectEvent }) {
  // TODO 이러지 말고 옛날 selectedWeek처럼 localdate같은걸(이름바꿔서) store에 만들고 reducer에서 계산하는것도 방법인듯.
  // isDailyView까지 store에 넣으면 reducer안에서 데일리/위클리에 따라서 계산 가능하니까
  let localDates = calculateWeek(selectedDate, isDailyView);

  useEffect(() => {
    const readData = async () => {
      const events = await getEvents(localDates.map(date => date.toFormat("yyyy-LL-dd")));
      loadEvents(events);
    }

    readData();
  }, [selectedDate, isDailyView]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLineWrapper}>
        {createTimeLineItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        <CalendarContents localDates={localDates} events={events} selectEvent={selectEvent} />
      </div>
    </div>
  );
}
