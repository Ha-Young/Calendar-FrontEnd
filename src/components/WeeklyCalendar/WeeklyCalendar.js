import React from "react";
import styles from "./WeeklyCalendar.module.css";

const WeeklyCalendar = () => {
  const timeTable = Array(24).fill(0);

  const onClick = (e) => {
    console.log(e._targetInst.key);
  }

  return (
    <>
      <div className={styles.WeeklyCalendar}>
        {
          timeTable.map((cur, index) => {
            let isOddIndex;

            if (index % 2 === 0) {
              isOddIndex = false;
            } else {
              isOddIndex = true;
            }

            return (
              <div
                key={index}
                className={isOddIndex ? styles.odd : styles.even}
                name={index}
                value={index}
                onClick={onClick}>
                {index}
              </div>
            );
          })
        }
      </div>
    </>
  )

}

export default WeeklyCalendar;
