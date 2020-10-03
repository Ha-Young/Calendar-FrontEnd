function getEventInCurrentTime(eventsInCurrentDate, time) {
  for (let i = 0; i < eventsInCurrentDate.length; i++) {
    const start = eventsInCurrentDate[i].eventStartTime.slice(0, 2);
    const end = eventsInCurrentDate[i].eventEndTime.slice(0, 2);
    const isEventInCurrentTime = time >= start && time <= end;

    if (isEventInCurrentTime) {
      return eventsInCurrentDate[i];
    }
  }

  return null;
}

export default getEventInCurrentTime;
