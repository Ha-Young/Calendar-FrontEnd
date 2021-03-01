import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();
  console.log(database);

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  /*
  const test = await database.ref("test/123").set({
    test: "text",
  });
  */
  const getTest = await database.ref("test/123").on('value', (data) => console.log(data.val()));
  console.log(getTest);
}
