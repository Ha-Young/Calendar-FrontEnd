import { database } from '..';

import convertToISOString from '../../utils/convertToISOString';

export const getEventById = async eventId => {
  const snapShot = await database.ref(`events/${eventId}`).once('value');
  return snapShot.val();
};

const getEventListByDate = async (uid, date) => {
  const ISODate = convertToISOString.Dates(date);
  const snapShot = await database
    .ref(`users/${uid}/eventRefs/${ISODate}`)
    .once('value');
  const eventList = [];
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
    eventList.push(event);
  }

  return { date, eventList };
};

const getEventLists = async (uid, dates) => {
  const eventLists = [];
  for (const date of dates) {
    const eventListByDate = await getEventListByDate(uid, date);
    eventLists.push(eventListByDate);
  }

  return eventLists;
};

export default getEventLists;
