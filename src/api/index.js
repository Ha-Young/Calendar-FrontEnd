import firebase from "./firebase";

const database = firebase.database();

export async function addNewEventToFirebase(addedUserEventInfo) {
  try {
    await database.ref(`events/${addedUserEventInfo.id}`).set(addedUserEventInfo);
  } catch(error) {
    console.warn("error", error);
  }
}

export async function fetchEventsList() {
  const eventsRef = database.ref("events/");
  const allEventsList = [];

  try {
    await eventsRef.once("value", function(snapshot) {
      snapshot.forEach((child) => {
        allEventsList.push(child.val());
      });
    })
  } catch(error) {
    console.warn("error", error);
  }

  return allEventsList;
}

export async function updateUserEventinfoToFirebase(selectedEventInfo) {
  try {
    await deleteUserEventFromFirebase(selectedEventInfo.id);
    await database.ref(`events/${selectedEventInfo.id}`).set(selectedEventInfo);
  } catch(error) {
    console.warn("error", error);
  }
}

export async function deleteUserEventFromFirebase(targetEventId) {
  try {
    await database.ref(`events/${targetEventId}`).remove();
  } catch(error) {
    console.warn("error", error);
  }
}
