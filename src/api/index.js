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


export async function createEvent(userId, date, event) {
  const database = firebase.database();
  await database.ref(`${userId}/${date}`).set({
    
  });
}
