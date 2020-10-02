import firebase from "./firebase";

const database = firebase.database();
const dataRef = database.ref("events/");

export async function createEventData(dispatch, eventInfo) {
  const newEventId = eventInfo.eventId;

  try {
    await database.ref("events/" + newEventId).set(eventInfo);
    await dataRef.once("value", function (snapshot) {
      const data = snapshot.val();
      dispatch(Object.values(data));
    });
  } catch (error) {
    console.warn(error);
  }
}

export async function updateEventData(dispatch, eventInfo) {
  const eventId = eventInfo.eventId;
  const updates = {};

  updates[`events/${eventId}`] = eventInfo;

  try {
    await database.ref().update(updates);
    await dataRef.once("value", function (snapshot) {
      const data = snapshot.val();
      dispatch(Object.values(data));
    });
  } catch (error) {
    console.warn(error);
  }
}

export async function removeEventData(dispatch, eventInfo) {
  const eventId = eventInfo.eventId;
  const dataRef = database.ref("events/" + eventId);

  try {
    await dataRef.remove();
    await dataRef.once("value", function (snapshot) {
      const data = snapshot.val();
      dispatch(Object.values(data));
    });
  } catch (error) {
    console.warn(error);
  }
}

export async function receiveEventData(dispatch) {
  try {
    await dataRef.once("value", function (snapshot) {
      const data = snapshot.val();
      dispatch(Object.values(data));
    });
  } catch (error) {
    console.warn(error);
  }
}
