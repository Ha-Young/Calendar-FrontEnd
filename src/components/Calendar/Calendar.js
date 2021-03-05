import React, { useState } from "react";
import styles from "./Calendar.module.css";
import moment from "moment";
import { cloneDeep } from "lodash";
import DayTable from "../DayTable/DayTable";
import DateIndicator from "../DateIndicator/DateIndicator";
import TwoOptionSelector from "../TwoOptionSelector/TwoOptionSelector";
import IncDecrementControlBox from "../IncDecrementControlBox/IncDecrementControlBox";

export default function Calendar ({
  eventInfo,
  isDayCalendar,
  onEventIdClick,
  onEventDayClick,
  onEventWeekClick
}) {
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
          <TwoOptionSelector
            firstOption="일간"
            secondOption="주간"
            onFirstOptionClick={onEventDayClick}
            onSecondOptionClick={onEventWeekClick}
          />
          <DateIndicator
            year={currentDate.format("YYYY")}
            month={currentDate.format("M")}
            date={currentDate.format("D")}
            day={currentDate.format("E")}
          />
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
            <IncDecrementControlBox
              value={currentDate.format("D")}
              onIncreaseClick={handleIncreaseClick}
              onDecreaseClick={handleDecreaseClick}
            />
          </div>
          {isDayCalendar && <DayTable
            year={currentDate.format("YYYY")}
            month={currentDate.format("M")}
            date={currentDate.format("D")}
            day={currentDate.format("E")}
            eventInfo={eventInfo}
            onEventIdClick={onEventIdClick}
          />}
        </div>
      </div>
    </>
  );
}
