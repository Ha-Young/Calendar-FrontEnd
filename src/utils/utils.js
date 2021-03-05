import add from "date-fns/add";
import sub from "date-fns/sub";
import uuid from "react-uuid";
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
  return format(dateObj, "yyyy/MM/dd");
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

export function formatUserInput(eventId, userInputEvent) {
  const { eventTitle, RangePicker, eventDescription } = userInputEvent;
  const eventDate = RangePicker[0].format("YYYY/MM/DD");
  const eventStartHour = RangePicker[0].format("HH");
  const eventEndHour = RangePicker[1].format("HH");
  const event = {
    id: eventId ? eventId : uuid(),
    title: eventTitle,
    description: eventDescription,
    date: eventDate,
    startHour: eventStartHour,
    endHour: eventEndHour,
  };

  return event;
}
