import React from "react";
import styles from "./Calendar.module.css";

export default function HourInDaysRow({ day, isDayCalendarShown }) {
  console.log(day);
  console.log(isDayCalendarShown);
  const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  return (
    <div className={`${styles.dayWrapper}`}>
      <h3 className={`${styles.dayFont}`}>{!isDayCalendarShown && day}</h3>
      <div className={`${styles.hoursIndayWrapper}`}>
        {hours.map((hour, index) => {
          return (
            <div
              className={`${styles.hourWrapper}`}
              key={index}
              date={`${day}`}
              hour={`${hour}`}
              onClick={() => {
                console.log(`${day}`, `${hour}`);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
