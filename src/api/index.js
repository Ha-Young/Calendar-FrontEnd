// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const a =[1, 2, 3];
  await database.ref("test/123").set({
    test: a,
    test2: a,
  });
}
