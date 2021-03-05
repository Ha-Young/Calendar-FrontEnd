// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const data = firebase.database();

export const createEvent = async ({ userId, title, date, startTime, endTime, location, description, eventColor }) => {
  await data.ref(`events/${userId}/${date}/${startTime}`).set({
    title,
    date,
    startTime,
    endTime,
    location,
    description,
    eventColor,
  });
};

export const getEvents = async (userId, date) => {
  const eventsRef = data.ref(`events/${userId}/${date}`);
  const snapshot = await eventsRef.once("value").then((snapshot) => snapshot);
  const result = [];

  snapshot.forEach((data) => {
    const event = data.val();
    result.push(event);
  });

  return result;
};

export const removeEvent = async (userId, date, startTime) => {
  await data.ref(`events/${userId}/${date}/${startTime}`).set(null);
};

export const updateEvent = async (userId, date, startTime, event) => {
  await removeEvent(userId, date, startTime);
  await createEvent(event);
};
