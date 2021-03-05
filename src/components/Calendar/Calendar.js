import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { format, getMonth, getYear, sub, add } from "date-fns";
import styles from "./Calendar.module.css";
import DayBox from "./DayBox/DayBox";
import DayBoxes from "./DayBox/DayBoxes";
import MoveButtons from "./Control/MoveButtons";
import Dropdown from "./Control/Dropdown";
import TimeTableBox from "./TimeTable/TimeTableBox";

export default function Calender(props) {
  const { 
    currentWeek, 
    currentDay, 
    setCurrentWeek, 
    setCurrentDay, 
    setIsWeekMode, 
    isWeekMode, 
  } = props;

  const history = useHistory();
  const param = useParams();

  useEffect(() => {
    setIsWeekMode(param.dateUnit === "week");
  }, []);

  useEffect(() => {
    const dateUnit = isWeekMode ? "week" : "day";
    const currentDayString = format(currentDay,"yyyy-MM-dd");

    if (isWeekMode) {
      history.push(`/calendar/${dateUnit}`);
    } else {
      history.push(`/calendar/${dateUnit}/${currentDayString}`);
    }
  }, [isWeekMode, currentDay]);

  useEffect(() => {
    setCurrentWeek(currentDay);
  }, [currentDay]);
  
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const isCurrentWeekLoad = currentWeek && currentWeek.length;
  const currentMonth = isWeekMode && isCurrentWeekLoad 
    ? month[getMonth(currentWeek[0].originalDate)] 
    : month[getMonth(currentDay)];
  const currentYear = isWeekMode && isCurrentWeekLoad 
    ? getYear(currentWeek[0].originalDate) 
    : getYear(currentDay);

  const handleDateUnitChange = (e) => {
    const dateUnit = e.currentTarget.value;
    if (dateUnit === "DateUnit") {
      return;
    }

    setIsWeekMode(dateUnit === "week");
  }

  const handlePrevButtonClick = (e) => {
    if (isWeekMode) {
      setCurrentWeek(sub(currentWeek[0].originalDate, { weeks: 1 }));
    } else {
      setCurrentDay(sub(currentDay, { days: 1 }));
    }
  }

  const handleNextButtonClick = (e) => {
    if (isWeekMode) {
      setCurrentWeek(add(currentWeek[0].originalDate, { weeks: 1 }));
    } else {
      setCurrentDay(add(currentDay, { days: 1 }));
    }
  }

  const handleDayBoxClick = (e) => {
    const dateString = e.currentTarget.href.slice(-10);

    const year = Number(dateString.slice(0, 4));
    const month = Number(dateString.slice(5, 7));
    const day = Number(dateString.slice(8));

    setCurrentDay(new Date(year, month - 1, day));
  }

  return (
    <>
      <div className={styles.ControlBox}>
        <Dropdown 
          name="date-unit" 
          optionList={["DateUnit", "week", "day"]}
          onChange={handleDateUnitChange}
        />
        <MoveButtons 
          onPrevButtonClick={handlePrevButtonClick}
          onNextButtonClick={handleNextButtonClick}
          prevButtonText={isWeekMode ? "Prev week" : "Prev day"}
          nextButtonText={isWeekMode ? "Next week" : "Next day"}
        />
      </div>
      <div className={styles.Calendar}>
        <div className={styles.DayBoxesContainer}>
          {isCurrentWeekLoad && <DayBox 
            title={currentMonth}
            description={currentYear}
            hasActiveToggle={false}
          />}
          <DayBoxes 
            days={currentWeek}
            hasLink={!isWeekMode}
            onLinkClick={handleDayBoxClick}
          />
        </div>
        <TimeTableBox 
          isWeek={isWeekMode}
        />
      </div>
    </>
  );
}
