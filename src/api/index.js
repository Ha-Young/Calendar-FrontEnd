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
  const newEvent = { ...data };
  const database = firebase.database();
  const newEventKey = firebase.database().ref().child('test/' + date).push().key;

  newEvent["uid"] = newEventKey;

  database.ref('test/' + date + "/" + newEventKey).set(newEvent);
}

export async function readDailyData(date) {
  const database = firebase.database();

  const response = await database.ref("test/" + date).once("value").then(result => result.val());
  return response;
}

export async function readWeeklyData(dateList) {
  const database = firebase.database();

  const promises = dateList.map(date => {
    return database.ref("test/" + date).once("value").then(result => result.val());
  });

  const response = Promise.all(promises).then(response => response);

  return response;
}
