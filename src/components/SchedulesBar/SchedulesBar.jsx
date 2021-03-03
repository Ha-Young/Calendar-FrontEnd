import React from "react";

import { getHourList } from "../../utils/date";
import TheDate from "../TheDate/TheDate";
import styles from "./SchedulesBar.module.css";

function SchedulesBar({ date, dayDiff }) {
  const hourList = getHourList();
  const theDay = date.clone().add(dayDiff, "days");

  return (
    <div className={styles.schedulesBar}>
      <div className={styles.dateBox}>
        <TheDate date={theDay} />
      </div>
      {hourList.map((v) => {
        return (
          <li
            key={v}
            onClick={() => console.log(v, theDay)}
          />
        );
      })}
    </div>
  );
}

export default SchedulesBar;
