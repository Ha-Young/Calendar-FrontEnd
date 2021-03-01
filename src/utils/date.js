import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO } from "date-fns";

export const today = new Date();

export const getWeek = (today) => {
  const week = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return week.map((day) => {
    return formatISO(day);
  });
};

export const getDay = (today) => {
  return formatISO(today);
};
