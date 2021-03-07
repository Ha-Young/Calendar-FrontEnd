import React from "react";

import { getHourList, getKeyFormat } from "../../utils/date";
import DayBoard from "../DayBoard/DayBoard";
import Schedule from "../../containers/Schedule";
import styles from "./SchedulesBar.module.css";

function SchedulesBar({ date, isTheDay, events = {} }) {
  const hourList = getHourList();
  const dateKeyFormat = getKeyFormat(date);

  return (
    <div className={styles.schedulesBar}>
      <div className={styles.dateBox}>
        <DayBoard
          date={date}
          isTheDay={isTheDay}
        />
      </div>
      {hourList.map((v) => {
        const hasEvent = events && !!events[v];

        return (
          <li key={v} >
            {hasEvent && <Schedule event={events[v]} date={dateKeyFormat} />}
          </li>
        );
      })}
    </div>
  );
}

export default SchedulesBar;
