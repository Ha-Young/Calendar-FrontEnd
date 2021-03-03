import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../api/firebase";
import Button from "../Button/Button";

const Profile = function () {
  const auth = firebase.auth();
  const history = useHistory();

  const onLogOutClick = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <>
      <Button onClick={onLogOutClick}>Log Out</Button>
    </>
  );
};

export default Profile;
