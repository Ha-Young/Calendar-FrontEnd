import React, { useMemo } from "react";
import Day from "../Day/Day";
import dateFormatter from "../../../utils/dateFormatter";

export default function Week({
  date,
  dayOfWeek,
}) {
  const days = useMemo(() => {
    return createWeekArray(date, dayOfWeek);
  }, [date]);

  return (
    <>
      {
        days.map((day, index) => {
          return (
            <Day
              key={day}
              date={day}
              dayOfWeek={index}
            />
          );
        })
      }
    </>
  );
}

function createWeekArray(date, dayOfWeek) {
  const days = [date];
  let decrementer = dayOfWeek;
  let incrementer = dayOfWeek;

  while (decrementer > 0) {
    const firstDate = days[0].slice(0, 10).split("-");
    const previousDate = [firstDate[0], firstDate[1], `${Number(firstDate[2]) - 1}`].join("-");

    days.unshift(dateFormatter(previousDate));

    decrementer--;
  }

  while (incrementer < 6) {
    const lastDate = days[days.length - 1].slice(0, 10).split("-");
    const nextDate = [lastDate[0], lastDate[1], `${Number(lastDate[2]) + 1}`].join("-");

    days.push(dateFormatter(nextDate));

    incrementer++;
  }

  return days;
}
