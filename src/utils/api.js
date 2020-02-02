import firebase from './firebase';

export function saveSampleData () {
  const database = firebase.database();

  database.ref('test/123').set({
    test: 'text'
  });
}
