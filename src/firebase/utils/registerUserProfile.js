import { database } from '..';
import moment from 'moment';

const registerUserProfile = async userAuth => {
  const userRef = database.ref(`users/${userAuth.uid}`);
  let snapShot = await userRef.once('value');

  if (!snapShot.exists()) {
    try {
      const { uid, email, displayName, photoURL } = userAuth;
      const createdAt = moment().format('LLL');

      await userRef.set({
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
      });

      snapShot = await userRef.once('value');
    } catch (error) {
      console.warn('Register Error', error);
    }
  }

  return snapShot;
};

export default registerUserProfile;
