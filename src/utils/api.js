import firebase from "./firebase";

const database = firebase.database();

export const pushData = async (data) => {
  await database.ref(`/${data.id}`).set(data);
};

export const getData = async () => {
  const eventData = [];
  await database.ref("/").once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      eventData.push(childSnapshot.val());
    });
  });

  return eventData;
};

export const updateData = async (data) => {
  await database.ref(`/${data.id}`).update(data);
};

export const deleteData = async (data) => {
  await database.ref(`/${data.id}`).remove(() => {
    console.log("remove done...");
  }); // 여기도 고치기
};
