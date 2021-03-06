import React, { useState } from "react";
import * as date from "date-fns";
import styles from "./Weekly.module.css";
import CommonElementView from "../Element/CommonElementView";
import { DAYS } from "../../constants/CALENDAR_UNIT";
import randomIndex from "../../utils/randomIndex";
import { useEffect } from "react";

export default function Weekly({ currentDay, weekEvents, getWeekEventData }) {
  const startOfWeek = date.startOfWeek(date.parseISO(currentDay));

  const init = () => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const newDay = date.addDays(startOfWeek, i);
      arr.push(date.format(newDay, 'yyyy-MM-dd'));
    }
    return arr;
  }
  const [dayOfMonth, setDayOfMonth] = useState(init);

  useEffect(() => {
    getWeekEventData(dayOfMonth);
  }, []);

  // const events = getCurrentWeek(dayOfMonth);
  console.log('1', weekEvents)
  // console.log(date.format(startOfWeek, 'yyyy-MM-dd'));
  // console.log(date.addDays(startOfWeek, 1))
  // console.log(date.addDays(startOfWeek, 2))
  // console.log(date.addDays(startOfWeek, 3))
  // console.log(date.addDays(startOfWeek, 4))
  // console.log(date.addDays(startOfWeek, 5))
  // console.log(date.addDays(startOfWeek, 6))

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
      <div>
        <span
          className={styles.btn}
          role="img"
          aria-label="arrow"
          onClick={() => handleClick("prev")}
        >
          ⬅️
        </span>

        <div className={styles.flex}>
          {DAYS.map((day, index) => {
            return (
              <div
                className={styles.weekly_header}
                key={randomIndex()}
              >
                <div>{day}</div>
                <div>{dayOfMonth[index].slice(5)}</div>
              </div>
            );
          })}
        </div>

        <span
          className={styles.btn}
          role="img"
          aria-label="arrow"
          onClick={() => handleClick("next")}
        >
          ➡️
        </span>
      </div>

      <div className={styles.weekly_flex}>
        {dayOfMonth.map((day) => {
          return (
            <CommonElementView
              eventDay={day}
              key={randomIndex()}
              events={weekEvents[day]}
            />
          );
        })}
      </div>
    </>
  );
}
