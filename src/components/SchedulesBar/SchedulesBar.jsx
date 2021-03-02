import React from "react";

import { getHourList } from "../../utils/date";
import TheDate from "../TheDate/TheDate";
import styles from "./SchedulesBar.module.css";

function SchedulesBar({ date, fromDate }) {
  const hourList = getHourList();
  const theDate = date.clone().add(fromDate, "days");

  return (
    <div className={styles.schedulesBar}>
      <TheDate
        className={styles.theDate}
        date={theDate}
      />
      {hourList.map((v) => {
        return (
          <li
            key={v}
            onClick={() => console.log(v, theDate)}
          />
        );
      })}
    </div>
  );
}

export default SchedulesBar;
