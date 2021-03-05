import { firebaseInstance } from "./firebaseService";
import { getDateISO, makeFirebaseURL } from "utils/utilFunction";

const database = firebaseInstance.database();

export const initializeApp = (callback) => {
  const firebaseURL = makeFirebaseURL(getDateISO(0));

  database.ref(firebaseURL).on("value", (snapshot) => {
    if (snapshot.val()) {
      callback(snapshot.val());
    } else {
      callback({});
    }
  });
};

export const fetchDailyEvent = (callback, date) => {
  const firebaseURL = makeFirebaseURL(date);
  const dailyEvent = {};

  database.ref(firebaseURL).on("value", (snapshot) => {
    if (snapshot.val()) {
      for (const [key, value] of Object.entries(snapshot.val())) {
        if (value.date === date) {
          dailyEvent[key] = value;
        }
      }
      callback(dailyEvent);
    } else {
      callback({});
    }
  });
};

export const fetchWeeklyEvent = (callback, date) => {
  const firebaseURL = makeFirebaseURL(date);

  database.ref(firebaseURL).on("value", (snapshot) => {
    if (snapshot.val()) {
      callback(snapshot.val());
    } else {
      callback({});
    }
  });
};

export const addToFirebase = async (newEvent, id) => {
  const { date } = newEvent;
  const firebaseURL = makeFirebaseURL(date);

  await database.ref(firebaseURL).update({ [id]: { ...newEvent, id } });
};

export const editAtFirebase = async (editedEvent, id) => {
  const { date } = editedEvent;
  const firebaseURL = makeFirebaseURL(date);

  await database.ref(firebaseURL).update({ [id]: { ...editedEvent, id } });
};

export const deleteAtFirebase = async (id, date) => {
  const firebaseURL = makeFirebaseURL(date);

  await database.ref(firebaseURL).update({ [id]: null });
};
