import React, { useState } from "react";
import styles from "./Calendar.module.css";
import { cloneDeep } from "lodash";
import DayTable from "../DayTable/DayTable";
import WeekTable from "../WeekTable/WeekTable";
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
  console.log(isDayCalendar)
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedCurrentDate, setFormattedCurrentDate] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: currentDate.getDate(),
    day: currentDate.getDay(),
  });

  const handleArrowClick = (ev) => {
    if (ev.target.dataset.type === "right-arrow") {
      currentDate.setDate(currentDate.getDate() + 1);
    } else if ((ev.target.dataset.type === "left-arrow")) {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    setFormattedCurrentDate({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
      day: currentDate.getDay(),
    });

    setCurrentDate(cloneDeep(currentDate));
  };

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
            time = {formattedCurrentDate}
          />
        </header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
            <IncDecrementControlBox
              value={currentDate.getDate()}
              onArrowClick={handleArrowClick}
            />
          </div>
          {isDayCalendar && <DayTable
            currentDate={formattedCurrentDate}
            eventInfo={eventInfo}
            onEventIdClick={onEventIdClick}
          />}
          {!isDayCalendar && <WeekTable
            currentDate={formattedCurrentDate}
            eventInfo={eventInfo}
            onEventIdClick={onEventIdClick}
          />}
        </div>
      </div>
    </>
  );
}
