import React from "react";
import moment from "moment";
import styles from "./Calendar.module.css";
import OnedaySchedule from "../OnedaySchedule";
import { CALENDAR_MODE } from "../../utils/constants";
import EventInfoControlReducer from "../../reducers/EventInfoControlReducer";

export default function Calendar ({
  currentDate,
  calendarMode,
  eventInfoList,
  // GET ARR
}) {


  console.log(eventInfoList, "???")

  // eventInfoList.filter(event => {
  //   console.log(event)
  //   event.date.substr(5) === 
  // })
  // DAT MATCHING -> CURRENTDATE || TITLE === ? 

  // YES
  // MATHCED ARR -> EXTRACT
  // EVENT TIME 
  






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
