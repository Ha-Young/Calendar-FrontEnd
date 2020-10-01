// TODO: You can modify, add, remove as you need.
import firebase from "./firebase";

export async function createEventData(eventInfo) {
  const database = firebase.database();
  const newEventKey = eventInfo.eventId;

  return database.ref("events/" + newEventKey).set(eventInfo);
}

export async function receiveEventData() {
  const database = firebase.database();
  const dataRef = database.ref("events/");
  let eventData;
  await dataRef.once("value", function (snapshot) {
    eventData = snapshot.val();
  });

  return eventData;
}

export async function updateEventData(eventInfo) {
  const database = firebase.database();
  const eventKey = eventInfo.eventId;
  const updates = {};

  updates[`events/${eventKey}`] = eventInfo;

  return database.ref().update(updates);
}

export async function removeEventData(eventId) {
  const database = firebase.database();
  const dataRef = database.ref("events/" + eventId);
  dataRef.remove();
}
