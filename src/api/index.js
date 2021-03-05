import { getOneYearSchema } from "./dbSchema";
import firebase from "./firebase";

const database = firebase.database();

export async function saveSampleData(setData = getOneYearSchema(2021)) {
  await database.ref("calendar").set(setData);
  await database.ref("calendar").on('value', (data) => console.log('fetched data : ',data.val()));
}

export async function getAllEventsByDates(dateArr, callback) {
  database.ref('/calendar')
    .once('value', (value) => {
      const resultArr = [];
      dateArr.forEach((el) => {
        // TODO: 해당년, 월, 일 데이터가 없을 때 다시 만들어서 firebase에 넣고 다시 시작한다.
        resultArr.push(value.val()[el.year][el.month][el.day]);
      });
      callback(resultArr);
    });
}

/** 단 하나의 schedule을 넘겨주고  그것을 update한다. */
export async function setSchedule(schedule, oldKey) {
  const returnObj = {};
  
  const databaseRef = database.ref(`calendar/${schedule.year}/${schedule.month}/${schedule.day}/datas`);
  const key = oldKey || databaseRef.push().key;
  schedule['key'] = key;
  returnObj[key] = schedule;
  databaseRef.update(returnObj);
}

export async function deleteSchedule(schedule) {
  const databaseRef = database.ref(`calendar/${schedule.year}/${schedule.month}/${schedule.day}/datas/${schedule.key}`);
  databaseRef.remove()
    .then(function() {
      console.log('Remove Succeeded');
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message);
    })
}
