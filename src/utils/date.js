import {
  eachDayOfInterval,
  endOfWeek,
  format as formatFn,
  startOfWeek,
} from 'date-fns';

export const now = new Date();

export const getWeeks = (date = now) => eachDayOfInterval({
  start: startOfWeek(date),
  end: endOfWeek(date),
});