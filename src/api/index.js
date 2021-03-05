import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();
  const a = [1, 2, 3];

  await database.ref("test/123").set({
    test: a,
    test2: a,
  });
}
