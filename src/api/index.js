import firebase from "./firebase";

export async function setEvent(data, date, key) {
  const event = { ...data };
  const database = firebase.database();

  if (key) {
    event["uid"] = key;
  } else {
    const newEventKey = firebase.database().ref().child('test/' + date).push().key;
    event["uid"] = newEventKey;
  }

  return database.ref("test/" + date + "/" + event["uid"]).set(event);
}

export async function getEvents(dateList) {
  const database = firebase.database();

  const promises = dateList.map(date => {
    return database.ref("test/" + date).once("value").then(result => result.val());
  });

  const response = Promise.all(promises).then(response => response);
  return response;
}

export async function removeEvent(date, key) {
  const database = firebase.database();

  return database.ref("test/" + date + "/" + key).remove();
}
