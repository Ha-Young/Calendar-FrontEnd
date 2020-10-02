// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();
const eventsRef = database.ref('events/');

export const readEventListOnce = async () => {
  try {
    const result = await eventsRef.once('value');
    return result.val();
  } catch (error) {
    throw error;
  }
};

export const writeEvent = async (data) => {
  data.id = `event${eventsRef.push().key}`;

  try {
    await database.ref(`events/${data.id}`).set(data, function (error) {
      console.warn(error);
    });
    return await readEventListOnce();
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (data) => {
  try {
    await eventsRef.child(data.id).update(data, function (error) {
      console.warn(error);
    });
    return await readEventListOnce();
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await eventsRef.child(id).remove();
  } catch (error) {
    throw error;
  }
};
