import firebase from "./firebase";

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
    });
  })

  return eventList;
}

export async function updateUserEventinfoToFirebase(selectedEventInfo) {
  await deleteUserEventFromFirebase(selectedEventInfo.id);
  await database.ref(`events/${selectedEventInfo.id}`).set(selectedEventInfo);
}

export async function deleteUserEventFromFirebase(targetEventId) {
  await database.ref(`events/${targetEventId}`).remove();
}
