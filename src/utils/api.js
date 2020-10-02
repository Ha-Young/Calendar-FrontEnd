import firebase from "./firebase";

const database = firebase.database();

export const pushData = async (data) => {
  await database.ref(`/events/${data.id}`).set(data);
};

export const getData = async () => {
  const eventData = [];
  await database.ref("/events").once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      eventData.push(childSnapshot.val());
    });
  });

  return eventData;
};

export const updateData = async (data) => {
  await database.ref(`/events/${data.id}`).update(data);
};

export const deleteData = async (data) => {
  await database.ref(`/events/${data.id}`).remove();
};
