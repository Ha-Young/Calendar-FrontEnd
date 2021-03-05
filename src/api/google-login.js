import firebase from "./firebase";

export async function loginWithGoogle() {
  let isSuccess;
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  firebase.auth().useDeviceLanguage();

  try {
    const { user } = await firebase.auth().signInWithPopup(provider);
    isSuccess = true;
    return [isSuccess, user.uid];
  } catch (error) {
    isSuccess = false;
    const errorInfo = {
      errorCode: error.code,
      errorMessage: error.message,
    };

    return [isSuccess, errorInfo];
  }
}
