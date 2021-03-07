import firebase from "./firebase";

const database = firebase.database();

export async function getAllEventsByDates(dateArr, callback) {
  database.ref('/calendar')
    .once('value', (value) => {
      const resultArr = [];
      dateArr.forEach((el) => {
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
