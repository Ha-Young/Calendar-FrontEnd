import React from "react";

import { getHourList } from "../../utils/date";
import TheDate from "../TheDate/TheDate";
import styles from "./SchedulesBar.module.css";

function SchedulesBar({ date, dayDiff, events }) {
  const hourList = getHourList();
  const presentDate = date.clone().add(dayDiff, "days");
  const mainDate = dayDiff === 0 ? true : false;

  console.log(events);

  return (
    <div className={styles.schedulesBar}>
      <div className={styles.dateBox}>
        <TheDate
          date={presentDate}
          today={mainDate}
        />
      </div>
      {hourList.map((v) => {
        return (
          <li
            key={v}
            onClick={() => console.log(v, presentDate)}
          />
        );
      })}
    </div>
  );
}

export default SchedulesBar;
