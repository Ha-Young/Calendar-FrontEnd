import { database } from '.';
import moment from 'moment';

const registerUserProfile = async userAuth => {
  const userRef = database.ref(`users/${userAuth.uid}`);
  let snapShot = await userRef.once('value');

  if (!snapShot.exists()) {
    try {
      const { email, displayName, photoURL } = userAuth;
      const createdAt = moment().format('LLL');
      console.log('createdAt', createdAt);

      await userRef.set({
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
