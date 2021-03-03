import { format, subDays, addDays, endOfWeek, startOfWeek, eachDayOfInterval } from "date-fns";

export const formatDate = (date, setting) => {
  return format(date, setting);
}

export const subDate = (date, days) => {
  return subDays(date, days);
}

export const addDate = (date, days) => {
  return addDays(date, days);
}

export const getCurrentWeek = (date) => {
  const startDate = startOfWeek(date);
  const endDate = endOfWeek(date);

  return eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
}

export const getLastWeek = (week) => {
  const startDate = subDays(week[0], 7);
  const endDate = subDays(week[6], 7);

  return eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
}

export const getNextWeek = (week) => {
  const startDate = addDays(week[0], 7);
  const endDate = addDays(week[6], 7);

  return eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
}
