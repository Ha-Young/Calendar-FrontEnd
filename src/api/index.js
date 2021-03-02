// TODO: Go to `./firebase.js` and update your firebase config.
import { firebaseInstance } from "./firebaseService";

export async function saveSampleData() {
  const database = firebaseInstance.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
  });
}
