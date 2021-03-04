import { startOfWeek, endOfWeek, eachDayOfInterval, formatISO, format } from "date-fns";
import { viewMode } from "../constants/viewMode";

const DAY_LENGTH = 24;
const INITIAL_VALUE = 0;
const LENGTH_FLAG = 10;
const DAY_FORMAT = "PP";

export const today = new Date();

export const hours = new Array(DAY_LENGTH).fill(INITIAL_VALUE).map((_, index) => 
  index < LENGTH_FLAG ? `0${index}:00` : `${index}:00`);

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

export const generateTitleDate = (date) => format(date, DAY_FORMAT);
