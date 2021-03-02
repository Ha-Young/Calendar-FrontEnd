import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/124").set({
    test: "김-희찬입니다.",
  });
}
