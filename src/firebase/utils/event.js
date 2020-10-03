import { database } from '..';

export const setNewEvent = async (uid, date, event) => {
  const userEventRef = database.ref(`/users/${uid}/events/${date}/`);
  const newEventId = userEventRef.push().key;

  await userEventRef.child(`${newEventId}`).set({
    ...event,
    eventId: newEventId,
  });

  return newEventId;
};

export const updateEvent = async (uid, date, eventId, editedEvent) => {
  var updates = {};
  updates[`/users/${uid}/events/${date}/${eventId}`] = {
    ...editedEvent,
  };

  return database.ref().update(updates);
};
