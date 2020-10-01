import moment from 'moment';

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
  return moment(
    new moment(combineDate(currentDate)).add(count, 'days').format('YYYYMMDD')
  );
}

export function getWeekData(date) {
  const before3Days = calculateNewDate(date, -3);
  const before2Days = calculateNewDate(date, -2);
  const beforeDay = calculateNewDate(date, -1);
  const afterDay = calculateNewDate(date, 1);
  const after2Days = calculateNewDate(date, 2);
  const after3Days = calculateNewDate(date, 3);

  return [
    destructDate(before3Days),
    destructDate(before2Days),
    destructDate(beforeDay),
    date,
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
    message += '😰제목은 반드시 적어주세요.';
  }

  if (Number(startTime) > Number(endTime)) {
    message += '😿이벤트 시간을 확인해주세요.';
  }

  return message;
}
