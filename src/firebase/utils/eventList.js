import { database } from '..';

import convertToISOString from '../../utils/convertToISOString';

export const getEventLists = async (uid, dates) => {
  const eventLists = [];

  for (const date of dates) {
    const ISODate = convertToISOString.Dates(date);
    const snapShot = await database
      .ref(`users/${uid}/events/${ISODate}`)
      .once('value');

    if (snapShot.exists()) {
      const eventList = Object.values(snapShot.val());
      eventLists.push({ date, eventList: eventList });
    } else {
      eventLists.push({ date, eventList: [] });
    }
  }

  return eventLists;
};
