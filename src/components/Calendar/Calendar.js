import React, { useState, useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { format, getDate, getDay, getMonth, getYear, sub, add } from "date-fns";
import styles from "./Calendar.module.css";
import DayBox from "./DayBox";
import Column from "./TimeTableColumn";

export default function Calender({ currentWeek, currentDay, setCurrentWeek, setCurrentDay, event }) {
  const history = useHistory();
  const param = useParams();
  const [isWeekMode, setIsWeekMode] = useState(param.dateUnit === "week");

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
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const currentWeekData = currentWeek.length 
    ? currentWeek.map((val) => {
      return {
        date: getDate(val),
        dayOfWeek: daysOfWeek[getDay(val)],
        formatString: format(val, "yyyy-MM-dd"),
      }
    }) 
    : null;
  
  const currentMonth = isWeekMode ? month[getMonth(currentWeek[0])] : month[getMonth(currentDay)];
  const currentYear = isWeekMode ? getYear(currentWeek[0]) : getYear(currentDay);

  const time = [];
  for (let i = 0; i <= 24; i++) {
    if (i <= 12) {
      time.push(`${i} AM`);
    } else {
      time.push(`${i - 12} PM`)
    }
  }

  const handleDateUnitChange = (e) => {
    const dateUnit = e.currentTarget.value;
    if (dateUnit === "") {
      return;
    }

    setIsWeekMode(dateUnit === "week");
  }

  const handlePrevButtonClick = (e) => {
    if (isWeekMode) {
      setCurrentWeek(sub(currentWeek[0], { weeks: 1 }));
    } else {
      setCurrentDay(sub(currentDay, { days: 1 }));
    }
  }

  const handleNextButtonClick = (e) => {
    if (isWeekMode) {
      setCurrentWeek(add(currentWeek[0], { weeks: 1 }));
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

  const dayBoxes = currentWeekData 
    ? currentWeekData.map((val, i) => {
      const dayBoxes = isWeekMode
        ? (<DayBox 
          key={i}
          title={val.date} 
          description={val.dayOfWeek}
          hasActiveToggle={!isWeekMode}
        />)
        : (<NavLink 
            key={i}
            to={`/calendar/day/${val.formatString}`}
            activeClassName={styles.active}
            onClick={handleDayBoxClick}
          >
          <DayBox 
            title={val.date} 
            description={val.dayOfWeek}
            hasActiveToggle={!isWeekMode}
          />
        </NavLink>);

      return (dayBoxes);
    })
    : null;

  return (
    <div className={styles.Calendar}>
      <div className={styles.ControlBox}>
      <select 
        name="DateUnit"
        onChange={handleDateUnitChange}
      >
        <option value="">DateUnit</option>
        <option value="week">Week</option>
        <option value="day">Day</option>
      </select>
        <div className={styles.MoveButtonBox}>
          <button 
            className={styles.PrevButton}
            onClick={handlePrevButtonClick}
          >
            {isWeekMode ? "Prev week" : "Prev day"}
          </button>
          <button 
            className={styles.NextButton}
            onClick={handleNextButtonClick}
          >
            {isWeekMode ? "Next week" : "Next day"}
          </button>
        </div>
      </div>
      <div className={styles.DaysBox}>
        {currentWeek.length && <DayBox 
          title={currentMonth}
          description={currentYear}
          hasActiveToggle={false}
        />}
        {dayBoxes}
      </div>
      <div className={styles.TimeTableBox}>
        <div className={styles.TimeDisplayBox}>
          {time.map((val, i) => {
            return (
              <div 
                className={styles.TimeDisplay} 
                key={i}
              >
                <span>{val}</span>
              </div>
            );
          })}
        </div>
        {isWeekMode 
          ? (
            <div className={styles.TimeTable}>
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
            </div>
            )
          : (
            <div className={styles.TimeTable}>
              <Column />
            </div>
            )}
      </div>
    </div>
  );
}