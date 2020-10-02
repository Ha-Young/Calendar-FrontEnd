import React from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth/Auth";
import { userLogin } from "../actions";

function AuthContainer ({
  logInState,
  userName,
  userEmail,
  userPhotoUrl,
  setLogIn,
}) {
  return (
    <Auth
      logInState={logInState}
      userName={userName}
      userEmail={userEmail}
      userPhotoUrl={userPhotoUrl}
      setLogIn={setLogIn}
    />
  );
}

const mapStateToProps = state => {
  return {
    logInState: state.logIn.isLogIn,
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
