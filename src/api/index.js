import firebase from "./firebase";

/*
  table schema

  Calendar table
    year - num
      month - num
        day - num
          hour - num
            schedule Main Key

  Scedule table
    main Key - num "고유 키"
    year - num 
    month - num
    day - num
    hour - num
    content - string
  !완료되면 지워서 없애기
*/

export async function saveSampleData() {
  const database = firebase.database();
  console.log('fireBase database : ',database);

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
  const getTest = await database.ref("calendar").on('value', (data) => console.log('fetched data : ',data.val()));
}
