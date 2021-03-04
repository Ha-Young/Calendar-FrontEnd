import React, { useState } from "react";
import styles from "./Calendar.module.css";
import moment from "moment";
import { cloneDeep } from "lodash";
import DayTable from "./DayTable";
import DateIndicator from "./DateIndicator";
import IncDecrementControlBox from "./IncDecrementControlBox";

export default function Calendar ({ eventInfo }) {
  const initialCurrentDate = {
    year: moment().format("YYYY"),
    month: moment().format("M"),
    date: moment().format("D"),
    day: moment().format("E")
  };

  const [currentDate, setCurrentDate] = useState(moment());

  const handleIncreaseClick = () => {
    setCurrentDate(cloneDeep(currentDate.add(1, "days")));
  };

  const handleDecreaseClick = () => {
    setCurrentDate(cloneDeep(currentDate.subtract(1, "days")));
  }

  return (
    <>
      <div className={styles.Calender}>
        <header className={styles.headerContainer}>
          <div className={styles.dateIndicatorContainer}>
            <DateIndicator
              year={currentDate.format("YYYY")}
              month={currentDate.format("M")}
              date={currentDate.format("D")}
              day={currentDate.format("E")}
            />
          </div>
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
            <IncDecrementControlBox
              value={currentDate.format("D")}
              onIncreaseClick={handleIncreaseClick}
              onDecreaseClick={handleDecreaseClick}
            />
          </div>
          <DayTable eventInfo={eventInfo} />
        </div>
      </div>
    </>
  );
}
