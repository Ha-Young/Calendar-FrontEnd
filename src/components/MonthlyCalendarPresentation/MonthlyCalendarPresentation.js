import React, { useState } from "react";
import { getNumberOfWeeksOfMonth } from "../../utils/calendarUtils";
import MonthlyCalendarRow from "../MonthlyCalendarRow/MonthlycalendarRow";

//얘 css width,height를 parent 비례 기준으로 잡아서 row 수 줄어도 전체 크기 안변하게 고정해두기

const MonthlyCalendarPresentation = function ({ year, month }) {
  const [rowNumber, setRowNumber] = useState(getNumberOfWeeksOfMonth(year, month));
  const tempArray = Array(rowNumber);
  return (
    <div>
      {tempArray.map((element, i) => {
        <MonthlyCalendarRow key={`calendarRow${i}`} id={i} />
      })}
    </div>
  );
};

export default MonthlyCalendarPresentation;
