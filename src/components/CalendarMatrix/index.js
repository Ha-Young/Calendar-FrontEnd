import React from "react";
import moment from "moment";
import styles from "./CalendarMatrix.module.css";
import OnedaySchedule from "../OnedaySchedule";
import { CALENDAR_MODE, DATE_UNIT } from "../../utils/constants";

export default function CalendarMatrix ({
  currentDate,
  calendarMode,
  eventInfoList,
}) {

  console.log("date in Calendar", currentDate)
  console.log(moment(currentDate).day(), "??")
  return (
    <div className={styles.Calender}>
      { calendarMode === CALENDAR_MODE.WEEKLY ?
        <div className={styles.onedayWrap}>
          { Array(7).fill(0).map((schedule, idx) =>
            <OnedaySchedule
              key={idx}
              currentDate={currentDate}
              calendarMode={calendarMode}
              title={moment(currentDate).add(idx-2, DATE_UNIT.DAYS).format("MM-DD")}
              eventInfoList={eventInfoList}
            />)
          }
        </div>
        :
        <div className={styles.onedayWrap}>
          <OnedaySchedule
            title={moment(currentDate).format("MM-DD")}
            currentDate={currentDate}
            eventInfoList={eventInfoList}
          />
        </div>
      }
    </div>
  );
}
