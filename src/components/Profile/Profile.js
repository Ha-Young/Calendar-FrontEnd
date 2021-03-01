import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../api/firebase";

const Profile = function () {
  const auth = firebase.auth();
  const history = useHistory();

  const onLogOutClick = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
