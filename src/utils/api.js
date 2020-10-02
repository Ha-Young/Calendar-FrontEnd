import firebase from "./firebase";

export async function createEventData(dispatch, eventInfo) {
  const database = firebase.database();
  const dataRef = database.ref("events/");
  const newEventKey = eventInfo.eventId;

  await database.ref("events/" + newEventKey).set(eventInfo);

  await dataRef.once("value", function (snapshot) {
    const data = snapshot.val();
    dispatch(Object.values(data));
  });
}

export async function updateEventData(dispatch, eventInfo) {
  const database = firebase.database();
  const dataRef = database.ref("events/");
  const eventKey = eventInfo.eventId;
  const updates = {};

  updates[`events/${eventKey}`] = eventInfo;
  await database.ref().update(updates);

  await dataRef.once("value", function (snapshot) {
    const data = snapshot.val();
    dispatch(Object.values(data));
  });
}

export async function removeEventData(dispatch, eventId) {
  const database = firebase.database();
  const dataRef = database.ref("events/" + eventId);
  await dataRef.remove();

  await dataRef.once("value", function (snapshot) {
    const data = snapshot.val();
    dispatch(Object.values(data));
  });
}

export async function receiveEventData(dispatch) {
  const database = firebase.database();
  const dataRef = database.ref("events/");

  await dataRef.once("value", function (snapshot) {
    const data = snapshot.val();
    dispatch(Object.values(data));
  });
}
