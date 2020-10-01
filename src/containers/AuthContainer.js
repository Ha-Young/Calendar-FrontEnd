import React from "react";
import { connect } from "react-redux";
import Auth from "../components/Auth"
import { userLogin } from "../actions/index";

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

// store랑 reducer 연결시킨 컴포넌트(컨테이너)가 반환됨
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
