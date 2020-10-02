import { database } from '..';

import convertToISOString from '../../utils/convertToISOString';

const getEventById = async eventId => {
  const snapShot = await database.ref(`events/${eventId}`).once('value');
  return snapShot.val();
};

const getEventsByDate = async (uid, date) => {
  const ISODate = convertToISOString.Dates(date);
  const snapShot = await database
    .ref(`users/${uid}/eventRefs/${ISODate}`)
    .once('value');
  const events = [];
  let eventIds = [];

  try {
    if (snapShot.exists()) {
      eventIds = Object.keys(snapShot.val());
    }
  } catch (error) {
    console.warn('get events failed', error);
  }

  for (const eventId of eventIds) {
    const event = await getEventById(eventId);
    events.push(event);
  }

  return events;
};

export default getEventsByDate;
