import React, { useState } from "react";
import styles from "./Calendar.module.css";
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
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleIncreaseClick = () => {
    currentDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(cloneDeep(currentDate));
  };

  const handleDecreaseClick = () => {
    currentDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(cloneDeep(currentDate));
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
            year={currentDate.getFullYear()}
            month={currentDate.getMonth() + 1}
            date={currentDate.getDate()}
            day={currentDate.getDay()}
          />
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
            <IncDecrementControlBox
              value={currentDate.getDate()}
              onIncreaseClick={handleIncreaseClick}
              onDecreaseClick={handleDecreaseClick}
            />
          </div>
          {isDayCalendar && <DayTable
            year={currentDate.getFullYear()}
            month={currentDate.getMonth() + 1}
            date={currentDate.getDate()}
            day={currentDate.getDay()}
            eventInfo={eventInfo}
            onEventIdClick={onEventIdClick}
          />}
        </div>
      </div>
    </>
  );
}
