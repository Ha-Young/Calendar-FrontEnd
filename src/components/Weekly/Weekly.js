import React, { useEffect } from "react";
import * as date from "date-fns";
import randomIndex from "../../utils/randomIndex";
import { DAYS } from "../../constants/CALENDAR_UNIT";
import CommonElementView from "../Element/CommonElementView";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import styles from "./Weekly.module.css";

export default function Weekly({ currentDay, weekEvents, getWeekEventData }) {
  const startOfWeek = date.startOfWeek(date.parseISO(currentDay));
  const dayOfMonth = [];

  for (let i = 0; i < 7; i++) {
    const newDay = date.addDays(startOfWeek, i);
    dayOfMonth.push(date.format(newDay, 'yyyy-MM-dd'));
  }

  useEffect(() => {
    getWeekEventData(dayOfMonth);
  }, []);

  function handleClick(type) {
    if (type === "prev") {
      const lastWeek = date.addWeeks(date.parseISO(currentDay), -1);
      // setSunday(lastWeek);
    } else {
      const nextWeek = date.addWeeks(date.parseISO(currentDay), 1);
      // setSunday(nextWeek);
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
            <div
              // className={styles.weekly_dayOfWeek}
              key={randomIndex()}
            >
              <div>{day}</div>
              <div>{dayOfMonth[index].slice(5)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.weekly_container}>
        <LeftNavigation />
        {dayOfMonth.map(day => (
          <CommonElementView
            key={randomIndex()}
            eventDay={day}
            events={weekEvents[day]}
          />
        ))}
      </div>
    </>
  );
}
