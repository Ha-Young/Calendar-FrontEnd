import React, { useState } from "react";
import { generateCalendarArray } from "../../../utils/calendarUtils";
import MonthlyCalendarRow from "../../MonthlyCalendarRow/MonthlycalendarRow";
import styles from "./MonthlyCalendarPresentation.module.css";

//얘 css width,height를 parent 비례 기준으로 잡아서 row 수 줄어도 전체 크기 안변하게 고정해두기

const MonthlyCalendarPresentation = function ({ year, month }) {
  const [calendarArray, setCalendarArray] = useState(generateCalendarArray(year, month));

  return (
    <div className={styles["monthly-calendar-presentation"]}>
      {calendarArray.map((calendarRow, i) =>
        <MonthlyCalendarRow key={`calendarRow${i}`} id={i} days={calendarRow} />
      )}
    </div>
  );
};

export default MonthlyCalendarPresentation;
