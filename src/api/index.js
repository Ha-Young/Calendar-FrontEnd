import { getDateListBasedOnRange } from "../utils/date";
import firebase from "./firebase";

const ROOT_DIR = 'schedule';

export async function writeEvent(userId, event) {
  const database = firebase.database();

  const {
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  } = event;

  const dateRefPath = `${ROOT_DIR}/${userId}/${date}`;

  const generatedKey = (await database.ref(dateRefPath).push()).key;
  const newEventRef = database.ref(`${dateRefPath}/${generatedKey}`);
  await newEventRef.set({
    id: generatedKey,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  }, error => {
    if (error) {
      throw new Error(error);
    }
  });

  return generatedKey;
}

export async function updateEvent(userId, event) {
  const database = firebase.database();

  const {
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  } = event;

  const eventRef = database.ref(`${ROOT_DIR}/${userId}/${date}/${id}`);
  return await eventRef.update({
    id,
    title,
    description,
    date,
    startDate,
    endDate,
    timeLength,
  });
}

export async function removeEvent(userId, eventId, date) {
  const database = firebase.database();

  return await database.ref(`${ROOT_DIR}/${userId}/${date}/${eventId}`).remove();
}

export async function readDate(userId, currentDate) {
  const database = firebase.database();
  const snapshot = await database.ref(`/${ROOT_DIR}/${userId}/${currentDate}`).once('value');

  const data = snapshot.val() || [];

  return {
    [currentDate]: data,
  };
}

export async function readDateListRange(userId, startDate, endDate) {
  const result = {};
  const needDateList = getDateListBasedOnRange(startDate, endDate);
  const database = firebase.database();
  const snapshot = await database.ref(`/${ROOT_DIR}/${userId}`).orderByKey().startAt(startDate).endAt(endDate).once('value');

  let getDateList = snapshot.val();

  if (getDateList === null) {
    getDateList = {};
  }

  for (const needDate of needDateList) {
    if (needDate in getDateList) {
      result[needDate] = getDateList[needDate];
      continue;
    }

    result[needDate] = null;
  }

  return result;
}
