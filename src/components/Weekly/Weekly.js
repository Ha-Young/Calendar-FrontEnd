import React, { useEffect, useState } from "react";
import * as date from "date-fns";
import randomIndex from "../../utils/randomIndex";
import { DAYS } from "../../constants/CALENDAR_UNIT";
import CommonElementView from "../Element/CommonElementView";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import styles from "./Weekly.module.css";

export default function Weekly({
  currentDay,
  weekEvents,
  totalEvents,
  getWeekEventData,
  setCurrentDay
}) {
  const initialSunday = date.startOfWeek(date.parseISO(currentDay));
  const [sunDay, setSunDay] = useState(initialSunday);
  const dayOfMonth = [];

  for (let i = 0; i < 7; i++) {
    const newDay = date.addDays(sunDay, i);
    dayOfMonth.push(date.format(newDay, 'yyyy-MM-dd'));
  }

  useEffect(() => {
    getWeekEventData(dayOfMonth, totalEvents);
  }, [sunDay]);

  function handleClick(type) {
    if (type === "prev") {
      const lastWeek = date.addWeeks(date.parseISO(currentDay), -1);
      setCurrentDay(-7);
      setSunDay(lastWeek);
    } else {
      const nextWeek = date.addWeeks(date.parseISO(currentDay), 1);
      setCurrentDay(7);
      setSunDay(nextWeek);
    }
  }

  return (
    <>
      <div className={styles.weekly_header}>
        <div className={styles.weekly_header_btn}>
          <span
            role="img"
            aria-label="arrow"
            onClick={() => handleClick("prev")}
          >
            ⬅️
          </span>
          <div></div>
          <span
            role="img"
            aria-label="arrow"
            onClick={() => handleClick("next")}
          >
            ➡️
          </span>
        </div>
        <div className={styles.weekly_header_dayOfWeek}>
          {DAYS.map((day, index) => (
            <div key={randomIndex()}>
              <div>{day}</div>
              <div>{dayOfMonth[index].slice(5)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.weekly_container}>
        <LeftNavigation />
        <WeekEvents weekEvents={weekEvents} week={dayOfMonth} />
      </div>
    </>
  );
}

function WeekEvents({ weekEvents, week }) {
  console.log('week event 새로 들어옴', weekEvents)
  return (
    <div className={styles.weekly_container_view}>
      {week.map(day => (
        <CommonElementView
          key={randomIndex()}
          eventDay={day}
          events={weekEvents[day]}
        />
      ))}
    </div>
  );
}