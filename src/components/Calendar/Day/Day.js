import React from "react";
import Hour from "./Hour/Hour";
import styles from "./Day.module.css";

export default function Day({ day, dayOfWeek }) {
  const TIME = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
  const korDayOfWeek = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일"
  };

  return (
    <div className={styles.Day}>
      <h3 className={styles.calendarHeader}>
        {`${day}일 ${korDayOfWeek[dayOfWeek]}`}
      </h3>
      <div className={styles.calendarBody}>
        {
          TIME.map(time => {
            return (
              <Hour key={time} />
            );
          })
        }
      </div>

    </div>
  );
}
