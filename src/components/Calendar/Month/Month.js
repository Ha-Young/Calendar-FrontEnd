import React from "react";
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  formatISO,
} from "date-fns";

export default function Calendar() {
  const today = new Date();

  // const getDayNumber = (date = today) => format(date, "d");

  const getDaysInWeek = (date) =>
    eachDayOfInterval({
      start: startOfWeek(date),
      end: endOfWeek(date),
    });

  const getWeeksInMonth = (date) =>
    eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });

  console.log(getDaysInWeek(today));
  console.log(getWeeksInMonth(today));

  return <div></div>;
}
