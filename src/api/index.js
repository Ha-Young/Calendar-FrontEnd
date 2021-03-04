// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
  });
}

export async function writeEvent(userId, event) {
  const database = firebase.database();

  const {
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  } = event;

  return await database.ref(`${userId}/${date}/${id}`).set({
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  });
}
