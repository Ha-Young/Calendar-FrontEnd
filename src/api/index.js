// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/123").set({
    test: "text",
    hi: "hi"
  });
}

const database = firebase.database();

export async function addNewEventToFirebase(addedUserEventInfo) {
  await database.ref(`events/${addedUserEventInfo.id}`).set(addedUserEventInfo);
}

export async function fetchEventsList() {
  const eventList = [];
  const eventsRef = database.ref("events/");

  await eventsRef.once("value", function(snapshot) {
    snapshot.forEach((childSnapshot) => {
      eventList.push(childSnapshot.val());
    })
  })

  return eventList;
}