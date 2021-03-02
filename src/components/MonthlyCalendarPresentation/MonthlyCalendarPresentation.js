import React, { useState } from "react";
import { getCalendarArray } from "../../utils/calendarUtils";
import MonthlyCalendarRow from "../MonthlyCalendarRow/MonthlycalendarRow";

//얘 css width,height를 parent 비례 기준으로 잡아서 row 수 줄어도 전체 크기 안변하게 고정해두기

const MonthlyCalendarPresentation = function ({ year, month }) {
  const [calendarArray, setCalendarArray] = useState(getCalendarArray(year, month));

  return (
    <div>
      {calendarArray.map((calendarRow, i) =>
        <MonthlyCalendarRow key={`calendarRow${i}`} id={i} days={calendarRow} />
      )}
    </div>
  );
};

export default MonthlyCalendarPresentation;
