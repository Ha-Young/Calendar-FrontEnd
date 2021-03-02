import React from "react";
import MonthlyCalendarDay from "../MonthlyCalendarDay/MonthlyCalendarDay";

const MonthlyCalendarRow = function ({ days }) {
  return (
    <div>
      {days.map((day, i) =>
        <MonthlyCalendarDay key={`day${i}`} day={day} />
      )}
    </div>
  );
};

export default MonthlyCalendarRow;
