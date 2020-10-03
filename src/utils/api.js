
import firebase from './firebase';
import 'firebase/database';

export async function saveData (savePath, saveObj) {
  const database = firebase.database();
  let result;

  result = await database.ref(savePath).push(saveObj, function (err) {
    if (err) {
      result = {
        resultCode: "ERROR",
        errorMessage: "업로드에 실패했습니다. 다시 시도해 주세요",
      };
    } else {
      result = {
        resultCode: "SUCCESS",
      };
    }
  });

  return result;
}

export async function getData(query) {
  const database = firebase.database();
  const data = await database.ref(query).once('value');

  return data.val();
}
