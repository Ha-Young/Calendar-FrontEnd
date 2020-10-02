import React from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth/Auth";
import { userLogin } from "../actions";

function AuthContainer ({
  isLoggedIn,
  userName,
  userEmail,
  userPhotoUrl,
  setLogIn,
}) {
  return (
    <Auth
      logInState={isLoggedIn}
      userName={userName}
      userEmail={userEmail}
      userPhotoUrl={userPhotoUrl}
      setLogIn={setLogIn}
    />
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.logIn.isLoggedIn,
    userName: state.logIn.name,
    userEmail: state.logIn.email,
    userPhotoUrl: state.logIn.photo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogIn: () => dispatch(userLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
