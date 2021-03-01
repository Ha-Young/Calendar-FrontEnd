import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO } from "date-fns";

export const today = new Date();

export const getWeek = (today) => {
  const week = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return week.map((day) => {
    return formatISO(day).slice(0, 10);
  });
};

export const getDay = (today) => {
  return [formatISO(today).slice(0, 10)];
};

export const setCalendarData = (cb, info) => {
  const date = cb(...info);
  const daily = getDay(date);
  const weekly = getWeek(date);

  return {
    date,
    daily,
    weekly,
  };
};
