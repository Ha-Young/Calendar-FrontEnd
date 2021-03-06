import firebase from "./firebase";
import { getPathString } from "../utils";

export async function saveSampleData() {
  const database = firebase.database();
  const a = [1, 2, 3];

  await database.ref("/test/123").set({
    test: a,
    test2: a,
    test3: a,
  });
}

export async function saveToFirebaseDB(data, ...paths) {
  const database = firebase.database();
  const pathString = getPathString(paths);

  database.ref(pathString).set(data);
}
