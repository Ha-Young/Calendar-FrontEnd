import React from "react";
import DateColumn from "./DateColumn";
import { getDatesFor35Columns, getFullDateToString } from "../../utils/calculateCalendar";

export default function MonthContainer(props) {
  const dates = getDatesFor35Columns(2021, 2);

  return (
    <ul>
      {dates.map((date) => {
        const stringDate = getFullDateToString(date);
        return <DateColumn key={stringDate} fullDate={stringDate} />
      })}
    </ul>
  );
}
