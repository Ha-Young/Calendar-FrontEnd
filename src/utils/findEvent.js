/**
 *
 * @param {object} daySchedule event list
 * @param {number} index target day
 * @returns {object} event of target day
 */
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
