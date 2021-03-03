import { bindActionCreators } from "redux";
import firebase from "./firebase";

/*
  table schema

  Calendar table
    year - num
      month - num
        day - num
          hour - num
            schedule

  Scedule data
    main Key - num "고유 키"
    year - num 
    month - num
    day - num
    startHour - num
    endHour - num
    content - string
    color - string
  !완료되면 지워서 없애기
*/

const oneMonth = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null,
  18: null,
  19: null,
  20: null,
  21: null,
  22: null,
  23: null,
  24: null,
  25: null,
  26: null,
  27: null,
  28: null,
  29: null,
  30: null,
  31: null
}

const samepleSchedule = [
  {
    key: 0,
    year: 2021,
    month: 3,
    day: 3,
    startHour: 0,
    endHour: 3,
    content: "first Test!!!!!!!!!",
    color: '#63CCCA'
  },
  {
    key: 1,
    year: 2021,
    month: 3,
    day: 4,
    startHour: 1,
    endHour: 4,
    content: "second Test!!!!!!!!!",
    color: '#FF5964'
  }
]

const sampleCalendar = {
  2021: {
    3: {
      ...oneMonth,
      3: samepleSchedule[0],
      4: samepleSchedule[1]
    }
  }
}

const database = firebase.database();

export async function saveSampleData() {
  console.log('fireBase database : ', database);

  /*
  const oneMonth = {
    
  }

  for (let i = 1; i < 32; i++) {
    oneMonth[i] = i;
  }

  // Note: `set` method returns a promise.
  // Reference: https://firebase.google.com/docs/database/web/read-and-write#receive_a_promise
  const test = await database.ref("calendar").set({
    1: oneMonth,
    2: oneMonth,
    3: oneMonth,
    4: oneMonth,
    5: oneMonth,
    6: oneMonth,
    7: oneMonth,
    8: oneMonth,
    9: oneMonth,
    10: oneMonth,
    11: oneMonth,
    12: oneMonth
  });
  */
  const test2 = await database.ref("schedule").set(samepleSchedule);
  const test3 = await database.ref("calendar").set(sampleCalendar);

  const getTest = await database.ref("calendar").on('value', (data) => console.log('fetched data : ',data.val()));
  const getTest2 = await database.ref("schedule").on('value', (data) => console.log('fetched data : ',data.val()));
}

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
