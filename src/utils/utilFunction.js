export function destructDate(option) {
  let date

  if (option) {
    date = new Date(option);
  } else {
    date = new Date();
  }

  return {
    year: String(date.getFullYear()),
    month: (
      String(date.getMonth() + 1).length === 1
      ?
        '0' + String(date.getMonth() + 1)
      :
        String(date.getMonth() + 1)
    ),
    date: (
      String(date.getDate()).length === 1
      ?
        '0' + String(date.getDate())
      :
        String(date.getDate())
    ),
  }
}

export function getNextDay(currentDate, dayCount) {
  return destructDate(
    new Date(currentDate)
      .setDate(currentDate.getDate() + dayCount)
  );
}

export function getDateSIOType({ month,date, year }) {
  return new Date(`${month} ${date} ${year}`);
}

export function getWeekData(date) {
  const currentDate = getDateSIOType(date);

  const before3Days = getNextDay(currentDate, -3);
  const before2Days = getNextDay(currentDate, -2);
  const beforeDay = getNextDay(currentDate, -1);
  const afterDay = getNextDay(currentDate, 1);
  const after2Days = getNextDay(currentDate, 2);
  const after3Days = getNextDay(currentDate, 3);

  return [
    before3Days,
    before2Days,
    beforeDay,
    destructDate(currentDate),
    afterDay,
    after2Days,
    after3Days,
  ];
}



export function reduceSnapshot(data, userId) {
  const result = {
    events: [],
    eventsId: {},
    date: {},
  };

  if (
    !data ||
    !data?.userId ||
    !data.userId[userId]?.events
  ) return result;

  const eventIds = data.userId[userId].events;

  for (let id in eventIds) {
    result.events.push(eventIds[id]);

    const eventId = eventIds[id];
    result.eventsId[eventId] = data.events[eventId];

    const createdAt = data.events[eventId].createdAt.slice(0, 10);
    if (!result.date[createdAt]) {
      result.date[createdAt] = [];
    }
    result.date[createdAt].push(eventId);
  }

  return result;
}
