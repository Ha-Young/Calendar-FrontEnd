import firebase from "./firebase";

export async function saveData(data, date) {
  const newEvent = { ...data };
  const database = firebase.database();
  const newEventKey = firebase.database().ref().child('test/' + date).push().key;

  newEvent["uid"] = newEventKey;

  return database.ref('test/' + date + "/" + newEventKey).set(newEvent);
}

export async function updateEvent(data, date, key) {
  const event = { ...data };
  const database = firebase.database();
  // TODO 그냥 data에 key 넣어서 주면 이렇게 안하고 key도 따로 인자로 안받아도 될듯?
  if (key) {
    event["uid"] = key;
  } else {
    const newEventKey = firebase.database().ref().child('test/' + date).push().key;
    event["uid"] = newEventKey;
  }

  return database.ref("test/" + date + "/" + event["uid"]).set(event);
}

export async function readWeeklyData(dateList) {
  const database = firebase.database();

  const promises = dateList.map(date => {
    return database.ref("test/" + date).once("value").then(result => result.val());
  });

  const response = Promise.all(promises).then(response => response);
  return response;
}
