const EVENT = {
  O_CLOCK: ":00",
}

export function getOnlyHours(time) {
  return time.substring(0, 2);
}

export function makeOClock(time) {
  return time.substring(0, 2) + EVENT.O_CLOCK;
}
