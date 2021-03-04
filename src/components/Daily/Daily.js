import React from "react";
import styles from "./Daily.module.css";
import { MAX_MIN_DATE, DAYS } from "../../constants";
import CalendarHeader from "../shared/CalendarHeader";

export default function Daily({ eventDate, userEvents }) {
  const date = eventDate.getDate();
  const day = eventDate.getDay();
  const timeColumns = [];

  const eventTable = userEvents.reduce((table, userEvent) => {
    const fromHour = new Date(userEvent.period.from).getHours();
    const toHour = new Date(userEvent.period.to).getHours();
    const numberOfColumns = toHour - fromHour;
    const copyTable = {...table};

    for (let i = 0; i < numberOfColumns; i++) {
      const eventTime = fromHour + i;
      const { id, title } = userEvent;
      Object.assign(copyTable, {[eventTime]: {id, title}});
    }

    return copyTable;
  }, {});

  for (let i = 0; i <= MAX_MIN_DATE.HOUR.MAX; i++) {
    const { id, title } = eventTable[i] ?? {id: null, title: null};

    timeColumns.push(
      <div className={styles.column} key={i}>
        {eventTable[i]
          ? <div
              id={id}
              onClick={(e) => console.log(e.target.id)}
            >{title}</div>
          : i
        }
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <CalendarHeader>
        <h1>{date}일 {`${DAYS[day]}요일`}</h1>
      </CalendarHeader>
        {timeColumns}
    </div>
  );
}
