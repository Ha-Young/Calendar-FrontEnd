export default function checkValidEvent(userEventAll, eventData, setState) {
  console.log(userEventAll);
  const {
    year,
    month,
    date,
    fromHour,
  } = eventData;
  const eventISOString = new Date(year, month -1, date, fromHour).toISOString();
  const parsedDate = Date.parse(eventISOString);

  for (const key in userEventAll) {
    const { from, to } = userEventAll[key].period;
    const parsedFrom = Date.parse(from);
    const parsedTo = Date.parse(to);

    if (parsedFrom <= parsedDate && parsedDate < parsedTo) {
      setState(false);
      return false;
    }
  }
  setState(true);
  return true;
}
