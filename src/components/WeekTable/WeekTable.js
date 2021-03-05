import React from "react";
import styles from "./WeekTable.module.css";
import { Link } from "react-router-dom";

export default function WeekTable ({ currentDate,eventInfo, onEventIdClick }) {
  const { year, month, date, day } = currentDate;
  const CELL_NUMBER = 24;
  const timeCells = [];
  const todayEvent = eventInfo[`id-${year}-${month}-${date}`];
  const todayEvents = new Array(CELL_NUMBER).fill("");

  // const handleEventIdClick = (ev) => {
  //   onEventIdClick(ev.target.dataset.eventId);
  // }

  const mondayEvent = eventInfo[`id-${year}-${month}-${date}`];

  // if (day === )


  for (let i = 0; i < CELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({
      time,
      id
    });
  }

  for (const event in todayEvent) {
    const eventInfo = todayEvent[event];
    const duration = eventInfo["end-hour"] - eventInfo["start-hour"];
    const content = `${eventInfo["title"]} - ${eventInfo["description"]}`;
    const eventId = `${eventInfo["start-year"]}-${eventInfo["start-month"]}-${eventInfo["start-date"]}-${eventInfo["start-hour"]}`;

    for (let i = 0; i < duration; i++) {
      todayEvents[eventInfo["start-hour"] + i] = {
        content,
        eventId
      }
    }
  }

  // const timeTable = timeCells.map((item, index) => {
  //    return (
  //     <>
  //       <div key={item.id}>
  //         {item.time}
  //       </div>
  //       <div key={todayEvents[index].eventId}>
  //         <Link
  //           to={`/event/${todayEvents[index].eventId}`}
  //           data-event-id={`${todayEvents[index].eventId}`}
  //           onClick={handleEventIdClick}
  //         >
  //           {todayEvents[index].content}
  //         </Link>
  //       </div>
  //     </>
  //   );
  // });

  // const dayTable[0] = 


  const timeTable = timeCells.map((item) => {
    return (
    <div
      key={item.id}
      className={styles.timeCell}
    >
      {item.time}
    </div>
    );
  });


  return (
    <div className={styles.WeekTable}>
      <div className={styles.timeTable}>
        {timeTable}
      </div>
      <div>
        일
      </div>
      <div>
        월
      </div>
      <div>
        화
      </div>
      <div>
        수
      </div>
      <div>
        목
      </div>
      <div>
        금
      </div>
      <div>
        토
      </div>
    </div>
  );
}
