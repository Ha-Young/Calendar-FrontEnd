import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/").set({
    test: "text",
  });
}

export async function loadData({ date, callback }) {
  const database = firebase.database();

  database.ref(`calendar/${date}`).on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export async function updateData({ date, id, event }) {
  const database = firebase.database();

  await database.ref(`calendar/${date}`).update({
    [id]: event,
  });
}
