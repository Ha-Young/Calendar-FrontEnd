import React from "react";

import HoursBar from "../HoursBar/HoursBar";
import SchedulesBar from "../../containers/ScheduleBar";
import styles from "./Daily.module.css";

function Daily() {
  return (
    <div className={styles.daily}>
      <HoursBar />
      <SchedulesBar dayDiff={0} />
    </div>
  );
}

export default Daily;
