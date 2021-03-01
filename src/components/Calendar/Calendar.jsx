import React, { useState, useEffect } from "react";
import moment, { duration } from "moment";
import styles from "./Calendar.module.css";

import buildCalender from "./build";

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {

    setCalendar(buildCalender(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  return (
    <div className={styles.calendar}>
      {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div className={styles.day} onClick={() => setValue(day)}>
              <div
                className={value.isSame(day, "day") ? styles.selected : ""}
              >
                {day.format("D").toString()}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
