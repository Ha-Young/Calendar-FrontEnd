import React from "react";
import dailyStyles from "./Daily.module.css";
import weeklyStyles from "../Weekly/Weekly.module.css";
import { MAX_MIN_DATE, DAYS } from "../../constants";
import CalendarHeader from "../shared/CalendarHeader";
import { Link } from 'react-router-dom';

export default function Daily({ role, eventDate, userEvents }) {
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
      <div className={dailyStyles.column} key={i}>
        {eventTable[i]
          ? <Link to={`/events/${id}`}>
              <div
                id={id}
                onClick={(e) => console.log(e.target.id)}
              >{title}</div>
            </Link>
          : i
        }
      </div>
    );
  }

  return (
    <div className={role === "daily" ? dailyStyles.container : weeklyStyles.DailyContainer}>
      <CalendarHeader>
        <h1>{date}일 {`${DAYS[day]}요일`}</h1>
      </CalendarHeader>
        {timeColumns}
    </div>
  );
}
