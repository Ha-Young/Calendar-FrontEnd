import firebase from "./firebase";

export async function fetchEventData() {
  try {
    const database = firebase.database();

    const initialData = database.ref("events");
    const data = await initialData.once("value");

    return data.val();
  } catch (error) {
    console.error(error);
  }
}

export async function addEventToDatabase(event, newPostKey) {
  try {
    const database = firebase.database();
    const { eventDate } = event;

    await database.ref(`events/${eventDate}/${newPostKey}`).set(event);
  } catch (error) {
    console.error(error);
  }
}

export async function removeEventToDatabase(event) {
  try {
    const database = firebase.database();
    const { eventDate, eventId } = event;

    await database.ref(`events/${eventDate}/${eventId}`).set(null);
  } catch (error) {
    console.error(error);
  }
}

export function getEventKey() {
  try {
    const database = firebase.database();
    const newPostKey = database.ref().child("events").push().key;

    return newPostKey;
  } catch (error) {
    console.error(error);
  }
}
