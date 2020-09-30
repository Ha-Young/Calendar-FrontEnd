import { database } from '.';

const registerUserProfile = async userAuth => {
  const userRef = database.ref(`users/${userAuth.uid}`);
  // firebase.database.Reference
  // on() 또는 once() 메서드를 사용하여 이벤트를 관찰합니다.
  // value: 경로의 전체 내용을 읽고 변경사항을 수신 대기합니다.
  const snapShot = await userRef.once('value');

  //데이터가 없는 경우 스냅샷은 exists() 호출 시 false를 반환하고
  // val() 호출 시 null을 반환합니다.
  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.warn('userAuth Set 실패', error);
    }
  }

  return userRef;
};

export default registerUserProfile;
