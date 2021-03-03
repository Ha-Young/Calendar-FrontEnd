import add from "date-fns/add";
import sub from "date-fns/sub";
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  formatISO,
  getWeekOfMonth,
} from "date-fns";

export function addDay(dateObj) {
  return add(dateObj, {
    days: 1,
  });
}

export function addWeek(dateObj) {
  return add(dateObj, {
    weeks: 1,
  });
}

export function subDay(dateObj) {
  return sub(dateObj, {
    days: 1,
  });
}

export function subWeek(dateObj) {
  return sub(dateObj, {
    weeks: 1,
  });
}

export function formatDate(dateObj) {
  return format(dateObj, "MM/dd");
}

export function formatWeek(dateObj) {
  const result = `${format(dateObj, "MM/yyyy")}의 ${getWeekOfMonth(
    dateObj
  )}번째 주`;
  return result;
}

export function getDaysInWeek(dateObj) {
  return eachDayOfInterval({
    start: startOfWeek(dateObj),
    end: endOfWeek(dateObj),
  });
}
