import moment from 'moment';

import {
  NONE_TITLE_MESSAGE,
  INVALID_TIME_MESSAGE,
} from '../constants';

export function combineDate(fullDate) {
  return `${fullDate.year}${fullDate.month}${fullDate.date}`;
}

export function destructDate(fullDate) {
  return {
    year: fullDate.format('YYYY'),
    month: fullDate.format('MM'),
    date: fullDate.format('DD'),
  };
}

export function calculateNewDate(currentDate, count) {
  return destructDate(moment(new moment(combineDate(currentDate))
    .add(count, 'days')
    .format('YYYYMMDD')));
}

export function getWeekData(date) {
  const before3Days = calculateNewDate(date, -3);
  const before2Days = calculateNewDate(date, -2);
  const beforeDay = calculateNewDate(date, -1);
  const afterDay = calculateNewDate(date, 1);
  const after2Days = calculateNewDate(date, 2);
  const after3Days = calculateNewDate(date, 3);

  return [
    before3Days,
    before2Days,
    beforeDay,
    date,
    afterDay,
    after2Days,
    after3Days,
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
