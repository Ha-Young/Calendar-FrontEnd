export function getDailyEvents(date, userEvent) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  const events = [];
  for (const key in userEvent) {
    const event = new Date(userEvent[key].period.from);
    const eventYear = event.getFullYear();
    const eventMonth = event.getMonth();
    const eventDate = event.getDate();
    const isDailyEvent = currentYear === eventYear
      && currentMonth === eventMonth
      && currentDate === eventDate;

      if (isDailyEvent) events.push(userEvent[key]);
  }
  return events;
}

export function getWeeklyEvents(currentDate, userEvent) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const day = currentDate.getDay();
  let forMonday = 0;

  if (!day) {
    forMonday = 7;
  } else {
    while (day - forMonday) forMonday++;
  }

  const dateForMonday = date - forMonday + 1;
  const events = [];

  for (let i = 0; i < 7; i++) {
    const eventDate = new Date(year, month, dateForMonday + i);
    events.push([eventDate, getDailyEvents(eventDate, userEvent)]);
  }

  return events;
}