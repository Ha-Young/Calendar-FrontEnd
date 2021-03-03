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

// what if startAt + endAt end up 2 digit
export function writeUserData(userId = "guest", date, title, detail, startAt, endAt) {
  firebase.database().ref(`users/${userId}/${date}/${startAt + endAt}`).set({
    date,
    userId,
    title,
    detail,
    startAt,
    endAt,
  }, (error) => {
    if (error) {
      console.error(error);
      // error handle
    }
  });
};

export async function getUserData(userId = "guest", date, startAt, endAt) {  // date default value needed
  const userRef = firebase.database().ref(`users/${userId}/${date}/${startAt+endAt}`);
  const snapshot = await userRef.once("value");
  const values = snapshot.val();

  return values;
}

export async function getAllUserData(userId = "guest") {  // date default value needed
  const userRef = firebase.database().ref(`users/${userId}`);
  const snapshot = await userRef.once("value", (snapShot) => snapShot);
  const values = snapshot.val();
  const result = [];

  for (const date in values) {
    result.push(...Object.values(values[date]));
  }

  return result;
}

export function deleteTargetData(userId = "guest", date, startAt, endAt) {
  const userRef = firebase.database().ref(`users/${userId}/${date}/${startAt+endAt}`);
  userRef.remove();
}
