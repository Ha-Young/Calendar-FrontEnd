import React, { useState, useEffect } from "react";
import styles from "./Calendar.module.css";

import buildCalender from "./build";
import dayStyles from "./styles";
import Header from "./header";

import moment from "moment";

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalender(value));
  }, [value]);

  return (
    <div className={styles.calendar}>
      <Header value={value} setValue={setValue} />
      <div>
        <div className={styles.weeks}>
          {
            ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"].map(day => (
              <div className={styles['day-week']}>{day}</div>
            ))
          }
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className={styles.day} onClick={() => setValue(day)}>
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
