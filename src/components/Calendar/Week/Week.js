import React from "react";
import Day from "../Day/Day";
import * as dayjs from "dayjs";

export default function Week({ date, dayOfWeek }) {
  const days = [date];
  let decrementer = dayOfWeek;
  let incrementer = dayOfWeek;

  while (decrementer > 0) {
    const firstDate = days[0].slice(0, 10).split("-");
    const previousDate = [firstDate[0], firstDate[1], `${Number(firstDate[2]) - 1}`].join("-");

    days.unshift(dayjs(previousDate).format());

    decrementer--;
  }

  while (incrementer < 6) {
    const lastDate = days[days.length - 1].slice(0, 10).split("-");
    const nextDate = [lastDate[0], lastDate[1], `${Number(lastDate[2]) + 1}`].join("-");

    days.push(dayjs(nextDate).format());

    incrementer++;
  }

  return (
    <>
      {
        days.map((day, index) => {
          return (
            <Day
              key={day}
              day={dayjs(day).format("D")}
              dayOfWeek={index}
            />
          );
        })
      }
    </>
  );
}
