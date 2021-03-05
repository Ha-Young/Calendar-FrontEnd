import firebase from "./firebase";

export async function init(callback) {
  const database = firebase.database();

  database.ref("calendar").on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export async function loadData({ date, id, callback }) {
  const database = firebase.database();

  database.ref(`calendar/${date}`).on("value", (snapshot) => {
    callback(snapshot.val());
  });
}

export async function updateData({ date, id, event, prevId }) {
  const database = firebase.database();

  if (prevId !== undefined) {
    await database.ref(`calendar/${date}`).update({
      [prevId]: null,
    });
  }

  await database.ref(`calendar/${date}`).update({
    [id]: event,
  });
}

export async function deleteData({ date, prevId }) {
  const database = firebase.database();

  await database.ref(`calendar/${date}`).update({
    [prevId] : null,
  });
}
