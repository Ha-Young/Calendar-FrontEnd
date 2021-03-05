const EVENT = {
 ZERO_MINS: ":00",
}

export function getOnlyHours(time) {
  return time.substring(0, 2);
}

export function floorMinutes(time) {
  return time.substring(0, 2) + EVENT.ZERO_MINS;
}

