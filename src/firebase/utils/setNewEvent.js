import { database } from '..';

const setNewEvent = async (uid, date, event) => {
  const newEventKey = database.ref().push().key;
  var updates = {};
  updates[`/users/${uid}/eventRefs/${date}/${newEventKey}`] = true;
  updates[`/events/${newEventKey}`] = event;
  return database.ref().update(updates);
};

export default setNewEvent;
