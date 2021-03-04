import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO, format } from "date-fns";
import { viewMode } from "../constants/viewMode";
export const today = new Date();

export const hours = new Array(24).fill(0).map((_, index) => 
  index < 10 ? `0${index}:00` : `${index}:00`); // 상수 지정

export const currentDay = (today) => formatISO(today).slice(0, 10);

export const getWeek = (today) => {
  const week = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return week.map((day) => {
    return currentDay(day);
  });
};

export const getDay = (today) => {
  return [currentDay(today)];
};

export const endsOfWeek = (date) => {
  return [formatISO(startOfWeek(date)), formatISO(endOfWeek(date))];
};

export const setCalendarDate = (cb, isDailyCalendar, currentDate) => {
  const calendarGap = isDailyCalendar ? viewMode.DAILYMODE.gap : viewMode.WEEKLYMODE.gap;

  const selectedDate = cb(currentDate, calendarGap);
  const daily = getDay(selectedDate);
  const weekly = getWeek(selectedDate);

  return {
    selectedDate,
    daily,
    weekly,
  };
};

export const generateTitleDate = (date) => format(date, "PP");
