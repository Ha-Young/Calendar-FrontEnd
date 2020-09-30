import React from "react";
import Day from "../Day/Day";
import * as dayjs from "dayjs";

export default function Week({ day, dayOfWeek }) {
  let firstDay;

  switch (dayOfWeek) {
    case 0:
      firstDay = day;
      break;
    case 1:
      firstDay = day - 1;
      break;
    case 2:
      firstDay = day - 2;
      break;
    case 3:
      firstDay = day - 3;
      break;
    case 4:
      firstDay = day - 4;
      break;
    case 5:
      firstDay = day - 5;
      break;
    case 6:
      firstDay = day - 6;
  }

  const DAYS = [firstDay, firstDay + 1, firstDay + 2, firstDay + 3, firstDay + 4, firstDay + 5, firstDay + 6];

  return (
    <>
      {
        DAYS.map((day, index) => {
          return (
            <Day
              key={day}
              day={firstDay + index}
              dayOfWeek={index}
            />
          );
        })
      }
    </>
  );
}
