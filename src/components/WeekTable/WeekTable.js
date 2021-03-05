import React from "react";
import styles from "./WeekTable.module.css";
import { Link } from "react-router-dom";

export default function WeekTable ({ currentDate, eventInfo, onEventIdClick }) {
  const { year, month, date, day } = currentDate;
  const TIMECELL_NUMBER = 24;
  const DAYCELL_NUMBER = 7;
  const timeCells = [];
  const dayCells = ["", "일" , "월", "화", "수", "목", "금", "토"];
  const datesOfWeek = [];
  const dayEvents = [];
  const weekEvents = [];

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    datesOfWeek.push([]);
  }

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    datesOfWeek.push(date - (day - 1 - i));
  }

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    dayEvents[i] = eventInfo[`id-${year}-${month}-${datesOfWeek[i]}`];
  }

  for (let i = 0; i < dayEvents.length; i++) {
    for (const event in dayEvents[i]) {
      const eventInfo = dayEvents[i][event];
      const duration = eventInfo["end-hour"] - eventInfo["start-hour"];
      const content = `${eventInfo["title"]} - ${eventInfo["description"]}`;
      const eventId = `${eventInfo["start-year"]}-${eventInfo["start-month"]}-${eventInfo["start-date"]}-${eventInfo["start-hour"]}`;
      for (let j = 0; j < duration; j++) {
        console.log(weekEvents[i]);
        weekEvents[i][eventInfo["start-hour"] + j] = {
          content,
          eventId
        }
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

  for (let i = 0; i < TIMECELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({
      time,
      id
    });
  }

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

  const dayTable = dayCells.map((item, index) => {
    return (
    <div
      key={`${item}-${index}`}
      className={styles.dayCell}
    >
      {item}
    </div>
    );
  });


  return (
    <div className={styles.WeekTable}>
      <div className={styles.dayTable}>
        {dayTable}
      </div>
      <div className={styles.contentContainer}>
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
    </div>
  );
}
