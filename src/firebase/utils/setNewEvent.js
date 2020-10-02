import { database } from '..';

const setNewEvent = async (uid, date, event) => {
  const newEventKey = database.ref().push().key;
  var updates = {};
  updates[`/users/${uid}/events/${date}/${newEventKey}`] = event;
  return database.ref().update(updates);
};

export default setNewEvent;
