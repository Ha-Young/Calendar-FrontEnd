import firebase from "./firebase";
import { getPathString } from "../utils";

export async function saveToFirebaseDB(data, ...paths) {
  const database = firebase.database();
  const pathString = getPathString(paths);

  database.ref(pathString).set(data);
}
