import firebase from "./firebase";

export async function saveSampleData() {
  const database = firebase.database();

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref("test/124").set({
    test: "김-희찬입니다.",
  });
}

export async function saveData(data, date) {
  const newEvent = {...data};
  const database = firebase.database();
  const newEventKey = firebase.database().ref().child('dailyEvents/' + date).push().key;
  const updates = {};
  
  newEvent["uid"] = newEventKey;
  updates["events/" + newEventKey] = newEvent;
  updates["dailyEvents/" + date + "/" + newEventKey] = true;

  return await database.ref().update(updates);
}
