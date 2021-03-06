import React, { useState } from "react";
import styles from "./Calendar.module.css";
import { cloneDeep } from "lodash";
import moment from "moment";
import DayTable from "../DayTable/DayTable";
import WeekTable from "../WeekTable/WeekTable";
import DateIndicator from "../DateIndicator/DateIndicator";
import TwoOptionSelector from "../TwoOptionSelector/TwoOptionSelector";
import IncDecrementControlBox from "../IncDecrementControlBox/IncDecrementControlBox";
import weekOfMonth from "../../utils/weekOfMonth"

export default function Calendar ({
  eventInfo,
  isDayCalendar,
  onEventIdClick,
  onEventDayClick,
  onEventWeekClick
}) {

  const [currentDate, setCurrentDate] = useState(moment());
  const [formattedCurrentDate, setFormattedCurrentDate] = useState({
    year: currentDate.format("YYYY"),
    month: currentDate.format("M"),
    date: currentDate.format("D"),
    day: currentDate.format("d"),
  });

  const handleArrowClick = (ev) => {
    const dayIncrement = isDayCalendar ? 1 : 7;
    if (ev.target.dataset.type === "right-arrow") {
      currentDate.add(dayIncrement, "day");
    } else if ((ev.target.dataset.type === "left-arrow")) {
      currentDate.subtract(dayIncrement, "day");
    }

    setFormattedCurrentDate({
      year: currentDate.format("YYYY"),
      month: currentDate.format("M"),
      date: currentDate.format("D"),
      day: currentDate.format("d"),
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
              value={
                isDayCalendar
                  ? currentDate.format("D")
                  : weekOfMonth(currentDate)
              }
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
