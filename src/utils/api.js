import firebase from "./firebase";

const database = firebase.database();
const dataRef = database.ref("events/");

export async function createEventData(eventInfo) {
  const newEventId = eventInfo.eventId;

  try {
    await database.ref("events/" + newEventId).set(eventInfo);
  } catch (error) {
    console.warn(error);
  }
}

export async function updateEventData(eventInfo) {
  const eventId = eventInfo.eventId;
  const updates = {};

  updates[`events/${eventId}`] = eventInfo;

  try {
    await database.ref().update(updates);
  } catch (error) {
    console.warn(error);
  }
}

export async function deleteEventData(eventId) {
  const dataRef = database.ref("events/" + eventId);

  try {
    await dataRef.remove();
  } catch (error) {
    console.warn(error);
  }
}

export async function receiveEventData(dispatch) {
  try {
    await dataRef.once("value", function (snapshot) {
      const data = snapshot.val();
      if (!data) return;

      dispatch(Object.values(data));
    });
  } catch (error) {
    console.warn(error);
  }
}
