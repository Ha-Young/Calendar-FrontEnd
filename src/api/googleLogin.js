import firebase from "./firebase";

export const loginWithGoogleAccount = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider).then((result) => result);
  const userId = result.user.uid;

  localStorage.setItem("googleAccessToken", result.credential.accessToken);
  localStorage.setItem("googleUserId", userId);

  return userId;
};

export const logoutWithGoogleAccount = async () => {
  await firebase.auth().signOut();
  localStorage.removeItem("googleAccessToken");
  localStorage.removeItem("googleUserId");
};
