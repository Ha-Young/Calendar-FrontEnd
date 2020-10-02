import firebase from './firebase';
import 'firebase/database';

export async function saveSampleData () {
  const database = firebase.database();

  await database.ref("test/123").set({
    test: "text"
  });
}

export async function getData(query) {
  const database = firebase.database();
  const data = await database.ref(query).once('value');

  return data.val();
}
