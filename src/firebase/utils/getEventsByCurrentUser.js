import { database } from '..';

import { convertToISOString } from '../../utils/date';

const getEventsByDate = async (userId, date) => {
  const ISODate = convertToISOString.Dates(date);

  const eventsRef = database.ref(`users/${userId}/events/${ISODate}`);
  let snapShot = await eventsRef.once('value');

  return snapShot.val();
};

export default getEventsByDate;
