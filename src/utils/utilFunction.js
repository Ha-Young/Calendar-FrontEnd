import { format, add } from 'date-fns';

import {
  NONE_TITLE_MESSAGE,
  INVALID_TIME_MESSAGE,
} from '../constants';

export function combineDate(dateObj) {
  return `${dateObj.year}-${dateObj.month}-${dateObj.date}`;
}

export function destructDate(dateInstance) {
  return {
    year: format(dateInstance, 'yyyy'),
    month: format(dateInstance, 'MM'),
    date: format(dateInstance, 'dd'),
  };
}

export function calculateNewDate(currentDate, count) {
  return add(new Date(currentDate), { days: count });
}

export function getWeekData(dateObj) {
  const currentDate = combineDate(dateObj);
  const before3Days = calculateNewDate(currentDate, -3);
  const before2Days = calculateNewDate(currentDate, -2);
  const beforeDay = calculateNewDate(currentDate, -1);
  const afterDay = calculateNewDate(currentDate, 1);
  const after2Days = calculateNewDate(currentDate, 2);
  const after3Days = calculateNewDate(currentDate, 3);

  return [
    destructDate(before3Days),
    destructDate(before2Days),
    destructDate(beforeDay),
    dateObj,
    destructDate(afterDay),
    destructDate(after2Days),
    destructDate(after3Days),
  ];
}

export function reduceSnapshot(snapshot) {
  const result = {
    events: [],
    eventsId: {},
    date: {},
  };

  for (let eventId in snapshot) {
    const currentEvent = snapshot[eventId];
    result.events.push(eventId);

    result.eventsId[eventId] = currentEvent;

    if (!result.date[currentEvent.date]) {
      result.date[currentEvent.date] = [];
    }

    result.date[currentEvent.date].push(eventId);
  }

  return result;
}

export function validateEventForm(form) {
  const {
    title,
    startTime,
    endTime,
  } = form;

  let message = '';

  if (!title.length) {
    message += NONE_TITLE_MESSAGE;
  }

  if (Number(startTime) > Number(endTime)) {
    message += INVALID_TIME_MESSAGE;
  }

  return message;
}
