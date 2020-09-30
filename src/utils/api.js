// TODO: You can modify, add, remove as you need.
import firebase from './firebase';

const database = firebase.database();

export async function saveSampleData () {
  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  await database.ref('test/new').set({
    test: "I'm new"
  });
}

const databaseRef = firebase.database().ref();
let scheduleId = 0;

export const schedule = {
  getSchedules: async (callback) => {
    // 1. 파이어베이스에서 저장된 스케줄 정보들을 가지고 오는 로직
    // 2. 저장된 정보를 callback에 넘겨준다
    // callback은 이 정보를 토대로 액션을 만들고, 해당 액션을 디스패치로 감싸주는 함수로 mapDispatchToProps 안에 정의되어 있을 것!
    await database.ref('schedule').once('value', (data) => {
      const result = data.val();
      scheduleId = result.length;
      callback(result);
    });
  },
  setSchedule: async (schedule) => {
    try {
      await databaseRef.child(`schedule/${scheduleId}`).set({
        ...schedule,
        scheduleId
      });

      scheduleId++;
    } catch (err) {
      console.error(err);
    }
  }
}
