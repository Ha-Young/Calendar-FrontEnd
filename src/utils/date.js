import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO, format } from "date-fns";
import { viewMode } from "../constants/viewMode";
import * as dates from "../constants/date";

export const today = new Date();

export const hours = new Array(dates.DAY_LENGTH).fill(dates.INITIAL_VALUE).map((_, index) =>
  index < dates.LENGTH_FLAG ? `0${index}:00` : `${index}:00`);

export const currentDay = (today) => formatISO(today).slice(dates.FIRST_DATE_INDEX, dates.LAST_DATE_INDEX);

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

export const setCalendarDate = (changeDate, isDailyCalendar, currentDate) => {
  const calendarGap = isDailyCalendar ? viewMode.DAILYMODE.gap : viewMode.WEEKLYMODE.gap;

  const selectedDate = changeDate(currentDate, calendarGap);
  const daily = getDay(selectedDate);
  const weekly = getWeek(selectedDate);

  return {
    selectedDate,
    daily,
    weekly,
  };
};

export const generateTitleDate = (date) => format(date, dates.DAY_FORMAT);
