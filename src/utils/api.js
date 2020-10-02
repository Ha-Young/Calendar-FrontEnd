import firebase from './firebase';
const db = firebase.database();

export default async function fetchData() {
  const dataRef =  db.ref('chalender/event');

  try {
    const snapshot = await dataRef.once('value');
    return snapshot.val();

  } catch (err) {
    throw new Error('error in the middle of retrieving data');
  }
}
