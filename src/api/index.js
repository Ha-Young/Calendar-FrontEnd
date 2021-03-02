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

export function writeUserData(userId = "guest", date, title, detail, startAt, endAt) {
  firebase.database().ref(`users/${userId}/${date}/${startAt}`).set({
    userId,
    title,
    detail,
    startAt,
    endAt,
  });
};

export function getUserData(userId = "guest", date, startAt) {  // date default value needed
  const userRef = firebase.database().ref(`users/${userId}/${date}/${startAt}`);
  let result = [];

  userRef.on("value", async (snapshot) => {
    const events = await snapshot.val();
    for (const date in events) {
      result.push(events[date]);
    }
  });

  return result;
}