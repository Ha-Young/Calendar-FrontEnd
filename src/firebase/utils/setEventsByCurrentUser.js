import { database } from '..';

import { convertToISOString } from '../../utils/date';

const setEventsByDate = async (userId, date, event) => {
  const ISODate = convertToISOString.Dates(date);

  const eventsRef = database.ref(`events`);
  const newEventRef = eventsRef.push();

  await newEventRef.set({
    ...event,
  });

  return newEventRef.getkey();
};

export default setEventsByDate;
b;
