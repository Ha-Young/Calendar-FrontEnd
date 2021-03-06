// TODO: Go to `./firebase.js` and update your firebase config.
import firebase from "./firebase";

// 질문! 스토어에서 상태값으로 에러핸들링을 하고자 API에서 try..catch를 하지 않고
// API 실행 구간에서 start, success, error에 디스패치를 걸어줬는데 API 내부에서 해줘야 하는 것인지 궁금합니다.
export const saveEventData = async (data) => {
  const database = firebase.database();
  const id = database.ref("userId/events/").push().key;

  await database.ref(`userId/events/${id}`).set({
    ...data,
    id,
  });

  return {
    ...data,
    id,
  };
};

export const changeEventData = async (data) => {
  const database = firebase.database();
  const id = data.id;

  await database.ref(`userId/events/${id}`).update({
    ...data,
  });
};

export const removeEventData = async (data) => {
  const database = firebase.database();

  await database.ref(`userId/events/${data.id}`).remove();
};

export const loadEventData = async (dates) => {
  const firstEventIndex = dates[0];
  const lastEventIndex = dates[dates.length - 1];

  const queryData = firebase
    .database()
    .ref("userId/events/")
    .orderByChild("date")
    .startAt(firstEventIndex)
    .endAt(lastEventIndex);

  const data = await queryData.once("value");

  return data.val();
};

// Note: `set` method returns a promise.
// Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
