import { database } from '..';

export const setNewEvent = async (uid, date, event) => {
  const newEventKey = database.ref().push().key;
  var updates = {};
  updates[`/users/${uid}/events/${date}/${newEventKey}`] = {
    ...event,
    eventId: newEventKey,
  };
  return database.ref().update(updates);
};
