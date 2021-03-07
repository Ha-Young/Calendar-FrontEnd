// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

const database = firebase.database();

export async function uploadData(event) {
  if (!event) {
    return;
  }

  const id = event.id;
  const eventByid = { [id]: { ...event } };

  await database.ref("event").update(eventByid);
}

export async function deleteEventbyId(eventId) {
  await database.ref(`event/${eventId}`).remove();
}

export async function getEvents() {
  return database
    .ref(`event/`)
    .once("value")
    .then((snapshot) => {
      return snapshot.val();
    });
}
