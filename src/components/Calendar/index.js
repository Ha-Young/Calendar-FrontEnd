import React from "react";
import moment from "moment";
import styles from "./Calendar.module.css";
import OnedaySchedule from "../OnedaySchedule";
import { CALENDAR_MODE } from "../../utils/constants";

export default function Calendar ({
  currentDate,
  calendarMode,
}) {
    console.log("calender", calendarMode)
  let week = true;
  console.log(currentDate, "??????")
  return (
    <div className={styles.Calender}>
      { calendarMode === CALENDAR_MODE.WEEKLY ?
        <div className={styles.onedayWrap}>
          { Array(7).fill(0).map((schedule, idx) =>
            <OnedaySchedule
              key={idx}
              currentDate={currentDate}
              calendarMode={calendarMode}
              title={moment(currentDate).add(idx-2, "days").format("MM-DD")}
            />)
          }
        </div>
        :
        <div className={styles.onedayWrap}>
          <OnedaySchedule title={moment(currentDate).format("MM-DD")} currentDate={currentDate} />
        </div>
      }
    </div>
  )
}
