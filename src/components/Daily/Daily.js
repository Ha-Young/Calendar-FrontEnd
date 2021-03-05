import React from "react";
import { Link, useHistory } from 'react-router-dom';
import dailyStyles from "./Daily.module.css";
import { MAX_MIN_DATE, DAYS } from "../../constants";
import weeklyStyles from "../Weekly/Weekly.module.css";
import CalendarHeader from "../shared/CalendarHeader";

export default function Daily({ role, eventDate, userEvents, dispatch }) {
  const history = useHistory();
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth() + 1;
  const date = eventDate.getDate();
  const day = eventDate.getDay();
  const hourColumns = [];

  const eventTable = userEvents.reduce((table, userEvent) => {
    const fromHour = new Date(userEvent.period.from).getHours();
    const toHour = new Date(userEvent.period.to).getHours();
    const numberOfColumns = toHour - fromHour;
    const copyTable = { ...table };

    for (let i = 0; i < numberOfColumns; i++) {
      const eventTime = fromHour + i;
      const { id, title } = userEvent;
      Object.assign(copyTable, {[eventTime]: {id, title}});
    }

    return copyTable;
  }, {});

  for (let i = 0; i <= MAX_MIN_DATE.HOUR.MAX; i++) {
    const { id, title } = eventTable[i] ?? {id: null, title: null};

    hourColumns.push(
      <div
        key={i}
        id={i}
        className={dailyStyles.column}
        onClick={handleClick}
      >
        {eventTable[i]
          ? <Link to={`/events/${id}`}>
              <div id={id}>{title}</div>
            </Link>
          : null
        }
      </div>
    );
  }

  function handleClick(e) {
    const hour = Number(e.target.id);

    if (Number.isNaN(hour)) return;

    const payload = {year, month, date, fromHour: hour, toHour: hour + 1};
    dispatch(payload);
    history.push("/events/new");
  }

  return (
    <div className={role === "daily" ? dailyStyles.container : weeklyStyles.DailyContainer}>
      <CalendarHeader>
        <h1>{date}일 {`${DAYS[day]}요일`}</h1>
      </CalendarHeader>
        {hourColumns}
    </div>
  );
}
