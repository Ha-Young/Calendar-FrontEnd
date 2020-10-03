function getEventInCurrentTime(eventsInCurrentDate, time) {
  const eventWrap = [];

  for (let i = 0; i < eventsInCurrentDate.length; i++) {
    const start = eventsInCurrentDate[i].eventStartTime.slice(0, 2);
    const end = eventsInCurrentDate[i].eventEndTime.slice(0, 2);
    const isEventInCurrentTime = time >= start && time <= end;

    if (isEventInCurrentTime) eventWrap.push(eventsInCurrentDate[i]);
  }

  return eventWrap.length ? eventWrap : null;
}

export default getEventInCurrentTime;
