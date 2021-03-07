import firebase from "./firebase";

const database = firebase.database();

export async function saveToFirebaseDB(path, data) {
  return database.ref(path).set(data);
}

export async function fetchDataFromFirebaseDB(path) {
  return database.ref(path).once("value");
}

export async function removeFromFirebaseDB(path, bundle = null) {
  if (bundle) return database.ref(path).update(bundle);
  return database.ref(path).remove();
}
