import React from "react";
import moment from "moment";
import styles from "./Calendar.module.css";
import OnedaySchedule from "../OnedaySchedule";
import { CALENDAR_MODE, DATE_UNIT } from "../../utils/constants";

export default function Calendar ({
  currentDate,
  calendarMode,
  eventInfoList,
}) {
  return (
    <div className={styles.Calender}>
      { calendarMode === CALENDAR_MODE.WEEKLY ?
        <div className={styles.onedayWrap}>
          { Array(7).fill(0).map((schedule, idx) =>
            <OnedaySchedule
              key={idx}
              currentDate={currentDate}
              calendarMode={calendarMode}
              title={moment(currentDate).add(idx-2, DATE_UNIT).format("MM-DD")}
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
