export default function checkValidEvent(userEventAll, eventData, setState) {
  const {
    year,
    month,
    date,
    fromHour,
    toHour,
  } = eventData;
  const fromISOString = new Date(year, month - 1, date, fromHour).toISOString();
  const toISOString = new Date(year, month - 1, date, toHour).toISOString();
  const parsedNewFrom = Date.parse(fromISOString);
  const parsedNewTo = Date.parse(toISOString);

  let isValid = true;

  for (const key in userEventAll) {
    const { from, to } = userEventAll[key].period;
    const parsedFrom = Date.parse(from);
    const parsedTo = Date.parse(to);

    if (parsedFrom < parsedNewTo && parsedNewTo <= parsedTo) {
      isValid = false;
      break;
    } else if (parsedFrom <= parsedNewFrom && parsedNewFrom < parsedTo) {
      isValid = false;
      break;
    } else if (parsedFrom <= parsedNewFrom && parsedNewTo <= parsedTo) {
      isValid = false;
      break;
    } else if (parsedNewFrom < parsedFrom && parsedTo < parsedNewTo) {
      isValid = false;
      break;
    }
  }

  setState(isValid);
  return isValid;
}
