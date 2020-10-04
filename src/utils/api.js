import firebase from './firebase';

const database = firebase.database();
const eventsRef = database.ref('events/');

export const readEventList = async () => {
  const result = await eventsRef.once('value');
  return result.val();
};

export const writeEvent = async (data) => {
  data.id = `event${eventsRef.push().key}`;

  await database.ref(`events/${data.id}`).set(data, function (error) {
    console.warn(error);
  });
  return await readEventList();
};

export const updateEvent = async (data) => {
  await eventsRef.child(data.id).update(data, function (error) {
    console.warn(error);
  });
  return await readEventList();
};

export const deleteEvent = async (id) => {
  await eventsRef.child(id).remove();
};
