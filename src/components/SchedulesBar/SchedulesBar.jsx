import React from "react";

import { getHourList } from "../../utils/date";
import DaysBoard from "../DaysBoard/DaysBoard";
import Schedule from "../Schedule/Schedule";
import styles from "./SchedulesBar.module.css";

function SchedulesBar({ date, isTheDay, events = [] }) {
  const hourList = getHourList();

  return (
    <div className={styles.schedulesBar}>
      <div className={styles.dateBox}>
        <DaysBoard
          date={date}
          isTheDay={isTheDay}
        />
      </div>
      {hourList.map((v) => {
        const hasEvent = !!events[v];

        return (
          <li key={v} >
            {hasEvent
              ? <Schedule event={events[v]} />
              : ""
            }
          </li>
        );
      })}
    </div>
  );
}

export default SchedulesBar;
