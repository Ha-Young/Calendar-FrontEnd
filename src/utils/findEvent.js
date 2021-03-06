export function findEvent(daySchedule, index) {
  if (!daySchedule) {
    return;
  }

  for (const event in daySchedule) {
    if (daySchedule[event].from === index) {
      return daySchedule[event];
    }
  }
}
