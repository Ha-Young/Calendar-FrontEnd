import firebase from "./firebase";

export async function googleAuthLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  firebase.auth().useDeviceLanguage();

  try {
    const { user } = await firebase.auth().signInWithPopup(provider);
    return user.uid;
  } catch (error) {
    console.error(error);
    throw new Error("LOGIN FAILED! TRY AGAIN");
  }
}
