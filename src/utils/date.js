import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO } from "date-fns";
import { viewMode } from "../constants/viewMode";
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

export const currentDay = (today) => formatISO(today).slice(0, 10);

export const setCalendarData = (cb, isDailyCalendar, currentDate) => {
  const calendarGap = isDailyCalendar ? viewMode.DAILYMODE.gap : viewMode.WEEKLYMODE.gap;

  const date = cb(currentDate, calendarGap);
  const daily = getDay(date);
  const weekly = getWeek(date);

  return {
    date,
    daily,
    weekly,
  };
};

export const hours = new Array(24).fill(0).map((_, index) => index); // 상수 지정

