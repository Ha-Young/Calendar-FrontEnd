// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();

export async function pushData (data) {
  await database.ref(`/${data.id}`).set(data);
}

export async function getData () {
  const data = [];
  await database.ref("/").once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      data.push(childSnapshot.val());
    });
  });

  return data;
}

export async function updateData (data) {
  await database.ref(`/${data.id}`).update(data);
}

export async function deleteData (data) {
  await database.ref(`/${data.id}`).remove(() => console.log("remove done..."));
}
